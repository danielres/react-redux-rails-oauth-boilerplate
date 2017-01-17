require "test_helper"

describe JsonWebToken do
  let(:payload) { {'foo' => 'foo'} }

  it "can encode and decode a hash" do
    encoded = JsonWebToken.encode(payload)
    result = JsonWebToken.decode(encoded)
    value(result).must_equal payload
  end
end
