import { createReducer, on } from '@ngrx/store';
import { userActions } from '../actions/user.actions';

import { User } from '@pivo-test-workspace/models';

const initialUserState: User = {
  uid: null,
  email: null,
  displayName: null,
};

export const userReducer = createReducer(
  initialUserState,
  on(
    userActions.loginSuccess,
    (state, { uid, email, displayName }) => ({
      ...state,
      uid: uid,
      email: email,
      displayName: displayName,
    })
  ),

  on(userActions.logoutSuccess, () => initialUserState)
);
