package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.Circular;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.CircularService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class CircularController {
    private final CircularService circularService;

    @GetMapping("/getAllCircular")
    public ResponseEntity<ResponseModel> getAllCirculars() {
        return circularService.getAllCirculars();
    }

    @GetMapping("/{circularId}")
    public ResponseEntity<ResponseModel<Circular>> getCircularById(@PathVariable Long circularId) {
        ResponseModel<Circular> responseModel = circularService.getCircularById(circularId);
        return new ResponseEntity<>(responseModel, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ResponseModel<Circular>> createCircular(@RequestBody CircularRequest circularRequest) {
        ResponseModel<Circular> responseModel = circularService.createCircular(circularRequest);
        return new ResponseEntity<>(responseModel, HttpStatus.CREATED);
    }

    @PutMapping("/{circularId}")
    public ResponseEntity<ResponseModel<Circular>> updateCircular(
            @PathVariable Long circularId,
            @RequestBody CircularRequest circularRequest
    ) {
        ResponseModel<Circular> responseModel = circularService.updateCircular(circularId, circularRequest);
        return new ResponseEntity<>(responseModel, HttpStatus.OK);
    }

    @DeleteMapping("/{circularId}")
    public ResponseEntity<String> deleteCircular(@PathVariable Long circularId) {
        return circularService.deleteCircular(circularId);
    }
}
