//function Iniciar Sesión
const btnInicioDeSesion= document.getElementById("botonDeInicioDeSesion")
async function mostrarFormulario() {
    for (let i = 0; i < 3; i++){
        const { value: formValues } = await Swal.fire({
            title: "Registrarse || RezArrows",
            html: `
                <h6>Ingrese su mail para registrarse</h6>
                <input id="swal-input1" class="swal2-input">
                <h6 class="mt-3">Contraceña</h6>   
                <input id="swal-input2" class="swal2-input">
                <h6 class="mt-3">Repita la contraceña</h6> 
                <input id="swal-input3" class="swal2-input">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            preConfirm: () => { 
                
                const primerInput = document.getElementById("swal-input2").value
                const segundoInput = document.getElementById("swal-input3").value
    
               
    
                    if (primerInput === segundoInput) {
                        return { success: true };
                    } else {
                        return { success: false };
                    }
    
                
                
                
            }
        });
        
        if (formValues.success) {
            Swal.fire({
                title: "Creaste tu cuenta con exito!",
                icon: "success"
            
            });
            break;
            } else{
                Swal.fire({
                title: "Las contraceñas no coinciden, agotaste tus intentos.",
                icon: "error"
                });
        }
    
    }
}

//Ejecucion de la funcion Inicio Sesión
btnInicioDeSesion.addEventListener("click",()=>{
    mostrarFormulario();
})

//Funcion creadora de Productos
function crearProductos(nombre, precio, talles, genero){
    this.nombre= nombre;
    this.precio= precio;
    this.talles= talles;
    this.genero= genero;
}; 


$(document).ready(function() {
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});


document.querySelectorAll('.header').forEach(boton => {
    boton.addEventListener('click', function() {
        // Obtener el nombre del objeto asociado al botón
        const objetoName = this.getAttribute('data-objeto');
        // Guardar el valor en el localStorage
        localStorage.setItem('objeto', objetoName);
        // Redirigir al segundo HTML
        window.location.href = "estructuraParaLosProductos.html";
    });
});