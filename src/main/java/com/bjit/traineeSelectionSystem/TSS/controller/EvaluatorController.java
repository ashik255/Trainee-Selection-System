package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.EvaluatorEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.CircularService;
import com.bjit.traineeSelectionSystem.TSS.service.EvaluatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/evaluate")
@RequiredArgsConstructor
public class EvaluatorController {
    private final EvaluatorService evaluatorService;
    @PostMapping("/create")
    public ResponseEntity<ResponseModel<?>> createCircular(@RequestBody EvaluatorEntity evaluatorEntity){
        return evaluatorService.createEvaluator(evaluatorEntity);
    }

    @GetMapping("/getAllCircular")
    public ResponseEntity<ResponseModel<?>> getAllCircular() {
        return evaluatorService.getAllEvaluator();
    }
}
