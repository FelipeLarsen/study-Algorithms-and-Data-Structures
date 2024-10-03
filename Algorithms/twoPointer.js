// O algoritmo de Two Pointer é usado para resolver problemas de busca 
// e manipulação em arrays, frequentemente em problemas de soma.

function twoPointer(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null; // Se não encontrar
}

// Exemplo de uso
const arr2 = [1, 2, 3, 4, 6];
const target = 6;
console.log(twoPointer(arr2, target)); // [2, 4]
