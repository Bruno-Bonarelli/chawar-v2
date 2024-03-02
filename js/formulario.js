function formularioInit(){

    const nodoFormulario = document.querySelector("#formulario");
    nodoFormulario.addEventListener("submit", (event)=>{

        event.preventDefault();

        const nombre = document.querySelector("#name");
        const email = document.querySelector("#email");
        const consulta = document.querySelector("#message");

        if (nombre.value!=="" && email.value!=="" && consulta.value!==""){
            const checkFormulario = document.getElementById("succes")
            checkFormulario.innerHTML= `<br><p style=color:green>✓ Enviado ¡Gracias ${nombre.value} por tu consulta!</p>`;
            // Redireccionar después de 2 segundos
            setTimeout(function() {
                window.location.href = "contacto.html"; // Cambia "contacto.html" por la URL de tu página de contacto
            }, 2000);

        } else if (nombre.value==""){
            const errorNombre = document.getElementById("errorNombre");
            errorNombre.innerHTML = `<small style="color:red">Complete su nombre</small>`;

        } else if (email.value==""){
            const errorEmail = document.getElementById("errorEmail");
            errorEmail.innerHTML = `<small style="color:red">Complete su Email</small>`;
        } else if (consulta.value==""){

            const errorConsulta = document.getElementById("errorConsulta")
            errorConsulta.innerHTML = `<small style="color:red">Escriba una consulta</small>`;
        }
    })
}


