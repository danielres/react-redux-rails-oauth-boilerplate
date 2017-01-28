class AuthController < ApplicationController
  def auth_with_access_token
    user = User.find_by_access_token(params[:accessToken])
    if user
      render json: user
    else
      render json: {error: "not-found"}, status: :not_found
    end
  end
end
