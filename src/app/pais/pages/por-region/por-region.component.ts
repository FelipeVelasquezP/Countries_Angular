import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  termino:string =''
  paises:Country[]=[]
  regiones:string[]=['africa','americas','asia','europe','oceania']
  regionActual:string=''

  constructor(private paisService:PaisService){
  }

  buscar(termino:string){
    this.regionActual=termino
    this.paisService.buscarRegion(this.regionActual).subscribe((paises) =>{
      this.paises=paises
      console.log(paises)
    },(err)=>{
      this.paises=[]
    })
  }

  changeCSS(region:string){
    return (region ===this.regionActual) ? 'btn btn-primary':'btn btn-outline-primary';
  }

}
