import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string):boolean{
    console.log('before ' + this.isUserLoggedIn())
    if (username==='karthik' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser',username);
      console.log('after ' + this.isUserLoggedIn())
      return true;
    }
    
  }

  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user ===null )
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
