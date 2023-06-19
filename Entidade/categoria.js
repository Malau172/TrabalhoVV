class Categoria {
  constructor(id, nome, descricao, cor) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.cor = cor;
  }

  getNome() {
    return this.nome;
  }

  getDescricao() {
    return this.descricao;
  }

  getCor() {
    return this.cor;
  }
}
module.exports =  Categoria;
