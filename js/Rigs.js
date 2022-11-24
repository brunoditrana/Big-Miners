const contenedorRigs = document.querySelector("#contenedorRigs")

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
 
boton.addEventListener("click", () => {
    agregarCarrito(producto1.id)
} )

rigs.append(boton)
contenedorRigs.append(rigs)


})

const carrito = []

const agregarCarrito = (id) =>{
    const producto = stockProductos.find((item) => item.id === id)

    carrito.push(producto)
    console.log(producto)
} 