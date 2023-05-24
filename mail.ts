
export class Mail {

     //Propiedades de la clase MAIL
     protected _tipo:string
     protected _direccion:string

     constructor(tipo: string, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;
      }
      public set tipo(tipo: string) {
        this._tipo = tipo;
      }
      public get tipo() {
        return this._tipo;
      }
      public set direccion(dir: string) {
        this._direccion = dir;
      }
      public get numero() {
        return this._direccion;
      }

}