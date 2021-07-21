class Koopa{
    constructor(x,y){
        var options = {
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,35, 35, options);
        this.width = 35
        this.height = 35;
        World.add(world, this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
    destroy(){
        if(knight.body.position.x - this.body.position.x <50 && this.body.position.x - knight.body.position.x <50){
           World.remove(world, this.body) 
        }
   }
}