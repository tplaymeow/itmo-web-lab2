package com.tplaymeow.itmo_web_lab2.servlets;

import com.tplaymeow.itmo_web_lab2.models.Coordinates;
import com.tplaymeow.itmo_web_lab2.models.Result;
import com.tplaymeow.itmo_web_lab2.models.ResultsListBean;
import com.tplaymeow.itmo_web_lab2.utils.Parser;
import lombok.extern.java.Log;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.logging.Level;
import java.util.stream.Collectors;

@Log
@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse resp) throws ServletException, IOException {
        addResultsIfNeeded();
        openMainPage(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req,
                          HttpServletResponse resp) throws ServletException, IOException {
        addResultsIfNeeded();
        String requestString = req.getReader().lines().collect(Collectors.joining());
        Map<String, String> requestParameters = Parser.splitQuery(requestString);

        try {
            Integer x = Integer.parseInt(requestParameters.get("x"));
            Double y = Double.parseDouble(requestParameters.get("y"));
            Integer r = Integer.parseInt(requestParameters.get("r"));
            Coordinates coordinates = new Coordinates(x, y, r);
            getServletContext().setAttribute("coordinates", coordinates);

            openAreaCheck(req, resp);
        } catch (NumberFormatException | NullPointerException ignored) {
            openMainPage(req, resp);
        }
    }

    private void openMainPage(HttpServletRequest req,
                              HttpServletResponse resp) throws ServletException, IOException {
        log.log(Level.INFO, "dispatch to /main.jsp");
        getServletContext().getRequestDispatcher("/main.jsp").forward(req, resp);
    }

    private void openAreaCheck(HttpServletRequest req,
                              HttpServletResponse resp) throws ServletException, IOException {
        log.log(Level.INFO, "dispatch to /area_checker");
        getServletContext().getRequestDispatcher("/area_checker").forward(req, resp);
    }

    private void addResultsIfNeeded() {
        String attributeKey = "results";
        if (Objects.isNull(getServletContext().getAttribute(attributeKey))) {
            getServletContext().setAttribute(attributeKey, new ResultsListBean());
        }
    }
}
