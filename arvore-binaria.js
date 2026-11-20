// Árvore Binária de Busca (BST): inserção e busca
// Para rodar: node arvore-binaria.js

class No {
  constructor(valor) {
    this.valor = valor;
    this.esq = null;
    this.dir = null;
  }
}

// Inserção recursiva: menor vai para a esquerda, maior para a direita
function inserir(raiz, valor) {
  if (raiz === null)
    return new No(valor);
  if (valor < raiz.valor)
    raiz.esq = inserir(raiz.esq, valor);
  else if (valor > raiz.valor)
    raiz.dir = inserir(raiz.dir, valor);
  return raiz; // valores repetidos são ignorados
}

// Busca recursiva: descarta metade da árvore a cada comparação
function buscar(raiz, alvo) {
  if (raiz === null)
    return null;          // não encontrado
  if (alvo === raiz.valor)
    return raiz;          // encontrado!
  if (alvo < raiz.valor)
    return buscar(raiz.esq, alvo);
  return buscar(raiz.dir, alvo);
}

// Percurso em ordem: mostra os valores ordenados
function emOrdem(raiz, saida = []) {
  if (raiz !== null) {
    emOrdem(raiz.esq, saida);
    saida.push(raiz.valor);
    emOrdem(raiz.dir, saida);
  }
  return saida;
}

// Exemplo usado na apresentação
let raiz = null;
for (const v of [50, 30, 70, 20, 40, 60, 80]) {
  raiz = inserir(raiz, v);
}

console.log('Em ordem:', emOrdem(raiz).join(', '));          // 20, 30, 40, 50, 60, 70, 80
console.log('Buscar 40:', buscar(raiz, 40) ? 'Achou!' : 'Não existe.');
console.log('Buscar 65:', buscar(raiz, 65) ? 'Achou!' : 'Não existe.');
