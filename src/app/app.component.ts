import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jwt-cg-tm';
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: 'home',
            index: 0
        }, 
        {
            label: 'Admin',
            link: 'admin',
            index: 1
        }, 
        {
            label: 'Operator',
            link: 'operator',
            index: 2
        },
        {
            label: 'Login',
            link: 'login',
            index: 3
        }
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
