package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.Circular;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import org.springframework.http.ResponseEntity;

import java.awt.*;

public interface CircularService {
    ResponseEntity<List> getAllCirculars();
    ResponseEntity<Circular> getCircularById(Long circularId);
    ResponseEntity<Circular> createCircular(CircularRequest circularRequest);
    ResponseEntity<Circular> updateCircular(Long circularId, CircularRequest circularRequest);
    ResponseEntity<String> deleteCircular(Long circularId);
}
