package com.tplaymeow.itmo_web_lab2.validators;

import com.tplaymeow.itmo_web_lab2.models.Coordinates;

public class Validator {
    public boolean validate(Coordinates coordinates) {
        Integer x = coordinates.getX();
        Double y = coordinates.getY();
        Integer r = coordinates.getR();

        return (-4 <= x && x <= 4) &&
                (-3 <= y && y <= 3) &&
                (1 <= r && r <= 5);
    }
}
