require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.create }

  it do
    expect(user).to be_valid
  end
end


