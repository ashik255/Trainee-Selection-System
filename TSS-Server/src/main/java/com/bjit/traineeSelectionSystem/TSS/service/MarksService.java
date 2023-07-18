package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;

public interface MarksService {
    ResponseEntity<ResponseModel<?>> uploadMarks(MarksEntity marksEntity);

    ResponseEntity<ResponseModel<?>> updateMarks(Long marksId, MarksEntity marksEntity);

    ResponseEntity<ResponseModel<?>> getAllMarks();
}
