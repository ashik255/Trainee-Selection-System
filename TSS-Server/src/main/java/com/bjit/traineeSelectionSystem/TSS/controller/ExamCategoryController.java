package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.entity.ExamCategoryEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.service.ExamCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exam")
@RequiredArgsConstructor
public class ExamCategoryController {
    private final ExamCategoryService examCategoryService;
    @PostMapping("/create")
    public ResponseEntity<ResponseModel<?>> createExamCategory(@RequestBody ExamCategoryEntity examCategoryEntity){
        return examCategoryService.createExamCategory(examCategoryEntity);
    }

    @PutMapping("/update/examId")
    public ResponseEntity<ResponseModel<?>> updateExamCategory(@RequestParam Long examId , @RequestBody ExamCategoryEntity examCategoryEntity) {
        return examCategoryService.updateExamCategory(examId , examCategoryEntity);
    }

    @GetMapping("/getAllExamCategory")
    public ResponseEntity<ResponseModel<?>> getAllExamCategory() {
        return examCategoryService.getAllExamCategory();
    }

    @DeleteMapping("/delete/{circularId}")
    public ResponseEntity<ResponseModel<?>> deleteExamById(@PathVariable Long  examId) {
        return (examCategoryService.deleteExamById(examId));
    }

}
