class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end

  def search
    # debugger
    @products = Product.search(params[:query])
    # debugger 
    # puts "Search Query: #{params[:query]}" # Add this line to debug the query
    # puts "Search Results: #{@products.inspect}" # Add this line to debug the search results
    # render json: { products: @products }
    render :index 
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

end
