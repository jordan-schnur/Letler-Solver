import csv

def load_words(filename):
    with open(filename, 'r') as file:
        reader = csv.reader(file)
        words = [row[0] for row in reader]
    return words

def binary_search(words):
    left, right = 0, len(words) - 1

    while left <= right:
        mid = (left + right) // 2
        guess = words[mid]

        print(f"My guess is: {guess}")
        response = input("Is the word before (b), after (a), or correct (c)? ").lower()

        if response == 'c':
            return guess
        elif response == 'b':
            right = mid -1
        elif response == 'a':
            left = mid + 1
        else:
            print("Invalid response. Please enter 'b', 'a', or 'c'")
    return None

def main():
    print("Loading Words.")
    words = load_words('4_letter_words.csv')
    print("Welcome to Letler Solver!")
    print("I'll try to guess the 4-letter word using a binary search.")

    result = binary_search(words)

    print("Great! We found your word! It is", result)

if __name__ == '__main__':
    main()