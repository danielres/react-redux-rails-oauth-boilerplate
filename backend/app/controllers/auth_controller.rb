class AuthController < ApplicationController
  protect_from_forgery except: :auth

  def auth
    render json: User::FindOrCreateByProvider.(params).to_json
  end
end
