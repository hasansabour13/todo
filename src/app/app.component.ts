import { Model, TodoItem } from './../model/model';
import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  model=new Model();//باید یه دونه از مدل بسازیم

  getname(){//برای یوزر
    return this.model.user;
  }

  gettodoitem(){//برای جدول
    return this.model.items;
  }
  additem(newtask: any){//چون وروردی دارد
    if(newtask !=""){
      this.model.items.push(new TodoItem(newtask,false))
    }
  }
}
