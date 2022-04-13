import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  constructor() {}

 ngOnInit(){

  let numero = 10;
  // debugger;

  numero = 20;

  numero = numero + 10;

  numero = 0;

   console.log(numero);
 }

}

// Con el ngOnInit y el console log puedo visualizar por consola

// debugger solo al ponerlo al recargar la pagina se detendra en el punto donde colocamos ese debugger