import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { TodoComponent } from "./containers/todo.component";
import { todoRoutesModule } from "./todo.routes";
import { TodoAddComponent } from "./components/todo-add.component";
import { TodoListComponent } from "./components/todo-list.component";
import { TodoItemComponent } from "./components/todo-item.component";
import { TodoViewComponent } from "./components/todo-view.component";

@NgModule({
  imports: [SharedModule, todoRoutesModule],
  declarations: [TodoComponent, TodoViewComponent, TodoAddComponent, TodoListComponent, TodoItemComponent],
})
export class TodoSingleComponentModule {}
