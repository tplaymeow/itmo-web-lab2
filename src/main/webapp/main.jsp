<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<jsp:useBean id="results"
             scope="application"
             class="com.tplaymeow.itmo_web_lab2.models.ResultsListBean"/>

<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/deps/jquery.redirect.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/UI/CalculateResultButtonView.js"></script>
    <script type="text/javascript" src="js/UI/ControlsView.js"></script>
    <script type="text/javascript" src="js/UI/ResultView.js"></script>
    <script type="text/javascript" src="js/UI/MainController.js"></script>
    <script type="text/javascript" src="js/Model.js"></script>
    <script type="text/javascript" src="js/UI/Canvas.js"></script>
    <script type="text/javascript" src="js/UI/ResultsTableView.js"></script>
    <script type="text/javascript" src="js/Services/NetworkService.js"></script>

    <link rel="stylesheet" href="css/main-styles.css">
    <meta charset="UTF-8">

    <script>
        window.onload = () => {
            const jsonString = JSON.stringify(${results.jsonSerialized()});
            const results = JSON.parse(jsonString);
            main(results);
        }
    </script>

    <title>Лабораторная работа 2</title>
</head>
<body>
<%@ include file="header.jsp"%>
<div class="horizontal-center-container">
    <div class="main-container">
        <div class="inline">
            <div class="control-panel">
                <canvas id="canvas"></canvas>
            </div>
            <div class="control-panel" id="result"></div>
        </div>
        <div class="inline">
            <div class="control-panel" id="controls"></div>
            <div class="control-panel" id="calculateResultButton"></div>
        </div>
    </div>
    <div class="main-container" id="resultsTable"></div>
</div>
</body>
</html>