class Goomba{
    constructor(x,y){
        var options = {
            'density':1.0,
            'friction':0.2
        }
        this.body = Bodies.rectangle(x,y,25, 25, options);
        this.image =  loadImage('goomba.png')
        this.width = 25;
        this.height = 25;
        this.visibility = 255;
        World.add(world, this.body);
    }
    destroy(){ 
        World.remove(world, this.body) 
        console.log('destroy works')
    }
    display(){
            if(this.body != null){
            push();
            console.log('if works')
            imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
         }
         else{
            push();
            console.log('else works')
            this.visibility = this.visibility - 5
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
         }
         
    }
    

}