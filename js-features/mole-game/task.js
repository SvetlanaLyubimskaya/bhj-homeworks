let hole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 9; i++) {
    hole(i).addEventListener('click', getHole);
    console.log(hole);
}

function getHole() {

    const deadHole = document.getElementById('dead');
    const lostHole = document.getElementById('lost');

    if (this.className.includes('hole_has-mole')) {
        let clicksDead = parseInt(deadHole.textContent, 10) + 1;
        deadHole.textContent = clicksDead;
    } else {
        let clicksLost = parseInt(lostHole.textContent, 10) + 1;
        lostHole.textContent = clicksLost;
    }

    if (deadHole.textContent > 9) {
        alert('Победа!');
        location.reload();
    } else if (lostHole.textContent > 4) {
        alert('Поражение:(');
        location.reload();
    }
}
