package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/applicant")
@RequiredArgsConstructor
public class ApplicantController {
    private final ApplicantService applicantService;
    @PostMapping("/create")
    public ResponseEntity<ResponseModel<?>> createApplicant(@RequestBody ApplicantEntity applicantEntity){
        return applicantService.createApplicant(applicantEntity);
    }

    @PutMapping("/update/applicantId")
    public ResponseEntity<ResponseModel<?>> updateApplication(@RequestParam Long applicantId , @RequestBody ApplicantEntity applicantEntity) {
        return applicantService.updateApplication(applicantId , applicantEntity);
    }
    @GetMapping("/getAllApplicant")
    public ResponseEntity<ResponseModel<?>> getAllApplicant() {
        return applicantService.getAllApplicant();
    }
}
