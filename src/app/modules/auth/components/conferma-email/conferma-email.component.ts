import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-conferma-email',
  templateUrl: './conferma-email.component.html',
  styleUrls: ['./conferma-email.component.scss']
})
export class ConfermaEmailComponent implements OnInit {

  constructor(
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document,
  ) { }
  ngOnInit(): void {
  }
}
