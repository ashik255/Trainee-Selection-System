package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "UploadMarks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class MarksEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long marksId;

    private Long approvalId;
    private Double written_exam;
    private Double aptitude_test;
    private Boolean written_aptitude_passed = false;
    private Double technical_interview;
    private Boolean technical_passed = false;
    private Double hr_interview;
    private Boolean hr_passed = false;
    private Double total_marks;
}
