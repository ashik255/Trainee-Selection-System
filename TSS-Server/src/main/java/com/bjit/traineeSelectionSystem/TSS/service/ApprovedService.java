package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;

public interface ApprovedService {
    public ResponseEntity<ResponseModel<?>> applicantApproved(Long circularId , Long applicantId );

    ResponseEntity<ResponseModel<?>> getAllApplicationByCircular( Long circularId);
}
