package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicationEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ApplicantRequest;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;

public interface ApplicationService {
    ResponseEntity<ResponseModel<?>> createApplication(ApplicationEntity applicationEntity);

    ResponseEntity<ResponseModel<?>> updateApplication(Long applicationId, ApplicationEntity applicationEntity);

    ResponseEntity<ResponseModel<?>> getAllApplication();
}
