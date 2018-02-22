require 'json'

class API::V1::ContentsController < ApplicationController

  def index
    response = RestClient.get("https://opentdb.com/api.php?amount=10&type=multiple")
    gameContent = JSON.parse(response)
    gameContent.each do |obj|
      # match key values to new record and save it
    end
  end

  def create
    content = Content.new(content_params)
    game = Game.find()
  end
end
