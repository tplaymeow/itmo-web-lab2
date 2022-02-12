package com.tplaymeow.itmo_web_lab2.validators;

import com.tplaymeow.itmo_web_lab2.models.Coordinates;

public class Checker {
    public boolean check(Coordinates coordinates) {
        int absX = Math.abs(coordinates.getX());
        double absY = Math.abs(coordinates.getY());
        int absR = coordinates.getR();

        if (coordinates.getX() >= 0 && coordinates.getY() >= 0)
            return (absX <= absR / 2.0) && (absY <= absR);
        if (coordinates.getX() <= 0 && coordinates.getY() >= 0)
            return (absX / 2.0 + absY <= absR / 2.0);
        if (coordinates.getX() >= 0 && coordinates.getY() <= 0)
            return (absX * absX + absY * absY < Math.pow((absR / 2.0), 2));

        return false;
    }
}
