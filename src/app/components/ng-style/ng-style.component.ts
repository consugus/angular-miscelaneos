import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template:
  `
    <p [style.fontSize.px]= "size">
      Hola mundo... este es un párrafo que permite ajustar el tamaño de la letra en tiempo de ejecución
    </p>

    <button class="btn btn-primary" (click) = "size = size + 5" >
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click) = "size = size - 5" >
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size = 20;


  constructor() { 

  }

  ngOnInit() {
  }

}
