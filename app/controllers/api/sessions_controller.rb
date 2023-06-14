class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    username = params[:username]
    password = params[:password]
    @user = User.find_by_credentials(username, password)
    if @user 
        login!(@user) # consistent with application controller login func
        render "api/users/show"
    else 
        render json: {errors: ["The provided credentials were invalid."]}, status: 422
    end 
  end

  def destroy
    logout! # consistent with application controller logout func 
    head :no_content
  end

end


