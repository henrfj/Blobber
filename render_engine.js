

class RenderEngine{
    draw;
    blobs = [];

    constructor(){
        this.draw = new Render();
    }
    setCanvas(canvas){
        this.draw.setCanvas(canvas);
    }
    addBlob(newBlob){
        this.blobs.push(newBlob);
    }
    render(){
        this.draw.clear();
        for(var i=0; i<this.blobs.length;i++){
            this.draw.circle(this.blobs[i].rigid_body.posX, this.blobs[i].rigid_body.posY, this.blobs[i].rigid_body.radius, this.blobs[i].color);
        }
    }
}

