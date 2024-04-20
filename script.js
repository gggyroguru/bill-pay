const input = document.querySelector('.input')
const calculate = document.querySelector('#calculate')
const output = document.querySelector('.output')
const clear = document.querySelector('#clear')

calculate.addEventListener('click', () => {
    if (input.value === '') {
        output.innerHTML = `input bill`
    } else {

        const num = input.value.split('\n').map(i => i.split(' ')).flat()
        const total = num.filter(i => {
            try {
                return Number(i)
            } catch (e) {

            }
        }).reduce((i, s) => Number(i) + Number(s))
        output.innerHTML = `total bill is : ${total}`
    }
})

clear.addEventListener('click', () => {
    input.value = ''
})
