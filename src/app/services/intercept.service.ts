// Angular
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// RxJS
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import { AuthToken } from '../models/auth-token.model';
import Swal from 'sweetalert2';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';

/**
 * More information there => https://medium.com/@MetonymyQT/angular-http-interceptors-what-are-they-and-how-to-use-them-52e060321088
 */
@Injectable({
    providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {
    toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    constructor(
        private loaderService: LoadingService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const spinner = request.headers.get('spinner') == 'hidden' ? false : true;
        if (spinner) {
            this.loaderService.setLoading(true, request.url);
        }

        let newRequest = request.clone();
        let storageData = localStorage.getItem('Authorization') || '{}';

        newRequest = request.clone({
            setHeaders: {
                'ngrok-skip-browser-warning': "true",
            },
            withCredentials: true
        });
        if (storageData) {
            newRequest = request.clone({
                setHeaders: {
                    'Authorization': storageData,
                    'ngrok-skip-browser-warning': "true",
                },
                withCredentials: true
            });

        }

        return this.responseIntercept(next, newRequest);
    }
    responseIntercept(next: HttpHandler, request: HttpRequest<unknown>) {
        const toast = request.headers.get('toast') == 'hidden' ? false : true;

        return next.handle(request).pipe(
            tap(
                (next: HttpEvent<any>) => {
                    if (next instanceof HttpResponse) {
                        if (request.url.indexOf('/protected') != -1) {
                            if (request.method != 'GET' && toast == true) this.toast.fire({
                                icon: 'success',
                                title: next.body.message
                            })
                        }
                        this.loaderService.setLoading(false, request.url);
                        // if (next.headers?.get('token_exp')) {
                        //     const access_token = JSON.parse(localStorage.getItem('access_token') || '{}');
                        //     access_token.expired_in = next.headers.get('token_exp');
                        //     localStorage.setItem('access_token', JSON.stringify(access_token));
                        // }
                    }
                },
                (error: HttpErrorResponse) => {
                    this.loaderService.setLoading(false, request.url);
                }
            ),
            catchError((err) => {
                if (err.status === 401) {
                    // if (request.url.includes('draft')) window.location.href = decodeURI(`/auth/login?return_url=${environment.project}}`);
                    // this.toast.fire({
                    //     icon: 'error',
                    //     title: err.error.message
                    // });
                    Swal.fire({
                        icon: 'error',
                        title: '<div style="font-size:18px;">' + err.error.message + '</div>',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    this.router.navigate(['/auth/login']);
                }
                if (err.status === 400) {

                    Swal.fire({
                        icon: 'error',
                        title: '<div style="font-size:18px;">' + err.error.message + '</div>',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                }
                if (request.url.indexOf('/protected') != -1) {
                    // this.toast.fire({
                    //     icon: 'error',
                    //     title: err.error.message
                    // });
                    Swal.fire({
                        icon: 'error',
                        title: '<div style="font-size:18px;">' + err.error.message + '</div>',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                }

                return throwError(() => err.error.message);
            })
        );
    }
}
