import { Component } from '@angular/core';

@Component({              //definisco il selettore, il template ed lo stile 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Donaldo Trumpone","Gianni Bidone","Orazio Chicamala","Giulia Porcospino","Guido Gualtiero","Zeno Coscienza","Gesù Jesoo","Machete Satellite","Marra Guè"];
  myName = 'filippoTomatis';

  changeName(){
    this.myName= this.names[Math.floor(Math.random()*(8-0 + 0))];
  }
}
