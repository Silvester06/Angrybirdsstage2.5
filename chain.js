class Chain{
    constructor(bodyA,bodyB){
    
        var options = {
            lenght:10,
            stiffness:0.05,
            bodyA:bodyA,
            bodyB:bodyB

        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        strokeWeight(4)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
       
    }

}