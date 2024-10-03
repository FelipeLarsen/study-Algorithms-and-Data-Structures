// Esse algoritmo encontra os k maiores elementos em um array.

function topKElements(arr, k) {
  return arr.sort((a, b) => b - a).slice(0, k); // Ordena e corta os primeiros k
}

// Exemplo de uso
const arr4 = [3, 1, 5, 12, 2];
const k = 3;
console.log(topKElements(arr4, k)); // [12, 5, 3]
