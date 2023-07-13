package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.ExamCategoryEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import org.springframework.http.ResponseEntity;

public interface ExamCategoryService {
    ResponseEntity<ResponseModel<?>> createExamCategory(ExamCategoryEntity examCategoryEntity);

//    ResponseEntity<ResponseModel<?>> updateCircular(Long examId, ExamCategoryEntity examCategoryEntity);

    ResponseEntity<ResponseModel<?>> updateExamCategory(Long examId, ExamCategoryEntity examCategoryEntity);

    ResponseEntity<ResponseModel<?>> getAllExamCategory();

    ResponseEntity<ResponseModel<?>> deleteExamById(Long examId);


}
