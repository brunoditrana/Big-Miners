const contenedorRigs = document.querySelector("#contenedorRigs")

stockRigs.forEach((producto1) => {

    const rigs = document.createElement("div");
    rigs.className = "tarjetaGpus"

    rigs.innerHTML = `
                          <img class="imgGpus" src="${producto1.img}"/>
                               <p class="parrafoPlatos">Rig de Mineria</p>
                         <p class="parrafoPlatos">${producto1.Rigs}</p>
                           <h4 class="precio">Precio: $ ${producto1.precio }</h4>
                          <button id="AgrgarCarrito"> Agregar al carrito</button>`

contenedorRigs.append(rigs)

})