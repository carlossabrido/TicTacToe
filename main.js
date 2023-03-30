// const show = (screen) => {
//     if (screen == "pantalla1") {
//       // si a la pantalla a la que voy es la  1  le quite el none a la pantalla 1 el none y se lo pone 2
//       document.querySelector("#pantalla1").classList.remove("none");
//       document.querySelector("#pantalla2").classList.add("none");
  
//     } else {
//       document.querySelector("#pantalla2").classList.remove("none");
//       document.querySelector("#pantalla1").classList.add("none");
//     }
//   };


const swap=(id)=>{
  let view = document.querySelectorAll('.view')
  let pageShow = document.getElementById(id)
  
  for(let i=0;i<view.length;i++){
    view[i].classList.add("none")
  }
  pageShow.classList.remove("none")
}

let jugada =[
  [1,1,1],
  [2,1,2],
  [0,2,0],
]


const comprobarPosicionGanadora = (tablero) => {
  for (let i = 0; i < tablero.length; i++){
      if(tablero[i][0] && tablero[i][0] === tablero[i][1] && tablero[i][0] === tablero[i][2]) return tablero[i][0]; // horizontales
      if(tablero[0][i] && tablero[0][i] === tablero[1][i] && tablero[0][i] === tablero[2][i]) return tablero[0][i]; // verticales
  }
  if(tablero[0][0] && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) return tablero[0][0]; // diagonal
  if(tablero[0][2] && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) return tablero[0][2]; // la otra diagonal
  return null
};

console.log(comprobarPosicionGanadora(jugada))




const fichas =(tablero)=>{
  for(let i=0;i<tablero.length;i++){
    for(let j=0; i<tablero.length;i++){
      if(tablero[i]==tablero[j])
      return false
    }
  }
   
}
console.log(fichas(jugada))




