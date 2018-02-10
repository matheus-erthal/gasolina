class Carro{

    constructor(modelo, marca){
        this._modelo = modelo;
        this._marca = marca;
        Object.freeze(this);
    }

    get modelo(){
        return this._modelo;
    }

    get marca(){
        return this._marca;
    }
    
}