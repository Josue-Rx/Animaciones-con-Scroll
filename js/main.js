window.addEventListener("scroll", function(){
    let animacion = document.getElementById("animado"); 
    let posicionObj = animacion.getBoundingClientRect().top; 

    console.log(posicionObj);

    let tamanoPantalla = window.innerHeight/3; 

    if(posicionObj < tamanoPantalla) {
        animacion.style.animation = "mover 1s ease-out"
    }
    
})