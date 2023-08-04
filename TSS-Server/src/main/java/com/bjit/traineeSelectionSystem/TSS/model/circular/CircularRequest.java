package com.bjit.traineeSelectionSystem.TSS.model.circular;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
    @Size(max = 1000)
    private String imgLink;
    @NotBlank
    @Size(max = 1000)
    private java.lang.String description;

    @NotNull
    private Date startDate;

    @NotNull
    private Date endDate;
    @NotNull
    @Size(max = 1000)
    private java.lang.String about;
    @NotNull
    @Size(max = 1000)
    private java.lang.String requirement;

}
