class AuthController < ApplicationController
  protect_from_forgery except: :auth

end
