package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "evaluator")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EvaluatorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long evaluatorId;

    private String email;
    private String password;
    private String name;
    private String title;

    @OneToOne
    private UserEntity user;
}
