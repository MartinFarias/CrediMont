setInterval (() => {
    let reloj = document.getElementsByClassName ("reloj")[0];
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    if (hora < 10) {
     hora = `0${hora}`
    }
    let minutos = tiempoActual.getMinutes();
    if (minutos < 10) {
     minutos = `0${minutos}`
    }
    let segundos = tiempoActual.getSeconds();if (segundos < 10) {
     segundos = `0${segundos}`
    }
    reloj.innerHTML = `${hora}:${minutos}:${segundos}`;
   }, 1000 )
   







   setInterval (() => {
    const calendario = document.getElementsByClassName ("calendario")[0];
    let tiempoActual = new Date();
    let dia = tiempoActual.getDay();
    {
     dia = `0${dia}`
    }
    let meses = tiempoActual.getMonth();
    {
     meses = `0${meses}`
    }
    let anios = tiempoActual.getFullYear();{
     anios = `${anios}`
    }
    calendario.innerHTML = `${dia}:${meses}:${anios}`;
   })






