import getShortestCoords from './calculateShortestRotation';

export default class Cube {
  constructor (cubeElement) {
    this.cubeElement = cubeElement;
    this._y = 0;
    this._x = 0;

    this.sideDictionary = ['front', 'back', 'right', 'left', 'top', 'bottom'];

    Array.prototype.forEach.call(cubeElement.children, (side, index) => {
      side.onclick = () => {
        this.sideClicked(index);
      }
    });

    this.cubeElement.onmouseover = () => {
      this.stopShow();
    }

    this.cubeElement.onmouseout = () => {
      this.startShow();
    }
  }

  set xPos (value) {
    this._x = value;
    this.setElementStyles();
  }

  set yPos (value) {
    this._y = value;
    this.setElementStyles();
  }

  get xPos () {
    return this._x;
  }

  get yPos () {
    return this._y;
  }

  setElementStyles () {
    this.cubeElement.style.transform =
      `rotateX(${this._x}deg) rotateY(${this._y}deg)`;
  }

  rotateTo (x, y) {
    this.xPos = x;
    this.yPos = y;
  }

  rotateRandom () {
    let randomX = (Math.random() - 1) * 360;
    let randomY = (Math.random() - 1) * 360;

    this.rotateTo(randomX, randomY);
  }

  startShow () {
    this.showInterval = setInterval(() => {
      this.rotateRandom();
    }, 3000);
  }

  stopShow () {
   clearInterval(this.showInterval);
  }

  focusSide (side) {
    let newX, newY;

    switch (side) {
      case 'top':
        newX = -90; newY = 0;
        break;
      case 'bottom':
        newX = 90; newY = 0;
        break;
      case 'left':
        newX = 0; newY = 90;
        break;
      case 'right':
        newX = 0; newY = -90;
        break;
      case 'back':
        newX = 0; newY = -180;
        break;
      default:
        newX = 0; newY = 0;
    }

    let newCoords = getShortestCoords(
      {x: this._x, y: this._y},
      {x: newX, y: newY}
    );

    this.rotateTo(newCoords.x, newCoords.y);
  }

  sideClicked (index) {
    this.focusSide(this.sideDictionary[index]);
  }
}
