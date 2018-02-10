class User{

    constructor(nome, localizacao, carro){
        this._nome = nome;
        this._localizacao = new Localizacao(localizacao.lat, localizacao.lng);
        this._carro = new Carro(carro.nome, carro.consumo);
        Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }

    get localização(){
        return this._localizacao;
    }

    get carro(){
        return this._carro;
    }


    imprime_user(){
        console.log(`${this._nome} tem um ${this._carro.nome}`);
    }
}