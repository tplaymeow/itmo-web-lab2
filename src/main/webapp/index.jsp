<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/UI/CalculateResultButtonView.js"></script>
    <script type="text/javascript" src="js/UI/ControlsView.js"></script>
    <script type="text/javascript" src="js/UI/ResultView.js"></script>
    <script type="text/javascript" src="js/UI/MainVC.js"></script>
    <script type="text/javascript" src="js/UI/ResultsTableView.js"></script>
    <script type="text/javascript" src="js/Model.js"></script>
    <script type="text/javascript" src="js/Services/StorageService.js"></script>
    <script type="text/javascript" src="js/Services/NetworkService.js"></script>

    <link rel="stylesheet" href="css/main-styles.css">
    <meta charset="UTF-8">
    <title>Лабораторная работа 2</title>
</head>
<body>
<div class="header">
    <h1>Лабораторная работа №1</h1>
    <h3>Гулямов Тимур P3212</h3>
</div>

<div class="horizontal-center-container">
    <p>Простое веб-приложение для проверки попадания точки в заданную область</p>

    <div class="main-container">
        <div class="inline">

            <div class="control-panel"> <img src="data/areas.png"> </div>
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