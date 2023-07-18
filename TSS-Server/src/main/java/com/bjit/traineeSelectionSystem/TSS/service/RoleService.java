package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEnum;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleService {
    public RoleEntity addRole(String role);

    public RoleEntity getRole(String roleName);
}
