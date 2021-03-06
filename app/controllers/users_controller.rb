class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.token = SecureRandom.hex(10)
    @event = Event.find_by(event_token: params[:event_token])
    @user.included_in_epicenter = false
    @user.event = @event
    if @user.save
      set_cookie
      redirect_to waiting_path + "?event=#{@event.event_token}&user=#{@user.token}"
    else
      render :new
    end
  end

  def index
    # finding the event
    @event = Event.find_by(event_token: params[:event_token])

    @users = @event.users
    @markers = @users.map do |user|
      {
        lat: user.latitude,
        lng: user.longitude
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :address, :email)
  end

  def set_cookie
    cookies.permanent["event+#{@event.event_token}"] = 'false'
  end

end
