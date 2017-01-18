RSpec.shared_examples "User::FindOrCreateByProvider" do |parameter|
  describe 'with oauth_access_token and provider' do
    describe 'oauth provider missing' do
      let(:params){ {'oauth_access_token' => 'XXXX'} }
      it 'raises an error' do
        expect{ User::Authenticate.call(params) }.to raise_error "oauth provider missing"
      end
    end

    describe 'with provider' do
      let(:params){ {'oauth_access_token' => 'XXXX', 'provider' => 'facebook'} }
      it 'calls FacebookApi and creates a user, sets user#display_name' do
        allow(FacebookApi)
          .to receive(:resolve_user)
          .and_return({"name"=>"Tom", "id"=>"123"})
        result = User::Authenticate.call(params)
        expect(result['model'].auths['facebook']).to eq({"name"=>"Tom", "id"=>"123"})
        expect(result['model'].profile['display_name']).to eq('Tom')
      end
    end
  end
end
