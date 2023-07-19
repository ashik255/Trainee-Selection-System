package com.bjit.traineeSelectionSystem.TSS.utils;

import com.bjit.traineeSelectionSystem.TSS.exception.UserAlreadyExit;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Component
public class FileUploaderUtils {

    public final String UPLOAD_DIR = "C:\\Users\\Test\\Documents\\finalproject\\BJIT-TSS\\back-end\\tss\\src\\main\\resources\\static";

    public Path uploadFile(MultipartFile file, Boolean isImage, String name) {
        String fullPath = null;
        try {
            if (isImage) {
                fullPath = UPLOAD_DIR + "\\image" + File.separator + name + ".jpeg";
            } else {
                fullPath = UPLOAD_DIR + "\\resume" + File.separator + name + ".pdf";
            }

            Files.copy(file.getInputStream(), Paths.get(fullPath), StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception Ex) {
            throw new UserAlreadyExit(Ex.getMessage());
        }

        return Paths.get(fullPath);
    }
}
