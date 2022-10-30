function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h1>New Player</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex ipsam quod temporibus expedita adipisci hic inventore obcaecati commodi aut.</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function(event) {

    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    } else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})