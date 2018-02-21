class CreateContents < ActiveRecord::Migration[5.1]
  def change
    create_table :contents do |t|
      t.string :question
      t.string :correct
      t.string :incorrect
      t.string :boom

      t.timestamps
    end
  end
end
