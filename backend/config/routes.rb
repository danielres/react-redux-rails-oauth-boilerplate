Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match 'auth', to: 'auth#auth_with_access_token', via: [:post]
  match 'auth/:provider', to: 'auth#auth_with_provider', via: [:post]
end
