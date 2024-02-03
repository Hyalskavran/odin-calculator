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

const clear = () => {
    firstValue = null
    secondValue = null
    operator = null
    displayValue = null
    document.querySelector('.screen').textContent = '0'
}

const showValues = () => {
    console.log(
        `First value: ${firstValue}
        Second value: ${secondValue}
        Operator: ${operator}`)
}

let firstValue = null
let secondValue = null
let operator = null
let displayValue = null

createNumbers()
createButtons()

const populateScreen = () => {
    const clickables = document.querySelectorAll('.clickable')

    clickables.forEach(el => {
        el.addEventListener('click', function(){
            // Numbers
            if (el.classList.contains('number')) {
                if (displayValue === null) {
                    document.querySelector('.screen').textContent = el.textContent

                    displayValue = document.querySelector('.screen').textContent
                    firstValue = displayValue
                } else {
                    document.querySelector('.screen').textContent += el.textContent

                    regex = /[\+\-\*\/]/
                    if (regex.test(document.querySelector('.screen').textContent)) {
                        displayValue = document.querySelector('.screen').textContent.split(/[\+\-\*\/]/)[1]
                        secondValue = displayValue
                    } else {
                        displayValue = document.querySelector('.screen').textContent
                        firstValue = displayValue
                    }
                }
                showValues()
            }
            // Buttons ( calculations )
            if (el.classList.contains('button')) {
                if (secondValue === null && operator === null) {
                    operator = el.textContent
                    document.querySelector('.screen').textContent += el.textContent
                } else if (secondValue !== null && operator !== null){
                    document.querySelector('.screen').textContent = operate(parseInt(firstValue), operator, parseInt(secondValue))
                    operator = el.textContent
                    document.querySelector('.screen').textContent += el.textContent
                    firstValue = document.querySelector('.screen').textContent
                    secondValue = null
                }
            }
            // Equals
            if (el.classList.contains('equals')) {
                document.querySelector('.screen').textContent = operate(parseInt(firstValue), operator, parseInt(secondValue))
            }
            // Clear
            if (el.classList.contains('clear')) {
                clear()
            }
        })
    })
}

populateScreen()