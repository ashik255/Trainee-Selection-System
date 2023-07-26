package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.CircularService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/circular")
@RequiredArgsConstructor
public class CircularController {
    private final CircularService circularService;


//    @PreAuthorize("hasRole('ADMIN')")

    @PostMapping("/create")
    public ResponseEntity<ResponseModel<?>> createCircular(@RequestBody CircularRequest circularRequest){
        return circularService.createCircular(circularRequest);
    }

    @DeleteMapping("/delete/{circularId}")
    public ResponseEntity<Object> deleteBookById(@PathVariable Long  circularId) {
        return ResponseEntity.ok(circularService.deleteCircular(circularId));
    }

    @PutMapping("/update/circularId")
    public ResponseEntity<ResponseModel<?>> updateBook(@RequestParam Long circularId , @RequestBody CircularRequest circularRequest) {
        return circularService.updateCircular(circularId , circularRequest);
    }

    @GetMapping("/getAllCircular")
    public ResponseEntity<ResponseModel<?>> getAllCircular() {
        return circularService.getAllCircular();
    }



}