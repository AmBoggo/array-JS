const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for (let c = 0; c < notas.length; c++) {
    soma = soma += notas[c]
}

let media = soma / notas.length

console.log(media)