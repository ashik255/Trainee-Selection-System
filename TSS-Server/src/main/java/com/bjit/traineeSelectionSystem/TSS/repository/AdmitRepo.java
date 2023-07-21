package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdmitRepo extends JpaRepository<AdminEntity,Long> {
}
