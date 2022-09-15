/*
//declarando arreglos en js

//un arreglo es una variable especial
// que me permite almacenar multipleas datos en una sola variable 

let numeros = [5,8,12,10] 
console.log(numeros[0])

//de esta forma se crea un arreglo orientado a objeto en javascript
let nombres = Array("juan", "sara",5,"carlos", "laura")
console.log(nombres[2]) 

//objetos

//un objeto es una varianle especial que permite guardar multiples elementos de 
//distintos tipos

let persona = {
    nombre: "juan",
    profesion: "programador",
    edad: 33,
    cursosTomados: ["web 2 avanzado","javasCript","java","SQLserver"],
    comida:{
        nombre: "bandeja paisa",
        precio: 25000
    }
}
console.log(persona)

//para imprimir solamente un atributo 
console.log(persona.nombre)
//de esta forma hago que me muestre los datos del arreglo
//pongo corchete porque ya estoy dentro de un arreglo
console.log(persona.cursosTomados[1])

//voy a acceder al objeto comida que esta dentro de el objeto comida
console.log(persona.comida.precio)*/

import{peliculas} from '../helper/baseDatos.js'
//recorriendo un arreglo en javascript//

 import{pintarPeliculas}from '../helper/pintarPeliculas.js'
 import{peliculasProximas} from '../helper/baseDatosProximas.js'

 let fila = document.getElementById("fila");
//  let fila2 = document.getElementById("fila2");

 // llamo a la funcion pintar pelicula
 pintarPeliculas(peliculas)

//  detectando seleccion de una pelicula

let peliculaSeleccionada = {}
fila.addEventListener('click',function(evento){
    peliculaSeleccionada.poster = (evento.target.parentElement.querySelector('img').src)
    /*esto se agrega para eliminar los consol.log*/
   
    peliculaSeleccionada.nombre = (evento.target.parentElement.querySelector('h1').textContent);
    peliculaSeleccionada.sinopcis = (evento.target.parentElement.querySelector('p').textContent);
    peliculaSeleccionada.clasificacion = (evento.target.parentElement.querySelector('h2').textContent);
    peliculaSeleccionada.genero = (evento.target.parentElement.querySelector('h3').textContent);
    peliculaSeleccionada.idioma = (evento.target.parentElement.querySelector('h5').textContent);
    peliculaSeleccionada.duracion = (evento.target.parentElement.querySelector('h4').textContent);
   
    console.log(peliculaSeleccionada);
    // console.log(evento.target.parentElement.querySelector('img'));
    // console.log(evento.target.parentElement.querySelector('h1'));
    // console.log(evento.target.parentElement.querySelector('p'));
    // console.log(evento.target.parentElement.querySelector('h2'));
    // console.log(evento.target.parentElement.querySelector('h3'));
    // console.log(evento.target.parentElement.querySelector('h5'));
    // console.log(evento.target.parentElement.querySelector('h4'));
   
    // window.location.href = "./src/views/ampliarInfoPelicula.html"
})















































//  peliculasProximas.forEach(function(peliculaProxima){
//     /* este roeech se repitira durante el numero de elementos que tenga mi arreglo de peliculas*/
//     //[console.log(pelicula)]
//     console.log(peliculaProxima.sinopcis)
//     console.log(peliculaProxima.clasificacion)
//     console.log(peliculaProxima.genero)
//     console.log(peliculaProxima.poster)
//     console.log(peliculaProxima.nombre)
//     console.log(peliculaProxima.idioma)

//     let columna = document.createElement("div");
//     columna.classList.add("col");/* entre las comillas se agrega el nombre de los  estilos de las clases que se quiera a gregar*/

// //2.creamos una targeta para cada pelicula
//     let targeta = document.createElement("div");
//     targeta.classList.add("card","h-100");

// //3. creamos una foto para cada pelicula 
//     let poster = document.createElement("img");
//     poster.src = peliculaProxima.poster;//se pone pelicula porque hace referencia al nombre de la funcion en el fo y no al nombre del vector

// //4. creamos los nombres de la peliculas
//     let datosPelicula = document.createElement("div");/* el div donde ira el nombre 
//                                                         * y la sinopcis de la pelicula*/
//     datosPelicula.classList.add("card-body");/* la clase del div*/

//     let titulo = document.createElement("h1");
//     titulo.classList.add('card-title');
//     titulo.textContent = peliculaProxima.nombre;

//     let fecha = document.createElement("h1");
//     fecha.classList.add('card_genero');
//     fecha.textContent = peliculaProxima.fecha;


// // empezamos ingresar hijos desde el mas itnerno
// // la targeta tiene un hijo que se el poster
// targeta.appendChild(poster);
// targeta.appendChild(datosPelicula);

// datosPelicula.appendChild(titulo);
// datosPelicula.appendChild(fecha);

// // la columna tiene un hijo que sera la targeta"
// columna.appendChild(targeta);
// // el div el cual llammamos a javascript mediante el id fila tendra un hijo y sera la columna
// fila2.appendChild(columna);
//  })