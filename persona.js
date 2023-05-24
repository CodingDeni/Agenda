"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //Método constructor -> se llama a este metodo cada vez que se crea una instancia
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavortito, sexo, direcciones, mails, telefonos, notas) {
        this._direcciones = [];
        this._mails = [];
        this._telefonos = [];
        //this hace referencia a persona
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavortito;
        this._sexo = sexo;
        this._direcciones.push(direcciones);
        this._mails.push(mails);
        this._telefonos.push(telefonos);
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        //Ponemos los set y get
        set: function (nom) {
            this._nombre = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (ape) {
            this._apellidos = ape;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumple", {
        get: function () {
            return this._cumpleanos;
        },
        set: function (cumple) {
            this._cumpleanos = cumple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFav", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (colorFav) {
            this._colorFavorito = colorFav;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sex) {
            this._sexo = sex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (dir) {
            this._direcciones = dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (mail) {
            this._mails = mail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        set: function (tel) {
            this._telefonos = tel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (nota) {
            this._notas = nota;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
