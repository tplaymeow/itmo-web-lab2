window.onload = function () {
    // alert("123");
    let rv = new ResultView(document.getElementById("result"));
    let cv= new ControlsView(document.getElementById("controls"));
    let cb = new CalculateResultButtonView(document.getElementById("calculateResultButton"));
    let rest = new ResultsTableView(document.getElementById("resultsTable"));
    let canvas = new CanvasView(document.getElementById("canvas"));
    let model = new MainModel();

    let mainVC = new MainViewController(cv, rv, cb, rest, model, canvas);
    mainVC.initialize();
}