export class teste {

Resultado = 0
idade = window.document.getElementById("idade")

constructor(idade:number){

}

calcular():  void{
    if(this.idade < 0){
        this.Resultado = 0
    }
}

}