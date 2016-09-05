#pyglatin translator - detects when user enters a number and not a word 

pyg = 'ay'
original = raw_input('Enter a word:')
word = original.lower()
first = word[0]
new_word = word[1: len(word)] + first + pyg

while True:
    if len(original) > 0 and original.isalpha():
        print new_word
        break 
    else:
        print 'You\'ve entered a number. Please try again.'
        break 
 
