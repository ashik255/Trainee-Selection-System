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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;
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
    public ResponseEntity<ResponseModel<?>> createApplicant(ApplicantRequest applicantRequest) {

        String roleName = applicantRequest.getRole();
        if (roleName == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if( roleRepository.findByRoleName(roleName).isEmpty() ){
            roleService.addRole(roleName);
        }
        RoleEntity role = roleRepository.findByRoleName(roleName).get();
//        RoleEntity role = roleRepository.findByRoleName(applicantRequest.getRole()).get();
        UserEntity user  = UserEntity.builder()
                .email(applicantRequest.getEmail())
                .password(passwordEncoder.encode(applicantRequest.getPassword()))
                .role(role)
                .build();
        UserEntity savedUser = userRepository.save(user);
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
                .photo(applicantRequest.getPhoto())
                .cv(applicantRequest.getCv())
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
