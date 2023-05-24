import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Persona } from "./persona";
import { Telefono } from "./telefono";

let per: Persona[] = []

//Crear perfil de las personas
per.push(
    new Persona(
      "Denise",
      "Sandri",
      29,
      "21003589D",
      "28/06/93",
      "azul",
      "M",
      new Direccion("Mi calle", 8, 55, "c", 46022, "Valencia", "Valencia"),
      new Mail("Trabajo", "denisesandrinavarro@gmail.com"),
      new Telefono("Movil", 685153694),
      "Contratada en Abril"
    )
  );
  
  per.push(
    new Persona(
      "Pedro",
      "Pascal",
      43,
      "12345678P",
      "02/03/1980",
      "morado",
      "H",
      new Direccion("Mandalorian", 2, 15, "a", 12345, "Mandalore", "Galaxia"),
      new Mail("Personal", "pedrito@gmail.es"),
      new Telefono("Fijo", 963366752),
      "Actor"
    )
  );
  
  per.push(
    new Persona(
      "Joel",
      "Gomez",
      53,
      "12345678K",
      "11/05/1970",
      "gris",
      "H",
      new Direccion("Calle de los ladrillos amarillos", 5, 4, "c", 38107, "Seattle", "Estados unidos"),
      new Mail("Personal", "joelingeniero@gmail.com"),
      new Telefono("Movil", 685159987),
      "Ingeniero estructural"
    )
  );

  //Mostrar las personas
for (let i = 0; i < per.length; i++) {
    console.log(per[i]);
  }

  //Buscar direccion por el DNI
let buscarDni: Persona = per.filter(
    (pe) => pe.dni == "12345678K"
  )[0];

  //Editar la direccion
  let nuevaDireccion: Direccion = new Direccion(
    "Calle de la amargura",
    71,
    11,
    "a",
    46209,
    "Sydney",
    "Australia"
  );
  //Guardar la direccion 
  buscarDni.direcciones.pop();
  buscarDni.direcciones.push(nuevaDireccion);
 
  let nuevoMail: Mail = new Mail("Trabajo", "joelnuevo@gmail.es");
  buscarDni.mails.pop();
  buscarDni.mails.push(nuevoMail);
  
  let nuevoTelefono: Telefono = new Telefono("Fijo", 96333333);
  buscarDni.telefonos.pop();
  buscarDni.telefonos.push(nuevoTelefono);

  //Mostrar otra vez el perfil de las personas
  for (let i = 0; i < per.length; i++) {
    console.log(per[i]);
  }