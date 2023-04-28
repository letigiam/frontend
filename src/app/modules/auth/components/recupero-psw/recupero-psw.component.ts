import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recupero-psw',
  templateUrl: './recupero-psw.component.html',
  styleUrls: ['./recupero-psw.component.scss']
})
export class RecuperoPswComponent implements OnInit {


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  onlySpaces(str: any) {
    return /^\s*$/.test(str);
  }
}
