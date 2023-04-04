import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(public HardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.HardcodedAuthService.isUserLogged();
  }

}
