let  lyrics = 'Tumi bondhu kala pakhi ami jeno ki.Bosonto kale tumai bote parini.'

let searchString = 'Pakhi'
let doesExait = lyrics.includes('pakhi')
let exait = lyrics.includes(searchString)
console.log(doesExait)
let lyricsLowerCase = lyrics.toLowerCase();
let searchLowerCase = searchString.toLowerCase();
let toLowerCaseSearch = lyricsLowerCase.includes(searchLowerCase)
console.log(toLowerCaseSearch)
