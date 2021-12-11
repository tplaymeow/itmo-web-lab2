class ResultView {
    constructor(element) {
        this.element = element;
    }

    render() {
        this.element.innerHTML = "<p>Нажмите на кнопку \"Расчитать\"</p>";
    }

    showSuccessNotification() {
        this.element.innerHTML = "<p style=\"color:#00FF00\">Точка входит в выбранную область</p>";
    }

    showFailureNotification() {
        this.element.innerHTML = "<p style=\"color:#ff0000\">Точка не входит в выбранную область</p>";
    }

    showErrorNotification(msg) {
        let text = msg == null ? "Техническая шоколадка!" : msg;
        this.element.innerHTML = "<p style=\"color:#ff0000\">" + text + "</p>";
    }
}