// Esse algoritmo é usado para unir intervalos sobrepostos.

function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]); // Une os intervalos
    } else {
      merged.push(current);
    }
  }
  return merged;
}

// Exemplo de uso
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals)); // [[1, 6], [8, 10], [15, 18]]
