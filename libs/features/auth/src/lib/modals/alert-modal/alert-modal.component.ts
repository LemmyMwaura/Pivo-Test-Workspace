import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowModalService } from '../../providers/show-modal.service';

@Component({
  selector: 'pivo-test-workspace-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnDestroy {
  messageSub$: Subscription;
  message: string | null = null;

  constructor(private _modal: ShowModalService) {
    this.messageSub$ = this._modal.messageToEmit.subscribe((data) => {
      this.message = data;
      console.log(this.message);
    });
  }

  closeModal() {
    this._modal.emitMessage(null);
  }

  ngOnDestroy() {
    this.messageSub$.unsubscribe();
  }
}
