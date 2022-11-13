let rockbtn = document.querySelector(".rock");

let paperbtn = document.querySelector(".paper");
let scissorbtn = document.querySelector(".scissor");
let playerhand = document.querySelector(".player-hand");
let comphand = document.querySelector('.comp-hand');
let restart = document.querySelector('.restart');
let playeroption = [rockbtn,paperbtn,scissorbtn];
let computeroption = ["rock","paper","scissor"]
let playercount = 0;
let compcount = 0;

playeroption.forEach(option => {
 option.addEventListener('click',function(){
        playeroption = option.getAttribute("id");
        console.log(playeroption);
        let choicenumber = Math.floor(Math.random()*3);
        computerchoice = computeroption[choicenumber];
        console.log(computerchoice);
        // playeroption = playeroption.toLowerCase();
        key1 = "You Win";
        key2 = "Computer Win";
        key3= "Result";
        result(key3);
        setTimeout( ()=> {
            if(playeroption === computerchoice){
            
                key = "Match Tie!"
                result(key);
                // alert("It is a 'Tie'");
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
                    console.log(this);
                })
                comphand.addEventListener('animationend', function(){
                    this.style.animation = '';
                    console.log(this);
                })
                playerhand.src = `image/${playeroption}.png`;
                comphand.src = `image/${computerchoice}1.png`;
        }, 2000)
        computerMove();
        playerMove();
        console.log(playercount);
        console.log(compcount);
 })
})

restart.addEventListener('click', function(){
    console.log(this.innerHTML);
    playercount = 0;
    compcount = 0;
    playerwin();
    compwin();
    
    result(key3);
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