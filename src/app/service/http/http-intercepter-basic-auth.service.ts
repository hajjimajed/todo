import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {


  constructor(
    private basicAuthService: BasicAuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = 'majed';
    // let password = '1234';
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthService.getAthenticatedToken();
    let username = this.basicAuthService.getAthenticatedUser();


    if (basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(req);
  }


}
