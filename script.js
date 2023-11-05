// MY NAME FONT CHANGER
function getRandomFont() {
    const fonts = ['Times New Roman', 'Helvetica', 'Georgia','Arial', 'anotherTag','courierStd', 'ghaitsaF', 'grenzeF', 'mistoF', 'oldLondon', "poppinsBlack", 'poppinsThin', 'verlagCondensed', 'molgenF', 'reigoBlack', 'glyternF', 'blacKing','wayfinderLight', 'shriKhand'];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

const letters = document.querySelectorAll('.letter');
setInterval(() => {
    const randomIndexes = [];
    while (randomIndexes.length < Math.floor(Math.random() * 2) + 1) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    randomIndexes.forEach(index => {
        letters[index].style.fontFamily = getRandomFont();
    });
}, 500);
