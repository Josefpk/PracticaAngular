import { Component, OnInit } from '@angular/core';
import { Logged } from './logged';

@Component({
  selector: 'logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

    public logged: Logged;
    public loggeds:Array<Logged>;


  constructor() {
    this.logged = new Logged("", "", new Date(),"");
    this.loggeds = [
      new Logged("Reunion Jose", "Capacitacion", "2018-01-12", "Explanition GIT"),
      new Logged("Reunion Exito", "Lidel de Proyecto", "2018-04-30", "Explanition SASS")
    ]
  }

  ngOnInit() {
  }

  onSubmit () {
    //localStorage.setItem("task", JSON.stringify([{name: "name1", pass: "pass1"}, {name: "name2", pass: "pass2"}])); //localstorage carlos
    this.loggeds.push(this.logged);
    this.logged = new Logged("","", new Date(),"");
  }

  eliminarTarea(index:number){
   /* let obj_test = JSON.parse(localStorage.getItem("task"));  // localstorage carlos
    console.log("obj_test: ", obj_test);*/
    this.loggeds.splice(index,1);
  }
}
