function calculadora() {
  let interes = 40;
  let SimularPrestamo = document.getElementById("SimularPrestamo");
  SimularPrestamo.addEventListener("submit", (e) => {
    e.preventDefault();
    inputMonto = parseInt(document.getElementById("montoInput").value);
    inputCuotas = parseInt(document.getElementById("CuotasInput").value);

    let interesTotal = (inputMonto * interes) / 100;
    cuotaPromedio = (inputMonto + interesTotal) / inputCuotas;
    let totalPrestamo = inputMonto + interesTotal;
    if (inputMonto > 100000) {
    Swal.fire({
       title: `su monto a solicitar ${inputMonto} es superior a lo disponible `,
        text: "monto maximo $100.000",
        icon: "error",
        confirmButtonText: "Continuar",
        confirmButtonColor: "red",
        timer: 10000,
      timerProgressBar: true,
      });
    } else if (inputMonto < 5000) {
      Swal.fire({
        title: `su monto a solicitar ${inputMonto} es menor a lo disponible `,
        text: `monto minimo $5.000`,
        icon: "error",
        confirmButtonText: "Continuar",
        confirmButtonColor: "red",
        timer: 10000,
      timerProgressBar: true,
      });
    }

    Swal.fire({
      title: `Su cuota promedio es de ${cuotaPromedio}`,
      text: `El monto total de su prestamo es de ${totalPrestamo}`,
      icon: "success",
      confirmButtonText: "Continuar",
      confirmButtonColor: "blue",
      timer: 10000,
      timerProgressBar: true,
    });
  });
}

calculadora();