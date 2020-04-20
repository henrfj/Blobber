

class Render{

    canvas;
    ctx;
    constructor(){

    }
    setCanvas(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    circle(x, y, radius){
        this.ctx.beginPath();
        this.ctx.arc(x, this.canvas.height - y, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        //this.ctX.lineWidth = 5;
        //this.ctX.strokeStyle = '#003300';
        //this.ctX.stroke();
    }
}