/*
ESTE ES UN CHALLENGE DEL AMIGO SECRETO QUE CONSISTE EN DESARROLLAR UN PROGRAMA 
QUE PERMITE QUE LOS USUARIOS INGRESEN NOMBRES DE AMIGOS EN UNA LISTA PARA LUEGO 
REALIZAR UN SORTEO ALEATORIO Y DETERMINAR QUIÉN ES EL "AMIGO SECRETO".

FUNCIONA DE LA SIGUIENTE MANERA: UNA VEZ ABIERTA LA CARPETA CON EL CHALLENGE EN VISUAL STUDIO CODE,
DAMOS CLICK DERECHO EN EL ARCHIVO HTML Y PRESIONAMOS OPEN WITH LIVE SERVER Y SE ABRIRÁ EN EL ORDENADOR,
INGRESAR A LA PÁGINA, EN LA BARRA ESPACIADORA INGRESAR EL NOMBRE DE UN AMIGO Y PRESIONAMOS AÑADIR Y ASÍ
CON LA CANTIDAD DE AMIGOS QUE QUERAMOS PONER, LOS NOMBRES SE VERÁN EN UNA LISTA EN LA PAGINA  Y POR ÚLTIMO 
DAMOS CLICK EN EL BOTÓN SORTEAR AMIGOS EL CUAL SELECCIONARÁ UNO DE LOS NOMBRES DE FORMA ALEATORIA MOSTRANDO
EL RESULTADO EN PANTALLA.

 YA SOLO ES CUESTION DE REFRESCAR LA PÁGINA PARA SEGUIR REALIZANDO SORTEOS.
*/


// Lista global para guardar los nombres
let amigos = [];

// Función que se ejecuta cuando haces clic en "Añadir"
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre valido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("No se puede ingresar el mismo nombre, ingresa otro.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ""; // Limpiar input
}

// Función para mostrar los nombres añadidos en la lista visual
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para sortear.");
        return;
    }

    //  Limpiar la lista visual de nombres agregados
    document.getElementById("listaAmigos").innerHTML = "";

    //  Elegir un nombre aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const nombreGanador = amigos[indice];

    //  Mostrar quien es el amigo secreto
    const titulo = document.createElement("h3");
    titulo.textContent = "🙊 EL AMIGO SECRETO ES:";
    titulo.style.marginTop = "2rem";
    titulo.style.color = "red";
    titulo.style.fontWeight = "bold";

    const ganador = document.createElement("p");
    ganador.textContent = nombreGanador.toUpperCase();
    ganador.style.fontSize = "2rem";
    ganador.style.color = "black";

    resultado.appendChild(titulo);
    resultado.appendChild(ganador);
}

