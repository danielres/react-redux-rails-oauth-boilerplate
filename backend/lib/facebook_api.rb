class FacebookApi
  def self.resolve_user(oauth_access_token)
    if ENV['MOCK_FACEBOOK_API'] == "true"
      {"name"=>"Dummy User", "id"=>"10155038191579664"}
    else
      Koala::Facebook::API.new(oauth_access_token, ENV['FACEBOOK_APP_SECRET']).get_object('me')
    end
  end
end
