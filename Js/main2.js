//funcion constructora de Productos 
function crearProductos(nombre, precio, talles, genero, imagen){
    this.nombre= nombre;
    this.precio= precio;
    this.talles= talles;
    this.genero= genero;
    this.imagen= imagen
}; 
//Productos

const sandalia1= new crearProductos("Sandalias Adilette Comfort","$62.999","35 36.5 38 39 40 (UK)","Unisex","imgProductosGrandes/sandaliasAdiletteComfort.png"),
zapatilla1= new crearProductos("Ozmillen","$160.999","35 36.5 38 39 40 (UK)", "***UNISEX, HORMA GRANDE***","imgProductosGrandes/zapatillasOzmillen.png"),
zapatilla2= new crearProductos("Team Fu", "$160.999","35 36.5 38 39 40 (UK)", "Mujer","imgProductosGrandes/Team fu.png"),
zapatilla3= new crearProductos("Alphaboost V1","$97.999","35 36.5 38 39 40 (UK)", "Unisex","imgProductosGrandes/zapatillaVlCourt.png"),
zapatilla4= new crearProductos("Adifom Q","$81.999","35 36.5 38 39 40 (UK)", "***UNISEX, HORMA GRANDE***","imgProductosGrandes/zapatillasAdifom.png"),
pantalon1= new crearProductos("Adi2000", "$189.999","Xs S M L Xl 2Xl", "Mujer","imgProductosGrandes/PantalonDeportivosFlames.png"),
remera1= new crearProductos("Remera Adidas Z.N.E", "$69.999","Xs S M L Xl 2Xl", "Unisex","imgProductosGrandes/remeraOwnTheRun.png"),
remera2= new crearProductos("Remera Adidas Beckenbauer", "$69.999","Xs S M L Xl 2Xl", "Unisex","imgProductosGrandes/remeraFlame.png"),
zapatilla5= new crearProductos("Vl Adidas Court", "$99.999","35.5 (UK 4) 36.5 (UK 5) 38 (UK 6) 39 (UK 7) 40 (UK 8) 41.5 (UK 9) 43 (UK 10) 44 (UK 11) 45.5 (UK 12) 47 (UK 13)", "Hombre","imgProductosGrandes/zapatillasAdidasBali.png"),
botin1= new crearProductos("Botines Crazyfast Messi", "$149.999","35 36.5 38 39 40 (UK)", "Hombre","imgProductosGrandes/botinesMessi.png"),
conjunto1= new crearProductos("Conjunto Mono", "$109.999","Xs S M L Xl 2Xl", "Unisex","imgProductosGrandes/shortMono.png"),
sandalia2= new crearProductos("Adicane","$68.999", "35 36.5 38 39 40 (UK)", "Hombre","imgProductosGrandes/ojotasAdicane.png")

// "35.5 (UK 4)36.5 (UK 5)38 (UK 6)39 (UK 7)40 (UK 8)41.5 (UK 9)43 (UK 10)44 (UK 11)45.5 (UK 12)47 (UK 13)"

//funcion creadora html de los productos 
const h11 = document.querySelector(".h11");
const h12 = document.querySelector(".text-light");

function crearHtml(obj, etiqueta) {
    let container = document.createElement("div");
    container.innerHTML = `
        
        <div class="row">
        <div class="col-9"><img class="ui fluid image" src="${obj.imagen}"></div>
        <div class="col-3 pt-3"><h1>${obj.nombre}</h1>
    
        <h4>${obj.precio}</h4>

        <div class="huge ui animated button teal mt-10" tabindex="0"> 
        <div class="visible content">Comprar</div>
        <div class="hidden content">
            <i class="shop icon"></i>
        </div>
        </div>

        <h4 class="fs-4 mt-7">Talles</h4>
        <p class="fs-5">${obj.talles}</p>
        <h1>${obj.genero}</h1>

        <div class="d-flex justify-content-center pt-4">
            <div class=""><img class="ui tiny image" src="/images/wireframe/image.png"></div>
            <div class="ps-2 pe-2"><img class="ui tiny image" src="/images/wireframe/image.png"></div>
            <div class=""><img class="ui tiny image" src="/images/wireframe/image.png"></div>
        </div>

        <div class="mt-8"> 

        <div class="content fs-6 mt-9">
        <a class="header text-dark">ENVÍO GRATIS A PARTIR DE $79.999</a>
        </div>

        <div class="content fs-6">
        <a class="header text-dark segundo">DEVOLUCIONES GRATIS ¿NO ES DE TU TALLE? PODES DEVOLVERLO EN UN PLAZO DE 60 DIAS</a>
        </div>

        </div>

        <div id="rating-stars" class="mt-6 fs-5">
         <span class="star" data-star="1">&#9733;</span>
         <span class="star" data-star="2">&#9733;</span>
         <span class="star" data-star="3">&#9733;</span>
         <span class="star" data-star="4">&#9733;</span>
         <span class="star" data-star="5">&#9733;</span>
        </div>
        <p id="rating-value" class="mt-2 fs-5">Valoración: 0 estrellas</p>

        </h1>
        </div>
        </div>
        
        
    `;
    etiqueta.innerHTML = "";
    etiqueta.appendChild(container);
    h12.innerText = obj.nombre;

}


//Llamar el nombre de la clase de la clave guardada en LocalStorage de mi Objeto
function llamarClaseDelLocalStorage(){
 return localStorage.getItem('objeto');
}
let variable= llamarClaseDelLocalStorage()

console.log(variable);

let objeto=""

switch(variable){
    case "sandalia1": 
    objeto= sandalia1
    break;
    case "zapatilla1": 
    objeto= zapatilla1
    break;
    case "zapatilla2": 
    objeto= zapatilla2
    break;
    case "zapatilla3": 
    objeto= zapatilla3
    break;
    case "zapatilla4": 
    objeto= zapatilla4
    break;
    case "pantalon1": 
    objeto= pantalon1
    break;
    case "remera1": 
    objeto= remera1
    break;
    case "remera2": 
    objeto= remera2
    break;
    case "zapatilla5": 
    objeto= zapatilla5
    break;
    case "remera3": 
    objeto= remera3
    break;
    case "botin1": 
    objeto= botin1
    break;
    case "conjunto1": 
    objeto= conjunto1
    break;
    case "sandalia2": 
    objeto= sandalia2
    break;

}

crearHtml(objeto,h11)


$(document).ready(function() {
    $(".star").click(function() {
      var rating = parseInt($(this).attr("data-star"));
      $("#rating-value").text("Valoración: " + rating + " estrella(s)");
    });
});

//Links de ayuda dentro de mis productos
const primerlink= document.querySelector(".header")
const segundolink= document.querySelector(".segundo")

primerlink.addEventListener("click",()=>{
    Swal.fire({title: "ENVÍO GRATIS A PARTIR DE $79,999",
    text: "Envíos gratis en todas las compras superiores a $79,999. En caso de que tu pedido se encuentre por debajo de este valor, el costo de envío será de $3,699 ARS.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#008080", // Cambia el color de fondo del botón a verde
    confirmButtonTextColor: "#ffffff",}) // Cambia el color del texto del botón a blanco);
})

segundolink.addEventListener("click",()=>{
    Swal.fire({title: "¿CÓMO PUEDO DEVOLVER MI PEDIDO?",
    text: "Recuerda que tienes 60 días desde al fecha de recepción de tu pedio para iniciar tu proceso de Devolución o cambio \nDeberás cumplir con los Requisitos de Devolución. \nInicia tu proceso desde nuestro Portal de Autogestión o comunicándote con nuestro Centro de Atención al Cliente. \nNota: No se aceptan devoluciones de articulos personalilzados, trajes de baño, medias, calcetas, marcarillas, Top deportivos, asi como lanzamientos especiales o productso Hype como GUCCI, PRADA, BAD BUNNY. \nANTES DE CONTACTARNOS TEN LISTA LA SIGUIENTE INFORMACIÓN: \nVerificá que el producto esté nuevo, sin uso, con su caja y/o envoltorio original, y con sus etiquetas sin haber sido desprendidas. Para consultar otros requisitos ingresá acá. \nTené listo el Número de Pedido / Orden que encuentras en tu correo de confirmación. \nConsultá la disponibilidad del producto en nuestra página web. \nSi deseas cambiar la talla: Verificá la disponibilidad de talle en nuestra página web, tené listo el código de producto y el talle que deseas. Si compraste el producto en descuento, podés cambiarlo sin problema. Si deseas reemplazar por otro producto deberás acudir a tienda, no hay reemplazos vía Centro de Atención al Cliente, solo Cambios y Reembolsos.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#008080", // Cambia el color de fondo del botón a verde
    confirmButtonTextColor: "#ffffff",}) // Cambia el color del texto del botón a blanco);
})


primerlink.addEventListener("mouseenter", () => {
    primerlink.style.backgroundColor = "black";
    primerlink.classList.add("text-white"); // Agrega la clase para cambiar el color del texto a rojo
});

primerlink.addEventListener("mouseleave", () => {
    primerlink.style.backgroundColor = "white";
    primerlink.classList.remove("text-white"); // Quita la clase para restaurar el color del texto
    primerlink.style.color = "black"; // Restaura el color del texto a negro
});

segundolink.addEventListener("mouseenter", () => {
    segundolink.style.backgroundColor = "black";
    segundolink.classList.add("text-white"); // Agrega la clase para cambiar el color del texto a rojo
});

segundolink.addEventListener("mouseleave", () => {
    segundolink.style.backgroundColor = "white";
    segundolink.classList.remove("text-white"); // Quita la clase para restaurar el color del texto
    segundolink.style.color = "black"; // Restaura el color del texto a negro
});



const btnCarrito= document.querySelector(".hidden")

// Carrito
btnCarrito.addEventListener("click",()=>{
    
    // window.location.href = "carrito.html"
})




