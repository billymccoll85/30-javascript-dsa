function knapsack(capacity, weights, values, n) {
  const K = [];

  for (let i = 0; i <= n; i++) {
    K[i] = [];
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        K[i][w] = Math.max(
          values[i - 1] + K[i - 1][w - weights[i - 1]],
          K[i - 1][w]
        );
      } else {
        K[i][w] = K[i - 1][w];
      }
    }
  }

  return K[n][capacity];
}