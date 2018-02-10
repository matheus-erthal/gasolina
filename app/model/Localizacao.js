class Localizacao{

    constructor(lat, lng){
        this._lat = lat;
        this._lng = lng;
        Object.freeze(this);
    }

    get lat(){
        return this._long;
    }

    get lng(){
        return this._lng;
    }
    
}