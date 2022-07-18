const fatorial = (number) => {
  let result = number;
  let auxFat = 1;
  if( number === 0 || number === 1){
    return 1
  }
  for (let i = 1; i < number; i += 1) {
    let aux = result;
    result = aux * auxFat;
    auxFat += 1;
  };
  return result;
};

console.log(fatorial(6));