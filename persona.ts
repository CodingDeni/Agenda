//clase persona
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";


export class Persona {
    
    //Propiedades de la clase PERSONA 
    //Modificador protected -> las clases descendientes pueden usarlo
    protected _nombre:string
    protected _apellidos:string
    protected _edad:number
    protected _dni:string
    protected _cumpleanos:string
    protected _colorFavorito:string
    protected _sexo:string
    protected _direcciones:Direccion[] = []
    protected _mails:Mail[] = []
    protected _telefonos:Telefono[] = []
    protected _notas:string

    //Método constructor -> se llama a este metodo cada vez que se crea una instancia
    constructor(nombre:string, apellidos:string, edad:number, dni:string, cumpleanos:string, colorFavortito:string, sexo:string, direcciones:Direccion, mails:Mail, telefonos:Telefono, notas:string)
    {
        //this hace referencia a persona
        this._nombre = nombre
        this._apellidos = apellidos
        this._edad = edad
        this._dni = dni
        this._cumpleanos = cumpleanos
        this._colorFavorito = colorFavortito
        this._sexo = sexo
        this._direcciones.push(direcciones)
        this._mails.push(mails)
        this._telefonos.push(telefonos)
        this._notas = notas

    }
    //Ponemos los set y get
    public set nombre(nom: string) {
        this._nombre = nom;
      }
      public get nombre(): string {
        return this._nombre;
      }
      public set apellidos(ape: string) {
        this._apellidos = ape;
      }
      public get apellidos(): string {
        return this._apellidos;
      }
      public set edad(edad: number) {
        this._edad = edad;
      }
      public get edad(): number {
        return this._edad;
      }
      public set dni(dni: string) {
        this._dni = dni;
      }
      public get dni(): string {
        return this._dni;
      }
      public set cumple(cumple: string) {
        this._cumpleanos = cumple;
      }
      public get cumple(): string {
        return this._cumpleanos;
      }
      public set colorFav(colorFav: string) {
        this._colorFavorito = colorFav;
      }
      public get colorFav(): string {
        return this._colorFavorito;
      }
      public get sexo(): string {
        return this._sexo;
      }
      public set sexo(sex: string) {
        this._sexo = sex;
      }
      public get direcciones(): Direccion[] {
        return this._direcciones;
      }
      public set direcciones(dir: Direccion[]) {
        this._direcciones = dir;
      }
      public get mails(): Mail[] {
        return this._mails;
      }
      public set mails(mail: Mail[]) {
        this._mails = mail;
      }
      public get telefonos(): Telefono[] {
        return this._telefonos;
      }
      public set telefonos(tel: Telefono[]) {
        this._telefonos = tel;
      }
      public get notas(): string {
        return this._notas;
      }
      public set notas(nota: string) {
        this._notas = nota;
      }
    

}