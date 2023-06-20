//codigo do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [9, 7, 5, 7,5, 8, 3];//ou6, 5.5, 4, 2.5, 5, 3
let comprimentoCarros = 50;
let alturaCarros = 40;
let meusPontos = 0;


    
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
 image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){  
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
   }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}

