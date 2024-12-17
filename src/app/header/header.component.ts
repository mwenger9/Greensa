import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userType: string = 'guest';
  constructor(private router: Router) {}


  navigateToAuth(isLogin: boolean) {
    const mode = isLogin ? 'login' : 'register';
    this.router.navigate(['/login'], { queryParams: { mode } });
  }

  
  ngOnInit() {
    this.userType = sessionStorage.getItem('userType') || 'guest';
    // console.log("USERTYPE : " + this.userType);
  }
}
