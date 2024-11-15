let toast = document.querySelector('.show-toast')
let message = document.querySelector('#toast-message')   
let duration = document.querySelector('#duration')
let type = document.querySelector('#toast-type')
let container = document.querySelector('.toasts-container')
let horizontal  = document.querySelector("#horizontal-position")
let vertical  = document.querySelector("#vertical-position")
toast.addEventListener('click', ()=>{
    let newElement = document.createElement('div')
    container.append(newElement)
    newElement.classList.add('toast', type.value , horizontal.value)
newElement.textContent = message.value
    container.classList.add(vertical.value , horizontal.value)
    setTimeout(() => {
        newElement.remove()
    }, parseInt(duration.value) * 1000);
})