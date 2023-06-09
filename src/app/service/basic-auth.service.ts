import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN = 'authToken';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
    providedIn: 'root'
})
export class BasicAuthService {

    constructor(
        private http: HttpClient
    ) { }



    executeAuthService(username: string, password: string) {

        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

        let headers = new HttpHeaders({
            Authorization: basicAuthHeaderString
        })

        return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
            { headers }
        ).pipe(
            map(
                data => {
                    sessionStorage.setItem(AUTHENTICATED_USER, username);
                    sessionStorage.setItem(TOKEN, basicAuthHeaderString);
                    return data;
                }
            )
        )
    }


    getAthenticatedUser() {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    }

    getAthenticatedToken() {
        if (this.getAthenticatedUser()) {
            return sessionStorage.getItem(TOKEN);
        }
        return null;
    }


    isUserLogged() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER);
        return !(user === null);
    }

    logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    }

}

export class AuthenticationBean {
    constructor(
        public message: string
    ) { }
}
