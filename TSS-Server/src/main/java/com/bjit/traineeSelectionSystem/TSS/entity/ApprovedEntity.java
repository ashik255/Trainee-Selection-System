package com.bjit.traineeSelectionSystem.TSS.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Approved")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ApprovedEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long approvedId;

    private Long circularId;
    private Long applicantId;
    private Boolean approvedMessage = false;}
