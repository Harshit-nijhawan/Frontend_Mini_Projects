const max = prompt("Enter the maximum number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("You quit");
        break;
    }
    if(guess == random){
        console.log("Your guess is right! Congrats,random number was",random);
        break;
    }
    else if(guess > random){
        guess = prompt("hint: Your guess was too large,please try again!");
    }
    else{
        guess = prompt("hint: Your guess was too small,please try again!");
    }
    // else{
    //     guess = prompt("Wrong Guess.please try again");
    // }
}