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

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection =="Rock"){
        let result = "It's a tie! You both picked 'Rock'";
        return result;
    }
    else if(playerSelection == "Paper" && computerSelection =="Paper"){
        let result = "It's a tie! You both picked 'Paper'";
        return result;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Scissors"){
        let result = "It's a tie! You both picked 'Scissors'";
        return result;
    }
    else if(playerSelection == "Rock" && computerSelection =="Scissors"){
        let result = "You win! Rock beats Scissors";
        return result;
    }
    else if(playerSelection == "Paper" && computerSelection =="Rock"){
        let result = "You win! Paper beats Rock";
        return result;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Paper"){
        let result = "You win! Scissors beats Paper";
        return result;
    }
    else if(playerSelection == "Rock" && computerSelection =="Paper"){
        let result = "You lose! Rock loses to Paper";
        return result;
    }
    else if(playerSelection == "Paper" && computerSelection =="Scissors"){
        let result = "You lose! Paper loses to Scissors";
        return result;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Rock"){
        let result = "You lose! Scissors loses to Rock";
        return result;
    }
}

function game(){
    let teamHuman = 0;
    let teamComputer = 0;
    do{
        let playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'!");
        let computerSelection = getComputerChoice();
        let answer = playRound(playerSelection,computerSelection);
        console.log(answer);
        let odg = answer.slice(0,7);
        if(odg=="You win"){
            teamHuman++;
            console.log(`Score: ${teamHuman} - ${teamComputer}`);
        }
        else if(odg=="You los"){
            teamComputer++;
            console.log(`Score: ${teamHuman} - ${teamComputer}`);
        }
        else{
            console.log(`Score: ${teamHuman} - ${teamComputer}`);
        }
    }while(teamHuman < 5 && teamComputer < 5)
}



game();