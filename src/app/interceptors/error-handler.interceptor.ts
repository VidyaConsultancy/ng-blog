import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authRequest = request.clone({
      withCredentials: true,
    });
    // console.log('interceptor', request);
    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMsg = error.message;
        // console.log(errorMsg);
        // show an error message to user
        // alert(errorMsg);
        return throwError(error);
      })
    );
  }
}
