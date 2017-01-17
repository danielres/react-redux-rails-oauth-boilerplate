class AuthController < ApplicationController
  protect_from_forgery except: :auth

  def auth
    run User::FindOrCreateByProvider
    render json: UserRepresenter.new(@model)
  end
end
