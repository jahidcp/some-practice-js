let songLyrics = "Tumi bondhu kala pakhi ami jano ki. boshonto batashe shoy go bujhte parini. Sada kala kala kala mon hoyese sada kala";

// split function
let sentences = songLyrics.split('.');
console.log(sentences);

let parts = songLyrics.split('.');
console.log(parts);

let chars = songLyrics.split('');
console.log(chars);

// slice function

let songEx = songLyrics.slice(5,11);
console.log(songEx);

// join function

let lines = [
    "Tumi bondhu kala pakhi ami jano ki", 
    "Boshonto batashe shoy go bujhte parini", 
    "Sada kala kala kala mon hoyese sada kala",
    "Rong Jhomese Sada kala"]

let newSong = lines.join(". ");
console.log(newSong);