var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var advisory,login1,newUser,userData;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function preload(){
  immunity=loadImage("images/immunity_1300.png");
}


function draw(){
 // background(immunity);
  
}
