import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cse-department';

  about()
  {
    scrollTo(0,100);
  }

  events()
  {
    scrollTo(0,1800);
  }
  contact()
  {
    scrollTo(0,2300);
  }
}
