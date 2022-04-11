// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// Exemplos:



const buscarPalavrasSemelhantes = (search, dados) => {
    let receptor = []
    let re = new RegExp(search + '.'  , "gi")
    for (let index = 0; index < dados.length; index++) {
        let result = dados[index].match(re)
        if(result != null) receptor.push(result)
        if(receptor[index] == dados[index]) {
            return console.log( dados[index])
        }
        console.log(result)
    }
    
}
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retorn