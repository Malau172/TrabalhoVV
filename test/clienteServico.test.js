const { expect } = require('chai');
const Cliente = require('../Entidade/Cliente');
const ClienteServico = require('../Servico/ClienteServico');

describe('ClienteServico', () => {
  var clienteServicoClienteServico;

  beforeEach(() => {
    clienteServicoClienteServico = new ClienteServico();
  });

  it('o cliente deve ser adicionado corretamente', () => {
    const cliente = new Cliente(1, 'João', 'joao@example.com', '123456789');
    clienteServicoClienteServico.adicionarCliente(cliente);

    const clientes = clienteServicoClienteServico.listarClientes();
    expect(clientes).to.have.lengthOf(1);
    expect(clientes[0]).to.deep.equal(cliente);
  });

  it('deve buscar um cliente por ID corretamente', () => {
    const cliente1 = new Cliente(1, 'João', 'joao@example.com', '123456789');
    const cliente2 = new Cliente(2, 'Maria', 'maria@example.com', '987654321');
    clienteServicoClienteServico.adicionarCliente(cliente1);
    clienteServicoClienteServico.adicionarCliente(cliente2);

    const clienteEncontrado = clienteServicoClienteServico.buscarClientePorId(2);
    expect(clienteEncontrado).to.deep.equal(cliente2);
  });

  it('deve retornar todos os clientes corretamente', () => {
    const cliente1 = new Cliente(1, 'João', 'joao@example.com', '123456789');
    const cliente2 = new Cliente(2, 'Maria', 'maria@example.com', '987654321');
    clienteServicoClienteServico.adicionarCliente(cliente1);
    clienteServicoClienteServico.adicionarCliente(cliente2);

    const clientes = clienteServicoClienteServico.listarClientes();
    expect(clientes).to.have.lengthOf(2);
    expect(clientes[0]).to.deep.equal(cliente1);
    expect(clientes[1]).to.deep.equal(cliente2);
  });

  it('deve editar um cliente corretamente', () => {
    const cliente = new Cliente(1, 'Chape', 'chape@example.com', '123456789');
    clienteServicoClienteServico.adicionarCliente(cliente);

    const novoCliente = new Cliente(1, 'Lau', 'lau@example.com', '987654321');
    const editadoComSucesso = clienteServicoClienteServico.editarCliente(1, novoCliente);

    expect(editadoComSucesso).to.be.true;

    const clienteEditado = clienteServicoClienteServico.buscarClientePorId(1);
    expect(clienteEditado).to.deep.equal(novoCliente);
  });

  it('deve remover um cliente corretamente', () => {
    const cliente = new Cliente(1, 'teste', 'teste@example.com', '123456789');
    clienteServicoClienteServico.adicionarCliente(cliente);

    const removidoComSucesso = clienteServicoClienteServico.removerCliente(1);
    expect(removidoComSucesso).to.be.true;

    const clienteRemovido = clienteServicoClienteServico.buscarClientePorId(1);
    expect(clienteRemovido).to.be.undefined;
  });
});
