//package com.bjit.traineeSelectionSystem.TSS.controller;
//
//import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
//import com.bjit.traineeSelectionSystem.TSS.service.FileUploadService;
//import lombok.RequiredArgsConstructor;
//import org.apache.coyote.Response;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.nio.file.Path;
//import java.util.Map;
//
//
//@RestController
////@RequestMapping("/applicant")
//@RequiredArgsConstructor
//public class FileUploadController {
//    private final FileUploadService fileUploadService;
//    @PostMapping("/image")
//    public ResponseEntity<ResponseModel<?>> uploadImage(@RequestParam("profile-picture") MultipartFile image) {
//        return fileUploadService.uploadImage(image);
//    }
//}
