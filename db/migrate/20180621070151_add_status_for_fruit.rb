class AddStatusForFruit < ActiveRecord::Migration
  def change
  	add_column :fruits, :status, :boolean, default: true
  end
end
