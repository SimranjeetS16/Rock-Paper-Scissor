let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorbtn = document.querySelector(".scissor");
let playeroption = [rockbtn,paperbtn,scissorbtn];
let computeroption = ["rock","paper","scissor"]

playeroption.forEach(option => {
 option.addEventListener('click',function(){
        playeroption = option.innerHTML;
        let choicenumber = Math.floor(Math.random()*3);
        computerchoice = computeroption[choicenumber];
        // computeroption = computeroption.toLowerCase();
        console.log(computerchoice);
        playeroption = playeroption.toLowerCase();
        console.log(playeroption);

        if(playeroption === computerchoice){
            alert("It is a 'Tie'");
        }
        else if(playeroption == "rock"){
            if(computerchoice == "scissor"){
                alert("You win the game")
            }
            else{
                alert("Computer is the Winner")
            }
        
        }
        else if(playeroption == "paper"){
            if(computerchoice == "rock"){
                alert("You Win the game")
            }
            else{
                alert("Computer is the Winner")
            }
        }
        else if(playeroption == "scissor"){
            if(computerchoice == "paper"){
                alert("You Win the game")
            }
            else{
                alert("Computer is the Winner")
            }
        }
 })
})