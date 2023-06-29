class Api::ProductsController < ApplicationController

  def index
    if params[:category]
      @products = Product.where('SQL Query to get category = params[:category]')
    else 
      @products = Product.all
      render :index
    end
  end

  def search
    # debugger
    # @products = Product.search(params[:query]) 
    query=params[:query]
    @products = Product.where('name ILIKE ? OR description ILIKE ? OR category ILIKE ? OR color ILIKE ?', "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%")
    # debugger 
    # puts "Search Query: #{params[:query]}" # Add this line to debug the query
    # puts "Search Results: #{@products.inspect}" # Add this line to debug the search results
    # render json: { products: @products }
    render :index  
    # query=params[:query]
    # @products = Product.where('name ILIKE ? OR description ILIKE ? OR category ILIKE ?', "%#{query}%", "%#{query}%", "%#{query}%")
    # debugger
    # if @products.length > 0 
    #   debugger
    #   render :index 
    # else 
    #   debugger
    #   render json: @review.errors.full_messages, status: 422 
    # end
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

end
