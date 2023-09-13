class Album{
    static total_de_figurinhas = 0
    static getTotalFigurinhas(){
        console.log(this.total_de_figurinhas)
    }
    static setTotalFigurinhas(number){
        this.total_de_figurinhas += number
    }
    constructor(nome, total_de_figurinhas_no_album){
        this._nome = nome
        this._figurinhas = []
        Album.setTotalFigurinhas(total_de_figurinhas_no_album)
    }
    adicionarFigurinha(numero){
        this._figurinhas.push(numero)
    }
    verificarFigurinha(numero){
        let contador = -1
        this._figurinhas.forEach(figurinha => {
            if (figurinha === numero){
                contador = 1
            }});
            if (contador === 1){
                return console.log('está no album')
            } else{
                return console.log('não está no album')
            }
    }
}

let a = new Album('AlbumLegal', 154)
a.adicionarFigurinha(110)
a.adicionarFigurinha(111)
a.adicionarFigurinha(113)
a.adicionarFigurinha(114)
a.verificarFigurinha(113)
a.verificarFigurinha(200)
Album.getTotalFigurinhas()
