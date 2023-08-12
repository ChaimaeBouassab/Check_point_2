function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // Move elements of arr[0:i-1] that are greater than key one position ahead of their current position
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key in its correct position
    arr[j + 1] = key;
  }
}

const inputArray = [64, 34, 25, 12, 22, 11, 90];
insertionSort(inputArray);
console.log("Sorted array:", inputArray);
