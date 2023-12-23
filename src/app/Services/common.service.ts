import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Modal/task';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  path: any = 'http://localhost:3000/data'

  constructor(private http: HttpClient) { }

  getData(): Observable<Task> {
    return this.http.get<Task>(this.path);
  }
  postData(task: Task): Observable<Task[]> {
    return this.http.post<Task[]>(this.path, task);
  }

  editData(task: Task): Observable<Task> {
    return this.http.put<Task>(this.path + "/" + task.id, task);
  }

  deleteData(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.path + "/" + task.id);
  }



}


