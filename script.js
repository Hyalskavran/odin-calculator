const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '=']
const buttons = ['+', '-', '*', '/']

const numbersContainer = document.querySelector('.numbers')
const buttonsContainer = document.querySelector('.buttons')

numbers.forEach(num => {
    let newNum = document.createElement('div')

    newNum.textContent = num
    
    if (num === '=') {
        newNum.className = 'number equals'
    } else {
        newNum.className = 'number'
    }

    numbersContainer.appendChild(newNum)
})

buttons.forEach(btn => {
    let newBtn = document.createElement('div')

    newBtn.textContent = btn
    newBtn.className = 'button'

    buttonsContainer.appendChild(newBtn)
})
