package com.bjit.traineeSelectionSystem.TSS.exception;

public class InvalidAuthenticationCredentials extends RuntimeException {
    public InvalidAuthenticationCredentials(String message) {
        super(message);
    }
}