import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../shared';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html'
})

export class TodoItemComponent{
    @Input() 
    public items: TodoItem[] | undefined;

    constructor(private snackBar: MatSnackBar) { }

    public onChecked(checked: boolean, item: TodoItem) {
        item.checked = checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', undefined, { duration: 1500 });
    }  

}