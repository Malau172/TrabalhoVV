const { expect } = require('chai');
const Pedido = require('../Entidade/pedido');
const Produto = require('../Entidade/produto');

describe('Pedido', () => {
  let pedido;

  beforeEach(() => {
    const cliente = { id: 1, nome: 'João' };
    const produtos = [
      new Produto(1, 'Produto 1', 10, 2),
      new Produto(2, 'Produto 2', 20, 3),
      new Produto(3, 'Produto 3', 30, 1)
    ];
    const data = new Date();
    pedido = new Pedido(1, cliente, produtos, data);
  });

  it('deve adicionar um produto ao pedido', () => {
    const novoProduto = new Produto(4, 'Produto 4', 40, 1);
    pedido.adicionarProduto(novoProduto);
    expect(pedido.produtos).to.have.lengthOf(4);
  });

  it('deve remover um produto do pedido', () => {
    const produtoId = 2;
    pedido.removerProduto(produtoId);
    expect(pedido.produtos).to.have.lengthOf(2);
    expect(pedido.produtos.map(produto => produto.id)).to.not.include(produtoId);
  });

  it('deve calcular o valor total do pedido', () => {
    const valorTotal = pedido.calcularValorTotal();
    expect(valorTotal).to.equal(110); 
  });

  it('deve retornar o cliente do pedido', () => {
    const cliente = pedido.getCliente();
    expect(cliente.id).to.equal(1);
    expect(cliente.nome).to.equal('João');
  });

  it('deve retornar a data do pedido', () => {
    const data = pedido.getData();
    expect(data).to.be.an.instanceOf(Date);
  });
});
