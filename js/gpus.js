
function inicio(){
(async () => {

const {value: gpus} = await Swal.fire({
    title: "Placas de Videos",
    text: "Consulte por el precio y el stock de las Gpus escibiendo su nombre (ej: 3070 TI)",
    
    input: "text",
    inputPlaceholder:"Gpus",
    customClass:{
        popup: "alertVentana"
    },
    imageUrl: "/imagenes/logo diseñado 1.png",
    imageWidth:"20rem",
    position: "center-end",
    toast: true
})

const productoGpus = [
    {id: 1, nombre:"Placa de Video 1660 Super" , precio: 200000, stock: 3 },
    {id: 2, nombre:"Placa de Video 2060 Super" , precio: 220000, stock: 2  },
    {id: 3, nombre:"Placa de Video RTX 3070 TI" , precio: 250000, stock: 7 },
    {id: 4, nombre:"RTX 3080 TI ZOTAC LHR" , precio: 280000, stock: 1  },
    {id: 5, nombre:"RTX 3060 TI LHR" , precio:  310000, stock: 0  },
    {id: 6, nombre:"RTX 3070 PHOENIX GS" , precio: 320000, stock: 10  },
];

function returnAlert(resultado){
   return alert(`EL resultado es : \n\n${resultado.map(el => el.nombre , ).join(', ')} \nPrecio: ${resultado.map(el => el.precio )}.000\nStock: ${resultado.map(el => el.stock )} `);
}

if(gpus == "1660 Super" ){
    const resultado = productoGpus.filter((el) => el.nombre.includes("1660 Super"));
    returnAlert(resultado);
    
} else if(gpus == "2060 Super"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("2060 Super"));
    returnAlert(resultado);

}else if(gpus == "RTX 3070 TI"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3070 TI"));
    returnAlert(resultado);

}else if(gpus == "3080tI ZOTAC LHR"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3080 TI"));
    returnAlert(resultado);

}else if(gpus == "3060 TI LHR"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3060 TI"));
    returnAlert(resultado);

}else if(gpus == "3070 PHOENIX GS"){
    const resultado = productoGpus.filter((el) => el.nombre.includes("3070 PHOENIX"));
    returnAlert(resultado);
}



})();
}

console.log(inicio())

const modalContenedor = document.querySelector("#modalContenedor")
const contenedorProd = document.querySelector("#contenedorTarjetas")
const modal = document.querySelector("#modal")

const contadorCarrito = document.querySelector("#contadorCarrito")

const producto1 = stockProductos[1];

//-----------------------------------------


stockProductos.forEach((producto) => {


const div = document.createElement("div");
div.className = "tarjetaGpus"

div.innerHTML = `
                          <img class="imgGpus" src="${producto.img}"/>
                               <p class="parrafoPlatos">Placa de Video</p>
                         <p class="parrafoPlatos">${producto.placa}</p>
                           <h4 class="precio">Precio: $ ${producto.precio }</h4>
                          `


const boton = document.createElement("button")
boton.innerHTML = "Agregar al carrito"
boton.className = "botonAgregar"
boton.addEventListener("click", () => {
    agregarCarrito(producto.id)
} )


div.append(boton)

contenedorProd.append(div)




})

// agregar al carrito

const carrito = []

const agregarCarrito = (id) =>{
    const producto = stockProductos.find((item) => item.id === id)

    carrito.push(producto)
    console.log(producto)

    
    activarCarrito()
    contadorCarro()
} 


const activarCarrito = () =>{ 
    
    modal.innerHTML=` `

    carrito.forEach((producto) => {
        const div = document.createElement("div")
        div.className = "nuevoModal"
        div.innerHTML= `
       
        <p class="productoCarrito">${producto.placa}</p>
        <h2 class="precioCarrito">Precio: $ ${producto.precio }</h3>
        
        `
        const botonCerrar1 = document.createElement("button")
        botonCerrar1.innerHTML = ` <img class="logoBasura" src="../imagenes/borrar.png" alt=""></img>`
        botonCerrar1.className = "eliminarObjeto"

        botonCerrar1.addEventListener("click", () =>{
            div.remove()
            
            botonCerrar1.remove()
        })
        modal.append(botonCerrar1)
        modal.append(div)
        
        const GpusLS = localStorage.getItem("Gpus")
        //console.log(GpusLS)
   })
   
}



 

const contadorCarro = () => {
    contadorCarrito.innerHTML = carrito.length
}

//LOCAL STORAGE

const GpuJSON = JSON.stringify(stockProductos)

const RigsJSON = JSON.stringify(stockRigs)

localStorage.setItem("Gpus", GpuJSON)

localStorage.setItem("Rigs", RigsJSON)