import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  eye: any;
  showPassword = false;
  input: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['admin@cer.it', Validators.required],
      password: ['password', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  changePasswordInput(input: any): any {
    this.showPassword = !this.showPassword;
    input.type = this.showPassword ? 'text' : 'password';
    let elem = document.getElementById('eye');
    elem?.classList.toggle('fa-eye');
    elem?.classList.toggle('fa-eye-slash');

    // input.type = input.type === 'password' ? 'text' : 'password';
    // this.eye = input.type;
  }

  login() {
    this.router.navigate(['/app/home']);
  }
}
