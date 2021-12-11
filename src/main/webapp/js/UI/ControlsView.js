class ControlsView {
    constructor(element) {
        this.element = element;
    }

    render() {
        let xTitle = ControlsView._makeParagraph("Значение X:")

        let xButtons = [
            ControlsView._makeXInput("-4"),
            ControlsView._makeXInput("-3"),
            ControlsView._makeXInput("-2"),
            ControlsView._makeXInput("-1"),
            ControlsView._makeXInput("0"),
            ControlsView._makeXInput("1"),
            ControlsView._makeXInput("2"),
            ControlsView._makeXInput("3"),
            ControlsView._makeXInput("4")
        ]

        let yTitle = ControlsView._makeParagraph("Значение Y:");
        let yInput = ControlsView._makeYInput();

        let rTitle = ControlsView._makeParagraph("Значение R:");
        let rInput1 = ControlsView._makeRButton("1");
        let rInput2 = ControlsView._makeRButton("2");
        let rInput3 = ControlsView._makeRButton("3");
        let rInput4 = ControlsView._makeRButton("4");
        let rInput5 = ControlsView._makeRButton("5");

        this.element.appendChild(xTitle);
        xButtons.forEach(button => { this.element.appendChild(button) })
        this.element.appendChild(yTitle);
        this.element.appendChild(yInput);
        this.element.appendChild(rTitle);
        this.element.appendChild(rInput1);
        this.element.appendChild(rInput2);
        this.element.appendChild(rInput3);
        this.element.appendChild(rInput4);
        this.element.appendChild(rInput5);
    }

    get rText() { return $("input.gray-button.selected").val(); }
    get yText() { return $("#y-input").val(); }
    get xText() { return $("input[name=X]:checked").val(); }

    // Factory

    static _makeParagraph(text) {
        let element = document.createElement("P");
        element.innerHTML = text;
        return element;
    }

    static _makeRButton(value) {
        let element = document.createElement("INPUT");
        element.type = "button";
        element.value = value;
        $(element)
            .addClass("gray-button")
            .addClass("unselected")
            .click(function () {
            $("input.gray-button")
                .removeClass("selected")
                .addClass("unselected")
            $(this)
                .removeClass("unselected")
                .addClass("selected")
        })
        return element
    }

    static _makeTable(elements) {
        let element = document.createElement("TABLE");
        elements.forEach(elems => {
            let tr = document.createElement("TR");
            elems.forEach(el => {
                let td = document.createElement("TD");
                td.appendChild(el);
                tr.appendChild(td);
            });
            element.appendChild(tr);
        });
        return element;
    }

    static _makeYInput() {
        let element = document.createElement("INPUT");
        element.type = "text";
        element.placeholder = "-5...5";
        element.id = "y-input";
        return element
    }

    static _makeXInput(value) {
        let element = document.createElement("LABEL");
        element.classList.add("radio-container")

        let input = document.createElement("INPUT");
        input.type = "radio";
        input.name = "X";
        input.value = value;

        element.appendChild(input)
        element.append(value)

        return element
    }
}