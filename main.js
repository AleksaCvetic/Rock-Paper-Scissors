function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1){
        return "Rock";
    }
    else if(randomNumber == 2){
        return "Paper";
    }
    else if(randomNumber == 3){
        return "Scissors";
    }
}

function playRound(sign, computerSelection){
    if(sign == "Rock" && computerSelection =="Rock"){
        let result = "It's a tie! You both picked 'Rock'";
        return result;
    }
    else if(sign == "Paper" && computerSelection =="Paper"){
        let result = "It's a tie! You both picked 'Paper'";
        return result;
    }
    else if(sign == "Scissors" && computerSelection =="Scissors"){
        let result = "It's a tie! You both picked 'Scissors'";
        return result;
    }
    else if(sign == "Rock" && computerSelection =="Scissors"){
        let result = "You win! Rock beats Scissors";
        return result;
    }
    else if(sign == "Paper" && computerSelection =="Rock"){
        let result = "You win! Paper beats Rock";
        return result;
    }
    else if(sign == "Scissors" && computerSelection =="Paper"){
        let result = "You win! Scissors beats Paper";
        return result;
    }
    else if(sign == "Rock" && computerSelection =="Paper"){
        let result = "You lose! Rock loses to Paper";
        return result;
    }
    else if(sign == "Paper" && computerSelection =="Scissors"){
        let result = "You lose! Paper loses to Scissors";
        return result;
    }
    else if(sign == "Scissors" && computerSelection =="Rock"){
        let result = "You lose! Scissors loses to Rock";
        return result;
    }
}
let teamHuman = 0;
let teamComputer = 0;

function game(sign){
    
        let computerSelection = getComputerChoice();
        let answer = playRound(sign,computerSelection);
        console.log(answer);
        let odg = answer.slice(0,7);
        if(odg=="You win"){
            teamHuman++;
            console.log(`Score: ${teamHuman} - ${teamComputer}`);
            document.getElementById('scoreboard').textContent=`${teamHuman} - ${teamComputer}`;
            if(teamHuman==5) {
                document.getElementById("results").textContent="Congrats, you win!!!";
                teamHuman=0;
                teamComputer=0;
            }
        }
        else if(odg=="You los"){
            teamComputer++;
            console.log(`Score: ${teamHuman} - ${teamComputer}`);
            document.getElementById('scoreboard').textContent=`${teamHuman} - ${teamComputer}`;
            if(teamComputer==5){
                 document.getElementById("results").textContent="Aww shucks, you lost :(";
                 teamHuman=0;
                 teamComputer=0;
            }
        }
        else{
            console.log(`Score: ${teamHuman} - ${teamComputer}`);
        }
}



