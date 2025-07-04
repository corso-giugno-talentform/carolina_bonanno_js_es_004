// 3 metodi

// mostrare info del libro
// segnare come letto/non letto
// calcolare tempo di lettura stimato (assumendo 1 pagina = 2 minuti)

let tempo = 120;

let libro1 = {
    titolo: "Harry Potter e la pietra filosofale",
    autore: "J. K. Rowling",
    pagine: 320,
    letto: true,

    info: function() {
    return `${this.titolo}, ${this.autore}, ${this.pagine} pagine`;
    },

    leggere: function() {
        if (this.letto == true) {
            console.log("Libro letto!");
        } else {
            console.log("Libro non letto!");
        }
    },

    tempoLettura: function() {
        return (this.pagine * tempo)/60;
    }
};

console.log(libro1.info());
libro1.leggere(); // ricordati di non inserire console.log anche qui
console.log('Per leggere questo libro ti serviranno ' + libro1.tempoLettura() + ' minuti, ovvero ' + parseInt(libro1.tempoLettura()/60) + " ore!");