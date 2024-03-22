class Walls{
    constructor(world){
        this.world = world;
        this.thickness = 30;
    }

    addSideWalls(){
        const leftSideWall = new Rect(this.world, 
            createVector(0, height/2),
            createVector(this.thickness, height),
            { isStatic: true }
            );
        const rightSideWall = new Rect( this.world,
            createVector(widht, height/2),
            createVector(this.thickness, height),
            { isStatic : true });

        this.shapes.push(leftSideWall, rightSideWall);
    }
    display(){
        this.shapes.forEach(s => s.display());
    }
}