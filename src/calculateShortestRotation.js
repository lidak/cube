export default (currentPosition, neededPosition) => {
  return {
    x: correctAngle(currentPosition.x, neededPosition.x),
    y: correctAngle(currentPosition.y, neededPosition.y)
  };
}

function correctAngle (current, needed) {
  let diff = needed - current;

  needed = current + reduceToRelative(diff);

  return needed;
}

function reduceToRelative (angleValue) {
  if (Math.abs(angleValue) > 360) {
    angleValue %= 360;
  }

  if (Math.abs(angleValue) > 180) {
    angleValue = -((360 - Math.abs(angleValue)) * Math.sign(angleValue));
  }

  return angleValue;
}
