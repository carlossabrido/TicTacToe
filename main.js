const show = (screen) => {
    if (screen == "pantalla1") {
      // si a la pantalla a la que voy es la  1  le quite el none a la pantalla 1 el none y se lo pone 2
      document.querySelector("#pantalla1").classList.remove("none");
      document.querySelector("#pantalla2").classList.add("none");
  
    } else {
      document.querySelector("#pantalla2").classList.remove("none");
      document.querySelector("#pantalla1").classList.add("none");
    }
  };