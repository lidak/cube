import Cube from './Cube';

let cubeElement = document.querySelector('.cube');
let cube = new Cube(cubeElement);

//cube.startShow();

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37:
      cube.yPos -= 4;
      break;
    case 38:
      cube.xPos += 4;
      break;
    case 39:
      cube.yPos += 4;
      break;
    case 40:
      cube.xPos -= 4;
  }
}
