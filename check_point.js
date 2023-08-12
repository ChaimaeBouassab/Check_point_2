function areVectorsOrthogonal(v1, v2) {
    if (v1.length !== v2.length) {
      throw new Error("Vector dimensions do not match.");
    }

    let dotResult = 0;
    for (let i = 0; i < v1.length; i++) {
      dotResult += v1[i] * v2[i];
    }

    const epsilon = 1e-10;
    return Math.abs(dotResult) < epsilon;
  }

  function testVectorsForOrthogonality(vectorPairs) {
    for (const [v1, v2] of vectorPairs) {
      const isOrthogonal = areVectorsOrthogonal(v1, v2);
      console.log(
        `Vectors ${v1} and ${v2} are ${isOrthogonal ? "orthogonal" : "not orthogonal"}.`
      );
    }
  }
