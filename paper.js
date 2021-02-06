class Ball{

    constructor(){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }

        this.image=loadImage("paper.png");
        this.body=Bodies.circle(90,50,50,options);
        World.add(world,this.body);
       
    }

display(){

var pos=this.body.position;

push()
translate(pos.x,pos.y)
ellipseMode(CENTER);
strokeWeight(4);
stroke("white")
fill("white");
ellipse(0,0,70);
image(this.image,-60,-60,120,120);
imageMode(CENTER);

pop()

}
}