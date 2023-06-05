class Endereco {
  constructor(id, rua, numero, cidade, estado, cep) {
    this.id = id;
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  getRua() {
    return this.rua;
  }

  getNumero() {
    return this.numero;
  }

  getCidade() {
    return this.cidade;
  }

  getEstado() {
    return this.estado;
  }

  getCep() {
    return this.cep;
  }
}

export default Endereco;
