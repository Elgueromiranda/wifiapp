Rails.application.routes.draw do
  get "/api/places", to: "api/v1/places#index"
  
  root 'react#index'

  post "/api/internet_speeds", to: "api/v1/internet_speeds#create"

  get  "*path", to: "react#index"


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
