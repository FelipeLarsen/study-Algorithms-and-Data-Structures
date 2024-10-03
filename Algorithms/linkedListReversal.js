// Este algoritmo inverte uma lista encadeada in -place.


function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next; // Armazena o próximo
    current.next = prev; // Inverte o ponteiro
    prev = current; // Move o ponteiro anterior
    current = nextTemp; // Move para o próximo nó
  }
  return prev; // Novo cabeça da lista invertida
}

// Exemplo de uso
// Defina uma lista encadeada e teste a função
