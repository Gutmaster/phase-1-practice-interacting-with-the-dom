const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const likes = document.querySelector('.likes')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
const commentInput = document.getElementById('comment-input')
const commentList = document.getElementById('list')
const commentForm = document.getElementById('comment-form')

let timerRunning = true
let timer = setInterval(function(){
    counter.innerText = Number(counter.innerText) + 1
}, 1000)

plus.addEventListener('click', function(event){
    counter.innerText = Number(counter.innerText) + 1
})

minus.addEventListener('click', function(event){
    counter.innerText = Number(counter.innerText) - 1
})

heart.addEventListener('click', function(event){
    createLikeText(counter.innerText)
})

function createLikeText(number){
    const message = document.getElementById(number)
    if(message === null){
        let l = document.createElement('li')
        l.innerText = `${number} has been liked 1 time`
        l.id = number
        l.value = 1
        likes.append(l)   
    }
    else{
        message.value = Number(message.value) + 1
        message.innerText = `${number} has been liked ${message.value} times`
    }
}

pause.addEventListener('click', function(event){
    if(timerRunning){
        clearInterval(timer)
        timerRunning = false
        heart.disabled = true
        plus.disabled = true
        minus.disabled = true
        submit.disabled = true
        pause.innerText = 'resume'
    }
    else{
        timer = setInterval(function(){
            counter.innerText = Number(counter.innerText) + 1
        }, 1000)
        timerRunning = true
        heart.disabled = false
        plus.disabled = false
        minus.disabled = false
        submit.disabled = false
        pause.innerText = 'pause'
    }
})

commentForm.addEventListener('submit', function(event){
    event.preventDefault()
    let p = document.createElement('p')
    p.innerText = commentInput.value
    commentList.append(p) 
})