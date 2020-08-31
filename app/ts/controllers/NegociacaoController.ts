class NegociacaoController {
    private _inputData;
    private _inputQuantidade;
    private _inputValor;
    private _inputPm;


    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._inputPm = document.querySelector('#pm')
    }

    // Metodo
    adiciona(event) {
        // Previne para não recarregar a página quando foi feito o submit
        event.preventDefault();

        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value,
            this._inputPm.value
        );

        console.log(negociacao);
    }
}
