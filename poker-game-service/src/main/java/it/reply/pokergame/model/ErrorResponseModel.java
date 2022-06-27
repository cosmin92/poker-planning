package it.reply.pokergame.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponseModel {

    private String timeStamp;

    private Integer status;

    private String errorCode;

    private String message;

}
