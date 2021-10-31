const favBtns = document.querySelectorAll('button');

const favAlert = event => {
    event.preventDefault();
    const alerts = {
        color: 'BLUE!',
        place: 'THE COLOSSEUM!',
        ritual: "WASHING MY HANDS WITH DIRT BEFORE BATTLE!"
    };
    for (key in alerts) {
        if (key === event.target.id) {
            alert(alerts[key]);
        }
    }
};

for (i = 0; i < favBtns.length; i++) {
favBtns[i].addEventListener('click', favAlert);
};

console.log(favBtns);