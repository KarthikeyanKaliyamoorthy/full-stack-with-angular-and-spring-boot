import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // let username='karthik';
    // let password='dummy';
    // let basicAuthStr='Basic '+ window.btoa(username+':'+password);

    let basicAuthStr = this.basicAuthService.getAuthToken();
    let username = this.basicAuthService.getAuthUserName();

    if(basicAuthStr && username){
      req = req.clone({
        setHeaders:{
          Authorization : basicAuthStr
        }
  
      });
    }  

    return next.handle(req);
  }

}
