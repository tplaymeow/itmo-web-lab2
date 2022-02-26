class ControlsView {
    constructor(element) {
        this.element = element;
    }

    render() {
        let xTitle = ControlsView._makeParagraph("Значение X:")
        let xButtons = ["-4", "-3", "-2", "-1", "0", "1", "2", "3", "4"]
            .map(ControlsView._makeXInput)
        let yTitle = ControlsView._makeParagraph("Значение Y:");
        let yInput = ControlsView._makeYInput();
        let rTitle = ControlsView._makeParagraph("Значение R:");
        let rInputs = ["1", "2", "3", "4", "5"]
            .map(value => {
                let button = ControlsView._makeRButton(value);
                button.onclick = () => { this._onRChanged(value) };
                return button;
            })

        this.element.appendChild(xTitle);
        xButtons.forEach(button => { this.element.appendChild(button) })
        this.element.appendChild(yTitle);
        this.element.appendChild(yInput);
        this.element.appendChild(rTitle);
        rInputs.forEach(button => { this.element.appendChild(button) })
    }

    get rText() { return $("input.gray-button.selected").val(); }
    get yText() { return $("#y-input").val(); }
    get xText() {
        return $("input[name=X]:checked")
            .map(function () { return $(this).val() })
            .toArray();
    }

    set onRChanged(val) {
        this._onRChanged = val;
    }

    // Factory

    static _makeParagraph(text) {
        let element = document.createElement("P");
        element.innerHTML = text;
        return element;
    }

    static _makeXInput(value) {
        let element = document.createElement("LABEL");
        element.classList.add("radio-container")

        let input = document.createElement("INPUT");
        input.type = "checkbox";
        input.name = "X";
        input.value = value;

        element.appendChild(input)
        element.append(value)

        return element
    }

    static _makeYInput() {
        let element = document.createElement("INPUT");
        element.type = "text";
        element.placeholder = "-3...3";
        element.id = "y-input";
        return element
    }

    static _makeRButton(value) {
        let element = document.createElement("INPUT");
        element.type = "button";
        element.value = value;
        $(element)
            .addClass("gray-button")
            .addClass("unselected")
            .click(() => {
                $("input.gray-button")
                    .removeClass("selected")
                    .addClass("unselected")
            })
            .click(function () {
                $(this)
                    .removeClass("unselected")
                    .addClass("selected")
            })
        return element
    }
}