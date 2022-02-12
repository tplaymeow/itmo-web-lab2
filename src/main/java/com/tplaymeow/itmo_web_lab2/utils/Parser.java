package com.tplaymeow.itmo_web_lab2.utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.LinkedHashMap;
import java.util.Map;

public class Parser {
    public static Map<String, String> splitQuery(String queryString) throws UnsupportedEncodingException {
        Map<String, String> queryPairs = new LinkedHashMap<>();
        String[] pairs = queryString.split("&");
        for (String pair : pairs) {
            int idx = pair.indexOf("=");
            queryPairs.put(
                    URLDecoder.decode(pair.substring(0, idx), "UTF-8"),
                    URLDecoder.decode(pair.substring(idx + 1), "UTF-8")
            );
        }
        return queryPairs;
    }
}
