let interestRate = 1/100; //percentuale
let time = 1; //anni
let interest;

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
    this.saldo = this.saldo + soldi;
    console.log('Hai appena depositato € ' + soldi + '. Il tuo nuovo saldo equivale a: € ' + this.saldo);
  }
  // Preleva
  preleva(soldi) {
    this.saldo = this.saldo - soldi;
    console.log('Hai appena prelevato € ' + soldi + '. Il tuo nuovo saldo equivale a: € ' + this.saldo);
  }
  // Visualizza saldo
  visualizzaSaldo() {
    console.log('Buongiorno ' + this.intestatario + ', il tuo saldo è di € ' + this.saldo +'.');
  }

  // Calcola interessi
  calcolaInteressi() {
    interest = this.saldo * interestRate * time;
    console.log ('Gli interessi che maturerai equivalgono all\'1% annuo e con il saldo attuale corrispondono a € ' + interest + '.')
  }
}

let conto1 = new BankAccount(1408623759, 'Carolina Bonanno', 20000);
let conto2 = new BankAccount(8045129367, "Francesco Mansi", 50000);
let conto3 = new BankAccount(7128549630, "Mario Rossi", 350000);

conto1.info();
conto1.visualizzaSaldo();
conto1.preleva(400);
conto1.calcolaInteressi();

conto2.info();
conto2.visualizzaSaldo();
conto2.deposita(600);
conto2.calcolaInteressi();

conto3.info();
conto3.visualizzaSaldo();
conto3.preleva(1200);
conto3.deposita(700);
conto2.calcolaInteressi();

