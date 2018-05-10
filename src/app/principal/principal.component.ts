import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { 
    this.grabarUser();
    this.obtenerUser();
  }

  ngOnInit() {
  }

  grabarUser(){
    let user = [
      {
        nombre:"Josef",
        name:"josefpk",
        password: 123456,
        email:"jose@jose"
        },
      {
        nombre:"Felix",
        name:"felixxiam",
        password: 123456,
        email:"felix@felix"
      }
    ]

    localStorage.setItem("user", JSON.stringify(user));
  }

  obtenerUser(){
    let user = JSON.parse(localStorage.getItem("user"));
  }

}
