export default class Asteroid {
  constructor(asteroidElem, index, height, asteroids, randomNumber, RANDOM_ROTATION) {
    this.asteroidElem = asteroidElem;
    this.index = index;
    this.height = height;
    this.randomNumber = randomNumber;
    this.asteroids = asteroids;
    this.rotation = RANDOM_ROTATION;
    this.initialize()

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

  initialize() {
    let randomNumber = Math.floor(Math.random() * 54) +3;
    // setting random size ( height )

    //if (e.x >= randomNumber + 10 && e.x <= randomNumber - 10) {

    //console.log(randomNumber)
    //console.log(this.asteroids[this.asteroids.length - 1])

    //if (this.asteroids.length < 2) {
      this.asteroidElem.style.setProperty('--height', this.height)
      this.asteroidElem.style.setProperty('--y', 85)
      this.asteroidElem.style.setProperty('--x', randomNumber)
    //}else if ( (randomNumber  < this.asteroids[this.asteroids.length - 1].x+10)&&(randomNumber  > this.asteroids[this.asteroids.length - 1].x-10 )){
  
    //}
     // } 
    this.asteroids.forEach((e) => { 
      //console.log(`x ${ e.x }`)
      //console.log(`random number${randomNumber}`)
      //console.log(this.asteroids[this.asteroids.length - 1])
    })
 
  }

  update() {
    this.asteroids.forEach((e) => {
      console.log(e.y)
    })

  }

  startMoving() {
    
  }
  

  move() {

    let randomNumber =(Math.random() * (0.03 - 0.002) + 0.002).toFixed(4)

      this.y -= randomNumber

  }
}