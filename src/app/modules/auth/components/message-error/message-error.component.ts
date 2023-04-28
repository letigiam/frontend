import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.router.navigate(['/']);
  }
}
