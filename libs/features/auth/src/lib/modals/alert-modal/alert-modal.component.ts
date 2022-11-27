import { Component, Input } from '@angular/core';
import { ShowModalService } from '../../providers/show-modal.service';
import { Message } from '@pivo-test-workspace/models';
@Component({
  selector: 'pivo-test-workspace-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent {
  @Input() message: Message = null;

  constructor(private _modal: ShowModalService) {}

  closeModal() {
    this._modal.emitMessage(null);
  }
}
