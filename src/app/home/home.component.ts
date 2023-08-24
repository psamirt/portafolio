import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToAbout(): void {
    this.router.navigateByUrl('/home/about');
  }

  navigateToProjects(): void {
    this.router.navigateByUrl('/home/projects');
  }

  navigateToContact(): void {
    this.router.navigateByUrl('/home/contact');
  }

}