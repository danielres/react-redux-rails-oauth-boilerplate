require "rails_helper"

RSpec.describe "find user by access_token", type: :request do
  describe 'access token invalid' do
    it 'returns json with error + code "not_found"' do
      post "/auth", params: {accessToken: 'non-valid'}
      expect(response.content_type).to eq("application/json")
      expect(response).to have_http_status(:not_found)
      expect(response.body).to eq({error: "not-found"}.to_json)
    end
  end

  describe 'access token valid' do
    it 'returns json with found user + accessToken + code "ok"' do
      user = User.create
      allow(User).to receive(:find_by_access_token){ user }

      post "/auth", params: {accessToken: user.access_token}
      expect(response.content_type).to eq("application/json")
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['id']).to eq(user.id)
      expect(JSON.parse(response.body)['accessToken'])
        .to eq(JsonWebToken.encode({user_id: user.id}))
    end
  end
end

RSpec.describe "find or create user by provider + oauthAccessToken", type: :request do
  describe 'provider not supported' do
    it 'returns json with error + code "not_found"' do
      post '/auth/whateverbook', params: {oauthAccessToken: '_'}
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(:not_found)
      expect(response.body).to eq({error: 'not-found'}.to_json)
    end
  end

  describe 'oauth failed' do
    it 'returns json with error + code "not_found"' do
      allow(User).to receive(:find_or_create_by_provider){ nil }

      post '/auth/facebook'
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(:not_found)
      expect(response.body).to eq({error: 'not-found'}.to_json)
    end
  end

  describe 'oauth succeeded' do
    it 'returns json with found user + accessToken + code "ok"' do
      user = User.create
      allow(User).to receive(:find_or_create_by_provider){user}

      post "/auth/facebook"
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['accessToken'])
        .to eq(JsonWebToken.encode({user_id: user.id}))
    end
  end
end
