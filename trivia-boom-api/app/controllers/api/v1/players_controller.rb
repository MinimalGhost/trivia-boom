class Api::V1::PlayersController < ApplicationController

  def create
    player = Player.new(player_params)
    game = Game.find(player_params[:game_id])
    if player.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(PlayerSerializer.new(player)
    ).serializable_hash
    Channel.broadcast_to game, serialized_data
    else
      render json: { errors: @player.errors.full_messages }, status: 422
    end
  end

  def update
    @player = Player.find(params[:id])

    @player.update(player_params)
    if @player.save
      render json: @player
    else

    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :game_id)
  end
end
