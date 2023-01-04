const abrirModal = document.querySelector("#botonAbrir")
const cerrarModal = document.querySelector("#botonCerrar")

const modalContainer = document.querySelector("#modalContenedor")

const botonEliminar = document.querySelector(".eliminarObjeto")
const nuevoModal = document.querySelector(".nuevoModal")

abrirModal.addEventListener("click", () => {
    modalContainer.classList.add("contenedorModalActivo")
})

cerrarModal.addEventListener("click", () => {
    modalContainer.classList.remove("contenedorModalActivo")
})



botonEliminar.addEventListener("click", () =>{
    modalContainer.classList.remove("contenedorModalActivo")
})