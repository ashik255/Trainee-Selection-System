package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Circular")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Circular {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long circularId;
    private String title;
    private String description;
    private Date startDate;
    private Date endDate;
}
