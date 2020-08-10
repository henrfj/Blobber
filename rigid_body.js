

class Rigid_body{
    posX;
    posY;
    velX = 0;
    velY = 0;
	radius;
	mass;
    constructor(posX, posY, radius, mass){
        this.radius = radius;
        this.posX = posX;
		this.posY = posY;
		this.mass = mass;
    }
}
