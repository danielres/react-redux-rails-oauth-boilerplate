require "test_helper"

describe User do
  let(:user) { User.create }

  it "must be valid" do
    value(user).must_be :valid?
  end
end
