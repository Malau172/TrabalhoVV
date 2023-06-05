const Produto  = require('../Entity/product');

class VendaService {
  constructor() {
   
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  calcularValorTotal() {
    let valorTotal = 0;
    this.produtos.forEach(produto => {
      valorTotal += produto.calcularValorTotal();
    });
    return valorTotal;
  }

}

module.exports = VendaService;
