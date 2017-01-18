class User < ApplicationRecord
  def self.find_by_access_token(access_token)
    decoded = JsonWebToken.decode(access_token)
    return nil unless decoded
    find(decoded['user_id']) rescue nil
  end

  def access_token
    JsonWebToken.encode({user_id: id})
  end
end
