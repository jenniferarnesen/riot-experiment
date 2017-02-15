const trumpisms = [
        'bla bla bla FAKE NEWS bla bla',
        'SEE YOU IN COURT, bla bla bla',
        'bla bla bla bla. FAKE NEWS!',
        'bla bla bla GREAT MAN!',
        'bla bla bla! TERRIBLE!',
        'bla bla bla bla. OBSTRUCTION BY DEMOCRATS!',
        'bla bla bla BIGGEST CROWDS EVER!',
        'bla bla bla bla. SAD!',
        'bla bla SAD bla bla',
        'bla bla bla. APOLOGIZE!!',
        'bla bla bla, VERY DISHONEST!'
    ],

    getRandomTrumpism = () => {
        return trumpisms[Math.round(Math.random() * (trumpisms.length - 1))];
    },

    TrumpismSource = {
        fetch: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(getRandomTrumpism());
                }, 20);
            })
        }
    };

module.exports = TrumpismSource;
