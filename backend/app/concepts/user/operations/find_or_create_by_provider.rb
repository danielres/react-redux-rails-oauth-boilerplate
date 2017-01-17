class User < ApplicationRecord
  class FindOrCreateByProvider < Trailblazer::Operation
    def to_json(*)
      {id: model.id, profile: model.profile, auths: model.auths}
      # FindOrCreateByProvider::Representer.new(model).to_json
    end

    def process(params)
      User.destroy_all
      @model = find_or_create_user_by_provider(params[:oauth_access_token], params[:provider])
    end

    def find_or_create_user_by_provider(oauth_access_token, provider)
      case provider
      when 'facebook'
        user = find_or_create_user_by_facebook(oauth_access_token)
      else
        user = nil
      end
    end

    def find_or_create_user_by_facebook(oauth_access_token)
      app_secret = ENV['FACEBOOK_APP_SECRET']
      @graph = Koala::Facebook::API.new(oauth_access_token, app_secret)
      fb_me = @graph.get_object("me")
      user = User.where("auths -> 'facebook' ->> 'user_id' = ?", fb_me['id']).first
      unless user.present?
        user = User.create(auths: {facebook: fb_me})
        user.profile['display_name'] = fb_me['name']
        user.save
      end
      user
    end
  end
end
