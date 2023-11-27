class GreetingsController < ApplicationController
  def random_greeting
    random_message = Message.order("RANDOM()").first

    if random_message
      render json: { message: random_message.message }
    else
      render json: { message: "No greetings found" }
    end
  end
end
