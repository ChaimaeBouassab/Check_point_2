// Function to calculate the dot product of two vectors
function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
      throw new Error("Vectors must have the same length.");
    }

    let result = 0;
    for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }

    return result;
  }

  // Function to check if two vectors are orthogonal
  function areOrthogonal(v1, v2) {
    const dotProduct = dot_product(v1, v2);
    return dotProduct === 0;
  }

  // Example usage:
  const vectors = [
    [1, 2, 5],
    [4, 5, 6],
    [-1, -2, 1],
  ];

  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      const v1 = vectors[i];
      const v2 = vectors[j];
      const isOrthogonal = areOrthogonal(v1, v2);
      console.log(`Vectors [${v1}] and [${v2}] are orthogonal: ${isOrthogonal}`);
    }
  }
