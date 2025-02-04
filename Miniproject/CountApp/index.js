const incrementBtn=document.querySelector('.add-btn')
const decrementBtn=document.querySelector(".min-btn")
const count=document.querySelector(".count")
const changeByInput=document.querySelector(".changeByValue")
const reset=document.querySelector('.reset')

incrementBtn.addEventListener('click',()=>{
    let value=parseInt(count.innerText)
    let changeBy=parseInt(changeByInput.value)
    if(changeBy){
        count.innerText=value+changeBy
    }
    else if(changeBy == 0){
        count.innerText="value should greater than 0"
    }
    else{
        count.innerText="enter a value in input section"
    }
})

decrementBtn.addEventListener('click',()=>{
    let value=parseInt(count.innerText)
    let changeBy=parseInt(changeByInput.value)
    if(changeBy){
        count.innerText=value-changeBy
    }
    else if(changeBy == 0){
    count.innerText="value should greater than 0"
    }
    else{
        count.innerText="enter a value in input section"
    }
})

reset.addEventListener('click',()=>{
    count.innerText=0
})