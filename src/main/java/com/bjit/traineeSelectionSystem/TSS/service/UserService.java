package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.User.LoginRequest;
import com.bjit.traineeSelectionSystem.TSS.model.User.UserRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;

public interface UserService {
    ResponseEntity<ResponseModel> register(UserRequest userRequest);

    ResponseEntity<ResponseModel> login(LoginRequest loginRequest);
}
