import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-edit',
  template: `
    <p>
      user-edit works!
    </p>
  `,
  styles: []
})
export class UserEditComponent implements OnInit{

  constructor( private aroute: ActivatedRoute ) {
    this.aroute.parent.params.subscribe( parameters => {
      console.log("Ruta Hija en Editar Usuario\n", parameters);

    });
  }

  ngOnInit() { }

}