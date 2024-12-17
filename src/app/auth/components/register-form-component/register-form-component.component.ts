import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css']
})
export class RegisterFormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted', this.name, this.email, this.password);
  }
}
