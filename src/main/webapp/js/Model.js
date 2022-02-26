class MainModel {
    constructor(results) {
        this.results = results;
        this._networkService = new NetworkService();
    }

    calculateResult(params) {
        let incorrectValuesNames = [];

        if (params.x.length === 0 ||
            params.x.filter(val => { return !(-4 <= val && val <= 4) }).length > 0)
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