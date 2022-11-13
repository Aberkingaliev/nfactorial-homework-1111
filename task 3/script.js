// 3. Добавить кнопку закрытия
const parrentElem = document.querySelectorAll('h3')
for(value of parrentElem){
    // Create button and prepend
    const bttn = document.createElement('button')
    bttn.className = 'remove-button'
    bttn.innerHTML = '[x]'
    value.append(bttn)
    // Styles
    value.style.display = 'flex'
    value.style.flexDirection = 'row'
    value.style.justifyContent = 'space-between'
    value.style.alignItems = 'center'
}

// Закрытие
const allBtnX = document.querySelectorAll('.remove-button')
const headDiv = document.querySelectorAll('.pane')
for(value of allBtnX){
    value.addEventListener('click', (event)=>{
        const { path } = event
        path[2].remove()
    })
}
