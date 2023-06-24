json.product do 
  json.extract! @product, :name, :description, :price, :category, :size, :color, :id
  json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :user_id, :product_id, :rating, :title, :body, :id, :created_at
    end
  end  
end

