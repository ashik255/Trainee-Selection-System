package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.EvaluatorEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.UserEntity;
import com.bjit.traineeSelectionSystem.TSS.model.EvaluatorRequest;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.EvaluatorRepository;
import com.bjit.traineeSelectionSystem.TSS.repository.RoleRepository;
import com.bjit.traineeSelectionSystem.TSS.repository.UserRepository;
import com.bjit.traineeSelectionSystem.TSS.service.EvaluatorService;
import com.bjit.traineeSelectionSystem.TSS.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class EvaluatorServiceImpl implements EvaluatorService {

    private final RoleRepository roleRepository;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final EvaluatorRepository evaluatorRepository;
    @Override
    public ResponseEntity<ResponseModel<?>> evaluatorRegister(EvaluatorRequest evaluatorRequest) {
        String roleName = "EVALUATOR";
        if( roleRepository.findByRoleName(roleName).isEmpty() ){
            roleService.addRole(roleName);
        }
        RoleEntity role = roleRepository.findByRoleName(roleName).get();
        UserEntity user  = UserEntity.builder()
                .email(evaluatorRequest.getEmail())
                .password(passwordEncoder.encode(evaluatorRequest.getPassword()))
                .role(role)
                .build();
        UserEntity savedUser = userRepository.save(user);

        EvaluatorEntity evaluator = EvaluatorEntity.builder()
                .user(savedUser)
                .name(evaluatorRequest.getName())
                .title(evaluatorRequest.getTitle())
                .build();
        EvaluatorEntity savedEvaluator = evaluatorRepository.save(evaluator);

        ResponseModel response = ResponseModel.builder()
                .data(savedEvaluator)
                .build();
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> findAllEvaluator() {
        List<EvaluatorEntity> evaluators = evaluatorRepository.findAll();
        ResponseModel response = ResponseModel.builder()
                .data(evaluators)
                .build();
        return ResponseEntity.ok(response);
    }
}
