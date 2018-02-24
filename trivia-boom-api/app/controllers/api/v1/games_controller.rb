class Api::V1::GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  def create
    game = Game.new(game_params)
    if game.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        GameSerializer.new(game)
      ).serializable_hash
      ActionCable.server.broadcast 'games_channel', serialized_data
      head :ok
    end
  end

  def show
    game_players = Player.where(game_id: params[:id])

    render json: game_players
  end

  def update

  end

  private

  def game_params
    params.require(:game).permit(:id, :title, :slots, :length, :category, :difficulty, :status)
  end
end
