export class GastoCalorico {
    private _peso: number = 0;
    private _genero: number = 0;
    private _idade: number = 0;
    private _fator: number = 0;
    private _altura: number = 0;

    constructor(p: number, g: number, i: number, f: number, a: number){
        this.peso = p;
        this.genero = g;
        this.idade = i;
        this.fator = f;
        this.altura = a;
    }

    set peso(pes: number) {
        if (pes >= 0 && pes <= 100) {
          this._peso = pes;
        }
    }
    
    get peso() {
        return this._peso;
    }

    set idade(ida: number) {
        if (ida >= 0 && ida <= 100) {
          this._idade = ida;
        }
    }
    
    get idade() {
        return this._idade;
    }

    set genero(gen: number) {
        if (gen >= 1 && gen <= 2) {
          this._genero = gen;
        }
    }
    
    get genero() {
        return this._genero;
    }

    set fator(fat: number) {
        if (fat >= 1 && fat <= 3) {
          this._fator = fat;
        }
    }
    
    get fator() {
        return this._fator;
    }
    
    set altura(alt: number) {
        if (alt >= 0 && alt <= 250) {
          this._altura = alt;
        }
    }
    
    get altura() {
        return this._altura;
    }

    calcular(){
    if(this.fator == 1){
        if(this.idade >= 0 && this.idade <=3 && this.genero == 2){
        return(
        ((this.peso * 58.317) - 31.1)* 1.55)}
        else if(this.idade >= 0 && this.idade <=3 && this.genero == 1){
        return(
            ((this.peso * 59.512) - 30.4)* 1.55)}

        else if(this.idade >= 4 && this.idade <=10 && this.genero == 2){
        return(
        ((this.peso * 20.315) + 485.9)* 1.55)}
        else if(this.idade >= 4 && this.idade <=10 && this.genero == 1){
        return(
            ((this.peso * 22.706) +  504.3)* 1.55)}

        else if(this.idade >= 11 && this.idade <=18 && this.genero == 2){
        return(
        ((this.peso * 13.384 ) + 692.6)* 1.55)}
        else if(this.idade >= 11 && this.idade <=18 && this.genero == 1){
        return(
            ((this.peso * 17.686) + 658.2)* 1.55)}

        else if(this.idade >= 19 && this.idade <=30 && this.genero == 2){
        return(
        ((this.peso * 14.818) + 486.6)* 1.55)}
        else if(this.idade >= 19 && this.idade <=30 && this.genero == 1){
        return(
            ((this.peso * 15.057) + 692.2)* 1.55)}

        else if(this.idade >= 31 && this.idade <=60 && this.genero == 2){
        return(
        ((this.peso * 8.126) + 845.6)* 1.55)}
        else if(this.idade >= 31 && this.idade <=60 && this.genero == 1){
        return(
            ((this.peso * 11.472) + 873.1)* 1.55)}

        else if(this.idade >= 61 && this.genero == 2){
        return(
        ((this.peso * 9.082) +  658.5)* 1.55)}
        else if(this.idade >= 4 && this.genero == 1){
        return(
            ((this.peso * 11.711) + 587.7)* 1.55)}
        else{
            return (0)
        }}
    else if(this.fator == 2){
            if(this.idade >= 0 && this.idade <=3 && this.genero == 2){
        return(
        ((this.peso * 58.317) - 31.1)* 1.84)}
        else if(this.idade >= 0 && this.idade <=3 && this.genero == 1){
        return(
            ((this.peso * 59.512) - 30.4)* 1.84)}

        else if(this.idade >= 4 && this.idade <=10 && this.genero == 2){
        return(
        ((this.peso * 20.315) + 485.9)* 1.84)}
        else if(this.idade >= 4 && this.idade <=10 && this.genero == 1){
        return(
            ((this.peso * 22.706) +  504.3)* 1.84)}

        else if(this.idade >= 11 && this.idade <=18 && this.genero == 2){
        return(
        ((this.peso * 13.384 ) + 692.6)* 1.84)}
        else if(this.idade >= 11 && this.idade <=18 && this.genero == 1){
        return(
            ((this.peso * 17.686) + 658.2)* 1.84)}

        else if(this.idade >= 19 && this.idade <=30 && this.genero == 2){
        return(
        ((this.peso * 14.818) + 486.6)* 1.84)}
        else if(this.idade >= 19 && this.idade <=30 && this.genero == 1){
        return(
            ((this.peso * 15.057) + 692.2)* 1.84)}

        else if(this.idade >= 31 && this.idade <=60 && this.genero == 2){
        return(
        ((this.peso * 8.126) + 845.6)* 1.84)}
        else if(this.idade >= 31 && this.idade <=60 && this.genero == 1){
        return(
            ((this.peso * 11.472) + 873.1)* 1.84)}

        else if(this.idade >= 61 && this.genero == 2){
        return(
        ((this.peso * 9.082) +  658.5)* 1.84)}
        else if(this.idade >= 4 && this.genero == 1){
        return(
            ((this.peso * 11.711) + 587.7)* 1.84)}
        else{
            return (0)
        }
        }
    else{
            if(this.idade >= 0 && this.idade <=3 && this.genero == 2){
        return(
        ((this.peso * 58.317) - 31.1)* 2.2)}
        else if(this.idade >= 0 && this.idade <=3 && this.genero == 1){
        return(
            ((this.peso * 59.512) - 30.4)* 2.2)}

        else if(this.idade >= 4 && this.idade <=10 && this.genero == 2){
        return(
        ((this.peso * 20.315) + 485.9)* 2.2)}
        else if(this.idade >= 4 && this.idade <=10 && this.genero == 1){
        return(
            ((this.peso * 22.706) +  504.3)* 2.2)}

        else if(this.idade >= 11 && this.idade <=18 && this.genero == 2){
        return(
        ((this.peso * 13.384 ) + 692.6)* 2.2)}
        else if(this.idade >= 11 && this.idade <=18 && this.genero == 1){
        return(
            ((this.peso * 17.686) + 658.2)* 2.2)}

        else if(this.idade >= 19 && this.idade <=30 && this.genero == 2){
        return(
        ((this.peso * 14.818) + 486.6)* 2.2)}
        else if(this.idade >= 19 && this.idade <=30 && this.genero == 1){
        return(
            ((this.peso * 15.057) + 692.2)* 2.2)}

        else if(this.idade >= 31 && this.idade <=60 && this.genero == 2){
        return(
        ((this.peso * 8.126) + 845.6)* 2.2)}
        else if(this.idade >= 31 && this.idade <=60 && this.genero == 1){
        return(
            ((this.peso * 11.472) + 873.1)* 2.2)}

        else if(this.idade >= 61 && this.genero == 2){
        return(
        ((this.peso * 9.082) +  658.5)* 2.2)}
        else if(this.idade >= 4 && this.genero == 1){
        return(
            ((this.peso * 11.711) + 587.7)* 2.2)}
        else{
            return (0)
        }
        }
    }
    
    calcularPI(){
        let IMC = this.peso/((this.altura/100)**2)
        if(IMC < 18.5){
            return (1)
        }
        else if(IMC > 18.5 && IMC < 25){
            return (2)
        }
        else if(IMC > 25 && IMC < 30){
            return (3)
        }
        else if(IMC > 30 && IMC < 35){
            return (3)
        }
        else if(IMC > 35 && IMC < 40){
            return (3)
        }
        else if(IMC > 40){
            return (3)
        }
        else{
            return (0)
        }
    }

/* `Atualmente seu índice de massa corporal está adequado, é recomendado continuar com o atual consumo de calorias diarias`
   `Atualmente seu índice de massa corporal está acima do adequado, é recomendado diminuir o consumo e aumentar os de calorias diarias`
   `Atualmente seu índice de massa corporal está acima do adequado, é recomendado aumentar o consumo e diminuir os de calorias diarias`


       PARA PERDER PESO 
Calorias ingeridas diarialmente
   {{resultado - 500}} até {{resultado - 1000}} kcal

       PARA MANTER O PESO 
Calorias ingeridas diarialmente
   {{resultado - 0}} até {{resultado - 200}} kcal

       PARA GANHAR PESO     
Calorias ingeridas diarialmente
   {{resultado + 500}} até {{resultado + 1000}} kcal
*/
}


