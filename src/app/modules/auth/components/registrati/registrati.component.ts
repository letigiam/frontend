import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.scss']
})
export class RegistratiComponent implements OnInit {


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  changePasswordInput(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  // validatePassword(value: any) {
  //   return (/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,_]).{8,}$/.test(value));
  // }


}
