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
    @ManyToOne
//    private UserEntity applicantId;
    private ApplicantEntity applicant;

    @ManyToOne
//    private CircularEntity circularId;
    private CircularEntity circular;

    @ManyToOne
//    private Long examId;
    private ExamCategoryEntity exam;


    private Double marks;
}
