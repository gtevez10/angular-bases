import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{ titulo }}</h1>
            <h3>la base es: <strong>{{base}}</strong> </h3>

            <button (click)= " sumar(); "> +1 </button>

            <span>{{ numero }}</span>

            <button (click)= " restar(); "> -1 </button>

            <br/>
            <br/>
            <button (click) = " acumular(base)">+ {{ base }}</button>

            <button (click) = " acumular(-base)">- {{ base }}</button>  

    `
})

export class ContadorComponent {

    titulo: string = 'Contador app';
    numero: number = 10;
    base  : number = 5;
   
    sumar = () =>{
      this.numero += 1; 
    }
  
    restar = () =>{
      this.numero -= 1;
    }
  
    acumular = ( valor:number ) =>{
      this.numero += valor;    
    }

}