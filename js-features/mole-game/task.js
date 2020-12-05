// const holeIndex = index => document.getElementById(`hole${index}`);

let hole = index => document.getElementById(`hole${index}`);

function getHole() {

    for (let i = 0; i < hole-game.length; i++) {
        hole[i].addEventListener('click', includesHole());
    }

    // if (hole.className.includes('hole_has-mole')) {
    //     let holeIndex = document.getElementById(`hole${index}`);
    //     console.log(holeIndex);
    //     return holeIndex;
    // }

}

function includesHole() {

    if (hole.className.includes('hole_has-mole')) {
        const deadHole = document.getElementById('dead');
        let clicksDead = parseInt(deadHole.textContent, 10);
        deadHole.textContent = clicksDead + 1;
    } else {
        const lostHole = document.getElementById('lost');
        let clicksLost = parseInt(lostHole.textContent, 10) + 1;
        lostHole.textContent = clicksLost;
    }

    if (clicksDead == 10) {
        alert('Победа!');
        location.reload();
    } else if (clicksLost == 5) {
        alert('Поражение(');
        location.reload();
    }
    
}

hole.onclick = getHole;
