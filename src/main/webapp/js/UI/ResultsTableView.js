class ResultsTableView {
    constructor(element) {
        this.element = element;
    }

    render(viewModels) {
        this.element.innerHTML = "";

        if (viewModels === null || viewModels.length === 0) {
            this.element.style.display = "None"
            return;
        } else {
            this.element.style.display = "Block"
        }

        let rows = viewModels.map(ResultsTableView._makeTableRow);
        let table = document.createElement("TABLE");
        table.appendChild(ResultsTableView._makeTableHead());
        rows.forEach((row) => { table.appendChild(row) });

        this.element.appendChild(table);
    }

    // - Factory

    static _makeTableRow(viewModel) {
        let element = document.createElement("TR");
        element.innerHTML = "" +
            "<td>" + viewModel.x + "</td>" +
            "<td>" + viewModel.y + "</td>" +
            "<td>" + viewModel.r + "</td>" +
            "<td>" + (viewModel.status ? "Попадание" : "Промах") + "</td>" +
            "<td>" + viewModel.time + "</td>" +
            "<td>" + viewModel.workingTime + " ms" + "</td>";
        return element;
    }

    static _makeTableHead() {
        let element = document.createElement("THEAD");
        element.innerHTML = "<tr>" +
            "<th>X</th>" +
            "<th>Y</th>" +
            "<th>R</th>" +
            "<th>Статус</th>" +
            "<th>Время</th>" +
            "<th>Время работы</th>" +
            "</tr>";
        return element;
    }
}
