// Esse algoritmo percorre uma matriz.

function traverseMatrix(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][j]);
    }
  }
  return result;
}

// Exemplo de uso
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(traverseMatrix(matrix)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
