class GamesChannel < ApplicationCable::Channel
  # Channel to see all available games
  def subscribed
    stream_from "games_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
