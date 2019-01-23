class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def create
    if @user.save
      render json: @note, status: :accepted
    else
      render json: { errors: @note.errors.full_messages }, status: :unprocessible_entity
    end
  end

  # def update
  # end
  #
  # def destroy
  # end


end
