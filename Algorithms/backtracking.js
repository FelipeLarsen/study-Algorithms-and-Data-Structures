// Esse algoritmo é usado para resolver problemas de combinação e permutação.

function backtrack(path, options, result) {
  if (path.length === options.length) {
    result.push([...path]);
    return;
  }
  for (let i = 0; i < options.length; i++) {
    if (path.includes(options[i])) continue; // Evita repetição
    path.push(options[i]);
    backtrack(path, options, result);
    path.pop(); // Remove o último elemento
  }
}

function generatePermutations(options) {
  const result = [];
  backtrack([], options, result);
  return result;
}

// Exemplo de uso
const options = [1, 2, 3];
console.log(generatePermutations(options));
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
