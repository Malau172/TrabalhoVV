const { expect } = require('chai');
const Produto = require('../Entidade/Produto');
const ProdutoServico = require('../Servico/ProdutoServico');

describe('ProdutoServico', () => {
  var  produtoServico;

  beforeEach(() => {
    produtoServico = new ProdutoServico();
  });

  it('deve adicionar um produto corretamente', () => {
    const produto = new Produto(1, 'Produto 1', 10);
    produtoServico.adicionarProduto(produto);

    const produtos = produtoServico.listarProdutos();
    expect(produtos).to.have.lengthOf(1);
    expect(produtos[0]).to.deep.equal(produto);
  });

  it('deve buscar um produto por ID corretamente', () => {
    const produto1 = new Produto(1, 'Produto 1', 10);
    const produto2 = new Produto(2, 'Produto 2', 20);
    produtoServico.adicionarProduto(produto1);
    produtoServico.adicionarProduto(produto2);

    const produtoEncontrado = produtoServico.buscarProdutoPorId(2);
    expect(produtoEncontrado).to.deep.equal(produto2);
  });

  it('deve retornar todos os produtos corretamente', () => {
    const produto1 = new Produto(1, 'Produto 1', 10);
    const produto2 = new Produto(2, 'Produto 2', 20);
    produtoServico.adicionarProduto(produto1);
    produtoServico.adicionarProduto(produto2);

    const produtos = produtoServico.listarProdutos();
    expect(produtos).to.have.lengthOf(2);
    expect(produtos[0]).to.deep.equal(produto1);
    expect(produtos[1]).to.deep.equal(produto2);
  });

  it('deve editar um produto corretamente', () => {
    const produto = new Produto(1, 'Produto 1', 10);
    produtoServico.adicionarProduto(produto);

    const novoProduto = new Produto(1, 'Produto 2', 20);
    const editadoComSucesso = produtoServico.editarProduto(1, novoProduto);

    expect(editadoComSucesso).to.be.true;

    const produtoEditado = produtoServico.buscarProdutoPorId(1);
    expect(produtoEditado).to.deep.equal(novoProduto);
  });

  it('deve retornar falso ao editar um produto inexistente', () => {
    const produto = new Produto(1, 'Produto 1', 10);
    produtoServico.adicionarProduto(produto);

    const novoProduto = new Produto(2, 'Produto 2', 20);
    const editadoComSucesso = produtoServico.editarProduto(2, novoProduto);

    expect(editadoComSucesso).to.be.false;
  });
});
