
class Physics{
    blobs = [];
    constructor(){

    }
    addBlob(newBlob){
        this.blobs.push(newBlob);
    }
    run(){
        for(var i=0; i<this.blobs.length;i++){
            const b = this.blobs[i];
            b.posX += b.velX;
            b.posY += b.velY;
        }
    }
}
