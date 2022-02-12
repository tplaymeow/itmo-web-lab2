package com.tplaymeow.itmo_web_lab2.models;

import com.google.gson.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

@Data
@NoArgsConstructor
public class ResultsListBean implements Serializable {
    private final List<Result> list = Collections.synchronizedList(new LinkedList<>());

    public String jsonSerialized() {
        Gson serializer = new GsonBuilder().registerTypeAdapter(
                LocalDateTime.class,
                (JsonSerializer<LocalDateTime>) (dateTime, type, jsonSerializationContext) -> {
                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
                    return new JsonPrimitive(formatter.format(dateTime));
                }
        ).create();
        return serializer.toJson(list.toArray());
    }
}
