import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cloneArray, TodoItem } from '../../shared';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
    public allItems =new Array<TodoItem>;
    private orig =new Array<TodoItem> ;

    @ViewChild('description', { static: true }) private descriptionInput: ElementRef | undefined;

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {

    }

    public ngOnInit() {
        this.http.get<TodoItem[]>('assets/mock-data/todos.json')
            .subscribe((result) => {
                this.orig = result;
                this.allItems = cloneArray(result);
            });
    }

    public onAdd(newItem:TodoItem): void {
      
        if(this.descriptionInput) {
          this.descriptionInput.nativeElement.value = '';
        }

        this.snackBar.open(`Item with description "${newItem.description} added`, undefined, { duration: 1500 });
        this.allItems?.push(newItem);
        // this.snackBar.open('add item', undefined, { duration: 1500 });
    }
    
    public onReset(): void {
        this.allItems = this.orig ? cloneArray(this.orig) : this.orig;
        this.snackBar.open('reset todos', undefined, { duration: 1500 });
    }
   


}
