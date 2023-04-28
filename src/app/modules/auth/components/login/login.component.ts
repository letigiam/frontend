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
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  changePasswordInput(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    // this.eye = input.type;
  }

  login() {
    this.router.navigate(['/home']);
  }
}
