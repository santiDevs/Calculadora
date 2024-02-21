const pantalla = document.getElementById("pantalla")
const botones =  document.querySelectorAll(".btn")

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent
                       
        //Poner el 0 al presionar la tecla c
        if (boton.id === "c"){
            pantalla.textContent = "0"
            return
        }

        if (boton.id === "borrar"){            
            if (pantalla.textContent.length === 1 || pantalla.textContent == "Error"){
                pantalla.textContent = "0"
            }
            else{
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return
        }

        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent)
            }
            catch{
                pantalla.textContent = "Error"                
            }

            return
        }
        
        //Verifica los botones presionados y los agrega a la pantalla
        if (pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonApretado
        }
        else{            
            pantalla.textContent += botonApretado        
        }

        if (pantalla.textContent.length >= 20){
            pantalla.textContent = "Error"
        }

    })
})

function comportamiendo(a){

    //Poner el 0 al presionar la tecla c
    if (a.id === "c"){
        pantalla.textContent = "0"
        return
    }

    if (a.id === "borrar"){            
        if (pantalla.textContent.length === 1 || pantalla.textContent == "Error"){
            pantalla.textContent = "0"
        }
        else{
            pantalla.textContent = pantalla.textContent.slice(0, -1)
        }
        return
    }

    if (a.id === "igual"){
        try{
            pantalla.textContent = eval(pantalla.textContent)
        }
        catch{
            pantalla.textContent = "Error"                
        }

        return
    }
}