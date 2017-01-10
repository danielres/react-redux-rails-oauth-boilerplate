import saga from './sagas'
import SagaTester from 'redux-saga-tester'
import auth from './reducer'
import { initialState as _initialState } from './reducer'
import { loginUser } from './actions'
import { types } from './actions'

const initialState = { auth: _initialState }

const sagaTester = new SagaTester({
  initialState,
  reducers: {auth},
})

sagaTester.start(saga)

it('Logins the user with username and password', async () => {
  expect(sagaTester.getState().auth.isAuthenticated).toEqual(false)
  expect(sagaTester.getState().auth.isFetching     ).toEqual(false)

  sagaTester.dispatch(loginUser({username: "Tom", password: "xxx"}))

  await sagaTester.waitFor(types.LOGIN_SUCCESS)

  expect(sagaTester.getState().auth.isAuthenticated).toEqual(true )
  expect(sagaTester.getState().auth.isFetching     ).toEqual(false)
  expect(sagaTester.getState().auth.user.username  ).toEqual("Tom")
  expect(sagaTester.getState().auth.user.password  ).toEqual("xxx")
})
