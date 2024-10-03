// O algoritmo BFS é usado para explorar grafos e árvores de maneira nível por nível.

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (const neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }
  return result;
}

// Exemplo de uso
console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E']
