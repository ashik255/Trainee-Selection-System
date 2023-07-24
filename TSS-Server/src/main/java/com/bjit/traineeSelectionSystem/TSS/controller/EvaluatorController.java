package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.model.EvaluatorRequest;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicantService;
import com.bjit.traineeSelectionSystem.TSS.service.EvaluatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/evaluator")
@RequiredArgsConstructor
public class EvaluatorController {
    private final EvaluatorService evaluatorService;

    @PostMapping("/register")
    public ResponseEntity<ResponseModel<?>> createEvaluator(@RequestBody EvaluatorRequest evaluatorRequest){
        return evaluatorService.evaluatorRegister(evaluatorRequest);
    }
    @GetMapping("/getAll")
    public ResponseEntity<ResponseModel<?>> findAllEvaluator(){
        return evaluatorService.findAllEvaluator();
    }
}
