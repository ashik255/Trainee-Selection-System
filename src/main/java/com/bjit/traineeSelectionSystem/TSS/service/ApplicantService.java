package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;

public interface ApplicantService {
    ResponseEntity<ResponseModel<?>> createApplicant(ApplicantEntity applicantEntity);

    ResponseEntity<ResponseModel<?>> updateApplication(Long applicantId, ApplicantEntity applicantEntity);

    ResponseEntity<ResponseModel<?>> getAllApplicant();
//    public ResponseEntity<ResponseModel<?>> createApplicant(ApplicantEntity applicantEntity) {
//    }
//
//    public ResponseEntity<ResponseModel<?>> updateBook(Long applicantId, ApplicantEntity applicantEntity) {
//    }
}
