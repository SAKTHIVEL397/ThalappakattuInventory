import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'mail' },
    { title: 'Staff Management', url: '/staff', icon: 'paper-plane' },
    { title: 'Vendor Management', url: '/vendor', icon: 'heart' },
    { title: 'Orders', url: '/all-order', icon: 'archive' },
    { title: 'Inventory', url: '/inventory', icon: 'trash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
