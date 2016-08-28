#write your code here
def echo word
  word
end

def shout word
  word.upcase
end

def repeat (word, n=2)
  [word] * n * ' '
end

def start_of_word (word, n=0)
  word[0,n]
end

def first_word (phrase)
  phrase.split.first
end

#does not capitalize little words
def titleize (string)
  little_words = [ "and", "the", "over", "in", "by" ]
  phrase = []
  string.split.each_with_index do |word, i|
    phrase << ((i==0 || !little_words.include?(word)) ? word.capitalize : word)
  end
phrase.join(' ')
end
