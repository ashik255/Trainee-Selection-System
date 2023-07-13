package com.bjit.traineeSelectionSystem.TSS.service;

import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.User.LoginRequest;
import org.springframework.http.ResponseEntity;

public interface AdminService {
    ResponseEntity<ResponseModel> login(LoginRequest loginRequest);
}
