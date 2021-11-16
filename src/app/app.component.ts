import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiplication';

  nombreForm = new FormGroup({
    nombre: new FormControl()
  });

  tabChiffresBouton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  nombreUser: number = 0;
  nombreTab: number = 10;

  recupNombre() {
    this.nombreUser = this.nombreForm.value.nombre;
  }


  selectNbTab(chiffre: number) {
    this.nombreTab = chiffre;
  }
}
