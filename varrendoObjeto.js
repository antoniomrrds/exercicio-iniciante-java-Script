// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
// Exemplo:
const recerberMelhorEstudante = object => {
    let alunos
    let valoresMedia = []
    let turma = []
    let mean = 0
    let copiaValues = Object.values(object)
    let copiaKeys = Object.keys(object)
    for (let index = 0; index < copiaValues.length; index++) {
        acumulador = copiaValues[index]
        const soma = (acumulador, elementoAtual) => acumulador + elementoAtual
        mean = acumulador.reduce(soma) / copiaValues[index].length
        valoresMedia.push(mean)
        function alunosMaiorDesempenho(name, mean) {
            this.name = name
            this.mean = mean
        }
        alunos = new alunosMaiorDesempenho(copiaKeys[index], valoresMedia[index])
        turma.push(alunos)
    }   
    console.log(turma)
    const maior = (acumulador, atual) => {
        return acumulador.mean > atual ? acumulador.mean : atual
    }
    let tamanho = turma.length-1
    let filtro = turma.map(maior).sort(function (a, b) { return a - b })[tamanho]
    
    let melhorMedia = turma.filter(e => e.mean === filtro)
     return   console.log(melhorMedia[0])
}
recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [9, 10, 9, 9], // 
    Carlota: [10, 10, 10, 10] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }