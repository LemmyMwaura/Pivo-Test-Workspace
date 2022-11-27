import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowModalService } from '../../providers/show-modal.service';
import { Message } from '@pivo-test-workspace/models';

@Component({
  selector: 'pivo-test-workspace-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.scss'],
})
export class AuthpageComponent {
  isLoginPage = true;
  messageSub$: Observable<Message>;
  message: Message = null;

  constructor(private _router: Router, private _modal: ShowModalService) {
    this.messageSub$ = this._modal.messageToEmit;
  }

  showLogin() {
    this.isLoginPage = true;
    this._router.navigate(['/auth/login']);
  }

  showSignUp() {
    this.isLoginPage = false;
    this._router.navigate(['/auth/register']);
  }

  getVector = () => 'assets/images/Vector.png';
  getCart = () => 'assets/images/Cart.png';
  getEllipseSmall = () => 'assets/images/Ellipse.png';
  getEllipseSmaller = () => 'assets/images/Ellipse-1.png';
  getEllipseSmallest = () => 'assets/images/Ellipse-2.png';

}
