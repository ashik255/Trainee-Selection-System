package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.MarksService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/marks/upload")
@RequiredArgsConstructor
public class MarksController {

    private final MarksService marksService;

    @GetMapping("/all")
    public ResponseEntity<ResponseModel<?>> allAttended(){
        return marksService.allAttended();
    }

    @PostMapping("/written/{applicantId}/{mark}")
    public ResponseEntity<ResponseModel<?>> uploadWrittenMarks(@PathVariable Long applicantId , @PathVariable Double mark){
        return marksService.uploadWrittenMarks(applicantId , mark);
    }
    //again view all------------
    @PostMapping("/aptitude/{applicantId}/{mark}")
    public ResponseEntity<ResponseModel<?>> uploadAptitudeMarks(@PathVariable Long applicantId , @PathVariable Double mark){
        return marksService.uploadAptitudeMarks(applicantId , mark);
    }
    //again view all---------------
    @PostMapping("/written/aptitude/allow/{applicantId}")
    public ResponseEntity<ResponseModel<?>> writtenAptitudeAllowed(@PathVariable Long applicantId){
        return marksService.writtenAptitudeAllowed(applicantId);
    }

    @GetMapping("/written/aptitude/passed")
    public ResponseEntity<ResponseModel<?>> writtenAptitudePassed(){
        return marksService.writtenAptitudePassed();
    }

    @PostMapping("/technical/{applicantId}/{mark}")
    public ResponseEntity<ResponseModel<?>> uploadTechnicalMarks(@PathVariable Long applicantId , @PathVariable Double mark){
        return marksService.uploadTechnicalMarks(applicantId , mark);
    }
    //view written_aptitude passed
    @PostMapping("/technical/allow/{applicantId}")
    public ResponseEntity<ResponseModel<?>> technicalAllowed(@PathVariable Long applicantId) {
        return marksService.technicalAllowed(applicantId);
    }

    @GetMapping("/technical/passed")
    public ResponseEntity<ResponseModel<?>> technicalPassed(){
        return marksService.technicalPassed();
    }


    @PostMapping("/hr/allow/{applicantId}")
    public ResponseEntity<ResponseModel<?>> hrAllowed(@PathVariable Long applicantId){
        return marksService.hrAllowed(applicantId);
    }
    //view technical passed
    @PostMapping("/hr/{applicantId}/{mark}")
    public ResponseEntity<ResponseModel<?>> uploadHrMarks(@PathVariable Long applicantId , @PathVariable Double mark){
        return marksService.uploadHrMarks(applicantId , mark);
    }
    @GetMapping("/hr/passed")
    public ResponseEntity<ResponseModel<?>> hrPassed(){
        return marksService.hrPassed();
    }

}
