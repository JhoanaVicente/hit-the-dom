function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
 }
 
 function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
 
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    }
 
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);


   var nombre = document.getElementById('Nombre*');
   var mailito = document.getElementById('Email*');
   var error = document.getElementById('error');
   error.style.color = 'black';/*le cambio el color mediante js 

 function enviarFormulario() {
   console.log('Enviando formulario...');
   /*estoy creando un arreglo para los mensajes error*/
   var mensajesError = [];
   if(nombre === null || nombre === ""){
      mensajesError.push('Ingresa tu nombre');
   }
   if(!mailito.includes('@')){
      mensajesError.push('Ingresa un e-mail valido');
   }
   error.innerHTML = mensajesError.join(','); /*convertimos el arreglo de mensajes error a una cadena texto */
     return false;


  
