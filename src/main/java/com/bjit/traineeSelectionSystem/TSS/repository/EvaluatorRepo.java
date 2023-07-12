package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.EvaluatorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluatorRepo extends JpaRepository<EvaluatorEntity,Long> {
}
