import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MsExcelWeek1 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageUrl = "/images/excel-Interface.png"; // Storing the image URL in a variable

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
    const topicStyles = [
        {
            bgColor: 'bg-indigo-50', // Very light indigo
            titleColor: 'text-indigo-800', // Darker indigo text
            borderColor: 'border-indigo-300' // Indigo border
        },
        {
            bgColor: 'bg-rose-50', // Very light rose
            titleColor: 'text-rose-800', // Darker rose text
            borderColor: 'border-rose-300' // Rose border
        },
        {
            bgColor: 'bg-teal-50', // Very light teal
            titleColor: 'text-teal-800', // Darker teal text
            borderColor: 'border-teal-300' // Teal border
        }
    ];

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
                    Week 1: Getting Started with Excel Basics
                </h2>

                {/* Topic 1: Introduction to Excel Interface */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topicStyles[0].bgColor} ${topicStyles[0].borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topicStyles[0].titleColor}`}>
                        Topic 1: Introduction to Excel Interface
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session introduces the fundamental layout and navigation of Microsoft
                        Excel, laying the groundwork for all future learning. Understanding these basics is
                        crucial for efficient use of the software.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-medium text-gray-700 mb-2">Diagram</h3>
                    <div className="flex justify-center mt-4">
                        <img
                            src={imageUrl}
                            alt="Excel Interface Diagram"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mb-2 cursor-pointer"
                            onClick={handleImageClick}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">Key Learning Points:</h3>

                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                        <li>
                            <p className="font-semibold text-xl">Understanding the Ribbon:</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    The **Ribbon** is the primary command center in Excel, organized into **Tabs** (e.g.,
                                    Home, Insert, Page Layout) and **Groups** of related commands (e.g., "Font,"
                                    "Alignment").
                                </li>
                                <li>Commands are represented by buttons or drop-down menus.</li>
                                <li>
                                    The Ribbon is context-sensitive, displaying different options based on your
                                    selection.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">Quick Access Toolbar (QAT):</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    Located typically above the Ribbon, providing one-click access to frequently used
                                    commands like "Save," "Undo," and "Redo."
                                </li>
                                <li>Customizable to include your most used tools.</li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">Backstage View (File Tab):</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>Accessed by clicking the "**File**" tab in the top-left corner.</li>
                                <li>
                                    Manages your workbooks (**New**, **Open**, **Save**, **Save As**, **Print**, **Share**) and Excel
                                    application settings (**Options**).
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">
                                Identifying Rows, Columns, Cells, and the Name Box:
                            </p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    **Rows**: Horizontal series of cells, identified by numbers (1, 2, 3, ...) on the
                                    left.
                                </li>
                                <li>
                                    **Columns**: Vertical series of cells, identified by letters (A, B, C, ...) at the
                                    top.
                                </li>
                                <li>
                                    **Cells**: The intersection of a row and a column (e.g., A1, B5). Each has a unique
                                    address.
                                </li>
                                <li>
                                    **Name Box**: Displays the address of the currently selected cell or named ranges (to
                                    the left of the Formula Bar).
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">Navigating Worksheets and Workbooks:</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    **Worksheet (Sheet)**: A single tab within an Excel file (e.g., "Sheet1"). You can
                                    add, delete, rename, and switch between sheets.
                                </li>
                                <li>
                                    **Workbook (File)**: The entire Excel file, containing one or more worksheets.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">
                                Saving, Opening, and Creating New Workbooks:
                            </p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    Essential steps for managing your Excel files. Use "**File &gt; New**," "**File &gt;
                                    Open**," and "**File &gt; Save/Save As**."
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">
                        Class Work/Exercises (Topic 1):
                    </h3>
                    <ul className="list-disc pl-8 space-y-2 text-gray-700">
                        <li>Open Excel and identify the **Ribbon**, **QAT**, **Name Box**, and **Formula Bar**.</li>
                        <li>Navigate between cells using the mouse and arrow keys.</li>
                        <li>Type sample data into various cells (**text**, **numbers**).</li>
                        <li>
                            Create a new blank workbook. Save it with a descriptive name (e.g.,
                            "MyFirstWorkbook.xlsx") to your desktop. Close and then re-open it.
                        </li>
                    </ul>
                </div>

                ---

                {/* Topic 2: Basic Data Entry and Cell Formatting */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topicStyles[1].bgColor} ${topicStyles[1].borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topicStyles[1].titleColor}`}>
                        Topic 2: Basic Data Entry and Cell Formatting
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session focuses on the fundamental skills of inputting various types of
                        data into Excel and then making that data presentable and readable through basic
                        formatting techniques.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">Key Learning Points:</h3>
                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                        <li>
                            <p className="font-semibold text-xl">Entering Text, Numbers, and Dates into Cells:</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>Type directly into a cell. Press **Enter** to move down, **Tab** to move right.</li>
                                <li>Excel automatically recognizes and aligns numbers (right) and text (left).</li>
                                <li>Dates are stored as serial numbers, allowing for calculations.</li>
                                <li>
                                    Edit cell content by double-clicking, clicking in the **Formula Bar**, or pressing **F2**.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">Using AutoFill for Quick Data Entry:</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    The **AutoFill handle** (small green square at the bottom-right of the active cell)
                                    quickly extends series.
                                </li>
                                <li>
                                    Drag to create sequences (1, 2, 3...), days ("Monday"), months ("January"), or copy
                                    content.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">
                                Applying Basic Font, Alignment, and Number Formatting:
                            </p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    **Font** (**Home Tab &gt; Font Group**): Change font type, size, **bold**, *italic*, underline,
                                    fill color, font color, borders.
                                </li>
                                <li>
                                    **Alignment** (**Home Tab &gt; Alignment Group**): Left, Center, Right, Top, Middle, Bottom
                                    alignment. Use "**Merge & Center**" for titles, "**Wrap Text**" for long text within a
                                    cell.
                                </li>
                                <li>
                                    **Number** (**Home Tab &gt; Number Group**): Format values as General, Number, Currency ($),
                                    Accounting, Percentage (%), or add Comma Style. Adjust decimal places.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">Adjusting Row Height and Column Width:</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>**Manual**: Drag borders between headers.</li>
                                <li>**AutoFit**: Double-click borders between headers to fit content.</li>
                                <li>**Ribbon**: Use "**Format**" in the Home tab for precise control.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">
                        Class Work/Exercises (Topic 2):
                    </h3>
                    <ul className="list-disc pl-8 space-y-2 text-gray-700">
                        <li>Open a new workbook. Enter your name in A1, your age in B1, and today's date in C1.</li>
                        <li>In a new column, use **AutoFill** to create a sequence of numbers from 1 to 10.</li>
                        <li>In another column, use **AutoFill** to create a series of days of the week (e.g., Monday, Tuesday...).</li>
                        <li>Apply **bold** formatting to cell A1, change its font size to 14, and fill its background with a light yellow color.</li>
                        <li>Enter a long sentence in a cell (e.g., "This is a very long sentence that needs to wrap within the cell.") and apply "**Wrap Text**."</li>
                        <li>Enter a number like `12345.67` and format it as **Currency**, then as **Percentage**.</li>
                        <li>Adjust the width of column A to fit its content automatically.</li>
                    </ul>
                </div>

                ---

                {/* Topic 3: Understanding Formulas and Basic Functions */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topicStyles[2].bgColor} ${topicStyles[2].borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topicStyles[2].titleColor}`}>
                        Topic 3: Understanding Formulas and Basic Functions
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session introduces the core concept of formulas in Excel, enabling users
                        to perform calculations and automate data analysis using fundamental mathematical
                        operations and common built-in functions.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">Key Learning Points:</h3>
                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                        <li>
                            <p className="font-semibold text-xl">Introduction to Formulas (Starting with =)</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>**Formulas** perform calculations or manipulate data.</li>
                                <li>All formulas must begin with an **equal's sign (=)**.</li>
                                <li>The cell displays the result; the formula is in the **Formula Bar**.</li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">Performing Basic Arithmetic Operations:</p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    **+** (Addition), **-** (Subtraction), **\*** (Multiplication), **/** (Division), **^** (Exponentiation).
                                </li>
                                <li>
                                    Follows **Order of Operations (PEMDAS/BODMAS)**. Use **parentheses ()** to control
                                    calculation order.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">
                                Using the SUM, AVERAGE, COUNT, MAX, and MIN Functions:
                            </p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>**Functions** are pre-defined formulas (e.g., `=SUM(range)`).</li>
                                <li>**SUM(range)**: Adds numbers in a range.</li>
                                <li>**AVERAGE(range)**: Calculates the mean.</li>
                                <li>**COUNT(range)**: Counts cells with numbers.</li>
                                <li>**MAX(range)**: Finds the largest value.</li>
                                <li>**MIN(range)**: Finds the smallest value.</li>
                                <li>Use the **AutoSum** feature for quick function insertion.</li>
                            </ul>
                        </li>

                        <li>
                            <p className="font-semibold text-xl mt-3">
                                Understanding Cell References (Relative vs. Absolute):
                            </p>
                            <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                                <li>
                                    **Relative References** (e.g., A1): Default; references adjust when copied to other cells.
                                </li>
                                <li>
                                    **Absolute References** (e.g., $A$1): Fixed; references do not change when copied. Use
                                    **F4** to toggle.
                                </li>
                                <li>**A$1**: Row fixed, column relative. **$A1**: Column fixed, row relative.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">
                        Class Work/Exercises (Topic 3):
                    </h3>
                    <ul className="list-disc pl-8 space-y-2 text-gray-700">
                        <li>Open a new workbook. In cell A1, enter "10", in B1 enter "5".</li>
                        <li>In C1, write a formula to add A1 and B1. (e.g., `=A1+B1`)</li>
                        <li>In D1, write a formula to multiply A1 and B1.</li>
                        <li>
                            Create a list of numbers (e.g., 10, 20, 30, 40, 50) in cells A1:A5.
                            Then, in separate cells, use the **`SUM`**, **`AVERAGE`**, **`COUNT`**, **`MAX`**, and **`MIN`** functions
                            to analyze this range.
                        </li>
                        <li>
                            Practice toggling between **relative** and **absolute references** using **F4**.
                            Observe how formulas change when copied with different reference types.
                        </li>
                    </ul>
                </div>
                {/* Footer Section */}
                <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
                    <p>&copy; 2025 Study Notes. All rights reserved.</p>
                </footer>
            </section>

            {/* Full-screen Modal for Image */}
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

export default MsExcelWeek1;