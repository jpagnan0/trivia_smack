class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @notes
  end

  def create
  end

  def update
  end

  def destroy
  end


end
