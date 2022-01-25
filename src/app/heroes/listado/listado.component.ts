import { Component, } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  heroes: string[] = ['Hulk','Batman','Thor', 'Iron man','El chavo'];
  heroeDelete: string = '';

  borrarHeroe(){
     this.heroeDelete = this.heroes.shift() || '' ;
    
    
  }
}
