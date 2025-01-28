// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

/**
 * Capturamos el enter en el input ya que me parece tedioso tener que presionar el tab 
 * para llamar a la funcion.
 */
document.getElementById('amigo').addEventListener('keypress',function(event){
    if (event.key === 'Enter'){
        agregarAmigo() // llamar a la funcion cuando en el input se presione Enter
    }
})


/**
 * Toma el nombre cargado en el input id amigo 
 * valida que no este vacio
 * valida que no se repita en la lista
 * y lo agrega en la lista
 * muestra la lista
 * 
 */
function agregarAmigo(){
    let nuevoNombre = document.getElementById('amigo');
    if (nuevoNombre.value.trim() !== ""){
        if (!listaAmigos.some(amigo => amigo.toLowerCase() === nuevoNombre.value.toLowerCase())){
            listaAmigos.push(formatearNombre(nuevoNombre.value));
            mostrarLista();
            nuevoNombre.value='';
            nuevoNombre.focus();
        }else{
            alert(`"${nuevoNombre.value}" ya esta en la Lista`);
            nuevoNombre.select();
            nuevoNombre.focus();
        }
    }else{
        alert("Ingrese un nombre, por favor");
        return;
    }
    

}

/**
 * Funcion que muestra el contenido de la lista
 * primero la ordena alfabéticamente
 * luego limpia el UL para evitar duplicados
 * luego agrega todos los nombres que esten en la lista
 * 
 */
function mostrarLista(){
    listaAmigos.sort((a, b) => a.localeCompare(b));
    let ulAmigos = document.getElementById('listaAmigos');
    ulAmigos.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        // Creamos el LI con el nombre
        let liNuevo = document.createElement('li');
        liNuevo.textContent = amigo;
        
        // agregamos un boton para eliminar
        let btEliminar = document.createElement('button');
        btEliminar.textContent = " - ";
        btEliminar.style.marginLeft = "15px";
        btEliminar.onclick = () => eliminarAmigo(index);
        // Agregamos el Boton al LI
        liNuevo.appendChild(btEliminar);
        // Agregamos el LI al UL
        ulAmigos.appendChild(liNuevo);
    });
}


/**
 * Recive una cadena de texto (un nombre) y combierte la primera letra en mayuscula
 * y el resto en minusculas
 * @param {String} nombre 
 * @returns String
 */
function formatearNombre(nombre){
    return nombre.charAt(0).toUpperCase()+nombre.slice(1).toLowerCase();
}

/**
 * Funcion que sortea una persona al azar del listado de amigos cargados
 * usa la funcion math.random para obtener un numero de indice.
 * para evitar que se repita voy a eliminar de la lista al seleccionado.
 * ademas de que se limpia la lista de sorteados ya que el que tiene el nombre es solo suyo (mantener secretismo)
 * 
 * @returns  
 */
function sortearAmigo(){
    const ulResultados = document.getElementById('resultado');
    if (listaAmigos.length === 0){
        alert("No hay amigos para sortear")
        return;
    }
    const numeroSorteado = Math.floor(Math.random()*listaAmigos.length);
    const nombreSorteado = listaAmigos[numeroSorteado];
    const ulSorteados = document.getElementById('resultado');
    ulSorteados.innerHTML = '';
    let liNuevo = document.createElement('li');
    liNuevo.textContent = nombreSorteado;
    let btEliminar = document.createElement('button');
    btEliminar.textContent = " - ";
    btEliminar.style.marginLeft = "15px";
    btEliminar.onclick = () => limpiarSorteados();
    liNuevo.appendChild(btEliminar);
    ulSorteados.appendChild(liNuevo);
    listaAmigos.splice(numeroSorteado,1);
    mostrarLista()
    console.log("lista final  ", listaAmigos)
}

/**
 * Elimina de la lista de Amigos el nombre que fue cargado en la pagina
 */
function eliminarAmigo(index){
    listaAmigos.splice(index,1);
    mostrarLista();
}

/**
 * Limpia el contenedor de amigo sorteado
 * entrega el foco al boton de sorteo
 */

function limpiarSorteados(){
    const ulSorteados = document.getElementById('resultado');
    ulSorteados.innerHTML = '';
    const btSorteo = document.getElementById
}