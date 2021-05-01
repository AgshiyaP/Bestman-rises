class Batman {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.batmanImg = loadImage("Walking Frame/batman.png");    
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if(frameCount >= 200){
            image(this.batmanImg,pos.x,pos.y+70,200+300)
            }
        image(this.batmanImg,pos.x,pos.y+70,200+300)
      
       
    }
}