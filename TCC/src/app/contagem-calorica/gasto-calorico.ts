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
        if(this.genero == 2){
        return(
        ((this.peso * 14.818) + 486.6))}
        else{
        return(
            ((this.peso * 15.057) + 692.2))}
    }
/*
    calcular(){
        if(this.idade >= 0 && this.idade <=3 && this.genero == 2){
        return(
        ((this.peso * 58.317) - 31.1))}
        else if(this.idade >= 0 && this.idade <=3 && this.genero == 1){
        return(
            ((this.peso * 59.512) - 30.4))}

        else if(this.idade >= 4 && this.idade <=10 && this.genero == 2){
        return(
        ((this.peso * 20.315) + 485.9))}
        else if(this.idade >= 4 && this.idade <=10 && this.genero == 1){
        return(
            ((this.peso * 22.706) +  504.3))}

        else if(this.idade >= 11 && this.idade <=18 && this.genero == 2){
        return(
        ((this.peso * 13.384 ) + 692.6))}
        else if(this.idade >= 11 && this.idade <=18 && this.genero == 1){
        return(
            ((this.peso * 17.686) + 658.2))}

        else if(this.idade >= 19 && this.idade <=30 && this.genero == 2){
        return(
        ((this.peso * 14.818) + 486.6))}
        else if(this.idade >= 19 && this.idade <=30 && this.genero == 1){
        return(
            ((this.peso * 15.057) + 692.2))}

        else if(this.idade >= 31 && this.idade <=60 && this.genero == 2){
        return(
        ((this.peso * 8.126) + 845.6))}
        else if(this.idade >= 31 && this.idade <=60 && this.genero == 1){
        return(
            ((this.peso * 11.472) + 873.1))}

        else if(this.idade >= 61 && this.genero == 2){
        return(
        ((this.peso * 9.082) +  658.5))}
        else if(this.idade >= 4 && this.genero == 1){
        return(
            ((this.peso * 11.711) + 587.7))}
    }*/
    
    calcularPI(){

    }
}


