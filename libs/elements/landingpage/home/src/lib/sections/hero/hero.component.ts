import { Component } from '@angular/core';

@Component({
  selector: 'pivo-test-workspace-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  getBackImg = () => "assets/images/designer_1.png"
}
