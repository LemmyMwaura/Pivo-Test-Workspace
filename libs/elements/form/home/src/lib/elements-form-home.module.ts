import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHomeRoutingModule } from './elements-form-home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesAuthModule } from '@pivo-test-workspace/features/auth';
@NgModule({
  imports: [
    CommonModule,
    FormHomeRoutingModule,
    FontAwesomeModule,
    FeaturesAuthModule,
  ],
  declarations: [HomeComponent],
})
export class ElementsFormHomeModule {}
