package com.abelf.fragance.excepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MiException extends Exception {

    public MiException(String msg) {
        super(msg);
    }

}
