const { expect } = require('chai');
const PedidoServico = require('../Servico/pedidoServico');
const Pedido = require('../Entidade/pedido');

describe('PedidoServico', () => {
  let pedidoServico;

  beforeEach(() => {
    pedidoServico = new PedidoServico();
  });

  it('deve adicionar um pedido', () => {
    const pedido = new Pedido(1, 'Cliente 1', [], new Date());
    pedidoServico.adicionarPedido(pedido);
    expect(pedidoServico.pedidos).to.have.lengthOf(1);
  });

  it('deve buscar um pedido por ID', () => {
    const pedido1 = new Pedido(1, 'Cliente 1', [], new Date());
    const pedido2 = new Pedido(2, 'Cliente 2', [], new Date());
    pedidoServico.adicionarPedido(pedido1);
    pedidoServico.adicionarPedido(pedido2);

    const pedidoEncontrado = pedidoServico.buscarPedidoPorId(2);

    expect(pedidoEncontrado).to.deep.equal(pedido2);
  });

  it('deve retornar uma lista de pedidos', () => {
    const pedido1 = new Pedido(1, 'Cliente 1', [], new Date());
    const pedido2 = new Pedido(2, 'Cliente 2', [], new Date());
    pedidoServico.adicionarPedido(pedido1);
    pedidoServico.adicionarPedido(pedido2);

    const listaPedidos = pedidoServico.listarPedidos();

    expect(listaPedidos).to.have.lengthOf(2);
    expect(listaPedidos).to.deep.include(pedido1);
    expect(listaPedidos).to.deep.include(pedido2);
  });

  it('deve editar um pedido existente', () => {
    const pedidoOriginal = new Pedido(1, 'Cliente 1', [], new Date());
    pedidoServico.adicionarPedido(pedidoOriginal);

    const novoPedido = new Pedido(1, 'Cliente 1 (editado)', [], new Date());
    const resultado = pedidoServico.editarPedido(1, novoPedido);

    expect(resultado).to.be.true;
    expect(pedidoServico.pedidos).to.have.lengthOf(1);
    expect(pedidoServico.pedidos[0]).to.deep.equal(novoPedido);
  });

  it('deve retornar falso ao tentar editar um pedido inexistente', () => {
    const novoPedido = new Pedido(1, 'Cliente 1 (editado)', [], new Date());
    const resultado = pedidoServico.editarPedido(1, novoPedido);

    expect(resultado).to.be.false;
    expect(pedidoServico.pedidos).to.have.lengthOf(0);
  });

  it('deve remover um pedido existente', () => {
    const pedido = new Pedido(1, 'Cliente 1', [], new Date());
    pedidoServico.adicionarPedido(pedido);

    const resultado = pedidoServico.removerPedido(1);

    expect(resultado).to.be.true;
    expect(pedidoServico.pedidos).to.have.lengthOf(0);
  });

  it('deve retornar falso ao tentar remover um pedido inexistente', () => {
    const resultado = pedidoServico.removerPedido(1);

    expect(resultado).to.be.false;
    expect(pedidoServico.pedidos).to.have.lengthOf(0);
  });
});
