class ClienteService {
  constructor() {
    this.clientes = [];
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }

  buscarClientePorId(id) {
    return this.clientes.find(cliente => cliente.id === id);
  }

  listarClientes() {
    return this.clientes;
  }

  editarCliente(id, novoCliente) {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
      this.clientes[index] = novoCliente;
      return true; // Cliente editado com sucesso
    }
    return false; // Cliente não encontrado
  }

  removerCliente(id) {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
      this.clientes.splice(index, 1);
      return true; // Cliente removido com sucesso
    }
    return false; // Cliente não encontrado
  }
}

module.exports = ClienteService;
