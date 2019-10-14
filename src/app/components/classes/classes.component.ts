import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [
     `
      separate {
        padding: 5px;
      }
      `
  ]
})
export class ClassesComponent implements OnInit {

  alert:string = "alert-danger";
  loading:boolean = false;

  properties:Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() { }

  save(){
    this.loading = true;
    setTimeout( () => this.loading = false, 1500);
  }

}
