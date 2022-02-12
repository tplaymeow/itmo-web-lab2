package com.tplaymeow.itmo_web_lab2.models;

import lombok.Data;

import java.io.Serializable;

@Data
public class Coordinates implements Serializable {
    private final Integer x;
    private final Double y;
    private final Integer r;
}
