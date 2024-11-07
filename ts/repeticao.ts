// Definindo um array de números
let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando o loop 'for' para iterar sobre o array
console.log("Usando o loop 'for':");
for (let i: number = 0; i < num.length; i++) {
  console.log(num[i]);
}

// Usando o loop 'for...of' para iterar sobre o array
console.log("\nUsando o loop 'for...of':");
for (let number of num) {
  console.log(number);
}

// Usando o loop 'while' para iterar sobre o array
console.log("\nUsando o loop 'while':");
let index: number = 0;
while (index < num.length) {
  console.log(num[index]);
  index++;
}

// Usando o loop 'do...while' para iterar sobre o array
console.log("\nUsando o loop 'do...while':");
index = 0;
do {
  console.log(num[index]);
  index++;
} while (index < num.length);