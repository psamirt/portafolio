import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  downloadCV(){
    const link = document.createElement('a')
    link.href= '../../assets/images/Full stack developer samir.pdf'
    link.download='Samir CV'
    link.click()
  }
}
