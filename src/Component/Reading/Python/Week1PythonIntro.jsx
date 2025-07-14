import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week1PythonIntro = () => {
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

        {/* Main Title for the Week */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6">
          Week 1: Introduction to Python & "Hello World!"
        </h1>

        {/* Topic 1: Introduction to Python & "Hello World!" */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: Welcome to Python & Your First Program!
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Let's Dive In: What is Programming?</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><strong>Ever wondered what programming truly is?</strong> Simply put, it's about giving clear, step-by-step instructions to a computer so it can perform tasks. Think of yourself as the chef, and the computer as your sous-chef, following your recipe exactly!</li>
            <li><strong>And why Python?</strong> Ah, Python! It's a high-level (meaning it's closer to human language), interpreted, and super versatile programming language. It's incredibly popular for everything from building websites to analyzing data and even powering AI.</li>
            <li><strong>Why Python for you, as a beginner?</strong> Excellent question! Python stands out because of its *readable syntax* (it looks a lot like plain English!), its *huge, supportive community*, and a *vast collection of libraries* that make complex tasks much simpler. It's truly a fantastic starting point!</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Getting Your Workspace Ready:</h3>
          <p className="mb-3 leading-relaxed">
            Alright, before we write any code, let's make sure your computer is set up for Python.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li>First, you'll want to <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">download and install Python from python.org</a>. It's pretty straightforward, just follow the instructions on their site.</li>
            <li>Once installed, you can use Python's default editor, <strong>IDLE</strong>, or set up a more powerful text editor like <strong>VS Code</strong> (with the Python extension, of course!). Choose what feels comfortable for you.</li>
            <li>Finally, you'll need to know how to open your computer's <strong>terminal or command prompt</strong>. This is where we'll tell Python to run your code!</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Your First Big Moment: Running "Hello, World!"</h3>
          <p className="mb-3 leading-relaxed">
            This is it – the classic first program! It's super simple but incredibly satisfying.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li>You can try Python out right in your terminal! Just type <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">python</code> (or <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">python3</code> on some systems) and hit Enter to enter the interactive shell.</li>
            <li>Then, type <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">print("Hello, World!")</code> and press Enter. <strong>Boom!</strong> You should see "Hello, World!" printed right back at you. How cool is that?!</li>
            <li>For saving your code, create a file named <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">hello.py</code> and put just one line inside: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">print("Hello, World!")</code></li>
            <li>To run this file, go back to your terminal (make sure you're in the same directory where you saved `hello.py`) and type: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">python hello.py</code>. There it is again! Well done!</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">A Little Secret: Comments!</h3>
          <p className="mb-3 leading-relaxed">
            As you write more complex code, you'll want to add notes to yourself (and others!) about what your code does. These are called <strong>comments</strong>, and Python simply ignores them when it runs your program.
          </p>
          <p className="mb-3 leading-relaxed">
            You can add a single-line comment using the hash symbol (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">#</code>). For longer explanations, you can use multi-line comments, also known as "Docstrings," enclosed in triple quotes.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`# This is a single-line comment – Python ignores this part!
print("Hello, World!") # This prints a message to your screen
"""
This is a multi-line comment.
It's great for longer explanations,
and Python will skip over all of it too!
"""`}
          </pre>

          {/* Corrected structure for Practical Exercise */}
          <p className="mt-6 text-gray-700 font-semibold">
            <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Ready to get hands-on? Your mission is to set up Python and run your very first "Hello, World!" script. After that, play around with adding both single-line and multi-line comments to your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">hello.py</code> file. See how your program still runs the same? That's the power of comments! You're doing great!
          </p>
          {/* The <ul> was moved out of the <p> tag */}
        </section>

        ---

        {/* Topic 2: Variables & Basic Data Types (Numbers, Strings) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 2: Giving Names to Your Data: Variables & Basic Data Types!
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Meet Variables: Your Data's Best Friend!</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li>Imagine you have different pieces of information – maybe your name, your age, or a score in a game. Where do you keep them in your program? That's where <strong>variables</strong> come in! They are simply <strong>named containers for storing data</strong>.</li>
            <li>Think of them like <strong>labeled boxes</strong>. You put something inside the box, put a label on it, and later you can always find what's in that box by its label!</li>
            <li><strong>Naming Rules:</strong> Just like naming anything, there are a few rules for good variable names in Python. They need to start with a letter or an underscore, and can contain letters, numbers, or underscores. Oh, and Python is <strong>case-sensitive</strong>, so `myVariable` is different from `myvariable`! (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_variable</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">userAge</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">_temp</code>).</li>
            <li>The <strong>Assignment Operator (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">=</code>):</strong> This little symbol is super important! It's how you tell Python to put a value *into* a variable.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`# Here we're assigning the string "Alice" to the variable 'name'
name = "Alice"
# And the integer 30 to the variable 'age'
age = 30`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Understanding Data Types: Python's Different Flavors of Information</h3>
          <p className="mb-3 leading-relaxed">
            Python isn't just storing values; it also understands what *kind* of value you're storing. These "kinds" are called <strong>data types</strong>. Let's look at the most common ones for now:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><strong>Integers (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">int</code>):</strong> These are your whole numbers, like 5, -100, or 0. No decimals allowed!</li>
            <li><strong>Floats (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">float</code>):</strong> When you need decimals, floats are your go-to! Think 3.14, -0.5, or even 10.0 (yes, 10.0 is a float, while 10 is an integer!).</li>
            <li><strong>Strings (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">str</code>):</strong> These are sequences of characters – basically, any text! You'll always enclose them in single or double quotes (e.g., "Hello", 'Python').</li>
            <li>Want to know what type of data is in a variable? Just use the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">type()</code> function! It's a handy little tool.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Python Can Do Math! Basic Arithmetic Operators:</h3>
          <p className="mb-3 leading-relaxed">
            Python is a fantastic calculator! Here are the basic operations you'll be using constantly:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">+</code> (addition)</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">-</code> (subtraction)</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">*</code> (multiplication)</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">/</code> (division - watch out, this *always* returns a float, even if the result is a whole number!)</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">//</code> (integer division - this gives you just the whole number part of the division)</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">%</code> (modulo - this is super useful, it gives you the *remainder* after a division)</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">**</code> (exponentiation - for powers, like 2 to the power of 3)</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`x = 10
y = 3
print(x + y)  # Result: 13 (Simple addition)
print(x / y)  # Result: 3.333... (Regular division, returns a float)
print(x // y) # Result: 3 (Integer division - just the whole number)
print(x % y)  # Result: 1 (Modulo - 10 divided by 3 is 3 with a remainder of 1)`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">String Concatenation: Joining Text Together!</h3>
          <p className="mb-3 leading-relaxed">
            Want to combine two pieces of text, like a first name and a last name? That's called <strong>string concatenation</strong>, and in Python, you simply use the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">+</code> operator!
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name # Don't forget that space in between!
print(full_name) # This will beautifully print: John Doe`}
          </pre>

          {/* Corrected structure for Practical Exercise */}
          <p className="mt-6 text-gray-700 font-semibold">
            <span className="text-blue-600 font-bold">Practical Exercise Time!</span> You've learned a lot about variables and data types! Now, it's your turn to play:
          </p>
          {/* The <ul> was moved out of the <p> tag */}
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Create variables for your `name`, `age`, and `favorite_color`. Then, print them all in a nice sentence! (Hint: We'll learn a super neat way to do this with f-strings in Topic 3, but for now, the `+` sign works great!).</li>
            <li>Let's do some calculations:
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li>Figure out the area of a rectangle if its length is 10 and width is 5.</li>
                <li>Calculate how many days are in 3 years. (Let's keep it simple and assume no leap years for now!).</li>
              </ul>
            </li>
            <li>Combine any two strings you like into a brand new one!</li>
          </ul>
          <p className="mt-4 text-gray-700 font-semibold">
            Take your time, experiment, and remember: every little bit of practice helps! You're doing awesome!
          </p>
        </section>

        ---

        {/* Topic 3: Input & Type Conversion */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 3: Making Your Programs Interactive: Input & Type Conversion!
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Talking to Your User: The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">input()</code> Function!</h3>
          <p className="mb-3 leading-relaxed">
            Wouldn't it be cool if your Python programs could ask the user for information? Say, their name, or their favorite number? That's exactly what the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">input()</code> function is for! It pauses your program, asks the user a question, and waits for them to type something and press Enter.
          </p>
          <p className="mb-3 leading-relaxed">
            <strong><span className="text-red-600 font-bold">SUPER IMPORTANT NOTE:</span></strong> The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">input()</code> function *always* returns whatever the user types as a <strong>string</strong>. Even if they type a number, Python sees it as text! Keep this in mind, it's a common point where beginners might go "Huh?" but don't panic, we'll fix it!
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`# This line will ask "What is your name? " and wait for you to type.
user_name = input("What is your name? ")
print("Hello, " + user_name) # Then it will greet you! Try it out!`}</pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Changing Data Types: Type Conversion (or Casting)!</h3>
          <p className="mb-3 leading-relaxed">
            Since `input()` gives us strings, what if we *needed* a number? Like, if we ask for someone's age and want to do math with it? This is where <strong>type conversion</strong>, often called <strong>casting</strong>, comes in handy! You can convert data from one type to another.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">int()</code>: This tries to turn something into an integer (a whole number).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">float()</code>: This tries to turn something into a float (a decimal number).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">str()</code>: This turns something into a string (text). You might use this if you want to print a number along with some text, and Python gives you an error because you're trying to add a number directly to a string.</li>
          </ul>
          <p className="mb-3 leading-relaxed">
            <strong><span className="text-red-600 font-bold">COMMON PITFALL ALERT:</span></strong> If you try to convert a string that *isn't* a valid number (like `int("hello")`), Python will give you an error! So, make sure the string you're converting actually looks like a number.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`age_str = input("Enter your age: ") # The input will be a string, like "30"
age_int = int(age_str) # ✨ Now we convert "30" into the number 30!
print("Next year you will be", age_int + 1, "years old.") # See? Now we can do math!

price_str = "19.99"
price_float = float(price_str) # Converts the string "19.99" to the decimal number 19.99`}</pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Making Print Statements Pretty: Formatted String Literals (f-strings)!</h3>
          <p className="mb-3 leading-relaxed">
            Remember how we joined strings with `+` before? Well, when you have variables you want to include in a sentence, there's an even cleaner and more powerful way: <strong>f-strings</strong>! They let you embed your variables directly inside a string. It's awesome for making your output really easy to read.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`name = input("What's your name? ")
age = int(input("What's your age? "))
# See the 'f' before the quotes? That makes it an f-string!
print(f"Hello, {name}! You are {age} years old.")
# Python automatically plugs the variable values right into the curly braces {}!`}</pre>

          {/* Corrected structure for Practical Exercise */}
          <p className="mt-6 text-gray-700 font-semibold">
            <span className="text-blue-600 font-bold">Practical Exercise Time!</span> You've learned so much about making your programs interactive and handling different types of data. This is crucial for building real-world applications!
          </p>
          {/* The <ul> was moved out of the <p> tag */}
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Your first challenge: Write a program that asks the user for two numbers. Remember to convert them to integers! Then, proudly print their sum, difference, product, and quotient.</li>
            <li>Next, create a program that asks for the user's name, age, and city. Once you have that info, print a complete, friendly sentence using those amazing f-strings you just learned! (e.g., "Hello, [Name]! You are [Age] years old and live in [City].").</li>
          </ul>
          <p className="mt-4 text-gray-700 font-semibold">
            Take your time, debug if you need to (it's part of the process!), and celebrate each small victory. You're becoming a Python pro! Well done!
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

export default Week1PythonIntro;