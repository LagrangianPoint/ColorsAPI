class ColoresController < ApplicationController

  skip_before_action :verify_authenticity_token

  handle_api_errors()

  before_action :authenticate , only: [:index, :show]
  before_action :authenticate_admin_only , only: [:create, :update, :destroy]

  def index
    @colors = Color.paginate(page: params[:page])
    respond_to do |format|
      format.json { render json: @colors }
      format.xml  { render :xml => @colors.as_json}
    end
  end

  def create
    @color = Color.new(color_params)
    if @color.save
      render json: @color
    else
      render json: @color.errors , :status => :unprocessable_entity
    end
  end

  def show
    @color = Color.find(params[:id])
    respond_to do |format|
      format.json { render json: @color }
      format.xml  { render :xml => @color.as_json }
    end
  end

  def update
    @color = Color.find(params[:id])
    @color.update(color_params)
    respond_to do |format|
      format.json { head :no_content  }
      format.xml  { render :xml => []  }
    end
  end

  def destroy
    @color = Color.find(params[:id])
    @color.destroy
    respond_to do |format|
      format.json { head :no_content  }
      format.xml  { render :xml => []  }
    end
  end

  private

  def color_params
    params.permit(:name, :color, :pantone, :year )
  end

end
