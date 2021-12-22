import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino:string =''
  hayError:boolean=false
  paises:Country[]=[]
  paisesSugeridos:Country[]=[]
  mostrarSugerencias:boolean=false


  constructor(private paisService:PaisService){

  }

  buscar(termino:string){
    this.termino=termino
    this.hayError=false
    this.paisService.buscarPais(this.termino).subscribe((paises) =>{
      this.paises=paises
      console.log(paises)
    },(err)=>{
      this.hayError=true
      this.paises=[]
    })
  }

  sugerencias(termino:string){
    this.hayError=false
    this.mostrarSugerencias=true
    this.termino=termino
    this.paisService.buscarPais(termino).subscribe((paises) =>{
      this.paisesSugeridos=paises.splice(0,5)
    },(err)=>{
      this.paisesSugeridos=[]
    })
  }

  buscarSugerido(termino:string){
    this.buscar(termino)
  }

}
