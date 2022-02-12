<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<% response.setStatus(404); %>

<html>
<head>
  <link rel="stylesheet" href="css/main-styles.css">
  <title>Что-то пошло не так</title>
</head>
<body>
<%@ include file="header.jsp"%>
<div class="horizontal-center-container">
  <div class="main-container">
    <div class="control-panel">
      <img src="data/error404.jpg" id="result-image">
    </div>

    <div class="control-panel">
      <p>Вот незадача, жизнь неудача. Оауууу-ууу</p>
    </div>
  </div>
</div>

</body>
</html>