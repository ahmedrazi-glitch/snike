class AddingColsToReviews < ActiveRecord::Migration[7.0]
  def change
    change_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
    end
  end
end


