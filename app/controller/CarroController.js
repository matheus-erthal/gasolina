class CarroController{

    constructor(){
        
        let $ = document.querySelector.bind(document);
        
        this._inputModelo = $('#modelo_carro');
        this._inputMarca = $('#marca_carro');

        this.lista = [];

    }

    adiciona(event){

        event.preventDefault();
        this.lista.push(this.criaCarro());
        this.limpaForm();

        console.log(this.lista);

    }

    criaCarro(){
        return new Carro(this._inputModelo.value, this._inputMarca.value);
    }

    limpaForm(){

        this._inputModelo.value = '';
        this._inputMarca.value = '';
        this._inputModelo.focus();
    }

}