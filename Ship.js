let SPEED = .1

export default class Ship{
  constructor(shipElem) {
    this.shipElem = shipElem;

  }

  get x() {
    return parseFloat(getComputedStyle(this.shipElem).getPropertyValue('--x'))
  }
  get y() {
    return parseFloat(getComputedStyle(this.shipElem).getPropertyValue('--y'))
  }

  set x(value) {
    this.shipElem.style.setProperty('--x', value)
  }
  set y(value) {
    this.shipElem.style.setProperty('--y', value)
  }





}