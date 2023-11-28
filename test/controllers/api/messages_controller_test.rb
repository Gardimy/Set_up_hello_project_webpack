require "test_helper"

class Api::MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get random_greeting" do
    get api_messages_random_greeting_url
    assert_response :success
  end
end
