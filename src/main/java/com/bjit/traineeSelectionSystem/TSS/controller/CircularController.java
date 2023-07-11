package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.Circular;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseAll;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.CircularService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class CircularController {
    private final CircularService circularService;

    @GetMapping
    public ResponseEntity<ResponseAll<List<Circular>>> getAllCirculars() {
        ResponseAll<List<Circular>> response = circularService.getAllCirculars();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{circularId}")
    public ResponseEntity<ResponseAll<Circular>> getCircularById(@PathVariable Long circularId) {
        ResponseAll<Circular> response = circularService.getCircularById(circularId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ResponseAll<Circular>> createCircular(@RequestBody CircularRequest circularRequest) {
        ResponseAll<Circular> response = circularService.createCircular(circularRequest);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/{circularId}")
    public ResponseEntity<ResponseAll<Circular>> updateCircular(
            @PathVariable Long circularId,
            @RequestBody CircularRequest circularRequest
    ) {
        ResponseAll<Circular> response = circularService.updateCircular(circularId, circularRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{circularId}")
    public ResponseEntity<ResponseAll<String>> deleteCircular(@PathVariable Long circularId) {
        ResponseAll<String> response = circularService.deleteCircular(circularId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
