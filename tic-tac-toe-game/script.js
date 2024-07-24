let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turno = true; //player-X, Player-Y

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(box.innerHTML == ""){
            if(turno == true){
                box.innerHTML = "X"; 
                }else{
                    box.innerHTML = "O";
                    }
                    turno = !turno;
                    }
                    });
                })
                    resetbtn.addEventListener("click", () => {
                        boxes.forEach((box) => {
                            box.innerHTML = "";
                            turno = true;
                            });
                            });
                            function checkWin() {
                                for(let i = 0; i < winPatterns.length; i++){
                                    let pattern = winPatterns[i];
                                    let a = pattern[0];
                                    let b = pattern[1];
                                    let c = pattern[2];
                                    if(boxes[a].innerHTML == boxes[b].innerHTML && boxes[b].innerHTML == boxes[c
                                        ].innerHTML && boxes[a].innerHTML != ""){
                                            alert(boxes[a].innerHTML + " wins");
                                            resetbtn.click();
                                            }
                                            }
                                            checkWin();
                                        }
                                        