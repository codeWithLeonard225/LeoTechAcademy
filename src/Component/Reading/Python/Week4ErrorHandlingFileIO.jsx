import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week4ErrorHandlingFileIO = () => {
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

        {/* Main Title for Week 4 */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-8 text-center">
          Week 4: Error Handling, File I/O & Next Steps
        </h1>
        <p className="mb-10 text-xl leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
          Welcome to Week 4! This week, you'll learn essential skills for building robust applications: how to <span className='text-black'>gracefully handle errors</span> that might crash your program, how to <span className='text-black'>interact with files</span> to store and retrieve data, and where to go next on your exciting Python journey.
        </p>

        ---

        {/* Week 4, Topic 1: Error Handling (try, except) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: Building Robust Programs: Error Handling (try, except)
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding Errors (Exceptions)</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li>Errors (or Exceptions) are problems that occur during the execution of a program. If not handled, they can cause your program to crash.</li>
            <li>Common Errors you might encounter:
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">SyntaxError</code>: Python doesn't understand your code's grammar (e.g., missing a colon).</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">TypeError</code>: An operation is performed on an inappropriate data type (e.g., adding a number to a string).</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">NameError</code>: You try to use a variable or function that hasn't been defined.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">ValueError</code>: A function receives an argument of the correct type but an inappropriate value (e.g., `int("hello")`).</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">ZeroDivisionError</code>: Attempting to divide a number by zero.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">IndexError</code>: Trying to access a list item at an index that doesn't exist.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">KeyError</code>: Trying to access a dictionary value with a key that doesn't exist.</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The `try...except` Block: Handling Exceptions Gracefully</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li>The `try...except` block is your tool for catching and managing exceptions, preventing your program from crashing.</li>
            <li><span className="text-red-700 font-bold">`try` block:</span> This is where you put the code that might potentially cause an error.</li>
            <li><span className="text-red-700 font-bold">`except` block(s):</span> If an error occurs in the `try` block, Python jumps to the appropriate `except` block. You can:
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>Catch <span className="text-red-700 font-bold">specific error types</span> (e.g., `except ValueError:`). This is generally recommended for precise error handling.</li>
                <li>Catch a generic `Exception` (<span className="text-red-700 font-bold">`except Exception as e:`</span>): This catches *any* type of error and assigns it to a variable `e`, which can be helpful for debugging, but be cautious not to hide unexpected bugs.</li>
              </ul>
            </li>
            <li><span className="text-red-700 font-bold">`else` block (optional):</span> Code in this block is executed *if no exception occurred* in the `try` block.</li>
            <li><span className="text-red-700 font-bold">`finally` block (optional):</span> Code in this block is *always executed*, regardless of whether an exception occurred or not. It's often used for cleanup operations (like closing files).</li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`try:
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    result = num1 / num2
    print(f"Result: {result}")
except ValueError: # Catch if int() conversion fails
    print("Invalid input. Please enter numbers only.")
except ZeroDivisionError: # Catch if division by zero occurs
    print("Cannot divide by zero!")
except Exception as e: # Catch any other unexpected error
    print(f"An unexpected error occurred: {e}")
finally: # This block will always run
    print("Calculation attempt finished.")`}
          </pre>

          <p className="mt-6 text-gray-700 font-semibold">
            <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Make your programs more robust with error handling:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>**Division Calculator:** Write a program that asks the user for two numbers and performs division. Use a `try-except` block to:
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>Handle `ValueError` if the input for either number is not a valid integer.</li>
                <li>Handle `ZeroDivisionError` if the second number entered is zero.</li>
                <li>Print appropriate error messages for each case.</li>
              </ul>
            </li>
            <li>**Age Input Validator:** Modify a previous program where you asked the user for their age. Implement `try-except` to continuously prompt the user for their age until a valid integer is entered. (Hint: A `while` loop combined with `try-except` is useful here).</li>
          </ul>
          <p className="mt-4 text-gray-700 font-semibold">
            Excellent! You're now writing code that can gracefully recover from user mistakes and unexpected situations.
          </p>
        </section>

        ---

        {/* Week 4, Topic 2: File Input/Output (Reading & Writing Files) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 2: Storing Data Permanently: File Input/Output
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">File I/O: Reading & Writing Data</h3>
          <p className="mb-3 leading-relaxed">
            While variables and lists store data in memory, this data is lost when your program ends. <span className="text-red-700 font-bold">File Input/Output (File I/O)</span> allows your programs to read data from files and write data to files, providing a way to store information persistently.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><span className="text-red-700 font-bold">Opening Files:</span> You use the `open()` function to open a file. It takes two main arguments: `filename` (the path to the file) and `mode`.
              <br />Example: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">file_object = open("filename.txt", "mode")</code></li>
            <li><span className="text-red-700 font-bold">Common File Modes:</span>
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">"r"</code>: <span className="text-red-700 font-bold">Read</span> mode (default). Opens the file for reading. File must exist.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">"w"</code>: <span className="text-red-700 font-bold">Write</span> mode. Opens for writing. <span className="text-red-700 font-bold">Creates a new file if it doesn't exist, or truncates (empties) the existing file.</span> Be careful with this!</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">"a"</code>: <span className="text-red-700 font-bold">Append</span> mode. Opens for writing. If the file exists, new data is added to the end. If not, a new file is created.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">"x"</code>: <span className="text-red-700 font-bold">Exclusive creation</span> mode. Creates a new file, but fails if the file already exists (raises a `FileExistsError`).</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">"t"</code>: <span className="text-red-700 font-bold">Text</span> mode (default). For text files.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">"b"</code>: <span className="text-red-700 font-bold">Binary</span> mode. For non-text files (images, executables). You'd combine it, e.g., `"wb"` for binary write.</li>
              </ul>
            </li>
            <li><span className="text-red-700 font-bold">Writing to Files:</span>
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>Use `file_object.write("text\n")`. Remember to explicitly add newline characters (`\n`) if you want content on separate lines.</li>
              </ul>
            </li>
            <li><span className="text-red-700 font-bold">Reading from Files:</span>
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>`file_object.read()`: Reads the entire content of the file as a single string.</li>
                <li>`file_object.readline()`: Reads just one line from the file at a time.</li>
                <li>`file_object.readlines()`: Reads all lines from the file into a list of strings, where each string is a line (including the newline character).</li>
                <li><span className="text-red-700 font-bold">Iterating line by line with a `for` loop:</span> This is often the most efficient way to read large files, as it reads one line at a time without loading the entire file into memory.</li>
              </ul>
            </li>
            <li><span className="text-red-700 font-bold">IMPORTANT:</span> Always `close()` the file when you are done with it to free up system resources and ensure all data is written.
              <br />Example: `file_object.close()`</li>
            <li><span className="text-red-700 font-bold">The `with` statement (Recommended!):</span> This is the preferred and safest way to handle files. It ensures the file is automatically closed, even if errors occur during reading or writing.</li>
          </ul>

          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`# Writing to a file using 'with' (recommended)
with open("my_data.txt", "w") as file:
    file.write("Hello, file!\\n") # \\n for newline
    file.write("This is a new line.\\n")

print("Content written to my_data.txt")

# Reading the entire file content
with open("my_data.txt", "r") as file:
    content = file.read()
    print("\\n--- Content of my_data.txt (read all) ---")
    print(content)

# Reading line by line using a for loop
with open("my_data.txt", "r") as file:
    print("\\n--- Content of my_data.txt (line by line) ---")
    for line in file:
        print(line.strip()) # .strip() removes leading/trailing whitespace, including newline characters`}
          </pre>

          <p className="mt-6 text-gray-700 font-semibold">
            <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Let's make your programs store and retrieve information:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>**Greeting Writer:** Write a program that asks the user for their name and a short message. Then, using `with open(...)` in write mode (`"w"`), save both to a file named `greeting.txt`. Each piece of information should be on its own line.</li>
            <li>**Greeting Reader:** Write another Python program that opens `greeting.txt` in read mode (`"r"`) and prints its entire content to the console.</li>
            <li>**Number Summation:**
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>First, manually create a file named `numbers.txt` in the same directory as your Python script. Put a few numbers in it, one per line (e.g., `10`, `25`, `5`).</li>
                <li>Write a Python script that reads these numbers line by line from `numbers.txt`.</li>
                <li>Calculate their sum.</li>
                <li>Use `try-except ValueError` to handle cases where a line in the file might not be a valid number (e.g., if someone accidentally typed "abc" in `numbers.txt`). Print a message for any invalid lines but continue summing valid ones.</li>
                <li>Finally, print the total sum of the valid numbers.</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4 text-gray-700 font-semibold">
            Fantastic! You can now make your programs remember things, adding a powerful dimension to their capabilities.
          </p>
        </section>

        ---

        {/* Week 4, Topic 3: Modules & Next Steps */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 3: Expanding Your Toolkit: Modules & Next Steps
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Modules: Organize and Extend Your Code</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><span className="text-red-700 font-bold">Modules</span> are simply Python files (`.py` files) that contain functions, classes, and variables. They allow you to organize your code into logical, reusable units.</li>
            <li>Instead of writing all your code in one giant file, you can break it into modules, making it cleaner, easier to manage, and shareable across different projects.</li>
            <li><span className="text-red-700 font-bold">`import` statement:</span> This is how you bring the contents of a module into your current Python script.
              <br />Example: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">import math</code> or <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">from datetime import date</code></li>
            <li><span className="text-red-700 font-bold">Using Module Contents:</span> Once imported, you access functions or variables from a module using dot notation (`module_name.function_name()`). If you use `from ... import ...`, you can use the function directly.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`import math # Imports the entire math module
print(math.sqrt(25)) # Output: 5.0 (calculates square root)

import random # Imports the entire random module
print(random.randint(1, 10)) # Output: A random integer between 1 and 10 (inclusive)

from datetime import date # Imports only the 'date' object from 'datetime' module
today = date.today()
print(f"Today's date: {today}")`}
          </pre>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><span className="text-red-700 font-bold">Briefly mention standard library modules:</span> Python comes with a vast "standard library" of modules for almost anything you can imagine, including:
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>`os`: For interacting with the operating system (e.g., file paths, directories).</li>
                <li>`sys`: For system-specific parameters and functions.</li>
                <li>`json`: For working with JSON (JavaScript Object Notation) data, commonly used for data exchange.</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Recap of Python Fundamentals & Where to Go From Here</h3>
          <p className="mb-3 leading-relaxed">
            Congratulations! You've covered the core fundamentals of Python programming in these four weeks. You now understand:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><span className="text-red-700 font-bold">Variables & Data Types:</span> Storing different kinds of information.</li>
            <li><span className="text-red-700 font-bold">Operators:</span> Performing calculations and comparisons.</li>
            <li><span className="text-red-700 font-bold">Conditional Statements (`if`, `elif`, `else`):</span> Making decisions in your code.</li>
            <li><span className="text-red-700 font-bold">Loops (`for`, `while`):</span> Automating repetitive tasks.</li>
            <li><span className="text-red-700 font-bold">Lists, Tuples, Sets, Dictionaries:</span> Organizing collections of data.</li>
            <li><span className="text-red-700 font-bold">Functions:</span> Writing reusable and modular code.</li>
            <li><span className="text-red-700 font-bold">Error Handling (`try`, `except`):</span> Building robust and resilient applications.</li>
            <li><span className="text-red-700 font-bold">File I/O:</span> Reading from and writing to files for persistent data storage.</li>
            <li><span className="text-red-700 font-bold">Modules:</span> Organizing and extending your code.</li>
          </ul>

          <p className="mt-6 text-gray-700 font-semibold">
            Your Journey Continues! Here are some popular areas and resources for your next steps:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li><span className="text-red-700 font-bold">Object-Oriented Programming (OOP):</span> Learn about Classes and Objects to structure larger programs efficiently.</li>
            <li><span className="text-red-700 font-bold">More Advanced Data Structures & Algorithms:</span> Explore Stacks, Queues, Trees, Graphs, and common algorithms to optimize your code.</li>
            <li><span className="text-red-700 font-bold">Web Development:</span>
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>**Flask:** A lightweight web framework for building small to medium web applications.</li>
                <li>**Django:** A full-featured, powerful web framework for building complex web applications.</li>
              </ul>
            </li>
            <li><span className="text-red-700 font-bold">Data Science & Machine Learning:</span> Python is dominant here!
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>**NumPy:** For numerical computing.</li>
                <li>**Pandas:** For data manipulation and analysis.</li>
                <li>**Matplotlib/Seaborn:** For data visualization.</li>
              </ul>
            </li>
            <li><span className="text-red-700 font-bold">GUI Development:</span> Create desktop applications with graphical user interfaces using libraries like Tkinter (built-in) or PyQt/PySide.</li>
            <li><span className="text-red-700 font-bold">Automation & Scripting:</span> Use Python to automate repetitive tasks on your computer.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Recommended Learning Resources:</h3>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>**Official Python Documentation:** The ultimate reference.</li>
            <li>**freeCodeCamp:** Free online courses and certifications.</li>
            <li>**Codecademy:** Interactive coding lessons.</li>
            <li>**Real Python:** In-depth tutorials and articles.</li>
            <li>**LeetCode / HackerRank:** For practicing coding problems and algorithms.</li>
            <li>**Online Courses (Coursera, edX, Udemy):** For structured learning paths.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
            <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Let's touch upon Modules and think about your final steps:
          </h3>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li><span className="text-red-700 font-bold">Dice Roll Simulator:</span> Use the `random` module to simulate rolling a standard six-sided dice. Print the result (a random integer between 1 and 6, inclusive).</li>
            <li><span className="text-red-700 font-bold">Circle Area Calculator:</span> Use the `math` module (specifically `math.pi`) to calculate the area of a circle. Ask the user for the radius and print the calculated area. (Area = $\pi \times radius^2$).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-red-700">
            Final Challenge: Simple To-Do List Application!
          </h3>
          <p className="mb-3 leading-relaxed">
            This is an optional but highly recommended project to consolidate everything you've learned. Build a command-line "To-Do List" application that can:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li><span className="text-red-700 font-bold">Add Tasks:</span> Allow users to input new tasks.</li>
            <li><span className="text-red-700 font-bold">View Tasks:</span> Display all current tasks.</li>
            <li><span className="text-red-700 font-bold">(Optional) Mark as Complete / Delete Tasks:</span> Implement functionality to mark tasks as done or remove them.</li>
            <li><span className="text-red-700 font-bold">(Optional) Save and Load:</span> Implement saving the tasks to a text file and loading them when the program starts, so data persists across runs.</li>
          </ul>
          <p className="mt-4 text-gray-700 font-semibold">
            This project will tie together many concepts: `input()`, `lists`, `functions`, `file I/O`, `loops`, and `conditional statements`. Good luck!
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

export default Week4ErrorHandlingFileIO;