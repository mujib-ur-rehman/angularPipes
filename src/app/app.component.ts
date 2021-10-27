import { Component } from '@angular/core';
import { Person } from './person-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPipes';
  persons: Person[] = [
    {
      id: 1,
      name: 'John',
      email: 'test@test.com'
    },
    {
      id: 2,
      name: 'Doe',
      email: 'test@test.com'
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'test@test.com'
    }
  ];
}
