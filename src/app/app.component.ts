import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-auth0-demo';
  authenticated = false;
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {


  }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(data => {
      console.log(data);
      if(!data) {
        this.auth.loginWithRedirect();

      }
    });


  }

}
