// O algoritmo de Prefix Sum calcula a soma acumulada de um array, 
// permitindo consultas rápidas de soma em intervalos.

function prefixSum(arr) {
  const prefix = [0]; // Inicializa com 0 para facilitar o cálculo
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i]; // Soma acumulada
  }
  return prefix;
}

// Exemplo de uso
const arr = [1, 2, 3, 4];
const ps = prefixSum(arr); // [0, 1, 3, 6, 10]
console.log(ps); 
