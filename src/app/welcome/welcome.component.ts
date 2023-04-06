import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { tap, catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMsg = ''

  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomeDataService
  ) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage(): void {
    console.log(this.welcomeService.ExecuteHelloWorld());
    this.welcomeService.ExecuteHelloWorld()
      .pipe(
        tap((response: any) => this.handleSuccessResponse(response)),
        catchError((error: any): Observable<any> => {
          this.handleErrorResponse(error);
          return of(error);
        })
      )
      .subscribe();
  }


  handleSuccessResponse(response: any) {
    console.log(response.message)
    this.welcomeMsg = response.message
  }

  handleErrorResponse(error: any) {
    this.welcomeMsg = error.error.message
  }

}
