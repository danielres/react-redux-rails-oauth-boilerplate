require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.create }

  it do
    expect(user).to be_valid
  end

  it "implements #access_token" do
    expect(user.access_token.length > 100).to eq true
  end

  it "implements #find_by_access_token" do
    access_token = user.access_token
    expect( User.find_by_access_token(access_token) ).to eq(user)
  end

  describe '#find_or_create_by_provider' do
    it 'finds user if returning' do
      User.create(profile: {display_name: 'Tom'}, auths: {facebook: {id: '123'}})
      stub_request(:get, /.*graph.facebook.com\/me\?.*/).
         to_return(status: 200, body: {id: '123'}.to_json, headers: {})

      expect( User.find_or_create_by_provider('facebook', '_').profile['display_name'] ).to eq('Tom')
    end

    it 'creates user if first-timer' do
      stub_request(:get, /.*graph.facebook.com\/me\?.*/).
         to_return(status: 200, body: {id: '123'}.to_json, headers: {})

      expect{ User.find_or_create_by_provider('facebook', '_') }
        .to change{User.count}
        .from(0)
        .to(1)
      expect(User.last.auths['facebook']['id']).to eq('123')
    end
  end
end


