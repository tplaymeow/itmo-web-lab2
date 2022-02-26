class MainController {
    constructor(
        controlsView,
        resultView,
        calculateResultButtonView,
        model,
        canvas,
        resultsTable
    ) {
        this._model = model;
        this._controlsView = controlsView;
        this._resultView = resultView;
        this._calculateResultButtonView = calculateResultButtonView;
        this._canvas = canvas;
        this._resultsTableView = resultsTable;
    }

    initialize() {
        this._setupAssembly();

        this._calculateResultButtonView.render();
        this._resultView.render();
        this._controlsView.render();
        this._canvas.isBlurEnabled = true;
        this._setupCanvas(0);
        this._resultsTableView.render(
            this._model.results.map(res => { return {
                x: res.coordinates.x,
                y: res.coordinates.y,
                r: res.coordinates.r,
                status: res.success,
                time: res.time,
                workingTime: res.workingTimeMillis
            }}));
    }

    // - Private

    _setupAssembly() {
        this._calculateResultButtonView.onClickAction = () => { this._calculateButtonTapped(); }
        this._controlsView.onRChanged = (msg) => { this._rValueChanged(msg) };
    }

    _rValueChanged(newValue) {
        this._canvas.isBlurEnabled = newValue == null;
        const r = parseInt(newValue, 10);
        this._setupCanvas(r);
    }

    _calculateButtonTapped() {
        const x = this._controlsView.xText
            .map(text => { return parseInt(text, 10) });
        const y = parseFloat(this._controlsView.yText);
        const r = parseInt(this._controlsView.rText, 10);
        const params = {x: x, y: y, r: r};

        const errorMessage = this._model.calculateResult(params);
        if (errorMessage !== null) {
            this._resultView.showErrorNotification(errorMessage);
        }
    }

    _setupCanvas(radius) {
        this._canvas.render(radius);
        this._model.results.forEach(res => {
            this._canvas._drawDot(res.coordinates, res.success ? '#00FF00' : '#FF0000')
        });
        this._canvas.onClickCanvas = (coordinates) => {
            console.log(coordinates);
            const x = [Math.round(coordinates.x)];
            const y = coordinates.y;
            const r = parseInt(this._controlsView.rText, 10);
            const params = {x: x, y: y, r: r};
            console.log(params);

            const errorMessage = this._model.calculateResult(params);
            if (errorMessage !== null) {
                this._resultView.showErrorNotification(errorMessage);
            }
        }
    }
}