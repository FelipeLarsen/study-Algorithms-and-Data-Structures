// O algoritmo DFS é usado para explorar grafos e árvores.

function dfs(graph, start) {
  const visited = new Set();
  const result = [];

  const traverse = (node) => {
    if (!node || visited.has(node)) return;
    visited.add(node);
    result.push(node);

    for (const neighbor of graph[node]) {
      traverse(neighbor);
    }
  };

  traverse(start);
  return result;
}

// Exemplo de uso
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: []
};
console.log(dfs(graph, 'A')); // ['A', 'B', 'D', 'C', 'E']
