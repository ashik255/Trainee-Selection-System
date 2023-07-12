package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import org.springframework.http.ResponseEntity;

public interface CircularService {
//    ResponseEntity<ResponseModel> addCircular(CircularEntity circularEntity);

    ResponseEntity<ResponseModel<?>> createCircular(CircularRequest circularRequest);
//    ResponseEntity<ResponseModel<?>> deleteCircular();

    ResponseEntity<ResponseModel<?>> updateCircular(Long circularId, CircularRequest circularRequest);

    ResponseEntity<ResponseModel<?>> getAllCircular();

    Object deleteCircular(Long circularId);

    ResponseEntity<ResponseModel<?>> deleteCircular();

//    Object deleteCircular(Long id);
}
