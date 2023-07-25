package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;

public interface MarksService {
    ResponseEntity<ResponseModel<?>> uploadWrittenMarks(Long applicantId, Double mark);

    ResponseEntity<ResponseModel<?>> uploadAptitudeMarks(Long applicantId, Double mark);

    ResponseEntity<ResponseModel<?>> uploadTechnicalMarks(Long applicantId, Double mark);

    ResponseEntity<ResponseModel<?>> uploadHrMarks(Long applicantId, Double mark);

    ResponseEntity<ResponseModel<?>> allAttended();

    ResponseEntity<ResponseModel<?>> writtenAptitudePassed();

    ResponseEntity<ResponseModel<?>> technicalPassed();

    ResponseEntity<ResponseModel<?>> hrPassed();

    ResponseEntity<ResponseModel<?>> writtenAptitudeAllowed(Long applicantId);

    ResponseEntity<ResponseModel<?>> technicalAllowed(Long applicantId);

    ResponseEntity<ResponseModel<?>> hrAllowed(Long applicantId);
}
