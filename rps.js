let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorbtn = document.querySelector(".scissor");
let playerhand = document.querySelector(".player-hand");
let comphand = document.querySelector('.comp-hand');
let restart = document.querySelector('.restart');
let playeroption = [rockbtn,paperbtn,scissorbtn];
let computeroption = ["rock","paper","scissor"];
let newPlayer = document.querySelector(".newplayer");
let namechange = document.querySelectorAll('.play');
let playercount = 0;
let compcount = 0;
    key1 = "You Win";
    key2 = "Computer Win";
    key3 = "";    

document.addEventListener('DOMContentLoaded', ()=>{
    let person = prompt("Enter ur Name", "Player");
    if(person != ""){
        document.querySelector('.player').innerHTML = person;
    }
    else {
        person = "Player";
        document.querySelector('.player').innerHTML = person;
    }
    if(localStorage.getItem(`${person}`) != null){
        // console.log("yes m here.");
        valueGet(person);
        playercount = document.querySelector(".player-score").innerHTML;
        compcount =document.querySelector(".comp-score").innerHTML;
        // console.log(playercount);
    }
});



playeroption.forEach(option => {
 option.addEventListener('click',function(){
        playeroption = option.getAttribute("id");
        // console.log(playeroption);
        let choicenumber = Math.floor(Math.random()*3);
        computerchoice = computeroption[choicenumber];
        // console.log(computerchoice);
        
        result(key3);
        setTimeout( ()=> {
            if(playeroption === computerchoice){
            
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
           
                playerhand.addEventListener('animationend', function(){
                    this.style.animation = '';
                //    console.log( this.style.animation);
                })
                comphand.addEventListener('animationend', function(){
                    this.style.animation = '';
                    // console.log(this.style.animation);
                })
                playerhand.src = `image/${playeroption}.png`;
                comphand.src = `image/${computerchoice}1.png`;
                
                valueStore();

        }, 2000)
        computerMove();
        playerMove();
       
        // console.log(playercount);
        // console.log(compcount);
 })
})

namechange.forEach(button =>{
    button.addEventListener('click', function(){
        // console.log(this.innerHTML);

        if(this.innerHTML == "Restart Game"){
            // console.log(this.innerHTML);
            playercount = 0;
            compcount = 0;
            playerwin();
            compwin();
            
            result(key3);
        }
        else if(this.innerHTML == "New Player"){
            let newPerson = prompt("Enter your Name...", "User");
            if(newPerson != ""){
                document.querySelector('.player').innerHTML = newPerson;
            }
            else{
                // console.log("yes");
                newPerson = "Player";
                document.querySelector('.player').innerHTML = newPerson;
            }
            if(localStorage.getItem(`${newPerson}`) != null){
                // console.log("yes m here.");
                valueGet(newPerson);
                playercount = document.querySelector(".player-score").innerHTML;
                compcount =document.querySelector(".comp-score").innerHTML;
                // console.log(playercount);
            }
            else{
                // console.log("m here");
                playercount = 0;
                compcount = 0;
                playerwin();
                compwin();
            }
        }
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
function playerMove(){
    playerhand.src = `image/rock.png`;
   playerhand.style.animation = "shakeplayer 2s ease";
    
}
function computerMove(){
    comphand.src = `image/rock1.png`;
    comphand.style.animation = "shakecomp 2s ease";
}
function valueStore(){
    let name = document.querySelector('.player');
    let playername = name.innerHTML;
    let pscore = document.querySelector(".player-score").innerHTML;
    let cscore = document.querySelector(".comp-score").innerHTML;
    let storage = {pscore:pscore,cscore:cscore};
    localStorage.setItem(`${playername}`,JSON.stringify(storage));
}
function valueGet(person){
  
    let storage = JSON.parse(localStorage.getItem(`${person}`));
    document.querySelector(".player-score").innerHTML = storage.pscore;
    document.querySelector(".comp-score").innerHTML = storage.cscore;
}
