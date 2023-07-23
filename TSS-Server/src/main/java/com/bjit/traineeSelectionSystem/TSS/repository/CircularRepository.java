package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CircularRepository extends JpaRepository<CircularEntity,Long> {
    List<CircularEntity> findByApplicants(ApplicantEntity applicant);
}
