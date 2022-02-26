package com.tplaymeow.itmo_web_lab2.utils;

import com.tplaymeow.itmo_web_lab2.models.Coordinates;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.*;
import java.util.stream.Collectors;

public class Parser {
    private final static String UTF_8 = "UTF-8";

    public static List<Coordinates> parseCoordinates(String queryString) throws IllegalArgumentException, UnsupportedEncodingException {
        String[] pairs = queryString.split("&");
        ArrayList<Integer> x = new ArrayList<>();
        Double y = null;
        Integer r = null;

        for (String pair : pairs) {
            int idx = pair.indexOf("=");
            String key = URLDecoder.decode(pair.substring(0, idx), UTF_8);
            String value = URLDecoder.decode(pair.substring(idx + 1), UTF_8);

            if (Objects.equals("x", key)) x.add(Integer.parseInt(value));
            if (Objects.equals("y", key)) y = Double.parseDouble(value);
            if (Objects.equals("r", key)) r = Integer.parseInt(value);
        }

        if (Objects.isNull(y) || Objects.isNull(r) || x.isEmpty())
            throw new IllegalArgumentException();
        Double finalY = y;
        Integer finalR = r;
        return x.stream()
                .map(conX -> { return new Coordinates(conX, finalY, finalR); })
                .collect(Collectors.toList());
    }

    public static Map<String, String> splitQuery(String queryString) throws UnsupportedEncodingException {
        Map<String, String> queryPairs = new LinkedHashMap<>();
        String[] pairs = queryString.split("&");
        for (String pair : pairs) {
            int idx = pair.indexOf("=");
            queryPairs.put(
                    URLDecoder.decode(pair.substring(0, idx), UTF_8),
                    URLDecoder.decode(pair.substring(idx + 1), UTF_8)
            );
        }
        return queryPairs;
    }
}
