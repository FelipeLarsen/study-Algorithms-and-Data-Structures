// Esse algoritmo é usado para resolver problemas em que a ordem dos elementos importa.

function nextGreaterElement(nums) {
  const stack = [];
  const result = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i]; // Encontra o próximo maior
    }
    stack.push(i);
  }
  return result;
}

// Exemplo de uso
const nums = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(nums)); // [-1, 10, 10, -1, -1]
