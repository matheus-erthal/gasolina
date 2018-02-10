class CarrosView {
    
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(lista){
        return `
        <table class="table table-hover">
            <thead>
            <tr class="thead dark">
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
            </tr>
            </thead>
            <tbody>
            ${lista.map(carro =>`
                <tr>
                <td>${carro.modelo}</td>
                <td>${carro.marca}</td>
                </tr>
            `
            ).join('')}
            </tbody>
        </table>
        `
    }

    update(lista){
        this._elemento.innerHTML = this._template(lista);
    }
}