class Produto {
  constructor(id, nome, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotal() {
    return this.preco * this.quantidade;
  }

 
}

export default Produto;
