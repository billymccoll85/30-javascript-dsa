function coinChange(amount, coins) {
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      count++;
    }
  }

  return count;
}