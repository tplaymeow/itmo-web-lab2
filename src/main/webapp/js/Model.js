class MainModel {
    constructor() {
        this._storageService = StorageService.instanceWithSessionStorage;
        this._networkService = new NetworkService();
    }

    saveResults(results) {
        this._storageService.save(
            MainModel._resultsKey,
            results
        );
    }

    fetchResults() {
        return this._storageService.fetch(MainModel._resultsKey);
    }

    calculateResult(params, onSuccess, onError) {

        let incorrectValuesNames = [];

        if (isNaN(params.x) || !(-4 <= params.r && params.r <= 4))
            incorrectValuesNames.push("X");
        if (isNaN(params.y) || !(-5 <= params.y && params.y <= 5))
            incorrectValuesNames.push("Y");
        if (isNaN(params.r) || !(1.0 <= params.r && params.r <= 3.0)) {
            incorrectValuesNames.push("R");
        }

        if (incorrectValuesNames.length > 0) {
            onError("Некоторые аргументы не валидны: " + incorrectValuesNames.join(" "));
            return;
        }

        this._networkService.fetchResult(
            params,
            function (data) {
                onSuccess(
                    data.result,
                    data.time,
                    data.working_time
                );
            },
            function () {
                alert("Hello")
            }
        );
    }

    // - Const
    static get _resultsKey() { return "results" }
}