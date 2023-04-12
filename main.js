// constantes
let currentPlayer = "X";

const tablero = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// cambiar de pantalla

// const swap = (id) => {
//   let view = document.querySelectorAll(".view");
//   let pageShow = document.getElementById(id);

//   for (let i = 0; i < view.length; i++) {
//     view[i].classList.add("none");
//   }
//   pageShow.classList.remove("none");
//   reset()
// }

const swap2 = () => {
  const nplayer1 = document.getElementById("player1").value;
  const nplayer2 = document.getElementById("player2").value;
  const tick = document.getElementById("check").checked;
  console.log(tick);

  if (nplayer1 !== "" && nplayer2 !== "") {
    document.getElementById("host1").innerHTML = nplayer1;
    document.getElementById("host2").innerHTML = nplayer2;
    document.getElementById("pantalla1").classList.add("none");
    document.getElementById("pantalla44").classList.remove("none");
  }

  if (nplayer1 !== "" && tick == true) {
    document.getElementById("host1").innerHTML = nplayer1;
    document.getElementById("host2").innerHTML = "CPU";
    document.getElementById("pantalla1").classList.add("none");
    document.getElementById("pantalla44").classList.remove("none");
  }
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


const resete = () => {
  window.location.reload();
};

// poner y bloquear ficha

const movement = (id, row, colum) => {
  const tick = document.getElementById("check").checked;
  const nplayer1 = document.getElementById("player1").value;
  const chipMovement = document.querySelector(id);
  let infoplayer = infoturn();
  if (tick == false) {
    if (infoplayer > 0) {
      if (
        chipMovement.innerHTML == "" &&
        chipMovement.innerHTML !== currentPlayer
      ) {
        chipMovement.innerHTML = currentPlayer;
        tablero[row][colum] = currentPlayer;
        let comp = comprobarPosicionGanadora();
        if (comp == "X" || comp == "O") {
          document.getElementById("winner").classList.remove("none");
          document.getElementById("pantalla44").classList.add("none");
          if (comp == "X") {
            const nplayer1 = document.getElementById("player1").value;
            document.getElementById("winnerN").innerHTML = `${nplayer1} wins!!`;
          } else {
            const nplayer2 = document.getElementById("player2").value;
            document.getElementById("winnerN").innerHTML = `${nplayer2} wins!!`;
          }
        }

        turn();
      }
      currentPlayer = currentPlayer == "X" ? "O" : "X";
      console.log(currentPlayer);
    } else {
      if (
        chipMovement.innerHTML !== "" &&
        chipMovement.innerHTML == currentPlayer
      ) {
        chipMovement.innerHTML = "";
        turn();
      }
    }
  } else {
    let infoplayer = infoturn();
    if (infoplayer > 0) {
      if (
        chipMovement.innerHTML == "" &&
        chipMovement.innerHTML !== currentPlayer
      ) {
        chipMovement.innerHTML = currentPlayer;
        tablero[row][colum] = currentPlayer;
        generateRandomPosition();
        let check = comprobarPosicionGanadora();
        if (check == "X" || check == "O") {
          document.getElementById("winner").classList.remove("none");
          document.getElementById("pantalla44").classList.add("none");
          if (check == "X") {
            document.getElementById("winnerN").innerHTML = `${nplayer1} wins!!`;
          } else {
            document.getElementById("winnerN").innerHTML = `CPU wins!!`;
          }
        }

        
        turn();
        comprobarPosicionGanadora()
      }
    } else {
      if (
        chipMovement.innerHTML !== "" &&
        chipMovement.innerHTML == currentPlayer
      ) {
        chipMovement.innerHTML = "";
        tablero[row][colum] = "";
        turn();
      }
    }
  }
};


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
  whois();
  if (currentPlayer == "X") {
    return player1turn;
  } else {
    return player2turn;
  }
};
//  muestra los turnos 
const count = () => {
  document.getElementById("count1").innerHTML = player1turn;
  document.getElementById("count2").innerHTML = player2turn;
};

// muestra quien esta jugando 
const whois = () => {
  document.getElementById("current").innerHTML = currentPlayer;
};

// reset //

const reset = () => {
  player1turn = 3;
  player2turn = 3;
  let reset = document.querySelectorAll(".prueba");
  reset.forEach((element) => {
    element.innerHTML = "";
  });
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero.length; j++) {
      tablero[i][j] = "";
    }
  }
  count();
};


const generateRandomPosition = (exclude) => {
  if (player2turn > 0) {
    const chipMovement = document.querySelectorAll(".prueba");
    const arraySquares = [];
    let row, col;
    // mete los divs que conforman el tablero a un array 


    for (let i = 0; i < chipMovement.length; i++) {
      arraySquares.push(chipMovement[i]);
    }
    
  
    // transorma el array anterior a uno de 2 dimensiones como el tablero 
    let twoDimensionalArr = [];
    for (let i = 0; i < 3; i++) {
      twoDimensionalArr.push(arraySquares.slice(i * 3, (i + 1) * 3));
    }

    if (exclude) {
      do {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
      } while (
        tablero[row][col] !== "" ||
        (row == exclude[0] && col == exclude[1])
        //  evitar poner en la misma posición de la fila y la columna
      );
    } else {
      do {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
      } while (tablero[row][col] !== "");
    }
    tablero[row][col] = "O";

    twoDimensionalArr[row][col].innerHTML = "O";
    player2turn--;
  } else {
    const chipMovement = document.querySelectorAll(".prueba");
    const arraySquares = [];
    let row, col;
    for (let i = 0; i < chipMovement.length; i++) {
      arraySquares.push(chipMovement[i]);
    }

    let twoDimensionalArr = [];
    for (let i = 0; i < 3; i++) {
      twoDimensionalArr.push(arraySquares.slice(i * 3, (i + 1) * 3));
    }

    do {
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    } while (tablero[row][col] !== "O");
    tablero[row][col] = "";

    twoDimensionalArr[row][col].innerHTML = "";
    player2turn++;

    let exclude = [row, col];
    // exclude es un array que contiene las posiciones del tablero de la ficha que se acaba de quitar
    generateRandomPosition(exclude);
  }
};
