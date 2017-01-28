class User < ApplicationRecord
  def self.find_by_access_token(access_token)
    decoded = JsonWebToken.decode(access_token)
    return nil unless decoded
    find(decoded['user_id']) rescue nil
  end

  def self.find_or_create_by_provider(provider, oauth_access_token)
    case provider
    when 'facebook'
      fb_user = FacebookApi.find_user(oauth_access_token)
    else
      return nil
    end
    user = where("auths -> 'facebook' ->> 'id' = ?", fb_user['id']).first
    user || User.create(auths: {facebook: fb_user})
  end

  def access_token
    JsonWebToken.encode({user_id: id})
  end

  def to_h
    JSON.parse(to_json)
  end
end
