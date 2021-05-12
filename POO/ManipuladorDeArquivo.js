class Leitor{

    Ler(caminho){
        return "Conteúdo do arquivo!"
    }
}

class Escritor{
    Escrever(arquivo,conteudo){
        console.log("Conteúdo escrito")
    }
}

class Criador{
    criar(nome){
        console.log("Arquivo criado!")
    }
}

class CriadorDePdf{
    Criar(){
        console.log("Criando PDF...")
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo!")
    }
}



class ManipuladorDeArquivo{
    constructor(nome){
    this.arquivo = nome;
    this.leitor = new Leitor();
    this.escritor = new Escritor();
    this.criador = new Criador();
    this.Destruidor = new Destruidor();
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new CriadorDePdf();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.criador.criar("usuarios.txt")
        this.escritor.Escrever("usuarios.txt", lista)
    }
}

var manipulador = new ManipuladorDeArquivo("meuarquivo.txt")

manipulador.Leitor.Ler();
manipulador.Escritor.Escrever();
manipulador.Criador.criar();
manipulador.Destruidor.Deletar();

var usuarios = new GerenciadorDeUsuarios();

usuarios.SalvarListaDeUsuarios(["Bruno","Bandelli"])