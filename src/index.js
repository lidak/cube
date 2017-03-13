import Cube from './Cube';

let cubeElement = document.querySelector('.cube');
let cube = new Cube(cubeElement);

cube.startShow();

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37:
      cube.rotateY -= 4;
      break;
    case 38:
      cube.rotateX += 4;
      break;
    case 39:
      cube.rotateY += 4;
      break;
    case 40:
      cube.rotateX -= 4;
  }
}

cubeElement.onmouseover = () => {
  cube.stopShow();
}

cubeElement.onmouseout = () => {
  cube.startShow();
}
