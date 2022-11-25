import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pivo-test-workspace-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.scss'],
})
export class AuthpageComponent {
  isLoginPage = true

  constructor(private _router: Router) {}

  showLogin () {
    this.isLoginPage=true
    this._router.navigate(['/auth/login'])
  }

  showSignUp () {
    this.isLoginPage=false
    this._router.navigate(['/auth/register'])
  }

  getVector = () => "assets/images/Vector.png"
  getCart = () => "assets/images/Cart.png"
  getEllipseSmall = () => "assets/images/Ellipse.png"
  getEllipseSmaller = () => "assets/images/Ellipse-1.png"
  getEllipseSmallest = () => "assets/images/Ellipse-2.png"
}
