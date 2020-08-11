

class Game{
    keyboardController;
    canvas;
    renderEngine;
    creatures = [];
    plants = [];
    number = 9;

    constructor(canvas){
        this.renderEngine = new RenderEngine();
        this.setCanvas(canvas);
        this.keyboardController = new KeyboardControl();
        console.log("Height:", this.canvas.height, "Width:", this.canvas.width);
        console.log("Math: ", 2**4);
        this.physicsEngine = new Physics(this.canvas.height, this.canvas.width);

        // Create some Creatures along the edge
        for(let i=0; i < 20;i++){
            let pointA = new Vec(Math.random()-0.5,Math.random()-0.5)
            let pointB = Vec.div(pointA, Math.max(Math.abs(pointA.x), Math.abs(pointA.y)));
            console.log(i, ":", pointB);

            let radius = (Math.random()*2)+2;
            let mass = radius**2;

            pointB.x = radius + (pointB.x + 1)*(this.canvas.width/2 - radius);
            pointB.y = radius + (pointB.y + 1)*(this.canvas.height/2 - radius);

            this.createCreature(pointB.x, pointB.y, radius, 'red', mass);
        }

        // Create some plants around the board

        for(let i = 0; i < 200; i++){
            let radius = (Math.random()*3)+3;
            let mass = radius**2;

            let pointX = radius + Math.random()*(this.canvas.width - radius);
            let pointY = radius + Math.random()*(this.canvas.height - radius);
            this.createPlant(pointX, pointY, radius, 'green', mass);

        }
		
		this.physicsEngine.addOnCollisionEventListener(function(bodyA, bodyB){
			console.log("!!!!");
		}); // Tell the physics engine to call the ananomyouseus function every time two rigid bodies collide, namely bodyA and bodyB.


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

    createCreature(x=100, y=100, r=10, c='red', m=1){
        let newCreature = new Creature(x, y, r, c, m)
        this.creatures.push(newCreature);
        this.physicsEngine.addBody(newCreature);
        this.renderEngine.addBlob(newCreature);
    }

    createPlant(x=100, y=100, r=5, c='green', m=1){
        let newPlant = new Plant(x, y, r, c, m)
        this.plants.push(newPlant);
        this.physicsEngine.addBody(newPlant);
        this.renderEngine.addBlob(newPlant);
    }

    gameLoop(){
        this.keyboardController.update();

        // Do physics calculations.
        this.physicsEngine.run();

        // Render all creatures.
        this.renderEngine.render();



        if(this.keyboardController.q.isDown){
            if(this.number<this.creatures.length-1){
                this.number += 1;
            } else {
                this.number = 0;
            }
                
        }
        if(this.keyboardController.w.isDown){
            this.creatures[this.number].velY += 0.05;
        }
        if(this.keyboardController.s.isDown){
            this.creatures[this.number].velY -= 0.05;
        }
        if(this.keyboardController.d.isDown){
            this.creatures[this.number].velX += 0.05;
        }
        if(this.keyboardController.a.isDown){
            this.creatures[this.number].velX -= 0.05;
        }

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
}

