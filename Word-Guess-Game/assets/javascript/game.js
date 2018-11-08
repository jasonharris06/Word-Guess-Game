
$(document).ready(function(){


var userInput = "";
var wins = 0;
var loses = 0;
var gamefinish = true;
var artist={
        artist: ["areial","jason","greg"],

}
// Set up game

$("#container").empty();
var artistLetters = "";
//set up dashes
var newDiv = $("<div>");
newDiv.text(artistLetters);
console.log(artistLetters)
var randArtist = artist.artist[Math.floor(Math.random()*artist.artist.length)];
for(var i = 0; i < randArtist.length; i++ ){
    var artistLetters = ("_ " + artistLetters); 
}


// console.log(artistLetters)

});