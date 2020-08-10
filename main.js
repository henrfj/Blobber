
// This is the first file to run.
window.onload = function(){
    let canvas = this.document.getElementById("canvas");
    
    window.game = new Game(canvas);
    window.game.keyboardlistenerObject = this.document;
    window.game.start();
}
class Game{
    keyboardController;
    canvas;
    renderEngine;

    blob_number = 9;

    constructor(canvas){
        this.renderEngine = new RenderEngine();
        this.setCanvas(canvas);
        this.keyboardController = new KeyboardControl();
        console.log("Height:", this.canvas.height, "Width:", this.canvas.width);
        console.log("Math: ", 2**4);
        this.physicsEngine = new Physics(this.canvas.height, this.canvas.width);
        this.blobs = [];

        // Create some blobs.
        for(var i=0; i<10;i++){
            this.createBlob(50*i+50, 50*i+50, Math.sqrt(1+i)*10, "green", i+1);
        }
    }
    setCanvas(canvas){
        this.canvas = canvas;
        this.renderEngine.setCanvas(this.canvas);
    }
    set keyboardlistenerObject(keyboardlistenerObject){
        this.keyboardController.listenerObject = keyboardlistenerObject;
    }
    start(){
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
    createBlob(x = 0,y = 0,r = 10, color = 'green', mass=1){
        let newBlob = new Blob(x, y, r, color, mass);
        this.blobs.push(newBlob);
        this.physicsEngine.addBlob(newBlob);
        this.renderEngine.addBlob(newBlob);
    }
    gameLoop(){
        this.keyboardController.update();

        // Do physics calculations.
        this.physicsEngine.run();

        // Render all blobs.
        this.renderEngine.render();

        if(this.keyboardController.q.isDown){
            if(this.blob_number<this.blobs.length-1){
                this.blob_number += 1;
            } else {
                this.blob_number = 0;
            }
                
        }
        if(this.keyboardController.w.isDown){
            this.blobs[this.blob_number].velY += 0.05;
        }
        if(this.keyboardController.s.isDown){
            this.blobs[this.blob_number].velY -= 0.05;
        }
        if(this.keyboardController.d.isDown){
            this.blobs[this.blob_number].velX += 0.05;
        }
        if(this.keyboardController.a.isDown){
            this.blobs[this.blob_number].velX -= 0.05;
        }



        
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
}

