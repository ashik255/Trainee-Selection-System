package com.bjit.traineeSelectionSystem.TSS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DashBoard")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
//public class Admin {

public class DashBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;
    private Long userId;

}
