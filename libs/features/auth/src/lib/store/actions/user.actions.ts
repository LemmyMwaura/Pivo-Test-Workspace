import { createActionGroup, emptyProps, props } from '@ngrx/store';

export interface User {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'Login Success': props<User>(),
    'Login Failure': props<{ error: string }>(),
    'Logout Success': emptyProps(),
    'Logout Failure': (error: Error) => ({ error }),
  },
});
