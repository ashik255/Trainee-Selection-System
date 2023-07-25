package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.MarksRepository;
import com.bjit.traineeSelectionSystem.TSS.service.MarksService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarksServiceImpl implements MarksService {

    private final MarksRepository marksRepo;
    @Override
    public ResponseEntity<ResponseModel<?>> uploadWrittenMarks(Long applicantId, Double mark) {

        MarksEntity marksEntity = marksRepo.findByApplicantId(applicantId);
        marksEntity.setWritten_exam(mark);
        marksEntity.setTotal_marks( marksEntity.getTotal_marks() + mark );
        marksRepo.save(marksEntity);

        ResponseModel response = ResponseModel.builder()
                .data( marksEntity.getTotal_marks() )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> uploadAptitudeMarks(Long applicantId, Double mark) {

        MarksEntity marksEntity = marksRepo.findByApplicantId(applicantId);
        marksEntity.setAptitude_test(mark);
        marksEntity.setTotal_marks( marksEntity.getTotal_marks() + mark );
        marksRepo.save(marksEntity);

        ResponseModel response = ResponseModel.builder()
                .data( marksEntity.getTotal_marks() )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> uploadTechnicalMarks(Long applicantId, Double mark) {

        MarksEntity marksEntity = marksRepo.findByApplicantId(applicantId);
        marksEntity.setTechnical_interview(mark);
        marksEntity.setTotal_marks( marksEntity.getTotal_marks() + mark );
        marksRepo.save(marksEntity);

        ResponseModel response = ResponseModel.builder()
                .data( marksEntity.getTotal_marks() )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> uploadHrMarks(Long applicantId, Double mark) {

        MarksEntity marksEntity = marksRepo.findByApplicantId(applicantId);
        marksEntity.setHr_interview(mark);
        marksEntity.setTotal_marks( marksEntity.getTotal_marks() + mark );
        marksRepo.save(marksEntity);

        ResponseModel response = ResponseModel.builder()
                .data( marksEntity.getTotal_marks() )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> allAttended() {

        List<MarksEntity> allApproved = marksRepo.findAll();

        ResponseModel response = ResponseModel.builder()
                .data( allApproved )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> writtenAptitudePassed() {

        List<MarksEntity> writtenAptitudePassed = marksRepo.findByWrittenAptitudePassed(true);

        ResponseModel response = ResponseModel.builder()
                .data( writtenAptitudePassed )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> technicalPassed() {

        List<MarksEntity> technicalPassed = marksRepo.findByTechnicalPassed(true);

        ResponseModel response = ResponseModel.builder()
                .data( technicalPassed )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> hrPassed() {

        List<MarksEntity> hrPassed = marksRepo.findByHrPassed(true);

        ResponseModel response = ResponseModel.builder()
                .data( hrPassed )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> writtenAptitudeAllowed(Long applicantId) {

        MarksEntity marksEntity = marksRepo.findByApplicantId(applicantId);
        marksEntity.setWrittenAptitudePassed(true);
        marksRepo.save(marksEntity);

        ResponseModel response = ResponseModel.builder()
                .data( null )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> technicalAllowed(Long applicantId) {

        MarksEntity marksEntity = marksRepo.findByApplicantId(applicantId);
        marksEntity.setTechnicalPassed(true);
        marksRepo.save(marksEntity);

        ResponseModel response = ResponseModel.builder()
                .data( null )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

    @Override
    public ResponseEntity<ResponseModel<?>> hrAllowed(Long applicantId) {

        MarksEntity marksEntity = marksRepo.findByApplicantId(applicantId);
        marksEntity.setHrPassed(true);
        marksRepo.save(marksEntity);

        ResponseModel response = ResponseModel.builder()
                .data( null )
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);

    }

}
