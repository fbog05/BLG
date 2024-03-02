import { Component, OnInit, ViewChild } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('menu') homeMenu?: IonMenu;

  constructor(private router: Router) {}

  ngOnInit() {
    return;
    this.router.events.subscribe((event) => {
      if (
        event.type === EventType.NavigationEnd &&
        this.router.url === '/home'
      ) {
        this.homeMenu?.close();
      }
    });
  }
}