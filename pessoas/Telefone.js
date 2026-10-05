class Telefone {

    #ddd;
    #numero;

    setDdd(ddd) {
        if (ddd !== '') {
            this.#ddd = ddd;
            return true;
        }

        return false;
    }

    getDdd() {
        return this.#ddd;
    }

    setNumero(numero) {
        if (numero !== '') {
            this.#numero = numero;
            return true;
        }

        return false;
    }

    getNumero() {
        return this.#numero;
    }
}

module.exports = Telefone;
