var playerbut1 = document.querySelector("#p1");
var playerbut2 = document.querySelector("#p2");
var pldisplay = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var reset = document.getElementById("reset");
var input = document.querySelector("#input");
var playto = document.getElementById("playto");
var gameover = false;
var winningScore = 4;

var p1score = 0;
var p2score = 0;


    playerbut1.addEventListener("click", () => {
        if (!gameover){
        p1score +=1;
        if (p1score === winningScore){
            p1display.classList.add("winner");
            // console.log("gameover")
            gameover = true;
        }
        p1display.textContent = p1score;
       
}
});

playerbut2.addEventListener("click", () => {
    if (!gameover){
        p2score+=1;
if (p2score === winningScore){
    p2display.classList.add("winner");
    gameover = true;

}

    }
p2display.textContent = p2score;
});


reset.addEventListener("click", () => {
 p1score = 0;
 p2score = 0;
 p1display.textContent = p1score;
 p2display.textContent = p2score;
 p1display.classList.remove("winner");
 p2display.classList.remove("winner");
gameover = false

});

input.addEventListener("change", () => {
playto.textContent = input.value;
winningScore = Number(input.value);
});
