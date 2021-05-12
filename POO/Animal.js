class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;

    }

    ChecarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Esse método faz parteda classe mãe!")
    }

}

class Cachorro extends Animal{

    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }

latir(){
    console.log('ROLF! ROLF!');
}

ChecarEstoque(){
    console.log('Na loja temos 20 dogões' );
}


MetodoQualquer(){
    console.log("Aqui é uma classe de dogs!")
    super.MetodoQualquer();
    console.log("Aqui vem funcionalidade!")
}

}

class PastorAlemao extends Cachorro{

}

class PastorAlemaoMacho extends PastorAlemao{
    
}

class Pato extends Animal {


}

var dog = new Cachorro("Dogão", 5, 250, "Fila", 30);

dog.ChecarEstoque()
dog.latir()
dog.MetodoQualquer()
console.log(dog.idade)
