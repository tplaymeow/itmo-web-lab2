main = function (results) {
    let resultView = new ResultView(
        document.getElementById("result"));
    let controlsView = new ControlsView(
        document.getElementById("controls"));
    let calculateResultButtonView = new CalculateResultButtonView(
        document.getElementById("calculateResultButton"));
    let canvas = new CanvasView(
        document.getElementById("canvas"));
    let rest = new ResultsTableView(
        document.getElementById("resultsTable"));

    let model = new MainModel(results);

    let mainController = new MainController(
        controlsView,
        resultView,
        calculateResultButtonView,
        model,
        canvas,
        rest);

    mainController.initialize();
}