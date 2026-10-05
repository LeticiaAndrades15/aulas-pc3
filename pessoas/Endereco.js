class Endereco {

    #logradouro;
    #cep;

    setLogradouro(logradouro) {
        if (logradouro !== '') {
            this.#logradouro = logradouro;
            return true;
        }

        return false;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    setCep(cep) {
        if (cep !== '') {
            this.#cep = cep;
            return true;
        }

        return false;
    }

    getCep() {
        return this.#cep;
    }
}

module.exports = Endereco;
