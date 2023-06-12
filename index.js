const Produto = require('./Entidade/produto');
const VendaService = require('./Servico/vendaService');

const produto1 = new Produto(1, 'Camisa', 29.99, 2);
const produto2 = new Produto(2, 'Calça', 59.99, 1);

const vendaService = new VendaService();
vendaService.adicionarProduto(produto1);
vendaService.adicionarProduto(produto2);

const valorTotal = vendaService.calcularValorTotal();
console.log('Valor total da venda:', valorTotal);
