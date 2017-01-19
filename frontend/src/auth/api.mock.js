import mock from '../apiMockAdapter'

export default () => {
  let user = {
    'id': '35fd3281-1464-48aa-b9dc-5ee4912322fe',
    'profile': {
      'email': null,
      'phone': null,
      'facebook': {
        'profile_url': null,
        'invitation_url': null,
        'member_intro_url': null,
      },
      'last_name': null,
      'first_name': null,
      'membership': {
        'end_date': null,
        'start_date': null,
      },
      'display_name': 'Jack Mock',
    },
    'created_at': '2017-01-19T10:30:40.059Z',
    'updated_at': '2017-01-19T10:30:40.059Z',
    'access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMzVmZDMyODEtMTQ2NC00OGFhLWI5ZGMtNWVlNDkxMjMyMmZlIn0.inP0V7b5vLfimrm9hBgcestSWk2c0LyY0icEW0oOoW8',
  }

  mock.onPost(/.*\/auth\/facebook/).reply(() => {
    return [200, user]
  })
}
