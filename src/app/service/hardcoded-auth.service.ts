import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "majed" && password === "1234") {
      return true;
    }
    return false;
  }

}
