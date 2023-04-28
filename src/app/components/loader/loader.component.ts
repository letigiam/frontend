import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: boolean = false;
  constructor(private router: Router,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

}
