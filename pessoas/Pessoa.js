class Pessoa {

    #nome;
    #email;
    #endereco;
    #telefones;

    constructor() {
        this.#telefones = [];
    }

    setNome(nome) {
        if (nome !== '') {
            this.#nome = nome;
            return true;
        }

        return false;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (email !== '') {
            this.#email = email;
            return true;
        }

        return false;
    }

    getEmail() {
        return this.#email;
    }

    setEndereco(endereco) {
        this.#endereco = endereco;
        return true;
    }

    getEndereco() {
        return this.#endereco;
    }

    addTelefone(telefone) {
        this.#telefones.push(telefone);
        return true;
    }

    getTelefones() {
        return this.#telefones;
    }
}

module.exports = Pessoa;