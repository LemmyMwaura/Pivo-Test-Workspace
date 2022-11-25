import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('@pivo-test-workspace/elements/landingpage/home').then(
        (m) => m.LandingpageHomeModule
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
