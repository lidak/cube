export default (currentPosition, neededPosition) => {
  let xDiff = neededPosition - currentPosition;

  if (xDiff > 180) {
    neededPosition.x = neededPosition.x + xDiff;
  }
  return neededPosition;
}
