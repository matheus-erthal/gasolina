class Carro{

    constructor(modelo, consumo){
        this._modelo = modelo;
        this._consumo = consumo;
        Object.freeze(this);
    }

    get modelo(){
        return this._modelo;
    }

    get consumo(){
        return this._consumo;
    }
    
}