package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Circular")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CircularEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long circularId;
    private String title;
    private String imgLink;
    private String description;
    private Date startDate;
    private Date endDate;
    @OneToMany(fetch = FetchType.EAGER)
    private List<ApplicantEntity> applicants = new ArrayList<>();
}