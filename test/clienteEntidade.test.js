/* eslint-disable no-undef */
const { expect } = require('chai');
const Cliente = require('../Entidade/cliente')

describe('Cliente', () => {
  let cliente;

  beforeEach(() => {
    cliente = new Cliente(1, 'João', 'joao@example.com', '123456789');
  });

  it('deve retornar o nome do cliente', () => {
    const nome = cliente.getNome();
    expect(nome).to.equal('João');
  });

  it('deve retornar o email do cliente', () => {
    const email = cliente.getEmail();
    expect(email).to.equal('joao@example.com');
  });

  it('deve retornar o telefone do cliente', () => {
    const telefone = cliente.getTelefone();
    expect(telefone).to.equal('123456789');
  });
});
