import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloBean{

  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeRestService(){
    //console.log('executing rest web serive')
    return this.http.get<HelloBean>(`${API_URL}/hello-bean`);
  }

  executeRestServiceWithPathParam(name:string){
    //console.log('executing rest web serive')
    // let AuthStr = this.crtBasicAuthHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: AuthStr
    // });
    return this.http.get<HelloBean>(`${API_URL}/hello/${name}`,
     //{headers}
     );
  }

  // crtBasicAuthHttpHeader(){
  //   let username='karthik';
  //   let password='dummy';
  //   let basicAuthStr='Basic '+ window.btoa(username+':'+password);
  //   return basicAuthStr;
  // }
}
