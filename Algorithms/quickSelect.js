// Esse algoritmo é uma versão otimizada do Quick Sort, usada para encontrar o k - ésimo menor elemento.

function quickSelect(arr, k) {
  const partition = (left, right, pivotIndex) => {
    const pivotValue = arr[pivotIndex];
    let newPivotIndex = left;
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]; // Mova o pivot para o final

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[newPivotIndex]] = [arr[newPivotIndex], arr[i]];
        newPivotIndex++;
      }
    }
    [arr[newPivotIndex], arr[right]] = [arr[right], arr[newPivotIndex]];
    return newPivotIndex;
  };

  const select = (left, right, k) => {
    if (left === right) return arr[left]; // Se o array tiver um único elemento

    const pivotIndex = Math.floor((left + right) / 2);
    const newPivotIndex = partition(left, right, pivotIndex);

    if (k === newPivotIndex) {
      return arr[k];
    } else if (k < newPivotIndex) {
      return select(left, newPivotIndex - 1, k);
    } else {
      return select(newPivotIndex + 1, right, k);
    }
  };

  return select(0, arr.length - 1, k - 1); // k-1 para índice zero
}

// Exemplo de uso
const arr5 = [3, 2, 1, 5, 6, 4];
const k2 = 2;
console.log(quickSelect(arr5, k2)); // 2
