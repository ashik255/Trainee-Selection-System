package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Applicant")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ApplicantEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantId;
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    private String firstName;
    private String lastName;
    private String role;
    private String gender;
    private Date dateOfBirth;
    private String contact;
    private String degreeName;
    private String institute;
    private Double cgpa;
    private Long passingYear;
    private String address;
    private String photo;
    private String cv;

}
