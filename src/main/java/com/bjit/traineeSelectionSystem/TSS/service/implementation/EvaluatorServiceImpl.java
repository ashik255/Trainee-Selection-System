package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.EvaluatorEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.CircularRepository;
import com.bjit.traineeSelectionSystem.TSS.repository.EvaluatorRepo;
import com.bjit.traineeSelectionSystem.TSS.service.EvaluatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EvaluatorServiceImpl implements EvaluatorService {
    private final EvaluatorRepo evaluatorRepo;

    @Override
    public ResponseEntity<ResponseModel<?>> createEvaluator(EvaluatorEntity evaluatorEntity) {
        EvaluatorEntity evaluators = EvaluatorEntity.builder()
                .email(evaluatorEntity.getEmail())
                .Name(evaluatorEntity.getName())
                .password(evaluatorEntity.getPassword())
                .build();
        EvaluatorEntity saveData = evaluatorRepo.save(evaluators);

        ResponseModel<EvaluatorEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllEvaluator() {
        List<EvaluatorEntity> evaluator = evaluatorRepo.findAll();
//        if (circular.isEmpty()) {
//            throw new BookServiceException("There is no book available in the stock");
//        }
        List<EvaluatorEntity> evaluatorResponses = new ArrayList<>();
        evaluator.forEach(evaluatorEntity -> evaluatorResponses.add(
                EvaluatorEntity.builder()
                        .email(evaluatorEntity.getEmail())
                        .Name(evaluatorEntity.getName())
                        .password(evaluatorEntity.getPassword())
                        .build()
        ));
        ResponseModel Response = ResponseModel.builder()
                .data(evaluatorResponses)
                .build();

        // Return the ResponseEntity with the APIResponse
        return ResponseEntity.ok(Response);
    }
    }

