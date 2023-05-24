export class Telefono {

    //propiedades de la clase TELÉFONO
    protected _tipo:string
    protected _numero:number

    constructor(tipo: string, numero: number) {
        this._tipo = tipo;
        this._numero = numero;
      }
      public set tipo(tipo: string) {
        this._tipo = tipo;
      }
      public get tipo() {
        return this._tipo;
      }
      public set numero(num: number) {
        this._numero = num;
      }
      public get numero() {
        return this._numero;
      }

}