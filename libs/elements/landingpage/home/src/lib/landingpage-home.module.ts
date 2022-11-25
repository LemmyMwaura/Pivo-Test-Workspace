import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landingpage-home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';

@NgModule({
  imports: [CommonModule, LandingPageRoutingModule],
  declarations: [HomeComponent, HeroComponent, AboutComponent],
})
export class LandingpageHomeModule {}
