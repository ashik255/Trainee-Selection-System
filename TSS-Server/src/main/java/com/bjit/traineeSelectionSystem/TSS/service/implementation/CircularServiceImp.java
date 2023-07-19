package com.bjit.traineeSelectionSystem.TSS.service.implementation;

import com.bjit.traineeSelectionSystem.TSS.entity.CircularEntity;
import com.bjit.traineeSelectionSystem.TSS.model.ResponseModel;
import com.bjit.traineeSelectionSystem.TSS.model.circular.CircularRequest;
import com.bjit.traineeSelectionSystem.TSS.repository.CircularRepository;
import com.bjit.traineeSelectionSystem.TSS.service.CircularService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CircularServiceImp implements CircularService {

    private final CircularRepository circularRepository;
    @Override
    public ResponseEntity<ResponseModel<?>> createCircular(CircularRequest circularRequest) {
        CircularEntity circularEntity = CircularEntity.builder()
                .title(circularRequest.getTitle())
                .imgLink(circularRequest.getImgLink())
                .description(circularRequest.getDescription())
                .startDate(circularRequest.getStartDate())
                .endDate(circularRequest.getEndDate())
                .build();
        CircularEntity saveData = circularRepository.save(circularEntity);

        ResponseModel<CircularEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> updateCircular(Long circularId, CircularRequest circularRequest) {
        CircularEntity circularEntity = circularRepository.findById(circularId).get();
        // Update the fields of existingCircular with the values from circular
        circularEntity.setTitle(circularRequest.getTitle());
        circularEntity.setImgLink(circularRequest.getImgLink());
        circularEntity.setDescription(circularRequest.getDescription());
        circularEntity.setStartDate(circularRequest.getStartDate());
        circularEntity.setEndDate(circularRequest.getEndDate());
        CircularEntity saveData = circularRepository.save(circularEntity);

        ResponseModel<CircularEntity> response = new ResponseModel<>();

        response.setData(saveData);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<ResponseModel<?>> getAllCircular() {
        List<CircularEntity> circular = circularRepository.findAll();
//        if (circular.isEmpty()) {
//            throw new BookServiceException("There is no book available in the stock");
//        }
        List<CircularEntity> circularResponses = new ArrayList<>();
        circular.forEach(circularEntity -> circularResponses.add(
                CircularEntity.builder()
                        .circularId(circularEntity.getCircularId())
                        .imgLink(circularEntity.getImgLink())
                        .description(circularEntity.getDescription())
                        .title(circularEntity.getDescription())
                        .startDate(circularEntity.getStartDate())
                        .endDate(circularEntity.getEndDate())
                        .build()
        ));
        ResponseModel Response = ResponseModel.builder()
                .data(circularResponses)
                .build();

        // Return the ResponseEntity with the APIResponse
        return ResponseEntity.ok(Response);
    }

    @Override
    public ResponseEntity<?> deleteCircular(Long circularId) {
        CircularEntity circularEntity = circularRepository.findById(circularId).get();
       circularRepository.delete(circularEntity);
        return null;
    }

    @Override
    public ResponseEntity<ResponseModel<?>> deleteCircular() {
        return null;
    }
    //        try {
//            if (circularRepository.existsById(circularId)) {
//                circularRepository.deleteById(circularId);
//                return "Circular is deleted successfully";
//            } else {
//                throw new BookServiceException("Book not found");
//            }
//        }catch (Exception e){
//            throw new BookServiceException("An error occurred while retrieving the book by ID");
//        }
//    }


    }
