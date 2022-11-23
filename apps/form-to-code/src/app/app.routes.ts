import { Route } from '@angular/router';
import { AuthGuard } from '@pivo-test-workspace/features/auth';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('@pivo-test-workspace/elements/form/home').then(
        (m) => m.ElementsFormHomeModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('@pivo-test-workspace/features/auth').then(
        (m) => m.FeaturesAuthModule
      ),
  },
];
