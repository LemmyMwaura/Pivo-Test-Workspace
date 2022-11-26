
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowModalService {
  message!:string | null
  messageToEmit = new EventEmitter<string | null>();

  emitMessage(value:string | null) {
    this.messageToEmit.emit(value);
  }
}
