import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Capstone-Angular-Project';
  isEnvironmentRoute = false;

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd && e.url.indexOf('environment') >= 0 && !environment.production) {
        this.isEnvironmentRoute = true;
      }
    });
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

}
