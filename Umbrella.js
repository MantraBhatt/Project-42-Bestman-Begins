class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        bestman_img = loadImage("bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+42.9,300,300);
        
        

        if(frameCount%80===0){
            bestman =  createSprite(210,490,30,30);
            switch(rand){
                case 1: bestman.addImage(bestman_img);
                break;
                case 2: bestman.addImage(bestman_img);
                break; 
                case 3: bestman.addImage(bestman_img);
                break;
                case 4: bestman.addImage(bestman_img);
                break;
                default: break;
            }
            bestman.scale = 0.25;
                

        }
        
        
    }
}