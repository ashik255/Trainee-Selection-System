package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEnum;

public interface RoleService {
    public RoleEntity addRole(RoleEnum role);

    public RoleEntity getRole(String roleName);
}
