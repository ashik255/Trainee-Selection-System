package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<ApplicationEntity,Long> {
}
