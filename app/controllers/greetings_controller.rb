class GreetingsController < ApplicationController
  def random_greeting
    greeting = Message.order('RANDOM()').first&.content
    render json: { greeting: }
  end
end
