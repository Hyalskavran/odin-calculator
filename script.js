const createNumbers = () => {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '=']
    const numbersContainer = document.querySelector('.numbers')

    numbers.forEach(num => {
        let newNum = document.createElement('div')
    
        newNum.textContent = num
        
        if (num === '=') {
            newNum.className = 'number equals clickable'
        } else {
            newNum.className = 'number clickable'
        }
    
        numbersContainer.appendChild(newNum)
    })
}

const createButtons = () => {
    const buttons = ['+', '-', '*', '/']
    const buttonsContainer = document.querySelector('.buttons')

    buttons.forEach(btn => {
        let newBtn = document.createElement('div')
    
        newBtn.textContent = btn
        newBtn.className = 'button clickable'
    
        buttonsContainer.appendChild(newBtn)
    })
}

const addFunction = (a, b) => {
    return a + b
}

const subtractFunction = (a, b) => {
    return a - b
}

const multiplyFunction = (a, b) => {
    return a * b
}

const divideFunction = (a, b) => {
    return a / b
}

const operate = (a, o, b) => {
    if (o == '+') {
        return addFunction(a, b)
    } else if (o == '-') {
        return subtractFunction(a, b)
    } else if (o == '*') {
        return multiplyFunction(a, b)
    } else {
        return divideFunction(a, b)
    }
}

let firstValue = null
let secondValue = null
let operator = null
let displayValue = document.querySelector('.screen').textContent

createNumbers()
createButtons()

const populateScreen = () => {
    const clickables = document.querySelectorAll('.clickable')

    clickables.forEach(element => {
        element.addEventListener('click', function() {
            if (element.classList.contains('number')) {
                displayValue = element.textContent
                
                document.querySelector('.screen').textContent = displayValue
            }
        })
    })
}

populateScreen()











