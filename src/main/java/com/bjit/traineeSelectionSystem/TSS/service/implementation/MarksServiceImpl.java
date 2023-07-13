package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.MarksEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.service.MarksService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MarksServiceImpl implements MarksService {
    @Override
    public ResponseEntity<ResponseModel<?>> uploadMarks(MarksEntity marksEntity) {
        return null;
    }

    @Override
    public ResponseEntity<ResponseModel<?>> updateMarks(Long marksId, MarksEntity marksEntity) {
        return null;
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllMarks() {
        return null;
    }
}
