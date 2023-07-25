package com.bjit.traineeSelectionSystem.TSS.repository;

import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarksRepository extends JpaRepository<MarksEntity,Long> {

    public MarksEntity findByApplicantId(Long applicantId);

    public List<MarksEntity> findByWrittenAptitudePassed(Boolean ans);

    public List<MarksEntity> findByTechnicalPassed(Boolean ans);

    public List<MarksEntity> findByHrPassed(Boolean ans);

}
