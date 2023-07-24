package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.controller.EvaluatorController;
import com.bjit.traineeSelectionSystem.TSS.entity.EvaluatorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluatorRepository extends JpaRepository<EvaluatorEntity , Long> {
}
