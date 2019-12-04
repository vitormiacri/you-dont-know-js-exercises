const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const TAX_RATE = 0.05;
const PHONE_PRICE = 199.99;
const ACCESSORY_PRICE = 19.99;
const MONEY_LIMIT = 100;

let wallet = 0;
let amount = 0;

function calcAndFormatTax(amount) {
  return "R$" + (amount + amount * TAX_RATE).toFixed(2);
}

rl.question("Qual o saldo na conta bancária? ", answer => {
  rl.close();
  wallet = Number(answer);

  console.log("Saldo na carteira: " + wallet);
  console.log("Mesada: " + MONEY_LIMIT);

  while (amount < wallet) {
    amount += PHONE_PRICE;

    if (amount < MONEY_LIMIT) {
      amount += ACCESSORY_PRICE;
    }
  }

  console.log("Total da sua compra: " + calcAndFormatTax(amount));

  if (amount > wallet) {
    console.log("Você não tem dinheiro para pagar esta conta! :(");
  }
});
