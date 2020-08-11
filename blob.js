
class Blob extends Rigid_body {
    color;  //used to distinguish between plants and creatures for now. Green for plants, red for creatures.
    constructor(posX, posY, radius, color, mass=1){
		super(posX, posY, radius, mass);
        this.color = color;
    }
}

//--------------------------------------------------------------------------------------------------------------------------

class Plant extends Blob{
    grown = 0;
    growth_rate = 0.02; 
    constructor(posX, posY, radius, color, mass=1){
        super(posX, posY, radius, color, mass=1)
    }
    grow(){
        this.grown+=this.growth_rate;
        radius += this.growth_rate;
        if (this.grown >= 1){
            this.growth_rate = 0;
        }
    }
}

class Creature extends Blob{
    energy = 100;
    constructor(posX, posY, radius, color, mass=1){
        super(posX, posY, radius, color, mass=1)
    }
}