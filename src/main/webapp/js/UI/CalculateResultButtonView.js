class CalculateResultButtonView {
    constructor(element) {
        this.element = element;
    }

    render() {
        this.element.innerHTML = "<input type=\"button\" value=\"Расчитать\" class=\"blue-button\" id=\"calculate-button\">";
    }

    set onClickAction(value) {
        this.element.onclick = function (element) {
            value();
        }
    }
}