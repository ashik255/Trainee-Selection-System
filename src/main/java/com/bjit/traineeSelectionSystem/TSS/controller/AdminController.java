package com.bjit.traineeSelectionSystem.TSS.controller;
import com.bjit.traineeSelectionSystem.TSS.config.CustomAuthenticationProvider;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.User.LoginRequest;
import com.bjit.traineeSelectionSystem.TSS.service.AdminService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
//    private final CustomAuthenticationProvider customAuthenticationProvider;
//    @PostMapping("/login")
//    public ResponseEntity<ResponseModel> adminLogin(@Valid @RequestBody LoginRequest loginRequest) {
//       return customAuthenticationProvider.login(loginRequest);
//    }
}
