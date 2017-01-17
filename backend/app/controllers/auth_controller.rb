class AuthController < ApplicationController
  protect_from_forgery except: :auth

  def auth
    run User::FindOrCreateByProvider
    render json: @model
  end
end
