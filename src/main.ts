import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="{{href}}">
      {{content}}
    </a>
  `,
})
export class App {
  content = 'Learn more about Angular';
  name = 'Angular';
  href = 'https://angular.io/start';
}

bootstrapApplication(App);
