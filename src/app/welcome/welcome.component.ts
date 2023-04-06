import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name = ''

  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomeDataService
  ) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage() {
    console.log(this.welcomeService.ExecuteHelloWorld())
    this.welcomeService.ExecuteHelloWorld().subscribe()
  }

}
