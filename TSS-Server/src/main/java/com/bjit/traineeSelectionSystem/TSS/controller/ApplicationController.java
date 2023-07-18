package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.Application;
import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.ApplicationEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicantService;
import com.bjit.traineeSelectionSystem.TSS.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/application")
@RequiredArgsConstructor
public class ApplicationController {
    private final ApplicationService applicationService;
    @PostMapping("/create")
    public ResponseEntity<ResponseModel<?>> createApplication(@RequestBody ApplicationEntity applicationEntity){
        return applicationService.createApplication(applicationEntity);
    }
    @PutMapping("/update/applicationId")
    public ResponseEntity<ResponseModel<?>> updateApplication(@RequestParam Long applicationId , @RequestBody ApplicationEntity applicationEntity) {
        return applicationService.updateApplication(applicationId , applicationEntity);
    }
    @GetMapping("/getAllApplication")
    public ResponseEntity<ResponseModel<?>> getAllApplication() {
        return applicationService.getAllApplication();
    }
}
