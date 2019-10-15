import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-details',
  template: `
    <p>
      user-details works!
    </p>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {

  constructor( private aroute: ActivatedRoute ) {
    this.aroute.parent.params.subscribe( parameters => {
      console.log("Ruta Hija en Detalles de Usuario\n", parameters);

    });
  }

  ngOnInit() {
  }

}
