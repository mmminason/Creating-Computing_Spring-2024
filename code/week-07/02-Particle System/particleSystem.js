class ParticleSystem{
    constructor(){
        this.particles = [];
        this.gravity = createVector(0, 0.04);
    }
    draw(){
        for(let i = this.particles.length-1; i >=0; i--){
            let p = this.particles[i];
            p.applyForce(this.gravity);
            p.update();
            p.display();

            if(p.isDead){
                this.particles.splice(i,1);
            }
        }
    }

    addParticles(pos, numOfParticles){
        for(let i =0; i < numOfParticles; i++){
            let randomSize = random(3,6);
            let particle = new Particle(pos, randomSize, random(360));
            let randomForce = p5.Vector.random2D().mult(random(2));
            particle.applyForce(randomForce);
            this.particles.push(particle);
        }
    }
}