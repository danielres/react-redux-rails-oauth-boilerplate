require 'rails_helper'

RSpec.describe AuthController, type: :controller do
  describe 'POST #auth' do
    describe 'with an access_token' do
      let(:user){ User.create}
      it 'finds and return the user' do
        post :auth, params: { access_token: user.access_token }
        expect(JSON.parse(response.body)['id']).to eq user.id
      end
    end
    describe 'with an oauthAccessToken and supported provider' do
      it do
        allow(FacebookApi)
          .to receive(:resolve_user)
          .and_return( {"name"=>"Tom", "id"=>"123"})
        post :auth, params: { oauthAccessToken: '_', provider: 'facebook' }
        expect(JSON.parse(response.body)['profile']['display_name']).to eq 'Tom'
      end
    end
  end
end
