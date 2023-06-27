class CartItem < ApplicationRecord

  vaidates :quantity, :options, :product_id, :user_id, presence: true

  validates :quantity, numericality: { only_integer: true } 

  belongs_to :user 
  belongs_to :product

end
