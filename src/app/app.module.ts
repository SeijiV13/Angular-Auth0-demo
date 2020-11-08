import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-9wq4ue47.us.auth0.com',
      clientId: 'pXzZ8J4lv05H4jYe3dfqQvR0Z66o7OgK',
      redirectUri: 'http://localhost:4200',
      scope: 'openid'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
