import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'arrow-forward-circle' },
    { title: 'Hjem', url: '/frontpage', icon: 'home' },
    { title: 'Gemte outfits', url: '/folder/inbox', icon: 'shirt' },
    { title: 'Favoriter', url: '/folder/outbox', icon: 'heart' },
    { title: 'Notify mig', url: '/folder/outbox', icon: 'notifications' },
    { title: 'Indstillinger', url: '/folder/outbox', icon: 'settings' },
  ];

  constructor() {}
}
