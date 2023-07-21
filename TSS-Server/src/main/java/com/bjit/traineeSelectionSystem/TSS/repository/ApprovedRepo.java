package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.ApprovedEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprovedRepo extends JpaRepository<ApprovedEntity,Long> {
}
