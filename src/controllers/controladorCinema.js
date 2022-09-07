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

let peliculas = [
    {
        nombre: "bestia",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/bestia.jpg?alt=media&token=aa35a1f4-ad96-46dd-9ddd-17ae4ff77ed4",
        sinopcis: "A veces el susurro en los arbustos es en realidad un monstruo. Idris Elba (Rápidos y Furiosos: Hobbs & Shaw, El Escuadrón Suicida) protagoniza un nuevo y emocionante thriller sobre un padre y sus dos hijas adolescentes que se ven perseguidos por un enorme león que intenta demostrar que la selva sólo tiene un máximo depredador. Elba interpreta al Dr. Nate Daniels, un marido que acaba de enviudar y que regresa a Sudáfrica, donde conoció a su mujer, en un viaje que llevaba tiempo planeando con sus hijas a una zona de caza controlada por Martin Battles (Sharlto Copley, serie Muñeca Rusa, Maléfica), un viejo amigo de la familia y biólogo especializado en vida salvaje. Pero lo que comienza como un viaje de sanación se convierte en una aterradora lucha por sobrevivir cuando un león, que ha escapado de los cazadores clandestinos sediento de sangre y que ahora ve a todos los humanos como el enemigo, comienza a acecharlos",
        clasificacion: "+18",
        idioma: "en isubtitulado",

    },
    {
        nombre: "demonio",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/demonio.jpg?alt=media&token=8d61f673-9719-4d60-a49c-3d1facecc089",
        sinopcis: "Dos jóvenes hermanas, enviadas a vivir con su tía, descubren que todos los espejos de su casa están ocultos o cubiertos de una tela. Cuando una de las hermanas se encuentra con un espejo en el sótano, sin saberlo, libera a un demonio malicioso que había perseguido a su madre y a su tía años atrás.",
        clasificacion: "+18",
        idioma: "EN subtitulado",

    },
    {
        nombre: "dragon ball",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/dragon.jpg?alt=media&token=24334645-ef96-4188-97a1-848690755f81",
        sinopcis: "Son Goku destruyó en su momento a la Patrulla Roja. Ahora, ciertos individuos han decidido continuar con su legado y han creado a los androides definitivos: Gamma 1 y Gamma 2. Estos dos androides se autoproclaman superhéroes y deciden atacar a Piccolo y a Gohan. ¿Cuál es el objetivo de la nueva Patrulla Roja? Ante un peligro inminente, ¡llega el momento del despertar del Superhéroe! La película, que cuenta con el compromiso e intervención del creador original de Dragon Ball, Akira Toriyama, tiene al legendario creador de manga detrás de la historia original, el guión y el diseño de personajes del filme.",
        clasificacion: "+15",
        idioma: "ES",

    },
    {
        nombre: "el perro samurai",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/el%20perro%20samurai.png?alt=media&token=959cdd08-a5ac-46ed-91db-16c4ec63462f",
        sinopcis: "Hank, un sabueso con mala suerte, se encuentra en un pueblo lleno de gatos que necesitan un héroe que los defienda de un despiadado villano que quiere borrar a su aldea del mapa. Con la ayuda de un maestro que no quiere entrenarlo, nuestro desvalido héroe debe asumir el papel del samurái del pueblo y unirse a los aldeanos para salvar el día. El Perro Samurái: La leyenda de Kakamucho, próximamente en cines. Con las voces de Juanpa Zurita como Hank, Faisy como Ika Chu y Karla Díaz como Emiko.",
        clasificacion: "general",
        idioma: "ES",

    },
    {
        nombre: "gemelo siniestro",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/gemelo%20siniestro.png?alt=media&token=39be4c0e-3a52-43e0-b36a-2773a0b05179",
        sinopcis: "Después de un trágico accidente que cobra la vida de uno de sus gemelos, Rachel (Teresa Palmer) y su esposo Anthony (Steve Cree) se mudan al otro lado del mundo con su niño sobreviviente. Tienen la esperanza de construir una nueva vida. Pero lo que comienza como un tiempo de curación en la campiña escandinava, pronto dará un giro abominable cuando Rachel comience a desentrañar la tortuosa verdad sobre su hijo.",
        clasificacion: "+18",
        idioma: "ES",
    },
    {
        nombre: "telefono negro",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/telefono%20negro.png?alt=media&token=3b607710-71a0-4abf-beb0-64f5f1a06f0e",
        sinopcis: "Finney Shaw es un niño tímido pero inteligente de 13 años que es secuestrado y atrapado en un sótano insonorizado por un asesino sádico. Cuando un teléfono desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voces de las víctimas anteriores del asesino. Y están decididos a asegurarse de que lo que les pasó a ellos no le pase a Finney",
        clasificacion: "+18",
        idioma: "ES",
    },
    {
        nombre: "minions",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/minions.jpg?alt=media&token=e0a03884-e6f2-4abd-b608-f2bd7ff928b5",
        sinopcis: "Finney Shaw es un niño tímido pero inteligente de 13 años que es secuestrado y atrapado en un sótano insonorizado por un asesino sádico. Cuando un teléfono desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voces de las víctimas anteriores del asesino. Y están decididos a asegurarse de que lo que les pasó a ellos no le pase a FinneyEn el corazón de los años 70s, un Gru de 12 años crece en los suburbios. Fan de los supervillanos Vicious 6, Gru decide que quiere ser tan malvado como ellos para unírseles. Con ayuda de sus secuaces, los Minions, construye su primera guarida, usa sus primeras armas y cumple sus primeras misiones. Cuando los Vicious 6 traicionan a su líder, el legendario Wild Knuckles, Gru asiste a la entrevista para formar parte del equipo, pero no sale tan bien como esperaba. En la huida descubre que también los villanos necesitan ayuda de sus amigos.",
        clasificacion: "general",
        idioma: "ES",
    },
    {
        nombre: "vertigo",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/vertigo.png?alt=media&token=00ad5995-11a1-4d08-ada6-560518045d2b",
        sinopcis: "Finney Shaw es un niño tímido pero inteligente de 13 años que es secuestrado y atrapado en un sótano insonorizado por un asesino sádico. Cuando un teléfono desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voces de las víctimas anteriores del asesino. Y están decididos a asegurarse de que lo que les pasó a ellos no le pase a FinneyEn el corazón de los años 70s, un Gru de 12 años crece en los suburbios. Fan de los supervillanos Vicious 6, Gru decide que quiere ser tan malvado como ellos para unírseles. Con ayuda de sus secuaces, los Minions, construye su primera guarida, usa sus primeras armas y cumple sus primeras misiones. Cuando los Vicious 6 traicionan a su líder, el legendario Wild Knuckles, Gru asiste a la entrevista para formar parte del equipo, pero no sale tan bien como esperaba. En la huida descubre que también los villanos necesitan ayuda de sus amigos.Para las mejores amigas Becky (Grace Caroline Currey) y Hunter (Virginia Gardner), la vida consiste en conquistar los miedos y superar los límites. Pero después de escalar 600 metros hasta la cima de una remota torre de radio abandonada, se encuentran atrapadas e incomunicadas. Ahora, las habilidades de escalada de Becky y Hunter serán puestas a prueba mientras luchan desesperadamente por sobrevivir.",
        clasificacion: "general",
        idioma: "ES",
    },
    {
        nombre: "zomvie",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/zombie.png?alt=media&token=411487d2-a2dc-4af2-ab19-36938e3b614d",
        sinopcis: "secuela de la cinta de culto WYRMWOOD: ROAD TO DEAD, se lleva a cabo en un desierto australiano infestado de zombies donde el soldado Rhys quien ha dedicado su vida a rastrear y capturar supervivientes para el Cirujano General, se une a otros científicos locos, soldados malvados y héroes con la esperanza de encontrar una cura para el virus que amenaza a toda la humanidad.",        clasificacion: "+18",
        idioma: "ES",
    },
    {
        nombre: "supermascotas",
        genero: "siencia ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cineepf.appspot.com/o/supermascotas.jpg?alt=media&token=b14419fc-b458-40b8-be75-fc18085b98ee",
        sinopcis: "Cuando la Liga de la Justicia es capturada por Lex Luthor, el perro de Superman, Krypto, forma un equipo de mascotas de refugio a las que se les otorgan superpoderes: Un sabueso llamado Ace, que se vuelve superfuerte, un cerdo llamado PB, que puede crecer hasta alcanzar un tamaño gigante, una tortuga llamada Merton, que se vuelve superráp",
        clasificacion: "general",
        idioma: "ES",
    },
    
]
//recorriendo un arreglo en javascript

//
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
    poster.src = pelicula.poster;//se pone pelicula porque hace referencia al nombre de la funcion en el fo y no al nombre del vector
    
    // empezamos ingresar hijos desde el mas itnerno
    // la targeta tiene un hijo que se el poster
    targeta.appendChild(poster);
    // la columna tiene un hijo que sera la targeta
    columna.appendChild(targeta);
    // el div el cual lammamos a javascript mediante el id fila tendra un hijo y sera la columna
    fila.appendChild(columna);
 })