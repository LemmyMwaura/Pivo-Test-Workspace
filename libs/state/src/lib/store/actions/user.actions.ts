import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { User } from '@pivo-test-workspace/models';

export const userActions: any = createActionGroup({
  source: 'User',
  events: {
    'Login Success': props<User>(),
    'Login Failure': props<{ error: string }>(),
    'Logout Success': emptyProps(),
    'Logout Failure': (error: Error) => ({ error }),
  },
});
