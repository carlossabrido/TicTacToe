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
  [1,1,0],
  [0,1,0],
  [0,,0],
]

const tablero=(arr)=>{

  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[0][0]===1 && arr[0][1]===1 && arr[0][2]){
        console.log('ganador')
      }
      else if(arr[1][0]===1 && arr[1][1]===1 && arr[1][2]){console.log('gana')} 
        else if(arr[2][0]===1 && arr[2][1]===1 && arr[2][2]){console.log('gana')}
        else if(arr[0][0]===1 && arr[1][0]===1 && arr[2][0]){console.log('gana')}
        else if(arr[0][1]===1 && arr[1][1]===1 && arr[2][1]){console.log('gana')}
        else if(arr[0][2]===1 && arr[1][2]===1 && arr[2][2]){console.log('gana')}
        else if(arr[0][0]===1 && arr[1][1]===1 && arr[2][2]){console.log('gana')}
        else if(arr[0][2]===1 && arr[1][1]===1 && arr[2][0]){console.log('gana')}
       else{console.log('empate')} 
    }
  
        
  }
  
}

console.log(tablero(jugada))

