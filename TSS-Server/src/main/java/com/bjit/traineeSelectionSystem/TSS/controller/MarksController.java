package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.MarksService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/applicant")
@RequiredArgsConstructor
public class MarksController {

    private final MarksService marksService;
    @PostMapping("/uploadMarks")
    public ResponseEntity<ResponseModel<?>> uploadMarks(@RequestBody MarksEntity marksEntity){
        return marksService.uploadMarks(marksEntity);
    }


    @PutMapping("/update/circularId")
    public ResponseEntity<ResponseModel<?>> updateMarks(@RequestParam Long marksId , @RequestBody MarksEntity marksEntity) {
        return marksService.updateMarks(marksId , marksEntity);
    }

    @GetMapping("/getAllCircular")
    public ResponseEntity<ResponseModel<?>> getAllMarks() {
        return marksService.getAllMarks();
    }

}
