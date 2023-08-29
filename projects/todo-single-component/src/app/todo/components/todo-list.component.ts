import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../shared';



@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html'
})

export class TodoListComponent {

    @Input() 
    public items: TodoItem[] | undefined;

    @Input() 
    public title: string | undefined;

    @Input() 
    public hasReset: boolean | undefined;

    @Output() 
    public resetItems = new EventEmitter<void>();
    
    constructor(){ }

   
    
}