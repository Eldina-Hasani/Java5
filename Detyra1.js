const cmimiLibrit=12.50;
const cmimiFletores=1.80;

const sasiaLibrit=3;
const sasiaFletores=3;

let totaliLibrit=cmimiLibrit*sasiaLibrit;
let totaliFletores=cmimiFletores*sasiaFletores;

let totali=totaliLibrit+totaliFletores;

totali+=2.50;

console.log("Fatura");
console.log("Totali i librave: ", totaliLibrit);
console.log("Totali i fletoreve: ", totaliFletores);
console.log("Totali komplet", totali);