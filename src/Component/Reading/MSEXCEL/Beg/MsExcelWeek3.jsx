import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MsExcelWeek3 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageUrl = "/images/excel-Interface.png"; // Placeholder if an image is needed for Week 3

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Define color schemes for topics
    const topic1Style = {
        bgColor: 'bg-green-50', // Very light green
        titleColor: 'text-green-800', // Darker green text
        borderColor: 'border-green-300' // Green border
    };

    const topic2Style = {
        bgColor: 'bg-blue-50', // Very light blue
        titleColor: 'text-blue-800', // Darker blue text
        borderColor: 'border-blue-300' // Blue border
    };

    const topic3Style = {
        bgColor: 'bg-purple-50', // Very light purple
        titleColor: 'text-purple-800', // Darker purple text
        borderColor: 'border-purple-300' // Purple border
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
            <button
                onClick={handleBackClick}
                className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                &larr; Back
            </button>

            <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 pb-2">
                MS Excel for Beginners: 1-Month Course Outline
            </h1>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                    Week 3: Essential Functions and Data
                </h2>

                {/* Topic 1: Text Functions and Date Functions */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topic1Style.bgColor} ${topic1Style.borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topic1Style.titleColor}`}>
                        Topic 1: Text Functions and Date Functions
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session will introduce you to powerful functions that allow you to
                        manipulate text strings and perform calculations with dates, essential for cleaning data
                        and managing time-based information.
                    </p>

                    {/* Image and Diagram section for Topic 1 */}
                    <div className="mb-6">
                        <h3 className={`text-2xl font-medium mb-2 mt-4 ${topic1Style.titleColor}`}>Diagram</h3>
                        <div className="flex justify-center mt-4">
                            <img
                                src={imageUrl}
                                alt="Excel Interface Diagram (Click to enlarge)"
                                className="rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mb-2 cursor-pointer"
                                onClick={handleImageClick}
                            />
                        </div>
                    </div>

                    {/* Key Learning Points for Topic 1 */}
                    <div className="mb-6">
                        <h3 className={`text-2xl font-medium mb-4 ${topic1Style.titleColor}`}>Key Learning Points:</h3>

                        {/* CONCATENATE */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">CONCATENATE (or &amp;)</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Joins several text strings into one text string.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=CONCATENATE(A1," ",B1)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Alternative (&amp; operator):</span> <code className="bg-gray-200 p-1 rounded">=A1&amp;" "&amp;B1</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result (in C1):</span> John Doe
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Combines "John", a space, and "Doe".
                                </li>
                            </ul>
                        </div>

                        {/* LEFT */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">LEFT</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Returns the first num_chars characters from a text string.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=LEFT(A2,4)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> PROD
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Extracts the first 4 characters from "PROD-XYZ-7890-EU".
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">RIGHT</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Returns the last num_chars characters from a text string.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=RIGHT(A2,2)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> EU
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Extracts the last 2 characters from "PROD-XYZ-7890-EU".
                                </li>
                            </ul>
                        </div>

                        {/* MID */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">MID</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Returns a specific number of characters from a text string, starting at a specified position.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=MID(A2,10,4)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> 7890
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Starts at the 10th character ("7") in "PROD-XYZ-7890-EU" and extracts 4 characters.
                                </li>
                            </ul>
                        </div>

                        {/* LEN */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">LEN</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Returns the number of characters in a text string.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=LEN(A2)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> 17
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Counts all characters, including hyphens, in "PROD-XYZ-7890-EU".
                                </li>
                            </ul>
                        </div>

                        {/* UPPER */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">UPPER</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Converts a text string to all uppercase letters.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=UPPER(B2)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> EXCEL
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Converts "Excel" to "EXCEL".
                                </li>
                            </ul>
                        </div>

                        {/* LOWER */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">LOWER</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Converts a text string to all lowercase letters.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=LOWER(C2)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> training
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Converts "Training" to "training".
                                </li>
                            </ul>
                        </div>

                        <h3 className={`text-2xl font-medium mb-4 mt-8 ${topic1Style.titleColor}`}>Date Functions and Date Arithmetic</h3>

                        {/* TODAY() */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">TODAY()</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Returns the current date. It updates every time the workbook is opened or recalculated.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=TODAY()</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> (e.g., 20-Jul-2025)
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Shows today's date based on your system clock.
                                </li>
                            </ul>
                        </div>

                        {/* NOW() */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">NOW()</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Returns the current date and time. It updates every time the workbook is opened or recalculated.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=NOW()</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> (e.g., 20-Jul-2025 19:33)
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Shows today's date and current time based on your system clock.
                                </li>
                            </ul>
                        </div>

                        {/* DAY() */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">DAY()</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Extracts the day of the month from a date (as a number 1 to 31).
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=DAY(A3)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> 15
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Extracts the day "15" from "15-Mar-2024".
                                </li>
                            </ul>
                        </div>

                        {/* MONTH() */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">MONTH()</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Extracts the month from a date (as a number 1 to 12).
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=MONTH(A3)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> 3
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Extracts the month "3" (March) from "15-Mar-2024".
                                </li>
                            </ul>
                        </div>

                        {/* YEAR() */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">YEAR()</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Extracts the year from a date (as a four-digit number).
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example:</span> <code className="bg-gray-200 p-1 rounded">=YEAR(A3)</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> 2024
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Extracts the year "2024" from "15-Mar-2024".
                                </li>
                            </ul>
                        </div>

                        {/* Date Arithmetic */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Date Arithmetic</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Purpose:</span> Perform calculations with dates by adding or subtracting numbers (representing days).
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example (Future Date):</span> <code className="bg-gray-200 p-1 rounded">=TODAY()+B3</code> (Assuming B3 contains 25)
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> (e.g., 14-Aug-2025)
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Calculates the date 25 days from today.
                                </li>
                                <li>
                                    <span className="font-semibold">Formula Example (Duration/Days between):</span> <code className="bg-gray-200 p-1 rounded">=TODAY()-A3</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Result:</span> (e.g., 493 - This result will vary depending on today's date)
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> Calculates the number of days between "15-Mar-2024" and today.
                                </li>
                            </ul>
                        </div>

                        {/* Class Work/Exercises for Topic 1 */}
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <h3 className={`text-2xl font-medium mb-4 ${topic1Style.titleColor}`}>
                                Class Work/Exercises (Topic 1):
                            </h3>
                            <ul className="list-disc pl-8 space-y-2 text-gray-700">
                                <li>Open a new workbook. In cell A1, type "first" and in B1, type "name". In C1, use CONCATENATE or &amp; to combine them with a space in between.</li>
                                <li>In A2, type "PRODUCT-CODE-1234-US". Use LEFT to extract "PROD".</li>
                                <li>From the same cell A2, use RIGHT to extract "US".</li>
                                <li>From cell A2, use MID to extract "1234".</li>
                                <li>Use LEN on cell A2 to find the total number of characters.</li>
                                <li>In a new cell, type "excel skills". Use UPPER to convert it to "EXCEL SKILLS".</li>
                                <li>In another cell, type "DATA ANALYSIS". Use LOWER to convert it to "data analysis".</li>
                                <li>In a cell, use TODAY() to display the current date.</li>
                                <li>In another cell, use NOW() to display the current date and time.</li>
                                <li>Assuming A3 contains "15-Mar-2024", use DAY(), MONTH(), and YEAR() in separate cells to extract the respective components.</li>
                                <li>Calculate a date 30 days from today using date arithmetic.</li>
                                <li>Calculate the number of days between "01-Jan-2024" and today.</li>
                            </ul>
                        </div>
                    </div>
                </div> {/* End of Topic 1 styled div */}

                {/* Topic 2: Logical Functions (IF) */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topic2Style.bgColor} ${topic2Style.borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topic2Style.titleColor}`}>
                        Topic 2: Logical Functions (IF)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session introduces the fundamental logical function, IF, which allows you
                        to create formulas that make decisions and return different results based on
                        whether a condition is true or false.
                    </p>

                    <div className="mb-6">
                        <h3 className={`text-2xl font-medium mb-4 mt-4 ${topic2Style.titleColor}`}>Key Learning Points:</h3>

                        {/* Understanding IF Statements */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Understanding IF Statements for Decision-Making in Excel:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">The IF function allows conditional logic:</span> if a condition is TRUE, do one
                                    thing; if FALSE, do another.
                                </li>
                                <li>
                                    <span className="font-semibold">Syntax:</span> <code className="bg-gray-200 p-1 rounded">=IF(logical_test, value_if_true, [value_if_false])</code>
                                </li>
                                <li>
                                    <span className="font-semibold">logical_test:</span> The condition to evaluate (e.g., A1{'>'}10).
                                </li>
                                <li>
                                    <span className="font-semibold">value_if_true:</span> Result if condition is TRUE.
                                </li>
                                <li>
                                    <span className="font-semibold">value_if_false:</span> (Optional) Result if condition is FALSE.
                                </li>
                            </ul>
                        </div>

                        {/* Creating Simple IF Formulas */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Creating Simple IF Formulas for Conditional Outcomes:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Examples:</span> Pass/Fail grades, bonus
                                    calculations, categorization based on criteria.
                                </li>
                                <li>
                                    <span className="font-semibold">Important:</span> Text values in formulas must
                                    be enclosed in double quotes (").
                                </li>
                                <li>
                                    <span className="font-semibold">Example Formula:</span> <code className="bg-gray-200 p-1 rounded">=IF(B2{'>'}=70, "Pass", "Fail")</code>
                                </li>
                                <li>
                                    <span className="font-semibold">Explanation:</span> If the value in cell B2 is greater than or equal to 70, display "Pass"; otherwise, display "Fail".
                                </li>
                            </ul>
                        </div>

                         {/* Class Work/Exercises for Topic 2 */}
                         <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <h3 className={`text-2xl font-medium mb-4 ${topic2Style.titleColor}`}>
                                Class Work/Exercises (Topic 2):
                            </h3>
                            <ul className="list-disc pl-8 space-y-2 text-gray-700">
                                <li>In a new sheet, create a list of student names in column A and their scores (0-100) in column B.</li>
                                <li>In column C, use an IF function to display "Pass" if the score is 60 or above, and "Fail" otherwise.</li>
                                <li>In another column, create a condition: if a score is 90 or above, display "Excellent", otherwise display "Good".</li>
                                <li>Imagine a sales target of $10,000. In a cell, enter a sales amount. Use an IF function to display "Target Met" if sales are greater than or equal to $10,000, otherwise "Needs Improvement".</li>
                            </ul>
                        </div>

                    </div>
                </div> {/* End of Topic 2 styled div */}

                {/* Topic 3: Data Validation */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topic3Style.bgColor} ${topic3Style.borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topic3Style.titleColor}`}>
                        Topic 3: Data Validation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session explores Data Validation, a powerful feature that helps maintain
                        data accuracy and consistency by restricting the type or values of data that
                        users can enter into a cell. This prevents common data entry errors and makes
                        your spreadsheets more reliable.
                    </p>

                    <div className="mb-6">
                        <h3 className={`text-2xl font-medium mb-4 mt-4 ${topic3Style.titleColor}`}>Key Learning Points:</h3>

                        {/* What is Data Validation? */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">What is Data Validation?</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">A tool to set rules</span> for what can be entered into a cell.
                                </li>
                                <li>
                                    <span className="font-semibold">Benefits:</span> Improves data quality, reduces errors, ensures consistency, guides users.
                                </li>
                            </ul>
                        </div>

                        {/* Accessing Data Validation */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Accessing Data Validation:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Select the cell(s)</span> where you want to apply validation.
                                </li>
                                <li>
                                    <span className="font-semibold">Go to:</span> Data Tab &gt; Data Tools Group &gt; Data Validation (it looks like a checkmark with a red circle).
                                </li>
                            </ul>
                        </div>

                        {/* Setting Up Validation Rules (Settings Tab) */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Setting Up Validation Rules (Settings Tab):</p>
                            <p className="font-semibold mb-2 ml-5 text-gray-700">Allow: Choose the type of data permitted:</p>
                            <ul className="list-disc pl-10 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Any value:</span> (Default) No restrictions.
                                </li>
                                <li>
                                    <span className="font-semibold">Whole number:</span> Restricts to integers (e.g., between 1 and 100).
                                </li>
                                <li>
                                    <span className="font-semibold">Decimal:</span> Restricts to numbers with decimals.
                                </li>
                                <li>
                                    <span className="font-semibold">List:</span> Creates a dropdown menu (most common for consistent entries like "Regions", "Departments", "Yes/No").
                                    <ul className="list-circle pl-8 mt-1 space-y-1 text-gray-600">
                                        <li>
                                            <span className="font-semibold">Source:</span> Enter items separated by commas, or select a range of cells containing the list items.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Date:</span> Restricts to valid dates (e.g., between two dates, or after a specific date).
                                </li>
                                <li>
                                    <span className="font-semibold">Time:</span> Restricts to valid times.
                                </li>
                                <li>
                                    <span className="font-semibold">Text length:</span> Restricts the number of characters.
                                </li>
                                <li>
                                    <span className="font-semibold">Custom:</span> Use a formula for more complex rules.
                                </li>
                            </ul>
                        </div>

                        {/* Input Message (Input Message Tab) */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Input Message (Input Message Tab):</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    Provides a helpful message that appears when the user selects the cell, guiding
                                    them on what to enter.
                                </li>
                                <li>
                                    <span className="font-semibold">Title:</span> A brief heading for the message.
                                </li>
                                <li>
                                    <span className="font-semibold">Input message:</span> The actual guidance text.
                                </li>
                            </ul>
                        </div>

                        {/* Error Alert (Error Alert Tab) */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Error Alert (Error Alert Tab):</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    Displays a message if a user tries to enter invalid data, preventing them from
                                    proceeding or warning them.
                                </li>
                                <li>
                                    <span className="font-semibold">Style:</span>
                                    <ul className="list-circle pl-8 mt-1 space-y-1 text-gray-600">
                                        <li><span className="font-semibold">Stop:</span> Prevents invalid entry (user must correct it).</li>
                                        <li><span className="font-semibold">Warning:</span> Allows invalid entry but warns the user.</li>
                                        <li><span className="font-semibold">Information:</span> Allows invalid entry but provides a notice.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Title:</span> A brief heading for the error.
                                </li>
                                <li>
                                    <span className="font-semibold">Error message:</span> The message displayed when invalid data is entered.
                                </li>
                            </ul>
                        </div>

                        {/* Clearing Validation Rules */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Clearing Validation Rules:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Select the cell(s)</span> with validation.
                                </li>
                                <li>
                                    <span className="font-semibold">Go to:</span> Data Tab &gt; Data Tools Group &gt; Data Validation.
                                </li>
                                <li>
                                    <span className="font-semibold">Click "Clear All" button.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Class Work/Exercises for Topic 3 */}
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <h3 className={`text-2xl font-medium mb-4 ${topic3Style.titleColor}`}>
                                Class Work/Exercises (Topic 3):
                            </h3>
                            <ul className="list-disc pl-8 space-y-2 text-gray-700">
                                <li>Open a new sheet. In cell A1, apply Data Validation to allow only "Whole number" between 1 and 100. Test by entering 50, 0, and 101.</li>
                                <li>In cell B1, apply Data Validation to create a "List" dropdown with items: "Apples, Bananas, Oranges". Test the dropdown.</li>
                                <li>For cell C1, apply Data Validation for a "Date" to be "between" 01/01/2024 and 12/31/2024.</li>
                                <li>For cell D1, set "Text length" validation to "less than or equal to" 5 characters. Test it.</li>
                                <li>For cell A1 (from the first exercise), add an "Input Message" titled "Enter Number" with the message "Please enter a number between 1 and 100."</li>
                                <li>For cell A1, set an "Error Alert" with "Stop" style, titled "Invalid Entry" and message "The number you entered is not within the allowed range (1-100)." Test it.</li>
                                <li>Practice clearing the validation rules from cell A1.</li>
                            </ul>
                        </div>
                    </div>
                </div> {/* End of Topic 3 styled div */}

            </section>

            {/* Footer Section */}
            <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
                <p>&copy; 2025 Study Notes. All rights reserved.</p>
            </footer>

            {/* Full-screen Modal for Image (using the placeholder imageUrl) */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-4xl font-bold p-2 leading-none"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img
                            src={imageUrl}
                            alt="Excel Interface Diagram - Full Screen"
                            className="max-w-full max-h-screen object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MsExcelWeek3;