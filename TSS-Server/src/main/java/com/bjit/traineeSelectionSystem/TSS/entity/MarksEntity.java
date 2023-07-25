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

    private Long applicantId;
    private Double written_exam;
    private Double aptitude_test;
    private Boolean writtenAptitudePassed;
    private Double technical_interview;
    private Boolean technicalPassed;
    private Double hr_interview;
    private Boolean hrPassed;
    private Double total_marks;
}
