import { Component, ViewEncapsulation,Renderer2 } from '@angular/core';
 import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  encapsulation: ViewEncapsulation.None // CRITICAL: Allows styles to hit the body
})
export class Home {
  // activePage: string = 'Dashboard';
  // pageIcon: string = 'space_dashboard';
  // drawerOpen: boolean = false;

  // handleNavClick(pageName: string) {
  //   this.activePage = pageName;
  //   this.drawerOpen = false; // Close menu on click
    
  //   // Logic to change the icon based on page name
  //   const icons: any = {
  //     'Dashboard': 'space_dashboard',
  //     'Gift Wheel': 'auto_awesome',
  //     'Earnings': 'payments',
  //     'Marketplace': 'storefront',
  //     'Profile': 'person',
  //     'Wallet': 'wallet'
  //   };
  //   this.pageIcon = icons[pageName] || 'auto_awesome';
  // }

  // toggleTheme() {
  //   document.body.classList.toggle('light-mode');
  // }

  // toggleMobileMode() {
  //   document.body.classList.toggle('mobile-mode');
  // }

  // toggleMenu() {
  //   this.drawerOpen = !this.drawerOpen;
  // }
  isMobileMode = false;
  isDrawerOpen = false;
  activePage = 'Dashboard';
  currentPageIcon = 'auto_awesome';

  constructor(private renderer: Renderer2) {}

  toggleMobileMode() {
    this.isMobileMode = !this.isMobileMode;
  }

  toggleTheme() {
    const hasLightMode = document.body.classList.contains('light-mode');
    if (hasLightMode) {
      this.renderer.removeClass(document.body, 'light-mode');
    } else {
      this.renderer.addClass(document.body, 'light-mode');
    }
  }

  toggleMenu() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  navigateTo(page: string) {
    this.activePage = page;
    this.updateIcon(page);
    if (this.isDrawerOpen) this.isDrawerOpen = false;
  }

  private updateIcon(page: string) {
    const iconMap: { [key: string]: string } = {
      'Earnings': 'payments',
      'Marketplace': 'storefront',
      'Profile': 'person',
      'Wallet': 'wallet',
      'Dashboard': 'space_dashboard'
    };
    this.currentPageIcon = iconMap[page] || 'auto_awesome';
  }
}
