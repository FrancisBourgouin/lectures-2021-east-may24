class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      name
      t.timestamps
    end
  end
end
