class User::FindOrCreateByProvider < Trailblazer::Operation
  extend Contract::DSL

  contract do
    property :id
    property :profile
    property :auths
    validates :profile, presence: true
    validates :auths, presence: true
  end

  step     :find_or_init_user_by_provider
  step     :set_display_name
  step     Contract::Build()
  step     Contract::Validate()
  failure  :log_error!
  step     Contract::Persist()

  def log_error!(options)
    puts options['contract.default'].errors.messages
  end

  def set_display_name(options)
    user = options['model']
    user.profile['display_name'] ||= user['auths']['facebook']['name']
  end

  def find_or_init_user_by_provider(options)
    oauth_access_token = options['params']['oauth_access_token']
    provider = options['params']['provider']

    case provider
    when 'facebook'
      options['model'] = find_or_init_user_by_facebook(oauth_access_token)
    else
      options['model']  = nil
    end
  end

  def find_or_init_user_by_facebook(oauth_access_token)
    graph = Koala::Facebook::API.new(oauth_access_token, ENV['FACEBOOK_APP_SECRET'])
    fb_me = graph.get_object('me')
    user = User.where("auths -> 'facebook' ->> 'user_id' = ?", fb_me['id']).first
    user.present? ? user : User.new(auths: {facebook: fb_me})
  end
end
