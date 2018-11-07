var userInput = "";
var wins = 0;
var loses = 0;
var artist={
        artist: ["areial","jason","greg"],

}
// Set up game

var randArtist = artist.artist[Math.floor(Math.random()*artist.artist.length)];
for(var i = 1; i < randArtist.length;i++ ){
         
    console.log(randArtist.charAt(i))
}
    

