def translate phrase
  phrase = phrase.downcase
  vowels = %w[ a e i o u ]
  words = phrase.split(" ")
  result = []

  words.each_with_index do |word, i| #steps through each word
    translation = ''
    qu = false
    #word starts with a vowel
    if vowels.include? word[0] #if first word is vowel, simply add 'ay'
      translation = word + 'ay'
      result.push(translation)
    else
      word = word.split('')
      count = 0
      word.each_with_index do |char, index|
        if vowels.include? char
          #detects words that start with 'qu'
          if char == 'u' and translation[-1] == 'q'
            qu = true
            translation = words[i][count + 1..words[i].length] + translation + 'uay'
            result.push(translation)
            next
          end
          break
        else
          #detects words with 'qu' in the middle
          if char == "q" and word[i+1] == 'u'
            qu = true
            translation = words[i][count + 2..words[i].length] + 'quay'
            result.push(translation)
            next
          else
            translation += char
          end
          count += 1
        end
      end
          #translates consonant words without 'qu'
             if not qu
                 translation = words[i][count..words[i].length] + translation + 'ay'
                 result.push(translation)
             end
         end

     end
     
     result.join(' ')

end
