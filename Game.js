import Board from './Board.js'
import Ship from './Ship.js'
import Asteroid from './Asteroid.js'
let SPEED = .5
export default class Game {
  constructor() {
    this.status = "ongoing";
    this.board = new Board(document.querySelector('#board'));
    this.playerShip = new Ship(document.querySelector('#player-ship'))
    this.asteroidCount = 0;
    this.asteroids = []
    this.asteroids.push(new Asteroid(this.createAsteroid()))
    this.listen()
    this.play()
  }
  createAsteroid() {
    this.asteroidCount += 1
    let asteroid = document.createElement("div")
    asteroid.className += `asteroid id-${this.asteroidCount}`
 
    console.log(this.board)
    this.board.boardElem.appendChild(asteroid)
    console.log(this.board.boardElem.querySelector(`.asteroid.id-${this.asteroidCount}`))
    //return this.board.querySelectorAll('.asteroid').at(-1)
  }

  initialize() {
    
  }



  listen() {



    document.addEventListener('keydown', (e) => {
      let ship = this.playerShip.shipElem.getBoundingClientRect()
    let board = this.board.boardElem.getBoundingClientRect()
      console.log('test')
      console.log(ship.bottom)
      console.log(board.bottom)
        if (e.key === 'ArrowDown' && ship.bottom < board.bottom )
          this.playerShip.x += SPEED
        if (e.key === 'ArrowUp'&& ship.top > board.top )
          this.playerShip.x -= SPEED
        if (e.key === 'ArrowRight'&& ship.right < board.right )
          this.playerShip.y += SPEED
        if (e.key === 'ArrowLeft' && ship.left > board.left )
          this.playerShip.y -= SPEED
      })
    

    
  }

  show() {

  }

  play() {

 
  }
 
      

    
}