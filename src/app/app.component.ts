import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginButtonComponent} from './login-button/login-button.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginButtonComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auth-redirect-error';
}
