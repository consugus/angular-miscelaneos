import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-new',
  template: `
  <p>
  user-new works!
  </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {

  constructor( private aroute: ActivatedRoute ) {
    this.aroute.parent.params.subscribe( parameters => {
      console.log("Ruta Hija en Nuevo Usuario\n", parameters);

    });
 }

  ngOnInit() {
  }

}
