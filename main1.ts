import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, RouterOutlet } from '@angular/router';

// 1. Import the Wallet component
import { Home } from './app/home/home';
import { Wallet } from './app/wallet/wallet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}


const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: 'wallet', component: Wallet }
    ]
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
