class Cliente {
  constructor(id, nome, email, telefone) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  getNome() {
    return this.nome;
  }

  getEmail() {
    return this.email;
  }

  getTelefone() {
    return this.telefone;
  }
}

module.exports = Cliente
