package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ApplicantRequest;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ApplicantService {
    ResponseEntity<ResponseModel<?>> createApplicant(MultipartFile image , MultipartFile cv , ApplicantRequest applicantRequest) throws IOException;

    ResponseEntity<ResponseModel<?>> updateApplication(Long applicantId, ApplicantEntity applicantEntity);

    ResponseEntity<ResponseModel<?>> getAllApplicant();
//    public ResponseEntity<ResponseModel<?>> createApplicant(ApplicantEntity applicantEntity) {
//    }
//
//    public ResponseEntity<ResponseModel<?>> updateBook(Long applicantId, ApplicantEntity applicantEntity) {
//    }
}
