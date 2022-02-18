import Board from './Board.js'
import Ship from './Ship.js'
import Asteroid from './Asteroid.js'
let SHIP_SPEED = .25
let ASTEROIDS_SPEED = .05

const SHIP_HEIGHT = 5;
const SHIP_WIDTH = 10;


export default class Game {
  constructor() {
    this.status = "ongoing";
    this.board = new Board(document.querySelector('#board'));
    this.playerShip = new Ship(document.querySelector('#player-ship'))
    this.asteroidCount = 0;
    this.asteroids = []
    setInterval(() => {
      this.createAsteroid()
    }, 300)
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
    let randomHeight = Math.floor(Math.random() * 10) + 2;
    this.asteroidCount += 1
    
    let asteroid = document.createElement("div")
    asteroid.className += `asteroid id-${this.asteroidCount}`
    this.board.boardElem.appendChild(asteroid)
    let asteroidDiv = this.board.boardElem.querySelector(`.asteroid.id-${this.asteroidCount}`)
    let newAsteroid = new Asteroid(asteroidDiv, this.asteroidCount, randomHeight, this.asteroids)
    this.asteroids.push(newAsteroid)
   
    //return this.board.querySelectorAll('.asteroid').at(-1)
  }

  moveAsteroids() {
    this.asteroids.forEach((e) => {
      e.y -= ASTEROIDS_SPEED
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
      keys[e.key] = true
      let ship = this.playerShip.shipElem.getBoundingClientRect()
      let board = this.board.boardElem.getBoundingClientRect()

      console.log()

      console.log(ship.top)
      console.log(board.right)
      console.log(ship.right)

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
     
      console.log(this.playerShip.x)
      console.log(this.playerShip.y)

        // filtering both one case & dual cases key
      if (keys['ArrowDown'] && ship.bottom < board.bottom) {
        console.log('pressing arrowdown continiously')
        this.playerShip.x += SHIP_SPEED
      }
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