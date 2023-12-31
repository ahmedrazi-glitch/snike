# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

# ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  CartItem.destroy_all
  Review.destroy_all
  Product.destroy_all
  User.destroy_all
  
  

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('cart_items')
  ApplicationRecord.connection.reset_pk_sequence!('reviews')
  ApplicationRecord.connection.reset_pk_sequence!('products')
  ApplicationRecord.connection.reset_pk_sequence!('users')
  
  
  

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  user1 = User.create!( 
    email: 'demo@user.io', 
    password: 'password',
    first_name: 'Demo',
    last_name: 'User'
  )

  p1 = Product.create!( 
    name: 'Air Jordan', 
    description: 'From sanded leather to classic coloring with a satin sheen, this Air Jordan is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let your shoe game shine.',
    category: 'Mens',
    size: 'L',
    color: 'Red',
    price: 45.60
  )

  p1.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/left1.webp'), filename: 'p1Photo')

  review1 = Review.create!(
    user_id: user1.id,
    product_id: p1.id,
    title: 'Love this product',
    body: 'I hate this product, it is so good. I have to sleep with them.',
    rating: 4
  )

  review2 = Review.create!(
    user_id: user1.id,
    product_id: p1.id,
    title: 'mediocire product',
    body: 'Its ok !!',
    rating: 3
  )

  review3 = Review.create!(
    user_id: user1.id,
    product_id: p1.id,
    title: 'The sole is good !!',
    body: 'The sole is very soft.',
    rating: 4
  )

  item1 = CartItem.create!(
    user_id: 1,
    product_id: 1,
    quantity: 2,
    options: '6'
  )

  p2 = Product.create!( 
    name: 'Cortez', 
    description: 'Sometimes more is better. Recrafting the revered look, weve refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out.',
    category: 'Kids',
    size: 'M',
    color: 'Green',
    price: 55.60
  )

  p2.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/center.webp'), filename: 'p2Photo')

  p3 = Product.create!( 
    name: 'Air Max', 
    description: 'You know your favorite jeans—perfectly worn, faded in all the right spots, so soft you dont even notice youre wearing em. Now imagine something even better than that. The Air Max 1 "Dirty Denim" nods to the coveted 2003 drop.',
    category: 'Womens',
    size: 'S',
    color: 'Blue',
    price: 65.60
  )

  p3.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/right.webp'), filename: 'p3Photo')

  m1 = Product.create!( 
    name: 'Nike Dunk High Retro', 
    description: 'The Nike Dunk High Retro channels 80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.',
    category: 'Mens',
    size: 'M',
    color: 'Blue',
    price: 65.60
  )

  m1.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens1.webp'), filename: 'm1Photo')

  m2 = Product.create!( 
    name: 'Nike Blazer Mid 77 Vintage', 
    description: 'In the 70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck.',
    category: 'Mens',
    size: 'L',
    color: 'Red',
    price: 75.60
  )

  m2.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens2.webp'), filename: 'm2Photo')

  m3 = Product.create!( 
    name: 'Nike Air Max 1 Premium', 
    description: 'Meet the leader of the pack. First released in 1987, the Nike Air Max 1 was the first shoe in the family to bring Air to the world.',
    category: 'Mens',
    size: 'L',
    color: 'White',
    price: 85.60
  )

  m3.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens3.webp'), filename: 'm3Photo')

  m4 = Product.create!( 
    name: 'Nike Air Max 90', 
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 80.60
  )

  m4.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens4.jpeg'), filename: 'm4Photo')

  m5 = Product.create!( 
    name: 'Nike Killshot 2 Leather', 
    description: 'Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, its court-side attitude with a modern touch.',
    category: 'Mens',
    size: 'M',
    color: 'White',
    price: 90.60
  )

  m5.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens5.webp'), filename: 'm5Photo')

  m6 = Product.create!( 
    name: 'Nike Air VaporMax 2023 Flyknit', 
    description: 'Step into the Air VaporMax 2023 to see how its done. The innovative tech is revealed through the perforated sockliner. The stretchy Flyknit upper is made with at least 20% recycled content by weight.',
    category: 'Mens',
    size: 'ML',
    color: 'brown',
    price: 115.60
  )

  m6.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens6.webp'), filename: 'm6Photo')

  m7 = Product.create!( 
    name: 'Air Jordan 1 Mid SE', 
    description: 'Get into some summery fun in your new fave AJ1s. Made with a combination of suede and canvas, this pair gives you the comfort you know and love with a seasonal update.',
    category: 'Mens',
    size: 'XL',
    color: 'Golden',
    price: 120.60
  )

  m7.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens7.jpeg'), filename: 'm7Photo')

  m8 = Product.create!( 
    name: 'Nike ZoomX Dragonfly XC', 
    description: 'The Dragonfly is for the cross-country barrier-breakers, the flurry-finishers who refuse to give in to the elements. Its our fastest distance spike on the track built to go off-road, one that recently made its medal-winning presence known on the world stage.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 200.60
  )

  m8.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens8.webp'), filename: 'm8Photo')

  m9 = Product.create!( 
    name: 'Nike Invincible 3 SE', 
    description: 'With maximum cushioning to support every mile, the Invincible 3 gives you Nike Runnings highest level of comfort underfoot to help you stay on your feet today, tomorrow and beyond.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 250.60
  )

  m9.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/mens9.webp'), filename: 'm9Photo')

  c1 = Product.create!( 
    name: 'Nike Air Force 1 07', 
    description: 'The radiance lives on in the Nike Air Force 1 07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 255.60
  )

  c1.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic1.webp'), filename: 'c1Photo')
  
  c2 = Product.create!( 
    name: 'Nike Air Force 1 07 FlyEase', 
    description: 'Quicker than 1, 2, 3—the original hoops shoe lets you step in and get going. Its easy-entry FlyEase system gives you a hands-free experience, while crisp leather dons the cleanest color for ultimate wearability.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 155.60
  )

  c2.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic2.webp'), filename: 'c2Photo')

  c3 = Product.create!( 
    name: 'Nike Force 1 LE', 
    description: 'This is what legends are made of. The Nike Force 1 LE brings back the 82 hardwood icon into an everyday style in all-white or all-black.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 175.60
  )

  c3.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic3.webp'), filename: 'c3Photo')

  c4 = Product.create!( 
    name: 'Nike Air Force 1 Mid 07', 
    description: 'The Air Force 1 Mid 07 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 155.60
  )

  c4.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic4.webp'), filename: 'c4Photo')

  c5 = Product.create!( 
    name: 'Nike Air Force 1 Low Retro', 
    description: 'Got your fave color yet? No worries. The "Color of the Month" series lets you feed your need while celebrating a little-known piece of Nike history—the original Color of the Month series, back in 1984, may have saved the Air Force 1 from extinction.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 125.60
  )

  c5.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic5.webp'), filename: 'c5Photo')

  c6 = Product.create!( 
    name: 'Nike Air Force 1 PLT.AF.ORM', 
    description: 'The AF1 has been a sneaker favorite for more than 40 years—first on the court and then on the street. Today, its classic, easy-to-wear style rises to new heights with the Nike Air Force 1 PLT.AF.ORM.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 115.60
  )

  c6.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic6.webp'), filename: 'c6Photo')

  c7 = Product.create!( 
    name: 'Nike Air Force 1 07 Next Nature', 
    description: 'The radiance lives on in the Nike Air Force 1 07 Next Nature—the b-ball original that lets you do good by looking good.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 165.60
  )

  c7.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic7.webp'), filename: 'c7Photo')

  c8 = Product.create!( 
    name: 'Nike Air Force 1 Premium', 
    description: 'They say the way to the heart is through chocolate. Theyre wrong. Lace into true bliss with this crafted take on the b-ball original. Pairing smooth leather with waxed laces, it delivers love at first sight.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 185.60
  )

  c8.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic8.webp'), filename: 'c8Photo')

  c9 = Product.create!( 
    name: 'Nike Air Force 1 LV8', 
    description: 'Get ready to play in kicks that are cool and classic—just like you! This hoops original puts a fresh spin on everything you already love about the AF1: bold colors, comfy fabrics.',
    category: 'Mens',
    size: 'XL',
    color: 'White',
    price: 155.60
  )

  c9.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/classic9.webp'), filename: 'c9Photo')

  w1 = Product.create!( 
    name: 'Nike Pro Leggings Womens', 
    description: 'The Nike Pro Leggings are made with sweat-wicking fabric that and mesh across the calves to keep you cool and dry. These are the perfect bottoms.',
    category: 'Womens',
    size: 'M',
    color: 'Black',
    price: 155.60
  )

  w1.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/womens1.webp'), filename: 'w1Photo')

  w2 = Product.create!( 
    name: 'Nike Sportswear Everyday Modern Top', 
    description: 'Offering the warm, heavier feel of your favorite sweatshirt, this mock-neck top is a cozy option you can count on to keep you comfortable on crisp, breezy days.',
    category: 'Womens',
    size: 'M',
    color: 'Brown',
    price: 115.60
  )

  w2.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/womens2.jpeg'), filename: 'w2Photo')

  w3 = Product.create!( 
    name: 'Nike Go FlyEase', 
    description: 'Ditch the laces and get outside. These kicks feature Nikes revolutionary FlyEase technology, making on-and-off a breeze.',
    category: 'Womens',
    size: 'M',
    color: 'Black',
    price: 125.60
  )

  w3.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/womens3.webp'), filename: 'w3Photo')

  w4 = Product.create!( 
    name: 'Nike Sportswear Phoenix Fleece Bottoms', 
    description: 'Rise up and transform your fleece wardrobe with strong cozy vibes. The extra-long, wide leg and hem vents of these Phoenix Fleece pants let you show off your favorite shoes while taller ribbing at the waist.',
    category: 'Womens',
    size: 'M',
    color: 'Purple',
    price: 110.60
  )

  w4.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/womens4.webp'), filename: 'w4Photo')

  k1 = Product.create!( 
    name: 'Nike Sportswear Tech Fleece Kids', 
    description: 'Make the most of chilly days by pulling on this premium fleece full-zip hoodie. Warm? Check. Soft? Check. No-bulk feel? Double check.',
    category: 'Kids',
    size: 'S',
    color: 'Pink',
    price: 109.60
  )

  k1.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/kids1.webp'), filename: 'k1Photo')

  k2 = Product.create!( 
    name: 'Nike Force 1 LE Kids', 
    description: 'This is what legends are made of. The Nike Force 1 LE brings back the 82 hardwood icon into an everyday style in all-white or all-black.',
    category: 'Kids',
    size: 'S',
    color: 'White',
    price: 89.60
  )

  k2.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/kids2.webp'), filename: 'k2Photo')

  k3 = Product.create!( 
    name: 'Nike Sportswear Club Fleece Kids', 
    description: 'The Nike Sportswear Club Fleece Hoodie is a classic everyday sweatshirt thats soft and warm for all-day play. Lightweight fleece fabric keeps little ones warm and is easy to layer.',
    category: 'Kids',
    size: 'S',
    color: 'Black',
    price: 89.60
  )

  k3.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/kids3.webp'), filename: 'k3Photo')

  k4 = Product.create!( 
    name: 'Nike Flex Runner 2', 
    description: 'Whosz ready to play? The Nike Flex Runner 2 is built for the kiddo on the go who loves to play—from the playground to wherever their day takes them. Its laces-free! Meaning its super quick to slip on and off. ',
    category: 'Kids',
    size: 'S',
    color: 'Black',
    price: 45.60
  )

  k4.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/kids4.webp'), filename: 'k4Photo')

  access1 = Product.create!( 
    name: 'Nike Club', 
    description: 'A classic mid-depth cap with plenty of styling options, this Nike Club Cap comes in smooth cotton twill that has a soft wash for easy comfort from day 1.',
    category: 'Accessories',
    size: 'S',
    color: 'White',
    price: 26.60
  )

  access1.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/access1.webp'), filename: 'access1Photo')

  access2 = Product.create!( 
    name: 'Nike Peak', 
    description: 'Our Nike Peak beanie gives you stylish options to help conquer the cold. Plush knit yarns hug your head for comfort that lasts all day. Cut with plenty of fabric, the Peak beanie.',
    category: 'Accessories',
    size: 'S',
    color: 'Blue',
    price: 28.60
  )

  access2.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/access2.webp'), filename: 'access2Photo')

  access3 = Product.create!( 
    name: 'Nike Recharge', 
    description: 'From your workout to the trail, this bottle makes hydration effortless. The vacuum-insulated stainless steel keeps your liquids cold, and its twist-off cap makes rehydrating a breeze. Take this bottle with you anywhere, it can handle it—a durable, scratch-resistant finish and a leak-resistant lid.',
    category: 'Accessories',
    size: 'S',
    color: 'Black',
    price: 36.60
  )

  access3.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/access3.webp'), filename: 'access3Photo')

  access4 = Product.create!( 
    name: 'Nike Hoops Elite Pro', 
    description: 'Lets talk about this backpack. Inspired by Nikes rebellious legends, this backpack makes a statement both in its design and its storage capacity. Its also just a great bag for anyone who wants plenty of pockets and an organization system that will leave you wondering why you didnt get it years ago. ',
    category: 'Accessories',
    size: 'S',
    color: 'Blue',
    price: 87.60
  )

  access4.photo.attach(io: URI.open('https://snike-dev.s3.us-west-1.amazonaws.com/access4.webp'), filename: 'access4Photo')


  Product.all.map do |product| 
    2.times do 
      Review.create!(
        title: Faker::Lorem.sentence(word_count: 6),
        user_id: User.all.sample.id,
        product_id: Product.all.sample.id,
        rating: Faker::Number.between(from: 1, to: 5),
        body: Faker::Lorem.paragraph
      )
    end
  end

  # More users

  puts "Done!"



