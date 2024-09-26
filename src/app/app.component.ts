import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Home Component</h1>`, 
  // templateUrl: './home.component.html', 
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isLoading = false;
}
