import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL, AUTHENTICATED_USER, TOKEN } from '../app.constants';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(public http: HttpClient) { }

  executeJWTAuthService(username: string, password: string) {
    
    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  executeAuthService(username: string, password: string) {
    //console.log('executing rest web serive')
    let authStr = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: authStr
    });
    return this.http.get<AuthBean>(`${API_URL}/auth-bean`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, authStr);
          return data;
        }
      )
    );
  }


  getAuthUserName() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthToken() {
    if (this.getAuthUserName)
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthBean {
  constructor(public message: string) { }

}