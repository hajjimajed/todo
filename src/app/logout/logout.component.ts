import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private HardcodedAuthService: HardcodedAuthService
  ) { }

  ngOnInit() {
    this.HardcodedAuthService.logout();
  }

}
