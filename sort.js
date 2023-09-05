const THREE = require('three');

// Extract all points from edges. Worst case,
// this should take O(n) time.
const points = [
  new THREE.Vector2(3, 7),
  new THREE.Vector2(2, 2),
  new THREE.Vector2(5, 2),
  new THREE.Vector2(5, 7),
  new THREE.Vector2(1, 5),
];

// Find center point of hull by averaging points
const findCenterPoint = () => {
  const sum = new THREE.Vector2(0, 0);

  points.forEach((point) => {
    sum.add(point);
  });

  return sum.divideScalar(points.length);
};

// Transform hull to be centered at (0,0) by subtracting
// centerpoint from each point in hull. Then
// sort by counterclockwise angle from x-axis using
// Math.atan2
const sort = (center) => {
  return points.sort((a, b) => {
    if (
      Math.atan2(a.y - center.y, a.x - center.x) >
      Math.atan2(b.y - center.y, b.x - center.x)
    ) {
      return 1;
    }

    return -1;
  });
};

const center = findCenterPoint(points);
const sorted = sort(center);

console.log(sorted);
