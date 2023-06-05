class Pedido {
  constructor(id, cliente, produtos, data) {
    this.id = id;
    this.cliente = cliente;
    this.produtos = produtos;
    this.data = data;
    this.total = total;
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  removerProduto(id) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
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

export default Pedido;
