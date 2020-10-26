class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibilty = 255;
    }
  display(){

      if(this.body.speed <3){
        var angle = this.body.angle;
        var pos =this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(102, 204, 255);
        stroke("black");
        strokeWeight(2)
        rect(0, 0, this.width, this.height);
        pop();

      }else {
       World.remove(world, this.body);
       push();
       this.Visibilty = this.Visibilty - 5;
       //tint(255, this.Visibilty);
      
      pop();
    }
  }

    display2(){
      if(this.body.speed <3){
        var angle = this.body.angle;
        var pos =this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255, 204, 204);
        stroke("black");
        strokeWeight(2)
        rect(0, 0, this.width, this.height);
        pop();

      }else {
       World.remove(world, this.body);
       push();
       this.Visibilty = this.Visibilty - 5;
       //tint(255, this.Visibilty);
      
      pop();
    }
    }
    
      display3(){
        if(this.body.speed <3){
          var angle = this.body.angle;
          var pos =this.body.position;
  
          push();
          translate(pos.x, pos.y);
          rectMode(CENTER);
          fill(0, 255, 255);
          stroke("black");
          strokeWeight(2)
          rect(0, 0, this.width, this.height);
          pop();
  
        }else {
         World.remove(world, this.body);
         push();
         this.Visibilty = this.Visibilty - 5;
         //tint(255, this.Visibilty);
        
        pop();
      } 
    }
      
      display4(){
        if(this.body.speed <3){
          var angle = this.body.angle;
          var pos =this.body.position;
  
          push();
          translate(pos.x, pos.y);
          rectMode(CENTER);
          fill(95,95,95);
          stroke("black");
          strokeWeight(2)
          rect(0, 0, this.width, this.height);
          pop();
  
        }else {
         World.remove(world, this.body);
         push();
         this.Visibilty = this.Visibilty - 5;
         //tint(255, this.Visibilty);
        
        pop();
      } 
    }
      
  };