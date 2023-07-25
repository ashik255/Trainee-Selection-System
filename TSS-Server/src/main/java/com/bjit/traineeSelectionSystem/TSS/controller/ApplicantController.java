package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ApplicantRequest;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicantService;
import com.bjit.traineeSelectionSystem.TSS.service.CircularService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/applicant")
@RequiredArgsConstructor
public class ApplicantController {
    private final ApplicantService applicantService;
    private final CircularService circularService;
    @PostMapping("/register")
    public ResponseEntity<ResponseModel<?>> createApplicant(@RequestParam("profile") MultipartFile image , @RequestParam("cv") MultipartFile cv , @ModelAttribute ApplicantRequest applicantRequest) throws IOException {
        return applicantService.createApplicant(image , cv , applicantRequest);
    }

    @PutMapping("/update/{applicantId}")
    public ResponseEntity<ResponseModel<?>> updateApplication(@RequestParam Long applicantId , @RequestBody ApplicantEntity applicantEntity) {
        return applicantService.updateApplication(applicantId , applicantEntity);
    }
    @GetMapping("/getAllApplicant")
    public ResponseEntity<ResponseModel<?>> getAllApplicant() {
        return applicantService.getAllApplicant();
    }

    @PostMapping("/apply/{circularId}/{applicantId}")
    public ResponseEntity<ResponseModel<?>> apply(@PathVariable Long circularId , @PathVariable Long applicantId){
        return circularService.applied(circularId , applicantId);
    }

    @GetMapping("/myCirculars/{applicantId}")
    public ResponseEntity<ResponseModel<?>> allAppliedCirculars(@PathVariable Long applicantId){
        return circularService.findApplicant(applicantId);
    }
}
