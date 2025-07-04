let interestRate = 1/100; //percentuale
let time = 1; //anni
let interest;
let saldoComplessivo;

class BankAccount {
  constructor(numeroConto, intestatario, saldo) {
    this.numeroConto = numeroConto;
    this.intestatario = intestatario;
    this.saldo = saldo;
  }

  // Anagrafica
  info() {
    console.log('Numero conto: ' + this.numeroConto + ' Intestatario: ' + this.intestatario);
  }

  // Deposita
  deposita(soldi) {
    if (soldi >= 0) {
        this.saldo = this.saldo + soldi;
        console.log('Hai appena depositato € ' + soldi + '. Il tuo nuovo saldo equivale a: € ' + this.saldo);}
  }
  
  // Preleva
  preleva(soldi) {
    if (soldi <= this.saldo) {
        this.saldo = this.saldo - soldi;
        console.log('Hai appena prelevato € ' + soldi + '. Il tuo nuovo saldo equivale a: € ' + this.saldo);
    } else {
        console.log('Impossibile prelevare € '+ soldi + ' perché è un importo maggiore del saldo.')
    }
  }

  // Visualizza saldo
  visualizzaSaldo() {
    console.log('Buongiorno ' + this.intestatario + ', il tuo saldo è di € ' + this.saldo +'.');
  }

  // Calcola interessi
  calcolaInteressi() {
    interest =  this.saldo * interestRate * time;
    saldoComplessivo = this.saldo + interest;
    console.log ('Gli interessi che maturerai equivalgono all\'1% annuo, con il saldo attuale corrispondono a € ' + interest + '. Il nuovo saldo sarà di: € ' + saldoComplessivo);
  }
}

let conto1 = new BankAccount(1408623759, 'Carolina Bonanno', 20000);
let conto2 = new BankAccount(8045129367, "Francesco Mansi", 50000);
let conto3 = new BankAccount(7128549630, "Mario Rossi", 35000);

conto1.info();
conto1.visualizzaSaldo();
conto1.preleva(400);
conto1.deposita(600);
conto1.calcolaInteressi();
console.log('-----------');

conto2.info();
conto2.visualizzaSaldo();
conto2.preleva(120);
conto2.deposita(600);
conto2.calcolaInteressi();
console.log('-----------');

conto3.info();
conto3.visualizzaSaldo();
conto3.preleva(36000);
conto3.preleva(1000);
conto3.deposita(700);
conto3.calcolaInteressi();

