Rails.application.routes.draw do

  #get 'home/index'
  resources :colores, defaults: { format: :json }, :only => [:index, :show, :create, :update, :destroy]

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/login', to: 'sessions#destroy'

  root 'home#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
