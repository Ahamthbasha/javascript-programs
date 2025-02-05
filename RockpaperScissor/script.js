const rockBtn=document.querySelector(".rock-btn")
const paperBtn=document.querySelector(".paper-btn")
const scissorBtn=document.querySelector(".scissors-btn")
const userHand=document.querySelector(".user.hand-icon")
const computerHand=document.querySelector(".computer.hand-icon")
const result=document.querySelector(".result")
const userScore=document.querySelector(".user-score")
const computerScore=document.querySelector(".computer-score")
const rockIcon="🪨"
const paperIcon="📃"
const scissorIcon="✂️"

const arr=[rockIcon,paperIcon,scissorIcon]
function computer(){
    return Math.floor(Math.random()*3)
}

function call(passIcon,winningIcon){
    result.innerText=""
    userHand.innerText="🤜"
    computerHand.innerText="🤛"
    userHand.classList.add("shakeUserHands")
    computerHand.classList.add("shakeComputerHands")
    setTimeout(()=>{
        userHand.classList.remove("shakeUserHands")
        computerHand.classList.remove("shakeComputerHands")
        userHand.innerText=passIcon
        let computerDecide=arr[computer()]
        computerHand.innerText=computerDecide
        if(userHand.innerText == computerHand.innerText){
            result.innerText="Draw"
        }
        else if(computerHand.innerText == winningIcon){
            result.innerText="Human won"
            userScore.innerText=parseInt(userScore.innerText)+1
        }
        else{
            result.innerText="Computer won"
            computerScore.innerText=parseInt(computerScore.innerText)+1
        }
    },1000)
}
rockBtn.addEventListener('click',()=>{
    call(rockIcon,scissorIcon)
})

paperBtn.addEventListener('click',()=>{
    call(paperIcon,rockIcon)
})

scissorBtn.addEventListener('click',()=>{
   call(scissorIcon,paperIcon)
})