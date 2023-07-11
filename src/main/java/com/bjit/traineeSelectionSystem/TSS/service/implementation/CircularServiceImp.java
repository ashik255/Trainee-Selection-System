package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.Circular;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseAll;
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
    public ResponseEntity<List> getAllCirculars() {
        ResponseAll<List<Circular>> response = new ResponseAll<>();
//        List<Circular> circulars = circularRepository.findAll();
        response.setData(circulars);
        return response;
    }

    @Override
    public ResponseEntity<Circular> getCircularById(Long circularId) {
        ResponseAll<Circular> response = new ResponseAll<>();
        Circular circular = circularRepository.findById(circularId).orElse(null);
        if (circular != null) {
            response.setData(circular);
        } else {
            response.setError_message("Circular not found");
        }
        return response;
    }

    @Override
    public ResponseEntity<Circular> createCircular(CircularRequest circularRequest) {
        ResponseAll<Circular> response = new ResponseAll<>();
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
        ResponseAll<Circular> response = new ResponseAll<>();
        Circular circular = circularRepository.findById(circularId).orElse(null);
        if (circular != null) {
            circular.setTitle(circularRequest.getTitle());
            circular.setDescription(circularRequest.getDescription());
            circular.setStartDate(circularRequest.getStartDate());
            circular.setEndDate(circularRequest.getEndDate());
            Circular updatedCircular = circularRepository.save(circular);
            response.setData(updatedCircular);
        } else {
            response.setError_message("Circular not found");
        }
//        return response;
    }

    @Override
    public ResponseEntity<String> deleteCircular(Long circularId) {
        ResponseAll<String> response = new ResponseAll<>();
        Circular circular = circularRepository.findById(circularId).orElse(null);
        if (circular != null) {
            circularRepository.delete(circular);
            response.setData("Circular deleted successfully");
        } else {
            response.setError_message("Circular not found");
        }
//        return response;
    }
}
