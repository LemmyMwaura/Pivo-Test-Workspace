import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//guards & services
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './guards/auth.guard';

//components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class FeaturesAuthModule {
  static forRoot(): ModuleWithProviders<FeaturesAuthModule> {
    return {
      ngModule: FeaturesAuthModule,
      providers: [AuthGuard, AuthService],
    };
  }
}
