function fractionalKnapsack(capacity, weights, values) {
  const items = [];

  for (let i = 0; i < weights.length; i++) {
    items.push({
      weight: weights[i],
      value: values[i],
      ratio: values[i] / weights[i],
    });
  }

  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;

  for (let i = 0; i < items.length; i++) {
    if (capacity === 0) {
      break;
    }

    const item = items[i];

    if (item.weight <= capacity) {
      totalValue += item.value;
      capacity -= item.weight;
    } else {
      totalValue += item.ratio * capacity;
      capacity = 0;
    }
  }

  return totalValue;
}