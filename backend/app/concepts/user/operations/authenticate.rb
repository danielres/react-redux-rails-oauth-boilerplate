class User::Authenticate < Trailblazer::Operation
  success :find_by_token
  success :find_or_create_by_provider
  success :define_access_token

  def find_by_token(options)
    access_token = JsonWebToken.decode(options['params']['access_token'])
    return unless access_token
    user_id = access_token['user_id']
    user = User.find(user_id) rescue nil
    return unless user
    options['model'] = user
  end

  def find_or_create_by_provider(options)
    return if options['model']
    result = User::FindOrCreateByProvider.(options['params'])
    options['model'] = result['model']
  end

  def define_access_token(options)
    user_id = options['model'].id
    options['access_token'] = JsonWebToken.encode({user_id: user_id})
  end
end
