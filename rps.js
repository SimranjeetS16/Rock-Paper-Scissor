let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorbtn = document.querySelector(".scissor");
let playeroption = [rockbtn,paperbtn,scissorbtn];
let computeroption = ["rock","paper","scissor"]
let playercount = 0;
let compcount = 0;

playeroption.forEach(option => {
 option.addEventListener('click',function(){
        playeroption = option.innerHTML;
        let choicenumber = Math.floor(Math.random()*3);
        computerchoice = computeroption[choicenumber];
        console.log(computerchoice);
        playeroption = playeroption.toLowerCase();
        console.log(playeroption);
        key1 = "You Win";
        key2 = "Computer Win";

        if(playeroption === computerchoice){
            alert("It is a 'Tie'");
            key = "Match Tie!"
            result(key);
        }
        else if(playeroption == "rock"){
            if(computerchoice == "scissor"){
               
                playercount++;
                playerwin();
                result(key1);
            }
            else{
               
                compcount++;
                compwin();
                result(key2);
            }
        
        }
        else if(playeroption == "paper"){
            if(computerchoice == "rock"){
               
                playercount++;
                playerwin();
                result(key1);
            }
            else{
               
                compcount++;
                compwin();
                result(key2);
            }
        }
        else if(playeroption == "scissor"){
            if(computerchoice == "paper"){
               
                playercount++;
                playerwin();
                result(key1);
            }
            else{
               
                compcount++;
                compwin();
                result(key2);
            }
        }
        computerMove(computerchoice);
        playerMove(playeroption);
        console.log(playercount);
        console.log(compcount);
 })
})

function playerwin(){
    document.querySelector(".player-score").innerHTML = playercount;
}
function compwin(){
    document.querySelector(".comp-score").innerHTML = compcount;
}
function result(key){
    document.querySelector(".result").innerHTML = key;
}
function playerMove(argument){
    document.querySelector(".player_move").innerHTML = argument;
}
function computerMove(argument){
    document.querySelector(".comp_move").innerHTML = argument;
}