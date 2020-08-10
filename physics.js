
class Physics{
    rigid_bodies = [];
    width;
    heigth;

    constructor(heigth, width){
        this.width=width;
        this.heigth=heigth;
    }

    addBlob(newRigid){
        this.rigid_bodies.push(newRigid);
    }

    positionUpdater(){
        for(var i=0; i<this.rigid_bodies.length;i++){
            const b = this.rigid_bodies[i];
            b.posX += b.velX;
            b.posY += b.velY;
        }
    }

    wallCollision(){

        let wallDampener = 1;

        for(let i = 0; i<this.rigid_bodies.length; i++){
            let rigid_body = this.rigid_bodies[i];


            //Collision right wall
            if ((rigid_body.posX+rigid_body.radius)>=(this.width)){     
                let temp = Math.abs(rigid_body.velX);
                rigid_body.velX = -temp * wallDampener;
                //console.log("Collision right wall")
            }

            //Collision left wall
            if ((rigid_body.posX-rigid_body.radius)<=0){               
                let temp = Math.abs(rigid_body.velX);
                rigid_body.velX = temp * wallDampener;
                //console.log("Collision left wall")
            }

            //Collision roof
            if ((rigid_body.posY+rigid_body.radius)>=(this.heigth)){    
                let temp = Math.abs(rigid_body.velY);
                rigid_body.velY = -temp * wallDampener;
                //console.log("Collision roof!")
            }

            //Collision floor
            if ((rigid_body.posY-rigid_body.radius)<=0){                
                let temp = Math.abs(rigid_body.velY);
                rigid_body.velY = temp * wallDampener;
                //console.log("Collision floor")
            }


        }

    }

    blob_collision(){

        let collision_dampener = 1;
        let body1;
        let body2;
        for(let i = 0; i<this.rigid_bodies.length; i++){
            body1 = this.rigid_bodies[i] 
            for(let j = i + 1; j<this.rigid_bodies.length; j++){
                body2 = this.rigid_bodies[j];
                if(this.collision(body1, body2)){
                    // same mass => simply swap velocities
                    let temp = body1.velX;
                    body1.velX = body2.velX * collision_dampener;
                    body2.velX = temp * collision_dampener;

                    temp = body1.velY;
                    body1.velY = body2.velY * collision_dampener;
                    body2.velY = temp * collision_dampener;
                    

                }
            }
        }
    }

    collision(body1, body2){
        if(this.distance(body1, body2) <= body1.radius + body2.radius){
            return true;
        }
        return false;
    }

    distance(body1, body2){
        return Math.sqrt(Math.abs(body1.posX - body2.posX)**2 + Math.abs(body1.posY - body2.posY)**2)
    }

    
    run(){  //Timestep
        this.positionUpdater();
        this.wallCollision();
        this.blob_collision();
    }
}
