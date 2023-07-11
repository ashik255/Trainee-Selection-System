package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.Circular;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.repository.CircularRepository;
import com.bjit.traineeSelectionSystem.TSS.service.CircularService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.awt.*;

@Service
@RequiredArgsConstructor
public class CircularServiceImp implements CircularService {

    private final CircularRepository circularRepository;

    @Override
    public ResponseEntity<ResponseModel> getAllCirculars() {
//        List<Circular> response = new ResponseAll<>();
        List<Circular> circulars = circularRepository.findAll();
//        response.setData(circulars);
        return response;
    }

    @Override
    public ResponseEntity<Circular> getCircularById(Long circularId) {
        ResponseModel<Circular> responseModel = new ResponseModel<>();
        Circular circular = circularRepository.findById(circularId).orElse(null);
        if (circular != null) {
            responseModel.setData(circular);
        } else {
            responseModel.setError_message("Circular not found");
        }
        return responseModel;
    }

    @Override
    public ResponseEntity<Circular> createCircular(CircularRequest circularRequest) {
        ResponseEntity<Circular> response = new ResponseEntity<>();
        Circular circular = new Circular();
        circular.setTitle(circularRequest.getTitle());
        circular.setDescription(circularRequest.getDescription());
        circular.setStartDate(circularRequest.getStartDate());
        circular.setEndDate(circularRequest.getEndDate());
        Circular createdCircular = circularRepository.save(circular);
        response.setData(createdCircular);
        return response;
    }

    @Override
    public ResponseEntity<Circular> updateCircular(Long circularId, CircularRequest circularRequest) {
        ResponseModel<Circular> responseModel = new ResponseModel<>();
        Circular circular = circularRepository.findById(circularId).orElse(null);
        if (circular != null) {
            circular.setTitle(circularRequest.getTitle());
            circular.setDescription(circularRequest.getDescription());
            circular.setStartDate(circularRequest.getStartDate());
            circular.setEndDate(circularRequest.getEndDate());
            Circular updatedCircular = circularRepository.save(circular);
            responseModel.setData(updatedCircular);
        } else {
            responseModel.setError_message("Circular not found");
        }
//        return response;
    }

    @Override
    public ResponseEntity<String> deleteCircular(Long circularId) {
        ResponseModel<String> responseModel = new ResponseModel<>();
        Circular circular = circularRepository.findById(circularId).orElse(null);
        if (circular != null) {
            circularRepository.delete(circular);
            responseModel.setData("Circular deleted successfully");
        } else {
            responseModel.setError_message("Circular not found");
        }
//        return response;
    }
}
