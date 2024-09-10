import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./todo.models";

@Injectable()
export class TodoService {
    #httpClient = inject(HttpClient);
    
    get todos():Observable<Todo[]> {
       return  this.#httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    }
}