package com.bjit.traineeSelectionSystem.TSS.controller;

import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.User.LoginRequest;
import com.bjit.traineeSelectionSystem.TSS.model.User.UserRequest;
import com.bjit.traineeSelectionSystem.TSS.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<ResponseModel> userRegister(@Valid @RequestBody UserRequest userRequest) {
        return userService.register(userRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseModel> userLogin(@Valid @RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        return userService.login(loginRequest);
    }
}
