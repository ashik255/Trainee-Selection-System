package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.Role.RoleEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.UserEntity;
import com.bjit.traineeSelectionSystem.TSS.exception.InvalidAuthenticationCredentials;
import com.bjit.traineeSelectionSystem.TSS.exception.UserAlreadyExit;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.User.LoginRequest;
import com.bjit.traineeSelectionSystem.TSS.model.User.LoginResponse;
import com.bjit.traineeSelectionSystem.TSS.model.User.UserRequest;
import com.bjit.traineeSelectionSystem.TSS.model.User.UserResponse;
import com.bjit.traineeSelectionSystem.TSS.repository.UserRepository;
import com.bjit.traineeSelectionSystem.TSS.service.JwtService;
import com.bjit.traineeSelectionSystem.TSS.service.RoleService;
import com.bjit.traineeSelectionSystem.TSS.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {
    private final UserRepository userRepository;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    public ResponseEntity<ResponseModel> register(UserRequest userRequest) {
        Optional<UserEntity> userEntity = userRepository.findByEmail(userRequest.getEmail());
        if (userEntity.isPresent()) {
            throw new UserAlreadyExit("The requested email " + userRequest.getEmail() + " already registered");
        } else {
            RoleEntity role = roleService.getRole(userRequest.getRoles());
            UserEntity userData = UserEntity.builder().email(userRequest.getEmail()).password(passwordEncoder.encode(userRequest.getPassword())).role(role).build();
            userRepository.save(userData);
            return new ResponseEntity<>(ResponseModel.builder().data(new UserResponse("Successfully registered with the  email " + userData.getEmail() + ".")).build(), HttpStatus.CREATED);
        }
    }

    @Override
    public ResponseEntity<ResponseModel> login(LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        } catch (Exception ex) {
            throw new InvalidAuthenticationCredentials("Invalid Email and Password");
        }
        String jwtToken = jwtService.generateToken(userDetailsService.loadUserByUsername(loginRequest.getEmail()));
        LoginResponse loginResponse = LoginResponse.builder().token(jwtToken).build();
        return new ResponseEntity<>(ResponseModel.builder().data(loginResponse).build(), HttpStatus.OK);
    }

}
