class Paperclass{

    constructor(x, y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:0.5
        }

        this.body=Bodies.circle(x, y,radius/2,options);
        this.radius=radius;
         this.ball=loadImage("paper.png");
         
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.ball,0,0,this.radius,this.radius);
      
    }

}