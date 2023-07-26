package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
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
    @Size(max = 1000)
    private java.lang.String about;
    @Size(max = 1000)
    private java.lang.String requirement;
    @Size(max = 1000)
    private String imgLink;
    @Size(max = 1000)
    private java.lang.String description;
    private Date startDate;
    private Date endDate;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<ApplicantEntity> applicants = new ArrayList<>();
}