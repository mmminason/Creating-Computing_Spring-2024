class ParticleSystem{
  constructor(image){
    this.image = image;
    this.particles = [];
  }
  draw(){
    this.image.loadPixels();
    for(let i = this.particles.length-1; i>=0; i--){
      let p = this.particles[i];

      var pixelIndex = (Math.floPixor)
    }
  }
}