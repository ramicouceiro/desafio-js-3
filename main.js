class Pizza {
    constructor(id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

let ingNapo = ["Muzzarella", "Salsa", "Tomate", "Ajo"];
let ingHuevo = ["Muzzarella", "Salsa", "Huevo"];
let ingMuzza = ["Muzzarella", "Salsa"];
let ingProvo = ["Provolone", "Salsa"];
let ingRucula = ["Muzzarella", "Salsa", "Rucula", "Jamon Crudo"];
let ingPrimavera = ["Muzzarella", "Salsa", "Anana"];

let pizza1 = new Pizza(1, "Napolitana", ingNapo, 600);
let pizza2 = new Pizza(2, "Huevo", ingHuevo, 550);
let pizza3 = new Pizza(3, "Muzzarella", ingMuzza, 500);
let pizza4 = new Pizza(4, "Provolone", ingProvo, 700);
let pizza5 = new Pizza(5, "Rucula", ingProvo, 600);
let pizza6 = new Pizza(6, "Primavera", ingProvo, 650);

let arrayPizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

// for (let i = 0; i < arrayPizzas.length; i++) {
//     if (arrayPizzas[i].id % 2 != 0) {
//         console.log(`La pizza "${arrayPizzas[i].nombre}", tiene un id impar.`);
//     }
// }
// for (let i = 0; i < arrayPizzas.length; i++) {
//     if (arrayPizzas[i].precio < 600) {
//         console.log(
//             `La pizza "${arrayPizzas[i].nombre}", tiene un precio menor a $600.`
//         );
//     }
// }
// for (let i = 0; i < arrayPizzas.length; i++) {
//     console.log(`Pizza ${arrayPizzas[i].id}:
//     "${arrayPizzas[i].nombre}"`);
// }
// for (let i = 0; i < arrayPizzas.length; i++) {
//     console.log(`$${arrayPizzas[i].precio}`);
// }
// for (let i = 0; i < arrayPizzas.length; i++) {
//     console.log(
//         `La Pizza ${arrayPizzas[i].nombre} tiene un valor de $${arrayPizzas[i].precio}`
//     );
// }

let h2Nombre = document.getElementById("h2Nombre");
let h4Precio = document.getElementById("h4Precio");
let inputNumero = document.getElementById("number");
let inputSubmit = document.getElementById("submit");
let form = document.getElementById("form");
let textContainer = document.getElementById("container-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputNumero.value == 1) {
        h2Nombre.innerText = `Pizza ${arrayPizzas[0].nombre}`;
        h4Precio.innerText = `Precio: ${arrayPizzas[0].precio}`;
    }
    if (inputNumero.value == 2) {
        h2Nombre.innerText = `Pizza ${arrayPizzas[1].nombre}`;
        h4Precio.innerText = `Precio: ${arrayPizzas[1].precio}`;
    }
    if (inputNumero.value == 3) {
        h2Nombre.innerText = `Pizza ${arrayPizzas[2].nombre}`;
        h4Precio.innerText = `Precio: ${arrayPizzas[2].precio}`;
    }
    if (inputNumero.value == 4) {
        h2Nombre.innerText = `Pizza ${arrayPizzas[3].nombre}`;
        h4Precio.innerText = `Precio: ${arrayPizzas[3].precio}`;
    }
    if (inputNumero.value == 5) {
        h2Nombre.innerText = `Pizza ${arrayPizzas[4].nombre}`;
        h4Precio.innerText = `Precio: ${arrayPizzas[4].precio}`;
    }
    if (inputNumero.value == 6) {
        h2Nombre.innerText = `Pizza ${arrayPizzas[5].nombre}`;
        h4Precio.innerText = `Precio: ${arrayPizzas[5].precio}`;
    }
    if (inputNumero.value > 6) {
        h2Nombre.innerText = "Ese ID de Pizza no Existe";
        h4Precio.innerText = "";
    }
    if (inputNumero.value < 1) {
        h2Nombre.innerText = "Ese ID de Pizza no Existe";
        h4Precio.innerText = "";
    }
});