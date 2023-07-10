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

public class UploadMarks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long marksId;
    private Long examId;
    private Double marks;

}
