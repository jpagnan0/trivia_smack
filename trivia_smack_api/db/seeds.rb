# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# CATEGORY_IDS = ['16', '136', '42', '25', '105', '51', '227', '508', '348', '672', '897']
#
# def get_categories
#    trivia_categories = []
#   CATEGORY_IDS.each do |id|
#     response_string = RestClient.get("http://jservice.io/api/category?id=#{id}")
#     response_hash = JSON.parse(response_string)
#     trivia_categories << response_hash
#   end
#   trivia_categories
# end

# Get category attributes from category hash
