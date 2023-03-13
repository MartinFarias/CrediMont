


let divPrecioDolar = document.getElementById("precioDolar")

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")


.then((res) => res.json())
.then(
    (data) => {
    for(let dolar of data){
let precioDelDia =document.createElement("div")
precioDelDia.innerHTML = ` <div id="" class="caja">
<p class="compra"> compra ${dolar.casa.compra}</p>
<p class="venta"> venta ${dolar.casa.venta}</p>
      </div>`
    
   
    }
})


