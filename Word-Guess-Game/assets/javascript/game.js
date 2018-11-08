var userInput = "";
var wins = 0;
var loses = 0;
var gamefinish = true;
var artist={
        artist: ["areial","jason","greg"],

}
// Set up game

$("#word").remove();
var artistLetters = "";
//set up dashes
var randArtist = artist.artist[Math.floor(Math.random()*artist.artist.length)];
for(var i = 0; i < randArtist.length; i++ ){
    var artistLetters = ("_ " + artistLetters); 
    
}

console.log(artistLetters)

