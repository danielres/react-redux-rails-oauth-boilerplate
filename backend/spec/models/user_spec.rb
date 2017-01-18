require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.create }

  it do
    expect(user).to be_valid
  end

  describe "#access_token" do
    it "works" do
      expect(user.access_token.length > 100).to eq true
    end
  end

  describe "#find_by_access_token" do
    let(:access_token){ user.access_token}
    it "works" do
      expect( User.find_by_access_token(access_token) ).to eq(user)
    end
  end
end


