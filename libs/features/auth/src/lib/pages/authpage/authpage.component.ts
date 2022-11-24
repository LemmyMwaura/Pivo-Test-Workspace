import { Component } from '@angular/core';

@Component({
  selector: 'pivo-test-workspace-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.scss'],
})
export class AuthpageComponent {
  isLogin = true

  getVector = () => "assets/images/Vector.png"
  getCart = () => "assets/images/Cart.png"
  getEllipseSmall = () => "assets/images/Ellipse.png"
  getEllipseSmaller = () => "assets/images/Ellipse-1.png"
  getEllipseSmallest = () => "assets/images/Ellipse-2.png"
}
