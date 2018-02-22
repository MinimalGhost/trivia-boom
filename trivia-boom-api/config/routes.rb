Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :create]
      resources :content, only: [:create]
      mount ActionCable.server => '/cable'
    end
  end
end
