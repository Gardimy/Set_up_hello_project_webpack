Rails.application.routes.draw do
  namespace :api do
    get 'messages/random_greeting'
  end
  # ...
  get '/random_greeting', to: 'greetings#random_greeting'
  # Add any other routes as needed
  root 'static#index'
end
