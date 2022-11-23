import { Route } from '@angular/router';
import { IsLoggedIn } from '@pivo-test-workspace/features/auth';

export const appRoutes: Route[] = [
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
