import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week2ControlFlow = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Main Content Container */}
            <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl w-full mx-auto text-gray-800 flex-grow">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
                >
                    &larr; Back
                </button>

                {/* Week 2, Topic 1: Conditional Statements (if, elif, else) */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 1: Making Decisions: Conditional Statements (if, elif, else)
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding Control Flow:</h3>
                    <p className="mb-3 leading-relaxed">
                        Imagine your code as a recipe. <strong>Control Flow</strong> is simply the order in which Python reads and executes your instructions. Up until now, it's been mostly top-to-bottom. But what if you want to skip steps, or take different paths based on certain conditions? That's where conditional statements come in!
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">True or False? The Boolean Type!</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>Before we make decisions, we need to talk about <strong>Boolean values (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">bool</code>)</strong>. These are super simple: they can only be `True` or `False`. That's it! Every decision your program makes boils down to something being either `True` or `False`.</li>
                        <li><strong>Comparison Operators:</strong> These are the tools you use to get a `True` or `False` answer when comparing things:
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">==</code> (equal to)</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">!=</code> (not equal to)</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt</code> (greater than)</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&gt</code> (less than)</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt=</code> (greater than or equal to)</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&gt=</code> (less than or equal to)</li>
                            </ul>
                        </li>
                        <li><strong>Logical Operators:</strong> Sometimes you need to combine conditions. These operators help you do that:
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">and</code>: Both conditions must be `True`.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">or</code>: At least one condition must be `True`.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">not</code>: Reverses the truth value (True becomes False, False becomes True).</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The Decision Makers: `if`, `elif`, `else`!</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>The <strong><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">if</code> statement:</strong> This is your primary decision-making tool. The code block indented underneath it will only run *if* the condition you provide is `True`.</li>
                        <li>The <strong><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">else</code> statement:</strong> This is your "fallback" option. The code block under `else` runs *if* all the preceding `if` (and `elif`) conditions were `False`.</li>
                        <li>The <strong><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">elif</code> (short for "else if") statement:</strong> What if you have multiple possible conditions? `elif` lets you check another condition if the previous `if` or `elif` conditions were `False`. You can have as many `elif`s as you need!</li>
                        <li><span className="text-red-600 font-bold"><strong>INDENTATION IS CRUCIAL!</strong></span> Seriously, this is a big one in Python. How do you tell Python which lines of code belong to an `if`, `elif`, or `else`? By indenting them! Usually, this means 4 spaces. If your indentation is wrong, Python will get confused and give you an error.</li>
                    </ul>

                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`age = int(input("Enter your age: ")) # Remember to convert input to an integer!

# Here's how 'if', 'elif', and 'else' work together:
if age >= 18: # Is age 18 or greater?
    print("You are an adult.") # This line runs ONLY if the above is True
elif age >= 13: # If the first 'if' was False, is age 13 or greater?
    print("You are a teenager.") # This line runs ONLY if THIS is True
else: # If both the 'if' and 'elif' were False, then...
    print("You are a child.") # This line runs

# Example with logical operators:
temperature = 25
is_sunny = True

if temperature > 20 and is_sunny: # Both conditions must be True for this to run
    print("Great weather for outdoors!")
elif temperature > 20 or is_sunny: # Either condition can be True
    print("It's either warm or sunny, or both!")
else:
    print("Maybe stay inside today.")`}
                    </pre>

                    <p className="mt-6 text-gray-700 font-semibold">
                        <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Ready to make your programs smart? These exercises will help you practice making decisions:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                        <li>Write a program that asks the user for a number and then tells them whether it's positive, negative, or zero.</li>
                        <li>Create a simple password checker: ask the user to `input` a password. If it's exactly `"PythonRocks"`, print "Access Granted". Otherwise, print "Access Denied".</li>
                        <li>Build a program that determines if a person is eligible to vote. Ask for their age, and if they are 18 or older, print "You are eligible to vote!". Otherwise, print "You are not yet eligible to vote.".</li>
                    </ul>
                    <p className="mt-4 text-gray-700 font-semibold">
                        Great work applying your decision-making skills! This is a huge step in programming.
                    </p>
                </section>

                {/* Week 2, Topic 2: Loops (for & while) */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 2: Repeating Actions: Loops (for & while)
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Loops? Automate Repetition!</h3>
                    <p className="mb-3 leading-relaxed">
                        Imagine needing to print "Hello!" 100 times, or processing every item in a long list. Would you really type `print("Hello!")` 100 times? No way! That's where <strong>loops</strong> come to the rescue. They allow you to <strong>repeat a block of code multiple times</strong>, saving you tons of effort and making your code super efficient.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The `for` Loop: Iterating Over Sequences!</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>The <strong><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">for</code> loop:</strong> This type of loop is perfect when you want to go through each item in a sequence, like characters in a string, or numbers in a range. It "iterates" over each element.</li>
                        <li>The <strong><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">range()</code> function:</strong> This is a very common companion to `for` loops, especially when you want to repeat something a certain number of times. It generates a sequence of numbers.
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">range(5)</code>: Generates numbers from 0 up to (but not including) 5. So: 0, 1, 2, 3, 4.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">range(1, 6)</code>: Generates numbers from 1 up to (but not including) 6. So: 1, 2, 3, 4, 5.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">range(0, 10, 2)</code>: Generates numbers starting at 0, up to (not including) 10, stepping by 2. So: 0, 2, 4, 6, 8.</li>
                            </ul>
                        </li>
                    </ul>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`# Counting using range()
for i in range(5): # This loop will run 5 times, with i going from 0 to 4
    print(f"Counting: {i}")

print("\\n---") # Just a separator for clearer output

# Iterating over a string
name = "Python"
for char in name: # 'char' will take on each letter of "Python" one by one
    print(char)`}
                    </pre>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The `while` Loop: Repeating While a Condition is True!</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>The <strong><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">while</code> loop:</strong> This loop keeps repeating its code block *as long as* a certain condition remains `True`.</li>
                        <li><strong><span className="text-red-600 font-bold">IMPORTANT:</span></strong> With `while` loops, you *must* have a way to make the condition eventually `False`. If you don't, you'll create an <strong>infinite loop</strong>, and your program will keep running forever (or until you force-quit it!). A common way to control a `while` loop is by incrementing/decrementing a counter variable.</li>
                    </ul>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`count = 0
while count < 5: # This loop continues as long as 'count' is less than 5
    print(f"Count is: {count}")
    count += 1 # ⭐ Crucial! This increments 'count' by 1 each time, eventually making 'count < 5' False and stopping the loop.`}
                    </pre>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Loop Control: `break` and `continue`!</h3>
                    <p className="mb-3 leading-relaxed">
                        Sometimes, you want more fine-grained control over your loops:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">break</code>: This statement is like an emergency exit. When Python encounters `break` inside a loop, it immediately stops the loop and moves on to the code *after* the loop.</li>
                        <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">continue</code>: This one's like a "skip ahead" button. When Python encounters `continue`, it immediately stops the *current* iteration of the loop and jumps to the next iteration. It doesn't exit the whole loop, just the current cycle.</li>
                    </ul>

                    <p className="mt-6 text-gray-700 font-semibold">
                        <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Loops are incredibly powerful. Let's get them working for you:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                        <li>Use a `for` loop to print numbers from 1 to 10.</li>
                        <li>Use a `while` loop to repeatedly ask the user for input. Keep asking until they type the word `"quit"` (make sure your program handles different cases like "Quit" or "QUIT" if you're feeling adventurous!).</li>
                        <li>Write a program that calculates the sum of all numbers from 1 to 100 using a `for` loop. (Hint: You'll need a variable to keep track of the running total!).</li>
                    </ul>
                    <p className="mt-4 text-gray-700 font-semibold">
                        Fantastic job getting these loops under control! You're now automating tasks like a pro.
                    </p>
                </section>

                {/* Week 2, Topic 3: Lists */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 3: Storing Collections of Things: Lists!
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Introducing Lists: Your First Python Collection!</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>So far, variables hold just one piece of data. But what if you have a collection of related items, like a shopping list, or a list of your favorite movies? That's where <strong>Lists</strong> come in!</li>
                        <li>Lists are:
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><strong>Ordered:</strong> The items have a specific order, and that order won't change unless you change it.</li>
                                <li><strong>Mutable (changeable):</strong> You can add, remove, or change items in a list after you've created it. This is a super powerful feature!</li>
                                <li><strong>Flexible:</strong> They can hold different data types! You can have numbers, strings, or even other lists all in the same list.</li>
                            </ul>
                        </li>
                        <li><strong>Creating Lists:</strong> You create a list by putting items inside square brackets <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">[]</code>, separated by commas: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_list = [item1, item2, "another item"]</code></li>
                        <li><strong>Accessing Elements:</strong> Each item in a list has an <strong>index</strong>, starting from `0` for the first item.
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_list[0]</code>: Gives you the first element.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_list[-1]</code>: A cool trick! This gives you the *last* element.</li>
                            </ul>
                        </li>
                        <li><strong>Slicing Lists:</strong> Want a part of a list? You can "slice" it! <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_list[start:end]</code> gives you a new list from the `start` index up to (but *not including*) the `end` index.</li>
                    </ul>

                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`fruits = ["apple", "banana", "cherry", "date"]
print(fruits[0])     # Output: apple (the first item)
print(fruits[-1])    # Output: date (the last item)
print(fruits[1:3])   # Output: ['banana', 'cherry'] (items from index 1 up to, but not including, index 3)`}
                    </pre>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Modifying Your Lists:</h3>
                    <p className="mb-3 leading-relaxed">
                        Because lists are mutable, you can change them easily!
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">append()</code>: Adds a new item to the very end of the list.</li>
                        <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">insert(index, item)</code>: Adds an item at a specific position (index).</li>
                        <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">remove(value)</code>: Removes the *first* item it finds that matches the value you specify.</li>
                        <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">pop(index)</code>: Removes an item at a given index and also *returns* that item. If you don't give an index, it removes and returns the last item.</li>
                        <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">del statement</code>: A more general way to delete items by index or even whole slices.</li>
                        <li><strong>Direct assignment:</strong> You can change an item by assigning a new value to a specific index: `fruits[0] = "orange"` will change "apple" to "orange".</li>
                        <li><strong>List Length:</strong> Want to know how many items are in your list? Use the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">len()</code> function!</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Looping Through Lists:</h3>
                    <p className="mb-3 leading-relaxed">
                        Remember `for` loops? They're perfect for going through every single item in a list!
                    </p>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`fruits = ["apple", "banana", "cherry"]
for fruit in fruits: # 'fruit' will take on each item in the list, one by one
    print(fruit)`}
                    </pre>

                    <p className="mt-6 text-gray-700 font-semibold">
                        <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Let's get hands-on with lists – they're incredibly versatile!
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                        <li>Create a list of your 5 favorite movies.</li>
                        <li>Print the first movie and the last movie from your list.</li>
                        <li>Add another movie to the end of your list.</li>
                        <li>Change the second movie in your list to a different one.</li>
                        <li>Remove one movie from the list (choose any one you like!).</li>
                        <li>Finally, use a `for` loop to print each movie in your updated list, one by one.</li>
                    </ul>
                    <p className="mt-4 text-gray-700 font-semibold">
                        Excellent work with lists! You've just unlocked a powerful way to organize and manipulate data in Python. Keep experimenting!
                    </p>
                </section>

            </div>

            {/* Footer Section */}
            <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
                <p>&copy; 2025 Study Notes. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Week2ControlFlow;