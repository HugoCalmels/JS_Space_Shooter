export default class Asteroid {
  constructor(asteroidElem, index, height, asteroids) {
    this.asteroidElem = asteroidElem;
    this.index = index;
    this.height = height;
    this.asteroids = asteroids;
    this.initialize()


    this.x2 = 85;


  }
  show() {
    console.log("================================")
    console.log(this.asteroidElem)
    console.log("================================")
  }


  get x() {
    return getComputedStyle(this.asteroidElem).getPropertyValue('--x')
  }

  set x(value) {
    return this.asteroidElem.style.setProperty('--x', value)
  }


  get y() {
    return getComputedStyle(this.asteroidElem).getPropertyValue('--y')
  }


  set y(value) {
    return this.asteroidElem.style.setProperty('--y', value)
  }

  initialize(array) {
    let randomNumber = Math.floor(Math.random() * 50);
    // setting random size ( height )

  


      //if (e.x >= randomNumber + 10 && e.x <= randomNumber - 10) {
    console.log('========================')
    console.log(randomNumber)
    console.log(this.asteroids[this.asteroids.length - 1])
    console.log('========================')
    



    if (this.asteroids.length < 2) {
      this.asteroidElem.style.setProperty('--height', this.height)
      this.asteroidElem.style.setProperty('--y', 85)
      this.asteroidElem.style.setProperty('--x', randomNumber)
    }else if ( (randomNumber  < this.asteroids[this.asteroids.length - 1].x+10)&&(randomNumber  > this.asteroids[this.asteroids.length - 1].x-10 )){
        this.asteroidElem.style.setProperty('--height', this.height)
          this.asteroidElem.style.setProperty('--y', 85)
          this.asteroidElem.style.setProperty('--x', randomNumber)
    }
     // } 
    this.asteroids.forEach((e) => { 
      //console.log(`x ${ e.x }`)
      //console.log(`random number${randomNumber}`)
      //console.log(this.asteroids[this.asteroids.length - 1])
    })
 
  }

  startMoving() {
    
  }
  

  move() {

    let randomNumber =(Math.random() * (0.03 - 0.002) + 0.002).toFixed(4)

      this.y -= randomNumber

  }
}