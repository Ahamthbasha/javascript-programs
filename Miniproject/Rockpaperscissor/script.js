const rockBtn=document.querySelector(".rock-btn")
const paperBtn=document.querySelector(".paper-btn")
const scissorBtn=document.querySelector(".scissors-btn")
const userHandIcon=document.querySelector(".user.hand-icon")
const computerHandIcon=document.querySelector(".computer.hand-icon")
const result=document.querySelector(".result")
const userScore=document.querySelector(".user-score")
const computerScore=document.querySelector(".computer-score")

const rockIcon='✊'
const paperIcon='🖐️'
const scissorIcon="✌️"
//optimized approach for computer
const iconList=[rockIcon,paperIcon,scissorIcon]

function computerNo(){
    return Math.floor(Math.random()*3)
}

function calculateResult(selectedIcon,winningIcon){
    result.innerText=""
    userHandIcon.innerText="🤜"
    computerHandIcon.innerText="🤛"
    userHandIcon.classList.add("shakeUserHands")
    computerHandIcon.classList.add("shakeComputerHands")
    setTimeout(()=>{
        userHandIcon.classList.remove("shakeUserHands")
        computerHandIcon.classList.remove("shakeComputerHands")
        userHandIcon.innerText=selectedIcon
        let computerChoice=computerNo()
        computerHandIcon.innerText=iconList[computerChoice]

        if(computerHandIcon.innerText === userHandIcon.innerText){
            result.innerText="Draw"
        }
        else if(computerHandIcon.innerText == winningIcon){
            result.innerText="you won"
            userScore.innerText=parseInt(userScore.innerText)+1
           
        }else{
            result.innerText="computer won"
            computerScore.innerText=parseInt(computerScore.innerText)+1
        }
    },2000)
}

rockBtn.addEventListener('click',()=>{
    calculateResult(rockIcon,scissorIcon)
})

paperBtn.addEventListener("click",()=>{
    calculateResult(paperIcon,rockIcon)
})

scissorBtn.addEventListener("click",()=>{
    calculateResult(scissorIcon,paperIcon)
})