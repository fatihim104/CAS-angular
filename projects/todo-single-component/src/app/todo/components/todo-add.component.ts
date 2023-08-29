import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../shared';

@Component({
    selector: 'todo-add',
    templateUrl: 'todo-add.component.html'
})

export class TodoAddComponent {
    @Output() added = new EventEmitter<TodoItem>();
    @Input() nextId:number = 0;

    constructor() { }

    
    public addNewTodo(description:string){

        this.added.emit({description:description, checked:false, id:this.nextId, lastModified:new Date()})
    }

}