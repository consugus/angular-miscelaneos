import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor( private aroute: ActivatedRoute ) { 
      this.aroute.params.subscribe( parameters => {
        console.log("Ruta Padre\n", parameters);
        
      });
   }

  ngOnInit() {
  }

}
