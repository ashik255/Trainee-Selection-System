package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.ApplicantEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.ApprovedEntity;
import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.repository.ApplicantRepository;
import com.bjit.traineeSelectionSystem.TSS.repository.ApprovedRepo;
import com.bjit.traineeSelectionSystem.TSS.repository.MarksRepository;
import com.bjit.traineeSelectionSystem.TSS.service.ApprovedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ApprovedServiceImpl implements ApprovedService {

    private final ApprovedRepo approvedRepo;
    private final ApplicantRepository applicantRepo;
    private final MarksRepository marksRepo;
    @Override
    public ResponseEntity<ResponseModel<?>> applicantApproved(Long circularId, Long applicantId) {
        ApprovedEntity approved = ApprovedEntity.builder()
                .circularId(circularId)
                .applicantId(applicantId)
                .build();
        approvedRepo.save(approved);

        MarksEntity marks = MarksEntity.builder()
                .applicantId(applicantId)
                .written_exam(0.0)
                .aptitude_test(0.0)
                .writtenAptitudePassed(false)
                .technical_interview(0.0)
                .technicalPassed(false)
                .hr_interview(0.0)
                .hrPassed(false)
                .total_marks(0.0)
                .build();
        marksRepo.save(marks);

        ResponseModel response = ResponseModel.builder()
                .data(null)
                .build();
        return  ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllApplicationByCircular( Long circularId) {

        Set<ApplicantEntity> applicants = new HashSet<>();
        Set<ApprovedEntity> approved = approvedRepo.findByCircularId(circularId);

        for( ApprovedEntity temp : approved){
            applicants.add( applicantRepo.findById(temp.getApplicantId()).get() );
        }

        ResponseModel response = ResponseModel.builder()
                .data(applicants)
                .build();
        return new ResponseEntity<>(response , HttpStatus.OK);
    }
}
