const input = document.querySelector('.input')
const button = document.querySelector('.button')
const output = document.querySelector('.output')

button.addEventListener('click', () => {
    const num = input.value.split('\n').map(i => i.split(' ')).flat()
    const calculate = num.filter(i=> {
        try {
           return Number(i)
        }
        catch (e) {
            
        }
    }).reduce((i, s) => Number(i) + Number(s))
    console.log(calculate)
    output.innerHTML = `total bill is : ${calculate}`
})
