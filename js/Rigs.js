const contenedorRigs = document.querySelector("#contenedorRigs")
const modal = document.querySelector("#modal")

stockRigs.forEach((producto1) => {

    const rigs = document.createElement("div");
    rigs.className = "tarjetaGpus"

    rigs.innerHTML = `
                          <img class="imgGpus" src="${producto1.img}"/>
                               <p class="parrafoPlatos">Rig de Mineria</p>
                         <p class="parrafoPlatos">${producto1.Rigs}</p>
                           <h4 class="precio">Precio: $ ${producto1.precio }</h4>
                          `

 const boton = document.createElement("button")
boton.innerHTML = "Agregar al carrito"
 boton.className = "botonAgregar"
boton.addEventListener("click", () => {
    agregarCarrito(producto1.id)
} )

rigs.append(boton)
contenedorRigs.append(rigs)


})

const carrito1 = []

const agregarCarrito = (id) =>{
    const producto1 = stockRigs.find((item) => item.id === id)

    carrito1.push(producto1)
    console.log(producto1)

    activarCarrito()
    contadorCarro()
} 

const activarCarrito = () =>{ 
    //const modal = document.querySelector(".modal")
    //modal.innerHTML= ""

    carrito1.forEach((producto1) => {
        const rigs = document.createElement("div")
        rigs.className = "modal"
        rigs.innerHTML= `
        
        <p class="productoCarrito">${producto1.Rigs}</p>
        <h3 class="precioCarrito">${producto1.precio }</h3>

        `
   
        modal.append(rigs)
   })
   
}

const contadorCarro = () => {
    contadorCarrito.innerHTML = carrito1.length
}