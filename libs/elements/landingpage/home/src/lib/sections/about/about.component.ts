import { Component } from '@angular/core';

@Component({
  selector: 'pivo-test-workspace-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  getContentImg = () => "assets/images/login.png"
  getDetailsImg = () => "assets/images/Icon.png"
}
