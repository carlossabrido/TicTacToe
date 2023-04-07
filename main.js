// constantes
let currentPlayer = "X";

const tablero = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// cambiar de pantalla

const swap = (id) => {
  let view = document.querySelectorAll(".view");
  let pageShow = document.getElementById(id);

  for (let i = 0; i < view.length; i++) {
    view[i].classList.add("none");
  }
  pageShow.classList.remove("none");
};

// conseguir nombres

const playerNames = () => {
  const nplayer1 = document.getElementById("player1").value;
  console.log(nplayer1);
  const nplayer2 = document.getElementById("player2").value;
  const nplayer3= document.getElementById('player3').value
  const cpu= document.getElementById('machine').value

  if (nplayer1 == "" && nplayer2 == ""|| nplayer3 =="") {
    document.getElementById("btn").disabled = true;
  } else {
    document.getElementById("btn").disabled = false;
  }

  place1 = document.getElementById("host1").innerHTML = nplayer1;
  place2 = document.getElementById("host2").innerHTML = nplayer2;
};

const comprobarPosicionGanadora = () => {
  for (let i = 0; i < tablero.length; i++) {
    if (
      tablero[i][0] &&
      tablero[i][0] === tablero[i][1] &&
      tablero[i][0] === tablero[i][2]
    )
      return tablero[i[0]];
    // horizontales
    if (
      tablero[0][i] &&
      tablero[0][i] === tablero[1][i] &&
      tablero[0][i] === tablero[2][i]
    )
      return tablero[0][i];
    // verticales
  }
  if (
    tablero[0][0] &&
    tablero[0][0] === tablero[1][1] &&
    tablero[0][0] === tablero[2][2]
  )
    return tablero[0][0];
  // diagonal
  if (
    tablero[0][2] &&
    tablero[0][2] === tablero[1][1] &&
    tablero[0][2] === tablero[2][0]
  )
    return tablero[0][2]; // la otra diagonal

  return null;
};

// winner

const winner = () => {
  if (comprobarPosicionGanadora() == true) {
    alert("has ganado");
  }
};

// poner y bloquear ficha

// const movement = (id, row, colum) => {
//   const chipMovement = document.querySelector(id);
//   let comp= comprobarPosicionGanadora()
//   let infoplayer = infoturn();
//   if (infoplayer > 0) {
//     if (
//       chipMovement.innerHTML == "" &&
//       chipMovement.innerHTML !== currentPlayer
//     ) {
//       chipMovement.innerHTML = currentPlayer;
//       tablero[row][colum] = currentPlayer;
//       comprobarPosicionGanadora()
//       if(comp){
//         alert(`ganador `)
//       }
//       ;
//       turn();
     
//     }
//     currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
//   } else {
//     if (
//       chipMovement.innerHTML !== "" &&
//       chipMovement.innerHTML == currentPlayer
//     ) {
//       chipMovement.innerHTML = "";
//       turn();
//     }
//   }
// };

// turnos
let player1turn = 3;
let player2turn = 3;
const turn = () => {
  if (currentPlayer == "X") {
    if (player1turn > 0) {
      player1turn--;
    } else {
      player1turn++;
    }
  }
  if (currentPlayer == "O") {
    if (player2turn > 0) {
      player2turn--;
    } else {
      player2turn++;
    }
  }
  count();
};

// dime los turnos

const infoturn = () => {
  whois()
  if (currentPlayer == "X") {
    return player1turn;
  } else {
    return player2turn;
  }
};

const count = () => {
  document.getElementById("count1").innerHTML = player1turn;
  document.getElementById("count2").innerHTML = player2turn;
};

const whois=()=>{
  document.getElementById("current").innerHTML = currentPlayer;
}


// reset // reset 

const reset=()=>{
   player1turn = 3;
   player2turn = 3; 
  let reset = document.querySelectorAll('.yellow ')
  reset.forEach(element=>{element.innerHTML=""})
  count()
}

// ia 



const movement = (id, row, colum) => {
  const chipMovement = document.querySelector(id);
  let check= comprobarPosicionGanadora()
  let infoplayer = infoturn();
  if (infoplayer > 0) {
    if (
      chipMovement.innerHTML == "" &&
      chipMovement.innerHTML !== currentPlayer
    ) {
      chipMovement.innerHTML = currentPlayer;
      tablero[row][colum] = currentPlayer;
      comprobarPosicionGanadora()
      if(check){
        alert(`ganador `)
      }
      
      turn();
     
    }
    currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
  } else {
    if (
      chipMovement.innerHTML !== "" &&
      chipMovement.innerHTML == currentPlayer
    ) {
      chipMovement.innerHTML = "";
      turn();
    }
  }
};
