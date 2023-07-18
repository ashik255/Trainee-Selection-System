package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.ExamCategoryEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.ExamCategoryRepository;
import com.bjit.traineeSelectionSystem.TSS.service.ExamCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExamCategoryServiceImpl implements ExamCategoryService {
    
    private final ExamCategoryRepository examCategoryRepository;
    @Override
    public ResponseEntity<ResponseModel<?>> createExamCategory(ExamCategoryEntity examCategoryEntity) {
        ExamCategoryEntity examCategory = ExamCategoryEntity.builder()
                .examCategory(examCategoryEntity.getExamCategory())
                .description(examCategoryEntity.getDescription())
                .build();
        ExamCategoryEntity saveData = examCategoryRepository.save(examCategory);

        ResponseModel<ExamCategoryEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> updateExamCategory(Long examId, @RequestBody ExamCategoryEntity examCategoryEntity) {
        ExamCategoryEntity examEntity = examCategoryRepository.findById(examId).get();
        // Update the fields of existingCircular with the values from circular
        examEntity.setExamCategory(examCategoryEntity.getExamCategory());
        examEntity.setDescription(examCategoryEntity.getDescription());

        ExamCategoryEntity saveData = examCategoryRepository.save(examEntity);

        ResponseModel<ExamCategoryEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllExamCategory() {
        List<ExamCategoryEntity> examData = examCategoryRepository.findAll();
//        if (circular.isEmpty()) {
//            return   "There is no book available in the stock";
//        }
        List<ExamCategoryEntity> examResponse = new ArrayList<>();
        examData.forEach(examCategoryEntity -> examResponse.add(
                ExamCategoryEntity.builder()
                        .examCategory(examCategoryEntity.getExamCategory())
                        .description(examCategoryEntity.getDescription())
                        .build()
        ));
        ResponseModel Response = ResponseModel.builder()
                .data(examResponse)
                .build();

        // Return the ResponseEntity with the APIResponse
        return ResponseEntity.ok(Response);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> deleteExamById(Long examId) {
        return null;
    }
}
