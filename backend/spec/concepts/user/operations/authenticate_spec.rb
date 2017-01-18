require "rails_helper"
require_relative './find_or_create_by_provider/shared_examples'

describe User::Authenticate do
  describe 'with access_token' do
    describe "access_token matches no user"  do
      let(:params){ {'access_token' => JsonWebToken.encode({'user_id' => SecureRandom.uuid})}}
      it 'raises an error' do
        expect{ User::Authenticate.call(params) }.to raise_error "oauth_access_token missing"
      end
    end

    describe 'access_token matches user' do
      let(:user){ User.create() }
      let(:params){ {'access_token' => JsonWebToken.encode({'user_id' => user.id}) }}
      it 'find and returns the user' do
        result = User::Authenticate.call(params)
        expect(result['model'].id).to eq(user.id)
      end
    end
  end

  it_behaves_like "User::FindOrCreateByProvider"
end
