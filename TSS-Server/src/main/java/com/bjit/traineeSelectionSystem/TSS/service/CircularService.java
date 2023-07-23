package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CircularService {
//    ResponseEntity<ResponseModel> addCircular(CircularEntity circularEntity);

    ResponseEntity<ResponseModel<?>> createCircular(CircularRequest circularRequest);
//    ResponseEntity<ResponseModel<?>> deleteCircular();

    ResponseEntity<ResponseModel<?>> updateCircular(Long circularId, CircularRequest circularRequest);

    ResponseEntity<ResponseModel<?>> getAllCircular();

    Object deleteCircular(Long circularId);

    ResponseEntity<ResponseModel<?>> applied(Long circularId , Long applicantId);

    ResponseEntity<ResponseModel<?>> findApplicant(Long applicantId);
//    ResponseEntity<List<CircularEntity>> findApplicant(Long applicantId);


//    Object deleteCircular(Long id);
}
