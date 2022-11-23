import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedIn } from '@pivo-test-workspace/features/auth';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('@pivo-test-workspace/elements/form/home').then(
        (m) => m.ElementsFormHomeModule
      ),
    canActivate: [IsLoggedIn],
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('@pivo-test-workspace/features/auth').then(
        (m) => m.FeaturesAuthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabledBlocking',
    enableTracing: true,
    preloadingStrategy: PreloadAllModules,
  })],
  
  exports: [RouterModule],
})
export class AppRoutingModule {}
