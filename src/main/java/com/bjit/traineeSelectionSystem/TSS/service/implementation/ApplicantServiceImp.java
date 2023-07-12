package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.ApplicantRepository;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor

public class ApplicantServiceImp implements ApplicantService {

    private final ApplicantRepository applicantRepository;

    @Override
    public ResponseEntity<ResponseModel<?>> createApplicant(ApplicantEntity applicantEntity) {
        ApplicantEntity applicant = ApplicantEntity.builder()
                .user(applicantEntity.getUser())
                .address(applicantEntity.getAddress())
                .cgpa(applicantEntity.getCgpa())
                .contact(applicantEntity.getContact())
                .dateOfBirth(applicantEntity.getDateOfBirth())
                .degreeName(applicantEntity.getDegreeName())
                .firstName(applicantEntity.getFirstName())
                .lastName(applicantEntity.getLastName())
                .gender(applicantEntity.getGender())
                .institute(applicantEntity.getInstitute())
                .passingYear(applicantEntity.getPassingYear())
                .photo(applicantEntity.getPhoto())
                .cv(applicantEntity.getCv())
                .build();
        ApplicantEntity saveData = applicantRepository.save(applicant);

        ResponseModel<ApplicantEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> updateApplication(Long applicantId, ApplicantEntity applicantEntity) {
        ApplicantEntity applicant = applicantRepository.findById(applicantId).get();
        // Update the fields of existingCircular with the values from circular
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

        ApplicantEntity saveData = applicantRepository.save(applicantEntity);

        ResponseModel<ApplicantEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllApplicant() {
        List<ApplicantEntity> circular = applicantRepository.findAll();
//        if (circular.isEmpty()) {
//            throw new BookServiceException("There is no book available in the stock");
//        }
        List<ApplicantEntity> applicantResponse = new ArrayList<>();
        circular.forEach(applicantEntity -> applicantResponse.add(
                ApplicantEntity.builder()
                        .user(applicantEntity.getUser())
                        .address(applicantEntity.getAddress())
                        .cgpa(applicantEntity.getCgpa())
                        .contact(applicantEntity.getContact())
                        .dateOfBirth(applicantEntity.getDateOfBirth())
                        .degreeName(applicantEntity.getDegreeName())
                        .firstName(applicantEntity.getFirstName())
                        .lastName(applicantEntity.getLastName())
                        .gender(applicantEntity.getGender())
                        .institute(applicantEntity.getInstitute())
                        .passingYear(applicantEntity.getPassingYear())
                        .photo(applicantEntity.getPhoto())
                        .cv(applicantEntity.getCv())
                        .build()
        ));
        ResponseModel Response = ResponseModel.builder()
                .data(applicantResponse)
                .build();
        // Return the ResponseEntity with the APIResponse
        return ResponseEntity.ok(Response);
    }
}
