package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.ApprovedEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface ApprovedRepo extends JpaRepository<ApprovedEntity,Long> {
    public Set<ApprovedEntity> findByCircularId(Long circularId);
}
