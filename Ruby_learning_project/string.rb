# puts gets
=begin
puts 'Hello there, and what\'s your name?'
name = gets
puts 'Your name is ' + name + '?  What a lovely name!'
puts 'Pleased to meet you, ' + name + '.  :)'

puts 'Hello there, and what\'s your name?'
name = gets.chomp
puts 'Your name is ' + name + '?  What a lovely name!'
puts 'Pleased to meet you, ' + name + '.  :)'

puts 'Hello there, and what\'s your first name?'
first_name = gets.chomp
puts 'And what\'s your last name?'
last_name = gets.chomp
puts 'And what\'s you middle name?'
middle_name = gets.chomp
puts 'Nice to meet you, ' + first_name + ' ' + middle_name + ' ' + last_name + '. I hope we will meet again!'

puts 'What\'s your favorite number?'
number =  gets.chomp
suggestion = '1' + number.to_s
puts 'Don\'t you think ' + suggestion + ' is a nicer number? Cause I prefer bigger numbers more, don\'t you?'

var1 = 'stop'
var2 = 'stressed'
var3 = 'Can you pronounce this sentence backwards?'

puts var1.reverse
puts var2.reverse
puts var3.reverse
puts var1
puts var2
puts var3

puts 'What is your full name?'
name = gets.chomp
puts 'Did you know there are ' + name.length +
         ' characters in your name, ' + name + '?'

puts 'What is your full name?'
name = gets.chomp
puts 'Did you know there are ' + name.length.to_s +
         ' characters in your name, ' + name + '?'

letters = 'aAbBcCdDeE'
puts letters.upcase
puts letters.downcase
puts letters.swapcase
puts letters.capitalize
puts ' a'.capitalize
puts

lineWidth = 50
puts(                'Old Mother Hubbard'.center(lineWidth))
puts(               'Sat in her cupboard'.center(lineWidth))
puts(         'Eating her curds an whey,'.center(lineWidth))
puts(          'When along came a spider'.center(lineWidth))
puts(         'Which sat down beside her'.center(lineWidth))
puts('And scared her poor shoe dog away.'.center(lineWidth))

lineWidth = 50
puts('Old Mother Hubbard'.center(lineWidth))
puts('Sat in her cupboard'.center(lineWidth))
puts('Eating her curds an whey,'.center(lineWidth))
puts('When along came a spider'.center(lineWidth))
puts('Which sat down beside her'.center(lineWidth))
puts('And scared her poor shoe dog away.'.center(lineWidth))
=end

lineWidth = 40
str = '--> text <--'
puts str.ljust  lineWidth
puts str.center lineWidth
puts str.rjust  lineWidth
puts str.ljust(lineWidth/2) + str.rjust(lineWidth/2)