
import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ShowModalService {
  messageToEmit = new EventEmitter<string | null>(true);

  emitMessage(value:string | null) {
    this.messageToEmit.emit(value);
  }
}
