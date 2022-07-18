longestWord = (phrase) => {
    let splitPhrase = phrase.split(' ');
    let aux = splitPhrase[0].length;
    let result;
    for (let i = 0; i < splitPhrase.length; i += 1) {
        if (splitPhrase[i].length > aux) {
            result = splitPhrase[i];
            aux = splitPhrase[i].length;
        }
    }
    return result;
}


console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'