#write your code here
def add (num1, num2)
  num1 + num2
end

def subtract (num1, num2)
  num1 - num2
end

def sum (array)
  array.inject(0){|sum, element| sum + element} #sums all values of array
end

def multiply (array) #multiplies all numbers in array
  array.reduce(1,:*)
end

def power (num1, num2) #raises one nummber to the power of another
  num1 ** num2
end

def factorial (num) #calculates factorial of number
(1..(num.zero? ? 1 : num)).inject(:*)
end
