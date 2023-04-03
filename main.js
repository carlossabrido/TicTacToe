
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
      return true
    }
  }
   
}
console.log(fichas(jugada))


// conseguir nombres 

const names= ()=>{
  const nombreJugador2= document.getElementById('jugador-2-nombre').value;
  if(nombreJugador2==""){
    alert('nombre no insertado')
    document.getElementById('add1').focus();
  }
  console.log(nombreJugador2)

}


// const names2=()=>{
//   const btn1= document.getElementById('add1');
//   if(btn1!==0){
//     const destiny= document.getElementById('reception').innerText(btn1)
//   }console.log(destiny)
// }



// const names3 = ()=>{
//   const btn1= document.getElementById('add1').value;
//   const nameee=document.getElementById('reception').innerHTML(btn1)
// }

