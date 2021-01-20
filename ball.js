class Paper
{
constructor(x,y)
{
 var options={
     
      friction:0.5,
      restitution:0.3,
      density:1.2
}

this.body=Bodies.circle(x,y,25,options);
this.radius=25;
World.add(world,this.body);
}
display()
{
    var pos = this.body.position;

//translate(pos.x,pos.y);
fill("red");
ellipseMode(CENTER);
ellipse(pos.x,pos.y,25*2,25*2)
}
}