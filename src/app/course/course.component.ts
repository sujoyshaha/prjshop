import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  
  <h2>{{ title}}</h2>
          <ul> 
            <li *ngFor="let course of courses">   
            {{ course}}     
            </li>
          </ul>
  
  `
})
export class CourseComponent {
  title = "list of courses";
  courses = ["course1", "course2","course3"];

}
