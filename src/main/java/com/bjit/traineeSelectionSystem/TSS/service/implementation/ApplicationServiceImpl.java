package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicationEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.ApplicantRepository;
import com.bjit.traineeSelectionSystem.TSS.repository.ApplicationRepository;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@RequiredArgsConstructor

public class ApplicationServiceImpl implements ApplicationService {
    private final ApplicationRepository applicationRepository;
    @Override
    public ResponseEntity<ResponseModel<?>> createApplication(ApplicationEntity applicationEntity) {
        ApplicationEntity applicationData = ApplicationEntity.builder()
                .applicant(applicationEntity.getApplicant())
                .build();
        ApplicationEntity saveData = applicationRepository.save(applicationData);

        ResponseModel<ApplicationEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> updateApplication(Long applicationId, ApplicationEntity applicationEntity) {
        ApplicationEntity applicationData = applicationRepository.findById(applicationId).get();
        // Update the fields of existingCircular with the values from circular

       applicationData.setApplicant(applicationEntity.getApplicant());
        ApplicationEntity saveData = applicationRepository.save(applicationData);

        ResponseModel<ApplicationEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllApplication() {
        List<ApplicationEntity> applicationData = applicationRepository.findAll();
//        if (circular.isEmpty()) {
//            throw new BookServiceException("There is no book available in the stock");
//        }
        List<ApplicationEntity> circularResponses = new ArrayList<>();
        applicationData.forEach(applicationEntity ->  applicationData.add(
                ApplicationEntity.builder()
                        .applicant(applicationEntity.getApplicant())
                        .build()
        ));
        ResponseModel Response = ResponseModel.builder()
                .data(circularResponses)
                .build();
        // Return the ResponseEntity with the APIResponse
        return ResponseEntity.ok(Response);
    }
}
