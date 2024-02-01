const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '=']
const buttons = ['+', '-', '*', '/']

const numbersContainer = document.querySelector('.numbers')
const buttonsContainer = document.querySelector('.buttons')

document.addEventListener('DOMContentLoaded', function() {
    let clickableButtons = document.querySelectorAll('.clickable')

    clickableButtons.forEach(clickable => {
        clickable.addEventListener('mouseover', function() {
            const currentColor = getComputedStyle(clickable).backgroundColor
            const darkerColor = darkenColor(currentColor)
    
            clickable.style.backgroundColor = darkerColor
        })
    
        clickable.addEventListener('mouseout', function() {
            clickable.style.backgroundColor = ''
        })
    })
})

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

buttons.forEach(btn => {
    let newBtn = document.createElement('div')

    newBtn.textContent = btn
    newBtn.className = 'button clickable'

    buttonsContainer.appendChild(newBtn)
})

const darkenColor = (color) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const darkerR = Math.max(0, r - 20);
    const darkerG = Math.max(0, g - 20);
    const darkerB = Math.max(0, b - 20);

    return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
}

