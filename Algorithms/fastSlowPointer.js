// Esse algoritmo é frequentemente utilizado para 
// detectar ciclos em listas encadeadas.


function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Move um passo
    fast = fast.next.next; // Move dois passos
    if (slow === fast) {
      return true; // Ciclo encontrado
    }
  }
  return false; // Sem ciclo
}

// Exemplo de uso
// Defina uma lista encadeada e teste a função
