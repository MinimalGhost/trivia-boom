require 'json'

class Api::V1::ContentsController < ApplicationController

  def index
    contents = Content.all
    render json: contents
  end

  # https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
# "https://opentdb.com/api.php?amount=#{content_params[:length]}&category=#{content_params[:category]}&difficulty=#{content_params[:difficulty]}&type=multiple"

  def create
    response = RestClient.get("https://opentdb.com/api.php?amount=#{content_params[:length]}&category=#{content_params[:category]}&difficulty=#{content_params[:difficulty]}&type=multiple")
    gameContent = JSON.parse(response)

    gameContent['results'].each do |obj|
      triviaRound = Content.new(
        question: obj['question'],
        correct: obj['correct_answer'],
        incorrect: obj['incorrect_answers'].join('^'))
        if triviaRound.save
          puts('successfully saved')
        else
          puts('nope')
          render json: {errors: triviaRound.errors.full_messages}, status: 422
        end
    end
  end

  private

  def content_params
    params.require(:content).permit(:title, :slots, :question, :correct, :incorrect, :length, :category, :difficulty)
  end
end
