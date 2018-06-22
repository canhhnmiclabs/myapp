class WelcomeController < ApplicationController
  def index
  	@fruits = Fruit.all
  end
end
