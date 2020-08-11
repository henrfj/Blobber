
// This is the first file to run.
window.onload = function(){
    let canvas = this.document.getElementById("canvas");
    
    window.game = new Game(canvas);
    window.game.keyboardlistenerObject = this.document;
    window.game.start();
}
