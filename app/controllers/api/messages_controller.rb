class Api::MessagesController < ApplicationController
  def random_greeting
    render json: { greeting: Message.order('RANDOM()').first.greeting }
  end
end
