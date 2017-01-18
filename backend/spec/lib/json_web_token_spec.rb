require "rails_helper"

describe JsonWebToken do
  let(:payload) { {'foo' => 'foo'} }

  it "can encode and decode a hash" do
    encoded = JsonWebToken.encode(payload)
    result = JsonWebToken.decode(encoded)
    expect(result).to eq(payload)
  end
end
