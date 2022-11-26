import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShowModalService } from '../../providers/show-modal.service';

@Component({
  selector: 'pivo-test-workspace-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.scss'],
})
export class AuthpageComponent implements OnDestroy {
  isLoginPage = true;
  messageSub$: Subscription;
  message: string | null = null;

  constructor(private _router: Router, private _modal: ShowModalService) {
    this.messageSub$ = this._modal.messageToEmit.subscribe((data) => {
      this.message = data;
    });
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

  ngOnDestroy() {
    this.messageSub$.unsubscribe()
  }
}
