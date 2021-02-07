class ApplicationController < ActionController::Base
  include SessionsHelper

  protected


  def authenticate_admin_only
    authenticate([2])
  end

  def authenticate(allowed_roles = [1, 2])
    authenticate_or_request_with_http_basic do |username, password|
      @user = User.find_by(username: username)
      if not @user.nil? and @user.authenticate(password)
        allowed_roles.include? @user.role.id
      else
        false
      end
    end
  end

  def logged_in_user
    unless logged_in?
      store_location
      flash[:danger] = "Please log in."
      redirect_to login_url
    end
  end

end
