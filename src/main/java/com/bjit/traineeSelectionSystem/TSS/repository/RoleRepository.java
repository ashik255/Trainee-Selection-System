package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findByRoleName(String roleName);
}