package com.tplaymeow.itmo_web_lab2.models;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class Result implements Serializable {
    private final Coordinates coordinates;
    private final boolean success;
    private final LocalDateTime time;
    private final Long workingTimeMillis;
}
