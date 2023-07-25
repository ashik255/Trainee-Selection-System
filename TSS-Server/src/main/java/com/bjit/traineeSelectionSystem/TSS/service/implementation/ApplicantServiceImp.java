package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEnum;
import com.bjit.traineeSelectionSystem.TSS.entity.UserEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ApplicantRequest;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.ApplicantRepository;
import com.bjit.traineeSelectionSystem.TSS.repository.RoleRepository;
import com.bjit.traineeSelectionSystem.TSS.repository.UserRepository;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicantService;
import com.bjit.traineeSelectionSystem.TSS.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.management.relation.Role;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class ApplicantServiceImp implements ApplicantService {

    private final ApplicantRepository applicantRepository;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;

    @Override
    public ResponseEntity<ResponseModel<?>> createApplicant(MultipartFile image , MultipartFile cv , ApplicantRequest applicantRequest) throws IOException {

//        final String PHOTO_UPLOAD_URL = new ClassPathResource("/static/photo/").getFile().getAbsolutePath();
//        final String CV_UPLOAD_URL = new ClassPathResource("static/cv/").getFile().getAbsolutePath();
        final String CV_UPLOAD_URL = "F:\\Final_Project\\TSS-Server\\src\\main\\resources\\static\\cv";
        final String PHOTO_UPLOAD_URL = "F:\\Final_Project\\TSS-Server\\src\\main\\resources\\static\\photo";

        String roleName = applicantRequest.getRole();
        if (roleName == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if( roleRepository.findByRoleName(roleName).isEmpty() ){
            roleService.addRole(roleName);
        }
        RoleEntity role = roleRepository.findByRoleName(roleName).get();
        UserEntity user  = UserEntity.builder()
                .email(applicantRequest.getEmail())
                .password(passwordEncoder.encode(applicantRequest.getPassword()))
                .role(role)
                .build();
        UserEntity savedUser = userRepository.save(user);


        // Copy CV file
        Path cvPath = Paths.get(CV_UPLOAD_URL + File.separator + cv.getOriginalFilename());
        Files.copy(cv.getInputStream(), cvPath, StandardCopyOption.REPLACE_EXISTING);

        // Generate link to access the CV
        String linkCv = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/cv/" + cv.getOriginalFilename())
                .toUriString();

        // Copy image file
        Path imagePath = Paths.get(PHOTO_UPLOAD_URL + File.separator + image.getOriginalFilename());
        Files.copy(image.getInputStream(), imagePath, StandardCopyOption.REPLACE_EXISTING);

        // Generate link to access the image
        String linkPhoto = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/photo/" + image.getOriginalFilename())
                .toUriString();
//        Files.copy( image.getInputStream() , Paths.get(PHOTO_UPLOAD_URL + File.separator + image.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
//        String linkPhoto = ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/" + image.getOriginalFilename()).toUriString();
//
//
//        Files.copy( image.getInputStream() , Paths.get(CV_UPLOAD_URL + File.separator + cv.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
////        String linkCv = ServletUriComponentsBuilder.fromCurrentContextPath().path("/cv/" + cv.getOriginalFilename()).toUriString();
//        String linkCv = CV_UPLOAD_URL + File.separator + cv.getOriginalFilename();

        ApplicantEntity applicant = ApplicantEntity.builder()
                .user(savedUser)
                .address(applicantRequest.getAddress())
                .cgpa(applicantRequest.getCgpa())
                .contact(applicantRequest.getContact())
                .dateOfBirth(applicantRequest.getDateOfBirth())
                .degreeName(applicantRequest.getDegreeName())
                .firstName(applicantRequest.getFirstName())
                .lastName(applicantRequest.getLastName())
                .gender(applicantRequest.getGender())
                .institute(applicantRequest.getInstitute())
                .passingYear(applicantRequest.getPassingYear())
                .photo(linkPhoto)
                .cv(linkCv)
                .build();
        ApplicantEntity saveData = applicantRepository.save(applicant);

        ResponseModel<ApplicantEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> updateApplication(Long applicantId, ApplicantEntity applicantEntity) {
        Optional<ApplicantEntity> optionalApplicant = applicantRepository.findById(applicantId);
        if (optionalApplicant.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        ApplicantEntity applicant = applicantRepository.findById(applicantId).get();
        applicant.setFirstName(applicantEntity.getFirstName());
        applicant.setLastName(applicantEntity.getLastName());
        applicant.setUser(applicantEntity.getUser());
        applicant.setAddress(applicantEntity.getAddress());
        applicant.setCgpa(applicantEntity.getCgpa());
        applicant.setContact(applicantEntity.getContact());
        applicant.setDateOfBirth(applicantEntity.getDateOfBirth());
        applicant.setDegreeName(applicantEntity.getDegreeName());
        applicant.setGender(applicantEntity.getGender());
        applicant.setInstitute(applicantEntity.getInstitute());
        applicant.setPassingYear(applicantEntity.getPassingYear());
        applicant.setPhoto(applicantEntity.getPhoto());
        applicant.setCv(applicantEntity.getCv());

        ApplicantEntity saveData = applicantRepository.save(applicant);

        ResponseModel<ApplicantEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllApplicant() {
        List<ApplicantEntity> applicants = applicantRepository.findAll();
        ResponseModel Response = ResponseModel.builder()
                .data(applicants)
                .build();
        // Return the ResponseEntity with the APIResponse
        return ResponseEntity.ok(Response);
    }
}
