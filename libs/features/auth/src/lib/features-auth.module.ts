import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//guards & services
import { AuthService } from './providers/auth.service';
import { IsLoggedIn } from './guards/auth.guard';

//components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './features-auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class FeaturesAuthModule {
  static forRoot(): ModuleWithProviders<FeaturesAuthModule> {
    return {
      ngModule: FeaturesAuthModule,
      providers: [IsLoggedIn, AuthService],
    };
  }
}
