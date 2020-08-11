
class Physics{
    rigid_bodies = [];
    width;
    heigth;

    constructor(heigth, width){
        this.width=width;
        this.heigth=heigth;
    }

    addBody(newRigid){
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
            if (
				rigid_body.posX+rigid_body.radius >= this.width &&
				rigid_body.velX > 0
			){
                rigid_body.velX = -rigid_body.velX * wallDampener;
                //console.log("Collision right wall")
            }

            //Collision left wall
            if (
				rigid_body.posX-rigid_body.radius <= 0 &&
				rigid_body.velX < 0
			){
                rigid_body.velX = -rigid_body.velX * wallDampener;
                //console.log("Collision left wall")
            }

            //Collision roof
            if (
				rigid_body.posY+rigid_body.radius >= this.heigth &&
				rigid_body.velY > 0
			){
                rigid_body.velY = -rigid_body.velY * wallDampener;
                //console.log("Collision roof!")
            }

            //Collision floor
            if (
				rigid_body.posY-rigid_body.radius <= 0 &&
				rigid_body.velY < 0
			){
                rigid_body.velY = -rigid_body.velY * wallDampener;
                //console.log("Collision floor")
            }


        }

    }

    bodyCollision(){

        let collision_dampener = 1;
        let body1;
        let body2;
        for(let i = 0; i<this.rigid_bodies.length; i++){
            body1 = this.rigid_bodies[i] 
            for(let j = i + 1; j<this.rigid_bodies.length; j++){
                body2 = this.rigid_bodies[j];
                if(this.collision(body1, body2)){
               
					let p1 = new Vec(body1.posX, body1.posY);
					let p2 = new Vec(body2.posX, body2.posY);
					
					let v1 = new Vec(body1.velX, body1.velY);
					let v2 = new Vec(body2.velX, body2.velY);

					let normal = Vec.sub(p2, p1);
					normal = Vec.div(normal, normal.mag());

					let rel_vel = Vec.dot(Vec.sub(v1, v2), normal);

					if (rel_vel > 0){
						let collision_mass = 1/(1/body1.mass+1/body2.mass);
						let impulse = rel_vel * collision_mass*2;
						let impulse_vec = Vec.scale(normal, impulse);
						v1 = Vec.sub(v1, Vec.div(impulse_vec, body1.mass));
						v2 = Vec.add(v2, Vec.div(impulse_vec, body2.mass));
						
						body1.velX = v1.x;
						body1.velY = v1.y;
						body2.velX = v2.x;
						body2.velY = v2.y;
					}




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
        //between center of mass
        return Math.sqrt(Math.abs(body1.posX - body2.posX)**2 + Math.abs(body1.posY - body2.posY)**2);
    }

    airResistance(){
        for(let i = 0; i < this.rigid_bodies.length; i++){
            this.rigid_bodies[i].velX *= 0.99;
            this.rigid_bodies[i].velY *= 0.99;

        }
    }

    
    run(){  //Timestep
        this.positionUpdater();
        this.wallCollision();
        this.bodyCollision();
        this.airResistance();
        


    }
}
