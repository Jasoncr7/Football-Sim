const teamOne = document.querySelector('.team1');
const teamTwo = document.querySelector('.team2');
const h1One = document.querySelector('.one');
const h1Two = document.querySelector('.two');
const simulationButton = document.querySelector('.sim-btn');
const winningTeam = document.querySelector('.win')



simulationButton.addEventListener('click', (event) =>{
    let score = Math.floor(Math.random() * 7);
    let score2 = Math.floor(Math.random() * 7);
    h1One.innerHTML = `${teamOne.value} - ${score}`;
    h1Two.innerHTML = `${teamTwo.value} - ${score2}`;
    
    if(score > score2){
        winningTeam.textContent = `${teamOne.value} wins`;
    }else if(score < score2){
        winningTeam.textContent = `${teamTwo.value} wins`;
    } 
    else{
        winningTeam.textContent = `A draw`;
    }
});