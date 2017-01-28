class FacebookApi
  def self.find_user(oauth_access_token)
    Koala::Facebook::API.new(oauth_access_token, ENV['FACEBOOK_APP_SECRET']).get_object('me')
  end
end
