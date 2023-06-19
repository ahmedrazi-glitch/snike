class ProductsUpdate < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :price, :integer
    add_column :products, :price, :float
  end
end
