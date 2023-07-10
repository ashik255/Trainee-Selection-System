package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Evaluator")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Evaluator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long evaluatorId;
    private Long adminId;
    private  String Name;
    private  String email;
}
