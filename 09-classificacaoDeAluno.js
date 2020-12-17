const classificacaoAluno = function (nota) {
    if (nota >= 0 && nota <= 100) {
        if (nota < 38) { 
           return   console.log("Aluno Reprovado !!!")
         }
        //calculoDoMultiplo de 5
        let multiploDe5
        let arredondamento 
        let cont = nota;
        do { 
            if (cont % 5 == 0) {
                multiploDe5 = cont;
                break;
            }
            cont ++;
        } while (true)
        
        arredondamento =  multiploDe5 - nota 
        if (arredondamento < 3) { 
            nota = multiploDe5;
        }
        console.log(nota)
        if (nota >= 40) {
            
            return console.log("Aluno Aprovado")

         }
        
      
    } else {
        console.log("Digite uma Nota Valida de 0 a 100 !!!")
    }

};

classificacaoAluno(-1)