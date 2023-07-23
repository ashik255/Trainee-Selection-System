//package com.bjit.traineeSelectionSystem.TSS.service.implementation;
//
//import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
//import com.bjit.traineeSelectionSystem.TSS.exception.UserAlreadyExit;
//import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
//import com.bjit.traineeSelectionSystem.TSS.service.FileUploadService;
//import com.bjit.traineeSelectionSystem.TSS.utils.FileUploaderUtils;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//
//import java.nio.file.Path;
//import java.util.Objects;
//
//@Service
//@RequiredArgsConstructor
//public class FileUploadServiceImp  implements FileUploadService {
//
//    private final FileUploaderUtils fileUploaderUtils;
//
//    private final ApplicationRepository applicationRepository;
//
//    @Override
//    public ResponseEntity<ResponseModel<?>> uploadImage(MultipartFile image) {
//        if (image.isEmpty()){
//            throw new UserAlreadyExit("No image is uploaded. Try again");
//        }
//        if (!Objects.equals(image.getContentType(), "image/jpeg")){
//            throw new UserAlreadyExit("Only jpeg type image can be uploaded.");
//        }
//
//        ApplicantEntity applicantEntity= (ApplicantEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        Path path= fileUploaderUtils.uploadFile(image, true, String.valueOf(applicantEntity.getApplicantId()));
////        applicationRepository.(String.valueOf(path));
//        ResponseModel r = ResponseModel.builder()
//                .data(String.valueOf(path))
//                .build();
//        return new ResponseEntity<ResponseModel<?>>(r, HttpStatus.OK);
//    }
//}
