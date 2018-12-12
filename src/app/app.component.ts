import { Component } from '@angular/core';

@Component({
  selector: 'am-app',
  template: `
    <h1> Hello Angular ! </h1>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'This is first Angular application';
}
