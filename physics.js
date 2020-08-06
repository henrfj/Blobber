
class Physics{
    rigid_bodies = [];
    constructor(){

    }
    addBlob(newRigid){
        this.rigid_bodies.push(newRigid);
    }
    run(){
        for(var i=0; i<this.rigid_bodies.length;i++){
            const b = this.rigid_bodies[i];
            b.posX += b.velX;
            b.posY += b.velY;
        }
    }
}
