package com.bjit.traineeSelectionSystem.TSS.model.User;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {
    private String token;
}