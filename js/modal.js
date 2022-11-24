const abrirModal = document.querySelector("#botonAbrir")
const cerrarModal = document.querySelector("#botonCerrar")

const modalContainer = document.querySelector("#modalContenedor")


abrirModal.addEventListener("click", () => {
    modalContainer.classList.add("contenedorModalActivo")
})

cerrarModal.addEventListener("click", () => {
    modalContainer.classList.remove("contenedorModalActivo")
})