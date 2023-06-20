//codigo do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
     yAtor += 3;
    }
   }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
   for (let i = 0; i < imagemCarros.length; i++){
     colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor+15, 25);
     if(colisao){
       voltaAtorParaPosicaoInicial();
       somDaColisao.play();
       if (pontosMaiorQueZero()){
         meusPontos -= 1;
      }
    } 
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  stroke(color(150, 0, 1));
  fill(color(255, 110, 255));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}