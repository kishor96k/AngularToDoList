import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Modal/task';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  taskObj: Task = new Task();
  taskArr: any;
  // taskArr: Task[] = [];
  addTaskVal: any = '';
  editTaskVal: any = '';

  constructor(private http: HttpClient, private service: CommonService) { }

  ngOnInit(): void {
    this.editTaskVal = '';
    this.addTaskVal = '';
    this.taskArr = [];
    this.taskObj = new Task();
    this.getTask();
  }

  call(etask: Task) {
    this.taskObj = etask;
    this.editTaskVal = etask.task_name;


  }

  getTask() {
    this.service.getData().subscribe((res) => {
      this.taskArr = res;
    }, err => {
      console.log(err);
    })
  }

  addTask() {
    this.taskObj.task_name = this.addTaskVal;
    this.service.postData(this.taskObj).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
      this.addTaskVal = '';
    }, err => {
      console.log(err);
    })
  }

  editTask() {
    this.taskObj.task_name = this.editTaskVal;
    this.service.editData(this.taskObj).subscribe((res) => {
      this.ngOnInit();
    }, err => {
      console.log(err);
    })
  }

  deleteTask(etask: Task) {
    this.service.deleteData(etask).subscribe((res) => {
      this.ngOnInit();
    }, err => {
      console.log(err);
    })
  }

}
