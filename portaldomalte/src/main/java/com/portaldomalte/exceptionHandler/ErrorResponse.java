package com.portaldomalte.exceptionHandler;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ErrorResponse {

    private int statusCode;
    private String message;
    private String error;
    private String path;
    private String timestamp;
    private int errorCode;


}
