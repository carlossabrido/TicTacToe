// constantes
let currentPlayer = "X";

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

  if (nplayer1 == "" && nplayer2 == "") {
    document.getElementById("btn").disabled = true;
  } else {
    document.getElementById("btn").disabled = false;
  }

  place1 = document.getElementById("host1").innerHTML = nplayer1;
  place2 = document.getElementById("host2").innerHTML = nplayer2;
};

const comprobarPosicionGanadora = (tablero) => {
  for (let i = 0; i < tablero.length; i++) {
    if (
      tablero[i][0] &&
      tablero[i][0] === tablero[i][1] &&
      tablero[i][0] === tablero[i][2]
    )
      return tablero[i][0]; // horizontales
    if (
      tablero[0][i] &&
      tablero[0][i] === tablero[1][i] &&
      tablero[0][i] === tablero[2][i]
    )
      return tablero[0][i]; // verticales
  }
  if (
    tablero[0][0] &&
    tablero[0][0] === tablero[1][1] &&
    tablero[0][0] === tablero[2][2]
  )
    return tablero[0][0]; // diagonal
  if (
    tablero[0][2] &&
    tablero[0][2] === tablero[1][1] &&
    tablero[0][2] === tablero[2][0]
  )
    return tablero[0][2]; // la otra diagonal
  return null;
};

// const movement = (id) => {
//   const chipMovement = document.querySelector(id);
//   chipMovement.innerHTML = currentPlayer;
//   currentPlayer = currentPlayer == "X" ? "O" : "X";
//   console.log(currentPlayer)
// };

// ficha repetida

const table = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const movement = (id) => {
  const chipMovement = document.querySelector(id);
  for (let i = 0; i < table.length; i++) {
    console.log(table[i]);
    if (chipMovement.innerHTML == "") {
      chipMovement.innerHTML = currentPlayer;
      currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
    }
  }
};


