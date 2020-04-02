class Student

  attr_accessor :first_name, :last_name, :primary_phone_number

  def introduction(target)
    puts "Hi #{target}, I'm #{first_name} #{last_name}!"
  end

  def favorite_number
    24
  end

end


geronimo = Student.new
geronimo.first_name = "Geronimo"
geronimo.last_name = "Delanoro"
geronimo.introduction( 'Katrina' )
puts "#{geronimo.first_name}'s favorite number is #{geronimo.favorite_number}."