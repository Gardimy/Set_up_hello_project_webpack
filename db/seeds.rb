5.times do
  Message.create(content: "Hello, #{Faker::Name.first_name}!")
end
