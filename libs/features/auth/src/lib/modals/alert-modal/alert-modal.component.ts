import { Component, Input } from '@angular/core';
import { ShowModalService } from '../../providers/show-modal.service';

@Component({
  selector: 'pivo-test-workspace-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent {
  @Input() message: string | null = null;

  constructor(private _modal: ShowModalService) {}

  closeModal() {
    this._modal.emitMessage(null);
  }
}
