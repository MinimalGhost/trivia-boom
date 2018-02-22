class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :slots, :length, :category, :difficulty, :status
  has_many :players
end
