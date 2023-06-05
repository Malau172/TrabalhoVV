class Produto {
  constructor(id, nome, preco, quantidade, modelo, ano) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.modelo = modelo;
    this.ano = ano;
  }

  calcularValorTotal() {
    return this.preco * this.quantidade;
  }

  getNome() {
    return this.nome;
  }

  getPreco() {
    return this.preco;
  }

  getQuantidade() {
    return this.quantidade;
  }

  setQuantidade(novaQuantidade) {
    this.quantidade = novaQuantidade;
  }
}

export default Produto;
