let listaDeAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.querySelector("#amigo");
    let nombreAmigo = inputAmigo.value.trim(); 

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    inputAmigo.value = "";
    mostrarAmigosEnLista();
}

function mostrarAmigosEnLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];
        let listItem = document.createElement("li");
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    }
}

function sortearAmigo(){
    if (listaDeAmigos.length === 0){

        alert("No hay amigos en la lista");
        return;
        }
        
        let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos [indiceAleatorio];
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";
         let listItem = document.createElement("li");
         listItem.textContent = `El amigo sorteado es: ${amigoSorteado}`;
         resultadoLista.appendChild(listItem);
    



}