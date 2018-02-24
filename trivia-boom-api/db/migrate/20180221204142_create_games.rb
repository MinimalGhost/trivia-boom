class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :slots
      t.integer :length
      t.string :category
      t.string :difficulty
      t.string :status, :default => 'pending'

      t.timestamps
    end
  end
end
