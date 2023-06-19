json.product do 
  json.extract! @product, :name, :description, :price, :category, :size, :color, :id
  json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end

