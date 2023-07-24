package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.model.EvaluatorRequest;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.User.UserRequest;
import org.springframework.http.ResponseEntity;

public interface EvaluatorService {
    ResponseEntity<ResponseModel<?>> evaluatorRegister(EvaluatorRequest evaluatorRequest);
    ResponseEntity<ResponseModel<?>> findAllEvaluator();
}
