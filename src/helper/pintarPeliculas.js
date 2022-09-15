export function pintarPeliculas(peliculas){

    let fila = document.getElementById("fila")
    /* mediante la palabra recervada document pongo en uso el metodo getElmentByID el cual le dice a una etiqueta que se guarde en una variable
    * javascript me lleva al documento y busca la etiqueta que yo ingrese como parametro en en metodo getElementById*/

    peliculas.forEach(function(pelicula){
        /* este roeech se repitira durante el numero de elementos que tenga mi arreglo de peliculas*/
        //[console.log(pelicula)]
        console.log(pelicula.nombre)
        console.log(pelicula.genero)
        console.log(pelicula.poster)
        console.log(pelicula.sinopcis)
        console.log(pelicula.clasificacion)
        console.log(pelicula.idioma)
    
        //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JAVASCRIPT)
        // let poster = document.createElement("img")
        // poster.src = pelicula.poster /* que en la etiqueta imagen que acabamos de crear me agregue la imagen que esta en pelicula.poster(la ruta de la imagen)*/
    
        // let nombrePelicula = document.createElement("h3")
        // nombrePelicula.textContent= pelicula.nombre
        //PADRES E HIJOS
        // fila.appendChild(poster)
        /* en la fila 139 se trajo el id fila que pertenece a un div en el html
         * y en esta instruccion se le agrega el poster que tiene la imagen*/
        // fila.appendChild(nombrePelicula)
        
        /* RENDERIZAR CREAR INTERFAZ GRAFICA DESDE LA LOGICA*/
    
        //1. creamos una columna para cada pelicula
            let columna = document.createElement("div");
            columna.classList.add("col");/* entre las comillas se agrega el nombre de los  estilos de las clases que se quiera a gregar*/
        
        //2.creamos una targeta para cada pelicula
            let targeta = document.createElement("div");
            targeta.classList.add("card","h-100");
        
        //3. creamos una foto para cada pelicula 
            let poster = document.createElement("img");
            poster.src = pelicula.poster;//se pone pelicula porque hace referencia al nombre de la funcion en el for y no al nombre del vector
        
        //4. creamos los nombres de la peliculas
            let datosPelicula = document.createElement("div");/* el div donde ira el nombre 
                                                                * y la sinopcis de la pelicula*/
            datosPelicula.classList.add("card-body");/* la clase del div*/
    
            let titulo = document.createElement("h1");
            titulo.classList.add('card-title');
            titulo.textContent = pelicula.nombre;
    
        //5. Agregamos la sinopcis de la pelicula
            let sinopcis = document.createElement("p");
            sinopcis.classList.add("card-text");
            sinopcis.textContent = pelicula.sinopcis;
    
        //6. agregamos la clasificacion
            let clasificacion = document.createElement("h2");
            clasificacion.classList.add("card-clasificacion")
            clasificacion.textContent =  "Clasificacion: " + pelicula.clasificacion;
    
        //7. agregamos genero
            let genero = document.createElement("h3");
            genero.classList.add("card-genero")
            genero.textContent =  "Genero: " + pelicula.genero;
    
        //8. agregamos duracion
            let duracion = document.createElement("h4");
            duracion.classList.add("card-duracion")
            duracion.textContent =  "Duracoin: " + pelicula.duracion;
    
        //9. agregamos idioma
            let idioma = document.createElement("h5");
            idioma.classList.add("card-idioma")
            idioma.textContent =  "Idioma: " + pelicula.idioma;
    
        // empezamos ingresar hijos desde el mas itnerno
        // la targeta tiene un hijo que se el poster
        targeta.appendChild(poster);
        targeta.appendChild(titulo);
        targeta.appendChild(sinopcis);
        targeta.appendChild(genero);
        targeta.appendChild(clasificacion);
        targeta.appendChild(genero);
        targeta.appendChild(idioma);
        targeta.appendChild(duracion);
     
        // la columna tiene un hijo que sera la targeta"
        columna.appendChild(targeta);
        // el div el cual llammamos a javascript mediante el id fila tendra un hijo y sera la columna
        fila.appendChild(columna);
    
     
     })
}