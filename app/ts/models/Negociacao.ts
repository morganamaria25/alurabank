class Negociacao {

    
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number,
        private _pm: number
    ) {}

    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this._quantidade * this._valor;
    }

    get pm() {

        return this.pm * this._pm;
    }
}

