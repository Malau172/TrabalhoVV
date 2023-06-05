class PedidoService {
  constructor() {
    this.pedidos = [];
  }

  adicionarPedido(pedido) {
    this.pedidos.push(pedido);
  }

  buscarPedidoPorId(id) {
    return this.pedidos.find(pedido => pedido.id === id);
  }

  listarPedidos() {
    return this.pedidos;
  }

  editarPedido(id, novoPedido) {
    const index = this.pedidos.findIndex(pedido => pedido.id === id);
    if (index !== -1) {
      this.pedidos[index] = novoPedido;
      return true; 
    }
    return false; 
  }

  removerPedido(id) {
    const index = this.pedidos.findIndex(pedido => pedido.id === id);
    if (index !== -1) {
      this.pedidos.splice(index, 1);
      return true; 
    }
    return false;
  }
}

module.exports = PedidoService;
