package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.PrivateKey;
import java.util.Date;

@Entity
@Table(name = "Application")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantId;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    private String firstName;
    private String lastName;
    private String gender;
    private Date dateOfBirth;
    private String contact;
    private String degreeName;
    private String institute;
    private Double cgpa;
    private Long passingYear;
    private String address;
    private String photo; // Assuming the photo is stored as a file path or URL
    private String cv; // Assuming the CV is stored as a file path or URL
}
