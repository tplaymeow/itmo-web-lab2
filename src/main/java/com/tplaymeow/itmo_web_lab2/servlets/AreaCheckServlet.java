package com.tplaymeow.itmo_web_lab2.servlets;

import com.tplaymeow.itmo_web_lab2.models.Coordinates;
import com.tplaymeow.itmo_web_lab2.models.Result;
import com.tplaymeow.itmo_web_lab2.models.ResultsListBean;
import com.tplaymeow.itmo_web_lab2.validators.Checker;
import com.tplaymeow.itmo_web_lab2.validators.Validator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@WebServlet(name = "AreaCheckServlet", value = "/area_checker")
public class AreaCheckServlet extends HttpServlet {
    private final Validator validator = new Validator();
    private final Checker checker = new Checker();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long startTime = System.currentTimeMillis();

        List<Coordinates> coordinates =
                (List<Coordinates>) getServletContext().getAttribute("coordinates");
        ResultsListBean results = (ResultsListBean) getServletContext().getAttribute("results");

        if (!coordinates.stream().allMatch(validator::validate)) {
            getServletContext().getRequestDispatcher("/error.jsp").forward(req, resp);
            return;
        }

        List<Result> newResults = coordinates.stream()
                .map(coords -> {
                    return new Result(
                            coords,
                            checker.check(coords),
                            LocalDateTime.now(),
                            System.currentTimeMillis() - startTime);
                })
                .collect(Collectors.toList());

        results.getList().addAll(newResults);
        getServletContext().setAttribute("lastResultIsSuccess", coordinates.stream().allMatch(checker::check));
        getServletContext().getRequestDispatcher("/results.jsp").forward(req, resp);
    }
}
