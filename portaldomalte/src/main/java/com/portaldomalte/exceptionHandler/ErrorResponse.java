package com.portaldomalte.exceptionHandler;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;


import java.sql.Timestamp;

@Data
@EqualsAndHashCode
public class ErrorResponse {

    private int statusCode;
    private String message;
    private Timestamp timestamp;

}
