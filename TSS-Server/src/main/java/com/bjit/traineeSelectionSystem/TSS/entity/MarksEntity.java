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
    private ApprovedEntity approved;

    private Double written_exam;
    private Double aptitude_test;
    private Double technical_interview;
    private Double hr_interview;
}
