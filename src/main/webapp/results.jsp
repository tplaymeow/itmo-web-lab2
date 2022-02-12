<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<jsp:useBean id="lastResult" scope="application" class="com.tplaymeow.itmo_web_lab2.models.Result"/>
<jsp:useBean id="results" scope="application" class="com.tplaymeow.itmo_web_lab2.models.ResultsListBean"/>

<html>
<head>
    <link rel="stylesheet" href="css/main-styles.css">

    <title>Результаты</title>
</head>
<body>
<%@ include file="header.jsp"%>
<div class="horizontal-center-container">
    <div class="main-container">
        <div class="control-panel">
            <img src="<%= lastResult.isSuccess() ? "data/success.png" : "data/failure.png" %>"
                 id="result-image">
        </div>
        <div class="control-panel">
            <a href="/itmo-web-lab2-1.0-SNAPSHOT">
                <input type="button" value="Отправить ещё" class="blue-button">
            </a>
        </div>
    </div>

    <div class="main-container" id="resultsTable">
        <table>
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Статус</th>
                <th>Время</th>
                <th>Время работы</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="val" items="${results.list}">
                <tr>
                    <td>${val.coordinates.x}</td>
                    <td>${val.coordinates.y}</td>
                    <td>${val.coordinates.r}</td>
                    <td>${val.success ? "Попадание" : "Промах"}</td>
                    <td>${val.time}</td>
                    <td>${val.workingTimeMillis} ms</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>

</body>
</html>
