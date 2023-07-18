package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.EvaluatorEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;

public interface EvaluatorService {
    ResponseEntity<ResponseModel<?>> createEvaluator(EvaluatorEntity evaluatorEntity);

    ResponseEntity<ResponseModel<?>> getAllEvaluator();
}
