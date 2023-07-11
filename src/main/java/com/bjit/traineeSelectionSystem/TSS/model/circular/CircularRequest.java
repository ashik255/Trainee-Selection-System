package com.bjit.traineeSelectionSystem.TSS.model.circular;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CircularRequest {

    private Long circularId;
    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotNull
    private Date startDate;

    @NotNull
    private Date endDate;

}
