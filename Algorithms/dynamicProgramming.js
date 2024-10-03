// Esse algoritmo resolve problemas otimizando soluções de subproblemas.

function fibonacci(n) {
  const memo = {};
  const fib = (n) => {
    if (n <= 1) return n;
    if (memo[n]) return memo[n]; // Retorna se já calculado
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
  return fib(n);
}

// Exemplo de uso
const n = 10;
console.log(fibonacci(n)); // 55
