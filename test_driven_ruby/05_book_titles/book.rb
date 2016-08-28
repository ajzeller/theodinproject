class Book

  attr_accessor :title

  def title

    little_words = %w(the a an in for and nor but yet or so of ) #words to not capitalize
    answer = []

    @title.split.each_with_index do | word, i| #split the title and step through each word
      answer << ((i == 0 || !little_words.include?(word)) ? word.capitalize : word)
    end

    @title = answer.join(' ') #rejoin string together
  end
end
