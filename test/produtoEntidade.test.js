/* eslint-disable no-undef */
const chai = require('chai');
const expect = chai.expect;
const Produto = require('../entidade/produto');


describe('Produto', () => {
 
  it('deve calcular o valor total corretamente', () => {
    const produto = new Produto(1, 'Camiseta', 29.99, 2);
    const valorTotal = produto.calcularValorTotal();
    expect(valorTotal).to.equal(59.98);
  });


});
