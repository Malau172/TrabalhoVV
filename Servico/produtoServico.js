// eslint-disable-next-line no-unused-vars
class ProdutoServico{
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  buscarProdutoPorId(id) {
    return this.produtos.find(produto => produto.id === id);
  }

  listarProdutos() {
    return this.produtos;
  }

  editarProduto(id, novoProduto) {
    const index = this.produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
      this.produtos[index] = novoProduto;
      return true; 
    }
    return false; 
  }
}

module.exports = ProdutoServico;
