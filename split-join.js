const lyrics = ('sedin dujone dulesilu bone fulo dore badha jhulona . sei chriti tuku kobu khone khone vulo dore badha jhulona.jhulona jhulona.sedin dujone')
const splitOf = lyrics.split(' ')
const sentence = lyrics.split('.')
const charectars = lyrics.split('')
console.log(charectars)

//katakati korar jonno slice ba substring diye kora jai\\\

const sliceOf = lyrics.slice(0, 9)
console.log(sliceOf)

//substring\\

const substringOf = lyrics.substring(0, 9)
console.log(substringOf)


//join///
const lines = ['Tumi bondhu kala pakhi ami jeno ki','Bosonto kale tomai bolte parini','Bosonto kale tomai bolte parini','Sada sada kala kala'];

const joinOf = lines.join(' :|: ')
const joinOf1 = lines.join('. ')
const joinOf2 = lines.join('.')
console.log(joinOf2)
