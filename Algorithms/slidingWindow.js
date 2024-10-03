// O algoritmo de Sliding Window é útil para resolver 
// problemas que envolvem subarrays ou substrings.


function maxSubArraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Calcular a soma da primeira janela
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Deslocar a janela
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // Adiciona o novo elemento e remove o primeiro elemento da janela
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Exemplo de uso
const arr3 = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSubArraySum(arr3, k)); // 9
