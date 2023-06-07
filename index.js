// Divisivel por 3=> fizz
// divisivel por 5=> buzz
// divisivel por 3 e 5 =>> FizzBuzz
// não divisivel por 3 ou 5=> entrada
// não é um numero => 'não é um numéro'


const resultado = fizzbuzz(154);
console.log(resultado);

function fizzbuzz(entrada){
  
 if (typeof entrada !== 'number')
   return 'Não é Número';

if((entrada %3 ===0) && (entrada %5 ===0))
    return 'FizzBuzz';

  if (entrada % 3 ===0)
  return 'fizz';

  if (entrada % 5 === 0)
  return 'buzz';

  return entrada;
  
}