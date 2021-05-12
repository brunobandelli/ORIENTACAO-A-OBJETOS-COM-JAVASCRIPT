class Filme{
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }

    Reproduzir(){
        console.log("Reproduzir....");
    }

    Pausar(){
        console.log("Pausado ||");
    }

    Avançar(){
        console.log("Avançar >>");
    }

    Fechar(){
        console.log("Fechar X");
    }

    Ficha(){
        console.log("Título: " + this.titulo)
        this.Reproduzir();
    }
}

var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Alguem", "2h");

vingadores.Ficha();

// vingadores.titulo = "Vingadores 2";
// vingadores.ano = "2014";
// vingadores.genero = "Ação"

// console.log(vingadores.titulo);
// console.log(vingadores.ano);
// console.log(vingadores.genero);

var batman = new Filme("Batman", 2009, "Ação", "Alguem 2", "2h30");

batman.Ficha()

// batman.titulo = "Batman";
// batman.ano = "2009";
// batman.genero = "Ação";

// console.log(batman.titulo);
// console.log(batman.ano);
// console.log(batman.genero);







// console.log("Titulo do Filme: " + vingadores.titulo);
// console.log("Ano de Lançamento: " + vingadores.ano);

// vingadores.Reproduzir();

// var hulk = new Filme();

// console.log("Titulo do Filme: " + hulk.titulo);
// console.log("Ano de Lançamento: " + hulk.ano);

// hulk.Pausar();

// var starWars = new Filme();

// console.log("Titulo do Filme: " + starWars.titulo);
// console.log("Ano de Lançamento: " + starWars.ano);

// starWars.Pausar();
// starWars.Avançar();
// starWars.Reproduzir();
