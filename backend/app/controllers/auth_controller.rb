class AuthController < ApplicationController
  protect_from_forgery except: :auth

  def auth
    result                = run User::Authenticate
    access_token, model   = result['access_token'], result['model']
    model_hash            = JSON.parse(UserRepresenter.new(model).to_json)
    access_token_hash     = {access_token: access_token}
    render json: model_hash.merge(access_token_hash)
  end
end
