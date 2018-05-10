import { Component, OnInit } from '@angular/core';
import { Task } from './tareas';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  public task: Task;
  public tasks:Array<Task>;
 
  constructor() {
    this.grabarTask();
    //this.obtenerTask();
    this.task = new Task("", "", new Date(),"");
    this.tasks = [
      new Task("Reunion Jose", "Capacitacion", new Date(), "Explanition GIT"),
      new Task("Reunion Exito", "Lidel de Proyecto", new Date(), "Explanition SASS")
    ]
  }

  ngOnInit() {
  }

  grabarTask(){
    let task = [
      {
        nombre:"Josef",
        proyecto:"Exito",
        fechaLimite: 12-12-2018,
        comentario:"Toca estudiar"
        },
      {
        nombre:"Carlos",
        proyecto:"Bancolombia",
        fechaLimite: 3-3-2017,
        comentario:"thgnfgngnzgfn"
      }
    ]

    localStorage.setItem("task", JSON.stringify(task));
  }

  onSubmit () {
    //localStorage.setItem("task", JSON.stringify([{name: "name1", pass: "pass1"}, {name: "name2", pass: "pass2"}])); //localstorage carlos
    this.task.fechaLimite = new Date(this.task.fechaLimite);
    this.tasks.push(this.task);
    this.task = new Task("","", new Date(),"");
  }

  eliminarTarea(index:number){
   /* let obj_test = JSON.parse(localStorage.getItem("task"));  // localstorage carlos
    console.log("obj_test: ", obj_test);*/
    this.tasks.splice(index,1);
  }


}
