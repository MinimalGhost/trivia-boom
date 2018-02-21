class CreateGameContents < ActiveRecord::Migration[5.1]
  def change
    create_table :game_contents do |t|
      t.integer :game_id
      t.integer :content_id

      t.timestamps
    end
  end
end
