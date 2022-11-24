// modules
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './features-auth-routing.module';

//guards & providers
import { AuthService } from './providers/auth.service';
import { IsLoggedIn } from './guards/auth.guard';

//declarations
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthpageComponent } from './pages/authpage/authpage.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent, RegisterComponent, AuthpageComponent],
})
export class FeaturesAuthModule {
  static forRoot(): ModuleWithProviders<FeaturesAuthModule> {
    return {
      ngModule: FeaturesAuthModule,
      providers: [IsLoggedIn, AuthService],
    };
  }
}
