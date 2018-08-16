import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

  }
  title = 'app';
  gg: object = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  y: boolean = false;
  z: boolean = false;
  agregar: any = [0];
  fas: string = 'fas fa-times';
  cir: string = 'fas fa-circle';
  lista: any = ['a', 'b', 'c' , 'd', 'e', 'f', 'x', 'w', 'v'];
  cambiar(d) {

    console.log(d);
     this.agregar.push(d);
 if (this.agregar != null) {

    if (this.y === false) {
      this.y = true;
      this.z = false;
      if (d === 1) {
        this.lista.x = this.fas;
      }
      if (d === 2) {
        this.lista.w = this.fas;
      }
      if (d === 3) {
        this.lista.v = this.fas;
      }
      if (d === 4) {
        this.lista.a = this.fas;
      }
      if (d === 5) {
        this.lista.b = this.fas;
      }
      if (d === 6) {
        this.lista.c = this.fas;
      }
      if (d === 7) {
        this.lista.d = this.fas;
      }
      if (d === 8) {
        this.lista.e = this.fas;
      }
      if (d === 9) {
        this.lista.f = this.fas;
      }


    }
    else if (this.z === false) {
      this.z = true;
      this.y = false;
      if (d === 1) {
        this.lista.x = this.cir;
      }
      if (d === 2) {
        this.lista.w = this.cir;
      }
      if (d === 3) {
        this.lista.v = this.cir;
      }
      if (d === 4) {
        this.lista.a = this.cir;
      }
      if (d === 5) {
        this.lista.b = this.cir;
      }
      if (d === 6) {
        this.lista.c = this.cir;
      }
      if (d === 7) {
        this.lista.d = this.cir;
      }
      if (d === 8) {
        this.lista.e = this.cir;
      }
      if (d === 9) {
        this.lista.f = this.cir;
      }
    }
  }
}
}
