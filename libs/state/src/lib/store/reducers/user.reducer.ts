import { createReducer, on } from '@ngrx/store';
import { userActions } from '../actions/user.actions';

import { User } from '@pivo-test-workspace/models';

const initialUserState: User = {
  uid: null,
  email: null,
  displayName: null,
  isLoggedIn: false,
};

export const userReducer = createReducer(
  initialUserState,
  on(
    userActions.loginSuccess,
    (state, { uid, email, displayName, isLoggedIn }) => ({
      ...state,
      uid: uid,
      email: email,
      displayName: displayName,
      isLoggedIn: isLoggedIn,
    })
  ),

  on(userActions.logoutSuccess, () => initialUserState)
);
