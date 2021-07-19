class Snow {
    constructor(x,y,r){
        var options = {
            friction:1,
            density:1,
            //isStatic: true
        }
     this.x = x;
     this.y = y;
     this.r = r;
     this.body = Bodies.circle(this.x,this.y,this.r,options);
     this.image = loadImage("snow5.webp");
     World.add(world,this.body);
    }

    display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     imageMode(CENTER);
     image(this.image,this.x,this.y,this.r,this.r);
     pop();
    }
}