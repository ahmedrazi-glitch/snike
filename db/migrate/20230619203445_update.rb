class Update < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :products, :category
    remove_column :products, :price
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :products, :category, :string, null: false
    add_index :products, :category
    add_column :products, :price, :float, null: false
  end 
end

