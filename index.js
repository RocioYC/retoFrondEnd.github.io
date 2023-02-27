// Para activar el efecto hover
const btn_card = document.querySelectorAll('.btn-card-2');

for (let i = 0; i < btn_card.length; i++) {
    btn_card[i].addEventListener('mouseover', function () {
        this.parentElement.classList.add('active');
    });

    btn_card[i].addEventListener('mouseout', function () {
        this.parentElement.classList.remove('active');
    });
}

// Activación del boton
var enlace = document.getElementById("mi-boton");
var contenido = document.getElementById("mi-contenido");
enlace.addEventListener("click", function(e) {
  e.preventDefault(); //Hace que no se redireccione
  contenido.classList.toggle("activo");
});


// var enlaces = document.querySelectorAll("[class^='mi-boton']");
// enlaces.forEach(function(enlace) {
//   enlace.addEventListener("click", function(e) {
//     e.preventDefault();//Hace que no se redireccione
//     var target = document.getElementById(this.getAttribute("data-target"));
//     if (target.style.maxHeight) {
//       target.style.maxHeight = null;
//     } else {
//       target.style.maxHeight = target.scrollHeight + "px";
//     }
//   });
// });
