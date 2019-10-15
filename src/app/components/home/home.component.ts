import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

      <app-ng-style></app-ng-style><hr>
      <app-classes></app-classes><hr>
      <div [appEnhacement] = " 'orange' "> Hola Mundo </div><hr>
      <app-ng-switch></app-ng-switch><hr>

      <p>
        Home works!
      </p>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
