# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Product.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('products')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  user1 = User.create!( 
    email: 'demo@user.io', 
    password: 'password',
    first_name: 'Demo',
    last_name: 'User'
  )

  product1 = Product.create!( 
    name: 'Air Jordy', 
    description: 'lite as feather',
    category: 'Mens',
    size: 'L',
    color: 'Red',
    price: 45.60
  )

  product2 = Product.create!( 
    name: 'Air Jordy 2', 
    description: 'lite as piegeons feather',
    category: 'kids',
    size: 'M',
    color: 'Green',
    price: 55.60
  )

  product3 = Product.create!( 
    name: 'Air Jordy 3', 
    description: 'kicks',
    category: 'Womens',
    size: 'S',
    color: 'Blue',
    price: 65.60
  )

  # More users

  puts "Done!"
end


