class Carro{

    constructor(nome, consumo){
        this._nome = nome;
        this._consumo = consumo;
        Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }

    get consumo(){
        return this._consumo;
    }
    
}