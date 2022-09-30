import Board from './Board.js'
import Ship from './Ship.js'
import Asteroid from './Asteroid.js'

const VH_UNIT = window.innerHeight / 100; 
let SHIP_SPEED = .5
let ASTEROIDS_SPEED = .05
let GAME_SPEED = 3000 // avt cetait 1000


const SHIP_HEIGHT = 5;
const SHIP_WIDTH = 10;

let RANDOM_ROTATION = Math.floor(Math.random() * 180)

let ASTEROIDS_ROTATION = 1;


export default class Game {
  constructor() {
    this.status = "ongoing";
    this.board = new Board(document.querySelector('#board'));
    this.playerShip = new Ship(document.querySelector('#player-ship'))
    this.asteroidCount = 0;
    this.asteroids = []
    window.setInterval(() => {
      this.createAsteroid()
      this.update();
    }, GAME_SPEED - 0.1)

    setInterval(() => {
      this.moveAsteroids()
    }, 10)

    
   
    this.listen();

 
 

    /*
    setInterval(() => {
      let randomHeight = Math.floor(Math.random() * 12) + 3
      this.newAsteroid = this.asteroids.push(new Asteroid(this.createAsteroid(), this.asteroidCount, randomHeight))
      this.asteroids.push(this.newAsteroid)
    
      this.newAsteroid.initialize()
      this.showState()
    }, 10000)
    setInterval(() => {
      this.asteroids.forEach((e) => {
       console.log(e)
      })
    }, 1000)
    */
    
    
  }
  createAsteroid() {
    let randomNumber = (Math.random() * (0.1 - 0.02) + 0.02).toFixed(4)
    let randomHeight = Math.floor(Math.random() * 10) + 2;
    this.asteroidCount += 1
    
    let asteroid = document.createElement("div")
    asteroid.className += `asteroid id-${this.asteroidCount}`
    
    this.board.boardElem.appendChild(asteroid)
    let asteroidDiv = this.board.boardElem.querySelector(`.asteroid.id-${this.asteroidCount}`)
    let newAsteroid = new Asteroid(asteroidDiv, this.asteroidCount, randomHeight, this.asteroids, randomNumber, RANDOM_ROTATION)
    this.asteroids.push(newAsteroid)
   
    //return this.board.querySelectorAll('.asteroid').at(-1)
  }

  moveAsteroids() {
    this.asteroids.forEach((e) => {
      e.y -= e.randomNumber

      
      let res = e.asteroidElem.getBoundingClientRect()
      let ship = this.playerShip.shipElem.getBoundingClientRect()

      // that is not working .. !
      if ((res.x  < ship.x - e.asteroidElem.height&& res.y < ship.y - e.asteroidElem.height)||
        (res.x  > ship.x + e.asteroidElem.height&& res.y > ship.y + e.asteroidElem.height ))  {
          console.log('================================')
          console.log('Alert collision !')
          console.log('================================')
        
        }

      // also rotating them since they are not circles anymore
      //e.asteroidElem.style.setProperty('transform', `rotate(${e.rotation}deg)`)
      //e.rotation+= 1
    })
  }


  update() {
    // removing all elements that went out of screen
    this.asteroids.forEach((e) => {
      if (e.y < -20) {
        e.asteroidElem.remove()
      }

      /*
      if ((res.top < ship.top || res.bottom > ship.bottom && res.left > ship.left || res.right > ship.right) &&
        (res.top > ship.top || res.bottom > ship.bottom && res.left > ship.left || res.right > ship.right)){
        console.log('================================')
        console.log('Alert collision !')
        console.log('================================')
      }
      */

      // en assumant que 80vh & 5vh
      /*
      x = 80
      height = 5
      range = 75 - 85
      y = 50 
      height = 5
      range2 = 45 - 55
      si ship est < 85 && ship > 75
      alors x est triggered
      */


   
    })
  }


  showState() {
    this.asteroids.forEach((e, index) => {
      console.log("================================")
      console.log(`asteroid index : ${index}`)
      console.log(`x: ${e.x}`)
      console.log(`y: ${e.y}`)
      console.log("================================")
    })
  }

  initialize() {
    
  }



  listen() {


    let keys = {}

    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      keys[e.key] = true
      let ship = this.playerShip.shipElem.getBoundingClientRect()
      let board = this.board.boardElem.getBoundingClientRect()

      if (ship.bottom > board.bottom) {
        this.playerShip.x = 60-SHIP_HEIGHT;
      }
      if (ship.top < board.top) {
        this.playerShip.x = 0;
      }
      if (ship.right > board.right) {
        this.playerShip.y = 90-SHIP_WIDTH;
      }
      if (ship.left < board.left) {
        this.playerShip.y = 0;
      }

        // filtering both one case & dual cases key
      if (keys['ArrowDown'] && ship.bottom < board.bottom) 
        this.playerShip.x += SHIP_SPEED
      if (keys['ArrowUp'] && ship.top > board.top )
        this.playerShip.x -= SHIP_SPEED
      if (keys['ArrowRight'] && ship.right < board.right )
        this.playerShip.y += SHIP_SPEED
      if (keys['ArrowLeft']  && ship.left > board.left )
        this.playerShip.y -= SHIP_SPEED
    })
    
    window.addEventListener('keyup', (e) => {
      // tres simple, on reset chaque touche(s) utilisée(s) plus haut
      keys[e.key] = false;
     });

  }

  show() {

  }

  play() {

    setInterval(() => {
      
      let randomHeight = Math.floor(Math.random() * 12) + 3
      let newAsteroid = this.asteroids.push(new Asteroid(this.createAsteroid(), this.asteroidCount, randomHeight))
      this.initialize()
      this.showState()
      setInterval(() => {
        this.asteroids.forEach((e) => {
         e.move()
        })
      }, 1)
    }, 1000)
   
    
    // all asteroids to move

    
   

  }


    

 
      

    
}