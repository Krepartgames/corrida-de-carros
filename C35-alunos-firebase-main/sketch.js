var database;
var player;
var form;
var game;
var gameMode = 0;
var playerCount = 0;
var allPlayers;

var car1,car2,car3,car4,cars;

var carSpr1, carSpr2, carSpr3, carSpr4, groundSpr, TrackSpr

function  preLoad() {
  carSpr1 = loadImage("./sprites/car1.png")
  carSpr2 = loadImage("./sprites/car2.png")
  carSpr3 = loadImage("./sprites/car3.png")
  carSpr4 = loadImage("./sprites/car4.png")
  groundSpr = loadImage("./sprites/ground.png")
  TrackSpr = loadImage("./sprites/track.png")
}

function setup() {
  createCanvas(displayWidth - 60,displayHeight - 140);
  database = firebase.database()
  game = new Game()
  game.getMode()
  game.start()
}

function draw() {
  background(255);
  if (playerCount >= 4 && gameMode === 0){
    game.update(1)
  }

  if (gameMode === 1){
    clear();
    game.play()
  }
}