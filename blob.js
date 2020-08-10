
class Blob extends Rigid_body {
    color;  //used to distinguish between plants and creatures for now. Green for plants, red for creatures.
    rigid_body;
    constructor(posX, posY, radius, color, mass=1){
		super(posX, posY, radius, mass);
        this.color = color;
    }
}

//--------------------------------------------------------------------------------------------------------------------------

class Plant{
    blob;
    reproduction_rate = 0.8;
    Nutrition_value;
    Growth_rate = 0.5; //Rate at which a plant reaches maturity, at what point it wil become more nutritient and grow bigger.
    Growth = 0;
    constructor(){
        blob = new Blob(color='green', radius=7);
    }
}

class Creature{
    blob;
    energy_level = 100;
    constructor(){
        blob = new Blob(color='red', radius=16);
    }
}