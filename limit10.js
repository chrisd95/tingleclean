//HTTP request BTCTICKER (START)
const request = require('request')
var fs = require('fs')
var mongojs = require('mongojs');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//REQUIRE MODELS (START)
var Coin = require('./models/Coin.model');
//REQUIRE MODELS (START)


// mongoose connection (START)
var promise = mongoose.connect('mongodb://admin:admin@ds163806.mlab.com:63806/tingleclean',{
  useMongoClient: true,
  /* other options */
});
promise.then(function(db) {
  /* Use `db`, for instance `db.model()`
});
// Or, if you already have a connection
connection.openUri('mongodb://localhost/myapp', { /* options */ });
// mongoose connection (END)



var cmcapi = function (){request.get('https://api.coinmarketcap.com/v1/ticker/?limit=10',
  function(error,response, body) {
    var cmcapi = (body)
    fs.writeFileSync('limit10.json', cmcapi, finished);
      function finished(err){
      }
})}

var interval = setInterval(cmcapi, 6000)
//HTTP request BTCTICKER (END)

var cmcapi = JSON.parse(fs.readFileSync('limit10.json','utf8'));
var map = new Map(Object.entries(cmcapi));
var coin0 = map.get("0");
var coin1 = map.get("1");
var coin2 = map.get("2");
var coin3 = map.get("3");
var coin4 = map.get("4");
var coin5 = map.get("5");
var coin6 = map.get("6");
var coin7 = map.get("7");
var coin8 = map.get("8");
var coin9 = map.get("9");


setTimeout(function t0(){
Coin.findByIdAndUpdate("5a3d7f7cf36d2805ea5111fe",
coin0
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 2000)

setTimeout(function t1(){
Coin.findByIdAndUpdate("5a3d7f95f36d2805ea511214",
coin1
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 6000)

setTimeout(function t2(){
Coin.findByIdAndUpdate("5a3d7faff36d2805ea511220",
coin2
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 10000)

setTimeout(function t3(){
Coin.findByIdAndUpdate("5a3daa4af36d2805ea5125fa",
coin3
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 12000)

setTimeout(function t4(){
Coin.findByIdAndUpdate("5a3daa65f36d2805ea5125ff",
coin4
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 16000)

setTimeout(function t5(){
Coin.findByIdAndUpdate("5a3daa7af36d2805ea512601",
coin5
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 20000)

setTimeout(function t6(){
Coin.findByIdAndUpdate("5a3daa87f36d2805ea512604",
coin6
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 24000)

setTimeout(function t7(){
Coin.findByIdAndUpdate("5a3daaa1f36d2805ea512606",
coin7
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 28000)

setTimeout(function t8(){
Coin.findByIdAndUpdate("5a3daab0f36d2805ea512607",
coin8
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 32000)

setTimeout(function t8(){
Coin.findByIdAndUpdate("5a3daac2f36d2805ea512608",
coin9
      , {}, function(newCoin){
    console.log(newCoin);
  });}, 36000)
