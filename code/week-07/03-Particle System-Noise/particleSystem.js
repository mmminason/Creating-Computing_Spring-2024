class ParticleSystem{
    constructor(){
        this.particles = [];
        this.gravity = createVector(0, 0.08);
    }
    draw(){
        for (let i = this.particles.length-1; i>=0; i--){
            let p = this.particles[i];
            p.update();
            p.display();

            for(let j = i-1; j>=0; j--){
                let op = this.particles[j];
                let d = p.loc.dist(op.loc);
                if(d < p.size){
                    let force = p5.Vector.sub(p.loc, op.loc).mult(0.025);
                    p.applyForce(force);
                    op.applyForce(force.mult(-1));
                }
            }

            if(p.isDead){
                this.particles.splice(i,1);
            }
            
        }
    }

    addParticles(pos, force, numOfParticles){
        for(let i =0; i<numOfParticles; i++){
            let randomSize = random(12,20);
            let particle = new Particle(pos, randomSize, random(360));
            let randomX = cos(random(0, PI*2))*random(2);
            let randomY = sin(random(0, PI*2))*random(2);
            let randomForce = createVector(randomX, randomY).mult(0.5);
            force.add(randomForce);
            particle.applyForce(force);
            this.particles.push(particle);
        }
    }
}