import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}
  
  // EventEmitter to notify the parent component (AuthComponent) to toggle the form
  @Output() toggleForm = new EventEmitter<void>();

  // Submit function to handle login
  onSubmit() {
    if (this.email && this.password) {
      console.log('Login Form Submitted');
      console.log(`Email: ${this.email}, Password: ${this.password}`);

      // Check credentials for user type
      if (this.email === 'admin' && this.password === 'admin') {
        sessionStorage.setItem('userType', 'admin');
        console.log('Logged in as Admin');
      } else {
        sessionStorage.setItem('userType', 'user');
        console.log('Logged in as User');
      }
    } else {
      console.log('Please fill in all fields');
    }
      // Navigate to the main page
      this.router.navigate(['/']);
  }
}
