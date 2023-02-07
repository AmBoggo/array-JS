//adicionar novo Item PUSH
//altera array

const notas = [10, 6, 8]

notas.push(7)

let somaNotas = 0;

notas.forEach(e => {
    somaNotas = somaNotas += e
})

let media = somaNotas / notas.length

console.log(media)