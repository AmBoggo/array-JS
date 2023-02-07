//Como calcular média de lista de notas

const notas = [10, 6.5, 8, 7.5]
let somaNotas = 0;

notas.forEach(e => {
    somaNotas = somaNotas += e
})

let media = somaNotas / notas.length

console.log(media)

