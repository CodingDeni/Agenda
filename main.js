"use strict";
exports.__esModule = true;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
var telefono_1 = require("./telefono");
var per = [];
//Crear perfil de las personas
per.push(new persona_1.Persona("Denise", "Sandri", 29, "21003589D", "28/06/93", "azul", "M", new direccion_1.Direccion("Mi calle", 8, 55, "c", 46022, "Valencia", "Valencia"), new mail_1.Mail("Trabajo", "denisesandrinavarro@gmail.com"), new telefono_1.Telefono("Movil", 685153694), "Contratada en Abril"));
per.push(new persona_1.Persona("Pedro", "Pascal", 43, "12345678P", "02/03/1980", "morado", "H", new direccion_1.Direccion("Mandalorian", 2, 15, "a", 12345, "Mandalore", "Galaxia"), new mail_1.Mail("Personal", "pedrito@gmail.es"), new telefono_1.Telefono("Fijo", 963366752), "Actor"));
per.push(new persona_1.Persona("Joel", "Gomez", 53, "12345678K", "11/05/1970", "gris", "H", new direccion_1.Direccion("Calle de los ladrillos amarillos", 5, 4, "c", 38107, "Seattle", "Estados unidos"), new mail_1.Mail("Personal", "joelingeniero@gmail.com"), new telefono_1.Telefono("Movil", 685159987), "Ingeniero estructural"));
//Mostrar las personas
for (var i = 0; i < per.length; i++) {
    console.log(per[i]);
}
//Buscar direccion por el DNI
var buscarDni = per.filter(function (pe) { return pe.dni == "12345678K"; })[0];
//Editar la direccion
var nuevaDireccion = new direccion_1.Direccion("Calle de la amargura", 71, 11, "a", 46209, "Sydney", "Australia");
//Guardar la direccion 
buscarDni.direcciones.pop();
buscarDni.direcciones.push(nuevaDireccion);
var nuevoMail = new mail_1.Mail("Trabajo", "joelnuevo@gmail.es");
buscarDni.mails.pop();
buscarDni.mails.push(nuevoMail);
var nuevoTelefono = new telefono_1.Telefono("Fijo", 96333333);
buscarDni.telefonos.pop();
buscarDni.telefonos.push(nuevoTelefono);
//Mostrar otra vez el perfil de las personas
for (var i = 0; i < per.length; i++) {
    console.log(per[i]);
}
