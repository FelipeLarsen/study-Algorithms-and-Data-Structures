// Esse algoritmo modifica a busca binária para resolver problemas específicos.

function modifiedBinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Retorna o índice do alvo
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Não encontrado
}

// Exemplo de uso
const arr6 = [1, 2, 3, 4, 5];
const target2 = 3;
console.log(modifiedBinarySearch(arr6, target2)); // 2
