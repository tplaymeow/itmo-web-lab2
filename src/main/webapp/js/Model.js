class MainModel {
    constructor(results) {
        this.results = results;
        this._networkService = new NetworkService();
    }

    calculateResult(params) {
        let incorrectValuesNames = [];
        if (isNaN(params.x) || !(-4 <= params.x && params.x <= 4))
            incorrectValuesNames.push("X");
        if (isNaN(params.y) || !(-3 <= params.y && params.y <= 3))
            incorrectValuesNames.push("Y");
        if (isNaN(params.r) || !(1 <= params.r && params.r <= 5))
            incorrectValuesNames.push("R");

        if (incorrectValuesNames.length > 0) {
            return "Некоторые аргументы не валидны: " + incorrectValuesNames.join(" ");
        }

        this._networkService.redirectToResult(params);
    }
}