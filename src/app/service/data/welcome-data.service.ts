import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'


export class HelloWorldBean {
  constructor(public message: string) { }

}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  ExecuteHelloWorld() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  ExecuteHelloWorldWithPath(name: string) {

    let basicAuthHeaderString = this.createBasicAuthHttpHeader();

    let headers = new HttpHeaders({
      Authorrization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      { headers }
    )
  }

  createBasicAuthHttpHeader() {
    let username = 'majed';
    let password = '1234';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }

}
