package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<ApplicantEntity,Long> {
}
