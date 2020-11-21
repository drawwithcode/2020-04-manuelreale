const maxX = 100
const maxY = 60

const viewX = 12
const viewY = 7

var pX = 13;
var pY = 30;

var cUp = false;
var cDown = 0;
var cRight = false;
var cLeft = false;

const map = [];
const mapview = [];

// const map = [['p1','p2','p1','p2','p1','p2','p1','p2'],
//              ['p1','p2','p1','p2','p1','p2','p1','p2'],
//              ['p1','p2','p1','p2','p1','p2','p1','p2'],
//              ['p1','p2','p1','p2','p1','p2','p1','p2'],
//              ['p1','p2','p1','p2','p1','p2','p1','p2'],
//              ['p1','p2','p1','p2','p1','p2','p1','p2'],
//              ['p1','p2','p1','p2','p1','p2','p1','p2'],
//              ['p3','p4','p3','p4','p3','p4','p3','p4']];


function preload(){
  theme = loadSound("./assets/SuperMarioBros.mp3");
  jumps = loadSound("./assets/jump.mp3");
  coin = loadSound("./assets/coin.mp3");
  death = loadSound("./assets/death.mp3");
  wins = loadSound("./assets/win.mp3");
  bump = loadSound("./assets/bump.wav");
  // put preload code here
}

function setup() {
  noCanvas();


  for(var i=0; i<maxY; i++){
    map[i]=[]
    for(var j=0; j<maxX; j++){
      map[i][j]='p5'
    }
  }

  // for(var k=12; k<19; k++){
  //   map[k][15]='p3'
  //   map[k][22]='p3'
  // }

  for(var k=0; k<50; k++){
    map[53][k]='p3'
    map[52][k]='p3'
    map[51][k]='p3'
    map[50][k]='p3'
  }

  for(var k=55; k<70; k++){
    map[53][k]='p3'
    map[52][k]='p3'
    map[51][k]='p3'
    map[50][k]='p3'
  }

  for(var k=75; k<90; k++){
    map[53][k]='p3'
    map[52][k]='p3'
    map[51][k]='p3'
    map[50][k]='p3'
  }

  for(var k=6; k<10; k++){
    map[43][k]='p6'
  }

  for(var k=12; k<15; k++){
    map[40][k]='p6'
  }

  for(var k=23; k<26; k++){
    map[39][k]='p6'
  }

  for(var k=27; k<30; k++){
    map[37][k]='p6'
  }

map[46][15]='p4'

map[46][19]='p3'
map[46][20]='p4'
map[46][21]='p3'
map[46][22]='p4'
map[46][23]='p3'

map[42][21]='p4'

map[48][26]='p2'
map[48][27]='p2'
map[49][26]='p2'
map[49][27]='p2'


map[47][26+9]='p2'
map[47][27+9]='p2'
map[48][26+9]='p2'
map[48][27+9]='p2'
map[49][26+9]='p2'
map[49][27+9]='p2'

map[46][26+9+7]='p2'
map[46][27+9+7]='p2'
map[47][26+9+7]='p2'
map[47][27+9+7]='p2'
map[48][26+9+7]='p2'
map[48][27+9+7]='p2'
map[49][26+9+7]='p2'
map[49][27+9+7]='p2'

map[47][57]='p2'
map[47][58]='p2'
map[48][57]='p2'
map[48][58]='p2'
map[49][57]='p2'
map[49][58]='p2'

map[49][58+8]='p7'
map[49][58+9]='p7'
map[49][58+10]='p7'
map[49][58+11]='p7'
map[48][58+8]='p7'
map[48][58+9]='p7'
map[48][58+10]='p7'
map[48][58+11]='p7'

map[47][58+10]='p7'
map[47][58+11]='p7'
map[46][58+10]='p7'
map[46][58+11]='p7'

map[49][75]='p7'
map[49][76]='p7'
map[48][75]='p7'
map[48][76]='p7'

map[49][77]='p7'
map[49][78]='p7'
map[48][77]='p7'
map[48][78]='p7'
map[48][79]='p7'
map[49][79]='p7'

map[47][77]='p10'
map[46][77]='p10'
map[45][77]='p10'
map[44][77]='p10'
map[43][77]='p10'
map[42][77]='p10'
map[41][77]='p10'
map[40][77]='p10'
map[39][77]='p10'





map[45][29]='p9'
map[44][35]='p9'
map[43][42]='p9'
map[43][68]='p9'

map[43][58]='p9'



}

let jump=0;
let punti=0;
let start=true;
let end=false;
let realEnd=false;

function draw() {

  if (keyIsPressed === true) {start=false;if(theme.isPlaying() == false && realEnd==false){theme.play()};}

  if(start==true){
    removeElements();
    paul = createImg("/assets/start.png");
  }else{

  if(pX>=77){
    end=true
  }
  console.log(pY+3,pX)

  if(pY==48){death.play();punti=0;theme.stop();}

if(pY>=52){pX = 13;punti=0;
pY = 30;}

if(end==false){

if( map[pY+3][pX+1]=='p3'|| map[pY+3][pX+1]=='p4'|| map[pY+3][pX+1]=='p7'|| map[pY+3][pX+1]=='p2'|| pX > maxX-viewX-1){ cRight = true; } else { cRight = false; }
if( map[pY+3][pX-1]=='p3'|| map[pY+3][pX-1]=='p4'|| map[pY+3][pX-1]=='p7'|| map[pY+3][pX-1]=='p2'|| pX < viewX+1){ cLeft = true; } else { cLeft = false; }
if( map[pY+2][pX]=='p3'|| map[pY+2][pX]=='p4'|| map[pY+2][pX]=='p7'|| map[pY+2][pX]=='p2'|| pY < viewY+1){ cUp = true; } else { cUp = false; }
if( map[pY+4][pX]=='p3'|| map[pY+4][pX]=='p4'|| map[pY+4][pX]=='p7'|| map[pY+4][pX]=='p2'||  pY > maxY-viewY-2){ cDown = 3; } else { if(cDown>=0){cDown--} }

  if (keyIsDown(UP_ARROW)&& cUp == false && cDown>0) {jump=5; if(jumps.isPlaying() == false ){jumps.play()} }
  if (keyIsDown(DOWN_ARROW)&& cDown != 3) {pY++}
  if (keyIsDown(RIGHT_ARROW) && cRight == false ) {pX++}
  if (keyIsDown(LEFT_ARROW)&& cLeft == false) {pX--}


  if(cUp==true){
    jump=0
    bump.play()
  }

  if(jump>0){
    pY = pY-2
    jump--
  }

    if(cDown <3){
      pY++
    }

  }else{

if(pY+3<47 && frameCount%5==0){
  theme.stop()
  if(wins.isPlaying()==false){wins.play()}
pY++
}else if(pY+3>=47){
  realEnd=true
}

  }






  if(map[pY+3][pX]=='p9'){
coin.play()
    map[pY+3][pX]='p5'
    punti++
  }



  if(map[pY+2][pX]=='p4'&& jump>0){
    coin.play()
    punti++
    map[pY+2][pX]='p3'
    map[pY+1][pX]='p8'
  }





  removeElements();

  for(var i=0; i<1+viewY*2; i++){
    mapview[i]=[]
    for(var j=0; j<1+viewX*2; j++){
      mapview[i][j]= map[pY-viewY+i][pX-viewX+j]

      if(map[pY-viewY+i][pX-viewX+j]=='p8' && frameCount%20==0){
        map[pY-viewY+i][pX-viewX+j]='p5'
      }

    }
  }

  mapview[viewY+3][viewX]='p1'
  mapview[1][viewX*2-2]='punti'

if(realEnd==false){
  for(var i=0; i<1+viewY*2; i++){
    createElement('p','\n')
    for(var j=0; j<1+viewX*2; j++){
      if(mapview[i][j]=='p1'){
      createElement(mapview[i][j],'‎‏‏‎‎‎☻')}
      if(mapview[i][j]=='p2'){
      createElement(mapview[i][j],'‏‏‎ ‎')}
      if(mapview[i][j]=='p3'){
      createElement(mapview[i][j],'◘')}
      if(mapview[i][j]=='p4'){
      createElement(mapview[i][j],'?')}
      if(mapview[i][j]=='p5'){
      createElement(mapview[i][j],'‏‏‎ ‎')}
      if(mapview[i][j]=='p6'){
      createElement(mapview[i][j],'‏‏‎ ‎')}
      if(mapview[i][j]=='p7'){
      createElement(mapview[i][j],'‏‏‎◘‎')}
      if(mapview[i][j]=='p8'){
      createElement(mapview[i][j],'$')}
      if(mapview[i][j]=='p9'){
      createElement(mapview[i][j],'$')}
      if(mapview[i][j]=='p10'){
      createElement(mapview[i][j],'║')}






      if(mapview[i][j]=='punti'){

      createElement('p5', + punti)
      }

    }
  }
}else{
  paul = createImg("/assets/end.png");}
}



}
