class CreateInternetSpeeds < ActiveRecord::Migration[7.0]
  def change
    create_table :internet_speeds, id: :uuid do |t|
      t.float :average, null: false
      t.string :download_units, null: false
      t.float :download_speed, null: false
      t.references :place, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
