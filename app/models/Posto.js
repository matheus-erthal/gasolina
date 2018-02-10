class Posto{

    constructor(nome, localizacao, preco){
        this._nome = nome;
        this._localizacao = new Localizacao(localizacao.lat, localizacao.lng);
        this._preco = preco;
        Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }

    get localização(){
        return this._localizacao;
    }

    get preco(){
        return this._preco;
    }
}