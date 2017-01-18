class User::Authenticate < Trailblazer::Operation
  success :find_by_access_token
  success :find_or_create_by_provider

  def find_by_access_token(options)
    options['model'] = User.find_by_access_token(options['params']['access_token'])
  end

  def find_or_create_by_provider(options)
    return if options['model']
    result = User::FindOrCreateByProvider.(options['params'])
    options['model'] = result['model']
  end
end
