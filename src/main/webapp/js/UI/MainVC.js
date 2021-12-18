class MainViewController {
    constructor(
        controlsView,
        resultView,
        calculateResultButtonView,
        resultsTable,
        model,
        canvas
    ) {
        this._model = model;
        this._controlsView = controlsView;
        this._resultView = resultView;
        this._calculateResultButtonView = calculateResultButtonView;
        this._resultsTableView = resultsTable;
        this._canvas = canvas;
    }

    initialize() {
        this._setupAssembly();

        let newVM = this._model.fetchResults()
        this._calculateResultButtonView.render();
        this._resultView.render();
        this._controlsView.render();
        this._resultsTableView.render(newVM);
        this._canvas.render(3);
    }

    // - Private

    _setupAssembly() {
        this._calculateResultButtonView.onClickAction = () => { this._calculateButtonTapped(); }
    }

    _calculateButtonTapped() {
        let x = parseInt(this._controlsView.xText, 10);
        let y = parseFloat(this._controlsView.yText);
        let r = parseInt(this._controlsView.rText, 10);

        let params = {x: x, y: y, r: r};

        this._model.calculateResult(
            params,
            (result, date, workingTime) => {
                if (result) { this._resultView.showSuccessNotification(); }
                else { this._resultView.showFailureNotification(); }

                let newVM = this._model.fetchResults()
                newVM = newVM === null ? [] : newVM;
                let paramss = {x: x, y: y, r: r, status: result, time: date, workingTime: workingTime.toFixed(7)};
                newVM.push(paramss);
                this._model.saveResults(newVM);
                this._resultsTableView.render(newVM);
            },
            (msg) => {
                this._resultView.showErrorNotification(msg);
                this._calculateResultButtonView.isEnable = true;
            }
        );
    }
}