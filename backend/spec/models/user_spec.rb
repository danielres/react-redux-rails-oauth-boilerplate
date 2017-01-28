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
end


