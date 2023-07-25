package com.bjit.traineeSelectionSystem.TSS.model;

import com.bjit.traineeSelectionSystem.TSS.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApplicantRequest {
    private  String email;
    private  String password;
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
    private String role;// Assuming the CV is stored as a file path or URL
}
