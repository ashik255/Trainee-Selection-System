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
public class EvaluatorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long evaluatorId;
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @JoinColumn(name = "admin_id")
    @OneToOne
    @JoinColumn(name = "user_id")
    private EvaluatorEntity evaluator;
    private  String Name;
    private  String email;
    private  String password;
}
