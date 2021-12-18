class CanvasView {
    constructor(element) {
        this.element = element;

        const width = 600;
        const height = 600;
        const scaleFactor = width / 10

        this._width = width;
        this._height = height;

        this.element.addEventListener('click', e => {
            const coordinate = this._getCursorPosition(e);
            const res = {
                x: (coordinate.x - width / 2) / scaleFactor,
                y: (coordinate.y - height / 2) / -scaleFactor
            }
            alert("x: " + (res.x) + "; y: " + (res.y));
        })
    }

    _getCursorPosition(event) {
        const rect = this.element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return {x: x, y: y};
    }

    render(radius) {
        const ctx = this.element.getContext('2d');
        const center = {x: this._width / 2, y: this._height / 2}
        const scaleFactor = this._width / 10

        ctx.canvas.height = this._height;
        ctx.canvas.width = this._width;

        this._drawBoard(ctx, this._width, this._height);

        ctx.fillStyle = '#3333ff';
        ctx.globalAlpha = 0.8;
        ctx.strokeStyle = "#000055";
        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(center.x, center.y);
        ctx.lineTo(center.x - radius * scaleFactor, center.y);
        ctx.lineTo(center.x, center.y - 0.5 * radius * scaleFactor);
        ctx.lineTo(center.x, center.y - radius * scaleFactor);
        ctx.lineTo(center.x + 0.5 * radius * scaleFactor, center.y - radius * scaleFactor);
        ctx.lineTo(center.x + 0.5 * radius * scaleFactor, center.y);
        ctx.arc(center.x, center.y, 0.5 * radius * scaleFactor, 0, Math.PI / 2);

        ctx.closePath();

        ctx.fill();
        ctx.stroke();
    }

    _drawBoard(context, width, height) {
        for (let x = width / 10; x < width; x += width / 10) {
            context.moveTo(x, 0);
            context.lineTo(x, height);
        }

        for (let y = height / 10; y < height; y += height / 10) {
            context.moveTo(0, y);
            context.lineTo(width, y);
        }
        context.stroke();
    }
}