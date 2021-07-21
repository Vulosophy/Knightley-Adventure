class Knight{
    constructor(x,y, width, height){
        var options = {
            'density': 1.0,
        }
        this.body = Bodies.rectangle(x,y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();

        
           //if(this.body.position.y>916){
               // Matter.Body.setPosition(this.body, {x: this.body.position.x, y: 915})       }
        
            
    }
    
}