package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEnum;
import com.bjit.traineeSelectionSystem.TSS.exception.RoleDoesNotExistException;
import com.bjit.traineeSelectionSystem.TSS.repository.RoleRepository;
import com.bjit.traineeSelectionSystem.TSS.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    @Override
    public RoleEntity addRole(String roleName) {
        if (roleRepository.findByRoleName(roleName).isEmpty()) {
            RoleEntity role = new RoleEntity();
            role.setRoleName(roleName.toUpperCase());
            return roleRepository.save(role);
        }
        return null;
    }

    @Override
    public RoleEntity getRole(String roleName) {
        Optional<RoleEntity> roleEntity = roleRepository.findByRoleName(roleName.toUpperCase());
        if (roleEntity.isPresent()) {
            return roleEntity.get();
        }
        String roleValue = "";
            return roleRepository.save(addRole(roleName.toUpperCase()));
        }
}