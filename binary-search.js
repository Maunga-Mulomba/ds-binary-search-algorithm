function linearSearch(arr, target) {
  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

  // Find the midpoint between high and low indices

  // Compare the target value to the midpoint value

  // If the target equals the midpoint...
  // Return the midpoint index
  // If the target is higher than the midpoint...
  // Move the low pointer to midpoint + 1
  // If the target is less than the midpoint...
  // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

  let lowPointer = arr[0];
  let highPointer = arr.length - 1;

  while (lowPointer <= highPointer) {
    const middleIndex = Math.floor((highPointer + lowPointer) / 2);

    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    if (arr[middleIndex] < target) {
      lowPointer = middleIndex + 1;
    } else if (arr[middleIndex] > target) {
      highPointer = middleIndex - 1;
    }
  }

  return -1;
}

module.exports = [linearSearch, binarySearch];
