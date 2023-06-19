class Pedido {
  constructor(id, cliente, produtos, data) {
    this.id = id;
    this.cliente = cliente;
    this.produtos = produtos;
    this.data = data;
    this.total = this.calcularValorTotal(); // Definindo o valor total ao inicializar o pedido
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
    this.total += produto.calcularValorTotal(); // Atualizando o valor total ao adicionar um produto
  }

  removerProduto(id) {
    const index = this.produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
      const produtoRemovido = this.produtos.splice(index, 1)[0];
      this.total -= produtoRemovido.calcularValorTotal(); // Atualizando o valor total ao remover um produto
    }
  }

  calcularValorTotal() {
    let valorTotal = 0;
    this.produtos.forEach(produto => {
      valorTotal += produto.calcularValorTotal();
    });
    return valorTotal;
  }

  getCliente() {
    return this.cliente;
  }

  getData() {
    return this.data;
  }
}

module.exports = Pedido;
