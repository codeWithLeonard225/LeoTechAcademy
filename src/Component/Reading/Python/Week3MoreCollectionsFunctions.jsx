import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week3MoreCollectionsFunctions = () => {
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

                {/* Main Title for Week 3 */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-8 text-center">
                    Week 3: More Collections & Functions
                </h1>
    

                {/* Week 3, Topic 1: Tuples & Sets */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 1: Storing Ordered & Unique Data: Tuples & Sets
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Tuples: Ordered, Unchangeable Collections</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>**Tuples** are similar to lists in that they are **ordered collections** of items.</li>
                        <li>The key difference is that tuples are **immutable** (unchangeable). Once created, you cannot add, remove, or modify items within a tuple.</li>
                        <li>They are often faster than lists for fixed data and are useful when you want to ensure data integrity.</li>
                        <li>**Creating Tuples:** Use parentheses <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">()</code> or simply separate items with commas.
                            <br />Example: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_tuple = (item1, item2, ...)</code> or <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_tuple = item1, item2</code></li>
                        <li>**Accessing Elements:** Just like lists, you can access items using **indexing** (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_tuple[0]</code>) and **slicing** (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_tuple[1:3]</code>).</li>
                        <li>**Use Cases:** Tuples are commonly used for storing related pieces of data that shouldn't change, like geographical coordinates (`(latitude, longitude)`), RGB color values (`(255, 0, 128)`), or when a function needs to return multiple values.</li>
                    </ul>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`coordinates = (10, 20)
print(coordinates[0]) # Output: 10
# coordinates[0] = 5 # This would cause an error because tuples are immutable!`}</pre>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Sets: Unordered Collections of Unique Items</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>**Sets** are **unordered collections** where every item is **unique**. This means a set cannot have duplicate elements.</li>
                        <li>They are extremely useful for tasks like membership testing (checking if an item is in a set) and for eliminating duplicate entries from a list.</li>
                        <li>**Creating Sets:** Use curly braces <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{ }</code>. For an empty set, you *must* use <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">set()</code>, as <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{ }</code> creates an empty dictionary.
                            <br />Example: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_set = &lbrace;item1, item2, ...&rbrace;</code></li>
                        <li>**No Duplicates:** If you try to add an item that's already in the set, it's simply ignored without an error.</li>
                        <li>**No Indexing:** Because sets are unordered, you **cannot access items by index** (like <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_set[0]</code>).</li>
                        <li>**Set Operations:** Sets come with powerful methods for common mathematical set operations:
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">union()</code>: Combines all unique items from both sets.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">intersection()</code>: Returns items common to both sets.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">difference()</code>: Returns items in the first set but not in the second.</li>
                            </ul>
                        </li>
                    </ul>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`numbers = {1, 2, 3, 3, 4} # Duplicates are automatically removed, so this is {1, 2, 3, 4}
print(numbers)       # Output might be {1, 2, 3, 4} (order is not guaranteed)
print(2 in numbers)  # Output: True (membership testing)

set_a = {1, 2, 3}
set_b = {3, 4, 5}
print(set_a.union(set_b))         # Output: {1, 2, 3, 4, 5}
print(set_a.intersection(set_b))  # Output: {3}
print(set_a.difference(set_b))    # Output: {1, 2}`}</pre>

                    <p className="mt-6 text-gray-700 font-semibold">
                        <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Let's get hands-on with Tuples and Sets:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                        <li>**Tuple Exercise:** Create a tuple representing a date (e.g., year, month, day: `(2025, 7, 5)`). Print the entire tuple and then print just the year.</li>
                        <li>**Set Exercise 1 (Removing Duplicates):** Create a list with duplicate numbers (e.g., `[1, 2, 2, 3, 4, 4, 5]`). Convert this list to a set to automatically remove duplicates. Then, convert the set back to a list and print the new list. Observe that the duplicates are gone.</li>
                        <li>**Set Exercise 2 (Set Operations):** Create two sets of names, for example:
                            <br /><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">students_math = &lbrace;"Alice", "Bob", "Charlie", "David"&rbrace;</code>
                            <br /><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">students_science = &lbrace;"Charlie", "David", "Eve", "Frank"&rbrace;</code>
                            <br />Find and print their **union** (all unique students taking either course) and their **intersection** (students taking both courses).</li>
                    </ul>
                    <p className="mt-4 text-gray-700 font-semibold">
                        Great work exploring these distinct and powerful collection types!
                    </p>
                </section>

                ---

                {/* Week 3, Topic 2: Dictionaries */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 2: Mapping Information: Dictionaries!
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Dictionaries: Key-Value Pairs</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>**Dictionaries** are unordered collections of **key-value pairs**. They are like real-world dictionaries where each word (the **key**) has a definition (the **value**).</li>
                        <li>They allow you to store and retrieve data very efficiently using a unique key.</li><li>**Creating Dictionaries:** Use curly braces <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{ }</code> with keys and values separated by a colon <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">:</code>, and pairs separated by commas.
                            <br />Example: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_dict = &lbrace;"key1": value1, "key2": value2&rbrace;</code></li>
                        <li>**Keys:**
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li>Must be **unique** within a dictionary. If you try to add a key that already exists, its value will be updated.</li>
                                <li>Must be **immutable** (e.g., strings, numbers, tuples). Lists cannot be dictionary keys because they are mutable.</li>
                            </ul>
                        </li>
                        <li>**Values:** Can be of any data type (strings, numbers, lists, other dictionaries, etc.).</li>
                        <li>**Accessing Values:** Use the key inside square brackets: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_dict["key"]</code>. If the key doesn't exist, it will raise a `KeyError`. You can also use <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_dict.get("key")</code> which returns `None` if the key isn't found, preventing errors.</li>
                        <li>**Adding/Modifying Values:** Simply assign a value to a new key, or an existing key.
                            <br />Example: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_dict["new_key"] = new_value</code></li>
                        <li>**Deleting Key-Value Pairs:**
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">del my_dict["key"]</code>: Removes the key-value pair.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my_dict.pop("key")</code>: Removes the key-value pair and returns the value.</li>
                            </ul>
                        </li>
                        <li>**Dictionary Methods for Iteration:**
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">.keys()</code>: Returns a view object of all the keys.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">.values()</code>: Returns a view object of all the values.</li>
                                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">.items()</code>: Returns a view object of all key-value pairs as tuples. This is great for looping!</li>
                            </ul>
                        </li>
                    </ul>

                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
print(person["name"]) # Output: Alice

person["age"] = 31 # Modify existing value
person["occupation"] = "Engineer" # Add new key-value pair

print(person) # Output: {'name': 'Alice', 'age': 31, 'city': 'New York', 'occupation': 'Engineer'}

for key, value in person.items():
    print(f"{key}: {value}")
# Output:
# name: Alice
# age: 31
# city: New York
# occupation: Engineer`}</pre>

                    <p className="mt-6 text-gray-700 font-semibold">
                        <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Dictionaries are fundamental for organizing related data. Practice these exercises:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                        <li>**Book Dictionary:** Create a dictionary representing a book with the following keys: `"title"`, `"author"`, `"year"`, and `"genre"`. Populate it with your favorite book's details.</li>
                        <li>**Print Details:** Print the author and title of the book using their keys.</li>
                        <li>**Add Pages:** Add a new key-value pair, e.g., `"pages"` with a number, to your book dictionary.</li>
                        <li>**Iterate & Print All:** Use a `for` loop with the `.items()` method to iterate through the dictionary and print all key-value pairs in a readable format (e.g., "Key: Value").</li>
                        <li>**Simple Contact List:** Create a dictionary for a simple contact list where the person's name is the key and their phone number (as a string) is the value. Ask the user for a name and, if found in your contact list, print their phone number. If not found, print a message like "Contact not found."</li>
                    </ul>
                    <p className="mt-4 text-gray-700 font-semibold">
                        Fantastic work with dictionaries! You're now equipped to handle complex, related data in Python.
                    </p>
                </section>

                ---

                {/* Week 3, Topic 3: Functions (Defining & Calling) */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 3: Organizing Your Code: Functions!
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Functions: Reusable Code Blocks</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                        <li>**Functions** are self-contained, reusable blocks of code designed to perform a specific task.</li>
                        <li>They are crucial for:
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li>**Organization:** Breaking down large programs into smaller, manageable pieces.</li>
                                <li>**Reusability:** Writing code once and using it multiple times (adhering to the **DRY** - **D**on't **R**epeat **Y**ourself - principle).</li>
                                <li>**Readability:** Making your code easier to understand and debug.</li>
                            </ul>
                        </li>
                        <li>**Defining a Function:** You use the `def` keyword, followed by the function name, parentheses `()`, and a colon `:`. The code block inside the function must be indented.
                            <br />Example: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">def my_function():</code></li>
                        <li>**Parameters vs. Arguments:**
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li>**Parameters:** Variables listed inside the parentheses in the `def`inition of the function. They act as placeholders for the inputs the function expects.</li>
                                <li>**Arguments:** The actual values you pass to the function when you **call** it. These values are assigned to the parameters.</li>
                            </ul>
                        </li>
                        <li>**The `return` Statement:**
                            <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                                <li>Used to send a value (or values) back from the function to the part of the code that called it.</li>
                                <li>When `return` is executed, the function immediately stops.</li>
                                <li>If a function doesn't have a `return` statement, it implicitly returns `None`.</li>
                            </ul>
                        </li>
                        <li>**Docstrings:** It's a very good practice to add a triple-quoted string (`"""Docstring goes here"""`) right after the `def` line. This explains what the function does, its parameters, and what it returns. It's vital for code documentation and is accessible via `help(function_name)`.</li>
                        <li>**Scope (Briefly):** Variables defined *inside* a function are **local** to that function. They only exist while the function is running and cannot be accessed from outside the function. Variables defined outside functions are **global**.</li>
                    </ul>

                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`# Defining a function with a parameter
def greet(name): # 'name' is a parameter
    """This function greets the person passed in as argument."""
    print(f"Hello, {name}!")

# Calling the function with an argument
greet("Bob") # "Bob" is an argument

# Defining a function that returns a value
def add_numbers(a, b): # 'a' and 'b' are parameters
    """This function takes two numbers and returns their sum."""
    return a + b

# Calling the function and storing its returned value
result = add_numbers(5, 3) # 5 and 3 are arguments; 'result' will be 8
print(result) # Output: 8`}</pre>

                    <p className="mt-6 text-gray-700 font-semibold">
                        <span className="text-blue-600 font-bold">Practical Exercise Time!</span> Functions are a cornerstone of good programming. Let's practice creating and using them:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                        <li>**Calculate Area Function:** Define a function called `calculate_area` that takes `length` and `width` as parameters. It should return the calculated `area`. Call this function with different sets of values (e.g., length=5, width=10; length=7, width=7) and print the results for each.</li>
                        <li>**Is Even Function:** Define a function called `is_even` that takes a single parameter, `number`. This function should return `True` if the number is even and `False` otherwise. Test it by calling it with `4`, `7`, `0`, and `-2` and printing the boolean result for each.</li>
                        <li>**Get User Info Function:** Create a function called `get_user_info` that takes *no parameters*. Inside this function, ask the user for their `name` and `age` using `input()`. The function should then return both the `name` and `age` as a **tuple**. Call this function and print the returned tuple to verify the output.</li>
                    </ul>
                    <p className="mt-4 text-gray-700 font-semibold">
                        You're doing fantastic! Mastering functions will make your code much more professional and manageable. Keep up the great work!
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

export default Week3MoreCollectionsFunctions;