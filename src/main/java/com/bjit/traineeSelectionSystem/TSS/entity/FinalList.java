package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "FinalList")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class FinalList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fTId;
    private Long circularId;
    private Long traineeId;
    private String ranks;

}
