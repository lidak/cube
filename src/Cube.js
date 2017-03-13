export default function Cube (cubeElement) {
  let rotateX = 0,
    rotateY = 0;

  Object.defineProperty(this, 'rotateX', {
    get: () => {
      return rotateX;
    },
    set: (value) => {
      rotateX = value;
      this.resetCubeStyles();
    }
  });

  Object.defineProperty(this, 'rotateY', {
    get: () => {
      return rotateY;
    },
    set: (value) => {
      rotateY = value;
      this.resetCubeStyles();
    }
  });

  this.resetCubeStyles = () => {
    cubeElement.style.transform =
      `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  }

  this.rotateTo = (x, y) => {
    this.rotateX = x;
    this.rotateY = y;
  }

  this.rotateRandom = () => {
    let randomX = (Math.random() - 1) * 360;
    let randomY = (Math.random() - 1) * 360;

    this.rotateTo(randomX, randomY);
  }

  this.startShow = () => {
    this.showInterval = setInterval(() => {
      this.rotateRandom();
    }, 3000);
  }

  this.stopShow = () => {
    clearInterval(this.showInterval);
  }
}
