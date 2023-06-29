import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private router: Router) {}

  login(loginData: any) {
    if (
      loginData.email === 'admin@mail.com' &&
      loginData.password === 'Admin@23#!'
    ) {
      localStorage.setItem('user', JSON.stringify(loginData));
      return;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
