export function factorial(n: number) {
  let result = 1;

  for (let i = 2; i <= n; i++) result *= i;

  return result;
}

// A(n,k) = n*(n-1)*...*(n-k+1)
export function arrangement(n: number, k: number) {
  let result = 1;

  for (let i = n; i > n - k; i--) result *= i;

  return result;
}

// P(n; n1,n2,...) = n! / (n1!*n2!*...)
export function permutationWithRepetition(n: number, counts: number[]) {
  const denom = counts.reduce((acc, c) => acc * factorial(c), 1);

  return factorial(n) / denom;
}
