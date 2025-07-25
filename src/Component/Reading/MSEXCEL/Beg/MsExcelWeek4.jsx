import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MsExcelWeek4 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageUrl = "/images/excel-Interface.png"; // Placeholder if an image is needed for Week 4

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Define color schemes for topics in Week 4
    const topic1Style = {
        bgColor: 'bg-orange-50', // Very light orange
        titleColor: 'text-orange-800', // Darker orange text
        borderColor: 'border-orange-300' // Orange border
    };

    const topic2Style = {
        bgColor: 'bg-teal-50', // Very light teal
        titleColor: 'text-teal-800', // Darker teal text
        borderColor: 'border-teal-300' // Teal border
    };

    const topic3Style = {
        bgColor: 'bg-rose-50', // Very light rose/pink
        titleColor: 'text-rose-800', // Darker rose text
        borderColor: 'border-rose-300' // Rose border
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
                    Week 4: Data Lookups, Data Visualization and Printing
                </h2>

                {/* Topic 1: Lookup Functions (VLOOKUP and HLOOKUP) */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topic1Style.bgColor} ${topic1Style.borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topic1Style.titleColor}`}>
                        Topic 1: Lookup Functions (VLOOKUP and HLOOKUP)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session introduces you to powerful lookup
                        functions, primarily VLOOKUP, which enable you to efficiently search for and
                        retrieve specific data from large tables based on a unique identifier.
                    </p>

                    {/* Diagram section for Week 4 - using placeholder for now */}
                    <div className="mb-6">
                        <h3 className={`text-2xl font-medium mb-2 mt-4 ${topic1Style.titleColor}`}>Diagram / Example</h3>
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

                        {/* Introduction to VLOOKUP */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Introduction to VLOOKUP for Finding Data in Tables:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">VLOOKUP (Vertical Lookup)</span> searches for a value in the first column of a
                                    table and returns a value from a specified column in the same row.
                                </li>
                                <li>
                                    Useful for data retrieval and merging.
                                </li>
                            </ul>
                        </div>

                        {/* Understanding the Arguments of VLOOKUP */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Understanding the Arguments of VLOOKUP:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Syntax:</span> <code className="bg-gray-200 p-1 rounded">=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code>
                                </li>
                                <ul className="list-circle pl-8 mt-1 space-y-1 text-gray-600">
                                    <li>
                                        <span className="font-semibold">lookup_value:</span> What you're searching for.
                                    </li>
                                    <li>
                                        <span className="font-semibold">table_array:</span> The table range to search in (often absolute reference, e.g., <code className="bg-gray-200 p-1 rounded">$A$2:$D$100</code>).
                                    </li>
                                    <li>
                                        <span className="font-semibold">col_index_num:</span> The column number in table_array to return the value from.
                                    </li>
                                    <li>
                                        <span className="font-semibold">range_lookup:</span> <span className="font-semibold">TRUE</span> (approximate match, requires sorted table) or <span className="font-semibold">FALSE</span> (exact match, most common).
                                    </li>
                                </ul>
                            </ul>
                        </div>

                        {/* Brief Introduction to HLOOKUP */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Brief Introduction to HLOOKUP (for Horizontal Lookups):</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    Works like VLOOKUP but searches in the first row of a table and returns
                                    a value from a specified row. Less common.
                                </li>
                                <li>
                                    <span className="font-semibold">Syntax:</span> <code className="bg-gray-200 p-1 rounded">=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])</code>
                                </li>
                            </ul>
                        </div>

                        {/* Class Work/Exercises for Topic 1 */}
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <h3 className={`text-2xl font-medium mb-4 ${topic1Style.titleColor}`}>
                                Class Work/Exercises (Topic 1):
                            </h3>
                            <ul className="list-disc pl-8 space-y-2 text-gray-700">
                                <li>
                                    <p className="font-semibold">Exercise 1: Basic VLOOKUP (Exact Match)</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>In a new sheet, create a small "Product Catalog" table:</li>
                                        <ul className="list-square pl-8">
                                            <li>A1: Product ID, B1: Product Name, C1: Price</li>
                                            <li>A2: P001, B2: Laptop, C2: 1200</li>
                                            <li>A3: P002, B3: Mouse, C3: 25</li>
                                            <li>A4: P003, B4: Keyboard, C4: 75</li>
                                        </ul>
                                        <li>In cell E1, type "Enter Product ID:".</li>
                                        <li>In cell F1, type "P002".</li>
                                        <li>In cell E2, type "Product Name:".</li>
                                        <li>In cell F2, write a VLOOKUP formula to find the product name for the ID in F1. (Hint: Your formula in F2 should be similar to: <code className="bg-gray-200 p-1 rounded">=VLOOKUP(F1, $A$2:$C$4, 2, FALSE)</code>)</li>
                                        <li>In cell E3, type "Price:".</li>
                                        <li>In cell F3, write a VLOOKUP formula to find the price for the ID in F1. (Hint: Column index for price is 3).</li>
                                        <li>Test by changing the Product ID in F1 to "P001" and "P003".</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-semibold mt-4">Exercise 2: VLOOKUP with Approximate Match (Bonus/Advanced)</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Create a "Discount Table":</li>
                                        <ul className="list-square pl-8">
                                            <li>A6: Sales Amount, B6: Discount %</li>
                                            <li>A7: 0, B7: 0%</li>
                                            <li>A8: 500, B8: 5%</li>
                                            <li>A9: 1000, B9: 10%</li>
                                            <li>A10: 2000, B10: 15%</li>
                                        </ul>
                                        <li>In cell E5, type "Your Sales:". In F5, enter "750".</li>
                                        <li>In cell E6, type "Your Discount:".</li>
                                        <li>In cell F6, use VLOOKUP with <code className="bg-gray-200 p-1 rounded">TRUE</code> for approximate match to find the discount percentage for the sales amount in F5. (Hint: The table range for discount is $A$7:$B$10, and discount is in column 2. The formula should be similar to: <code className="bg-gray-200 p-1 rounded">=VLOOKUP(F5, $A$7:$B$10, 2, TRUE)</code>)</li>
                                        <li>Test with different sales amounts like 400, 1500, 2500.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-semibold mt-4">Exercise 3: Basic HLOOKUP (Optional/Brief)</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Create a horizontal "Quarterly Sales" table:</li>
                                        <ul className="list-square pl-8">
                                            <li>A12: Quarter 1, B12: Quarter 2, C12: Quarter 3, D12: Quarter 4</li>
                                            <li>A13: 15000, B13: 18000, C13: 16500, D13: 20000</li>
                                        </ul>
                                        <li>In cell E12, type "Search Quarter:". In F12, type "Quarter 2".</li>
                                        <li>In cell E13, type "Sales:".</li>
                                        <li>In cell F13, use HLOOKUP to find the sales for the quarter specified in F12. (Hint: The table range is $A$12:$D$13, and sales are in row 2. The formula should be: <code className="bg-gray-200 p-1 rounded">=HLOOKUP(F12, $A$12:$D$13, 2, FALSE)</code>)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> {/* End of Topic 1 styled div */}

                {/* Topic 2: Creating Basic Charts */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topic2Style.bgColor} ${topic2Style.borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topic2Style.titleColor}`}>
                        Topic 2: Creating Basic Charts
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session introduces the fundamentals of
                        data visualization in Excel, teaching you how to choose appropriate chart types
                        and create basic charts to represent your data graphically, making it easier to
                        understand and communicate insights.
                    </p>

                    <div className="mb-6">
                        <h3 className={`text-2xl font-medium mb-4 mt-4 ${topic2Style.titleColor}`}>Key Learning Points:</h3>

                        {/* Choosing the Right Chart Type */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Choosing the Right Chart Type:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Column/Bar Charts:</span> Ideal for **comparing values across different categories** or showing changes over a period.
                                </li>
                                <li>
                                    <span className="font-semibold">Line Charts:</span> Best for **showing trends over time** or continuous data progression.
                                </li>
                                <li>
                                    <span className="font-semibold">Pie Charts:</span> Used to **show parts of a whole (percentages)**. Use sparingly, as they can be difficult to interpret with many categories.
                                </li>
                                <li>
                                    <span className="font-semibold">Recommended Charts:</span> Excel's built-in feature that suggests chart types based on your selected data, helping you quickly pick a suitable visualization.
                                </li>
                            </ul>
                        </div>

                        {/* Creating Charts from Data */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Creating Charts from Data:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Select Data:</span> First, **highlight the data range** you want to chart, including any headers for categories or series.
                                </li>
                                <li>
                                    <span className="font-semibold">Insert Tab &gt; Charts Group:</span> Navigate to the **"Insert" tab** on the Excel Ribbon and then locate the "Charts" group. Here, you can **choose your desired chart type** (e.g., Column, Line, Pie).
                                </li>
                                <li>
                                    The chart will then **appear on your current worksheet**.
                                </li>
                            </ul>
                        </div>

                        {/* Basic Chart Customization (Titles, Labels, Legends) */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Basic Chart Customization (Titles, Labels, Legends):</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <span className="font-semibold">Chart Elements (+ icon):</span> Once a chart is selected, a **"+" icon** will appear next to it. Click this to easily **add or remove Chart Elements** like Chart Title, Axis Titles, Data Labels, and Legend.
                                </li>
                                <li>
                                    <span className="font-semibold">Chart Styles/Colors (Paintbrush icon):</span> The **paintbrush icon** next to the chart allows you to quickly **change chart styles and color schemes**.
                                </li>
                                <li>
                                    <span className="font-semibold">Resize and Move Charts:</span> You can **resize** a chart by dragging its corners and **move** it by dragging its border. For dedicated chart sheets, **right-click the chart** and select "Move Chart..." to place it on a new sheet.
                                </li>
                            </ul>
                        </div>

                        {/* Class Work/Exercises for Topic 2 */}
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <h3 className={`text-2xl font-medium mb-4 ${topic2Style.titleColor}`}>
                                Class Work/Exercises (Topic 2):
                            </h3>
                            <ul className="list-disc pl-8 space-y-2 text-gray-700">
                                <li>
                                    <p className="font-semibold">Exercise 1: Create a Column Chart</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Create a table with "Months" (Jan, Feb, Mar) in column A and "Sales" (150, 200, 180) in column B.</li>
                                        <li>Select both columns (A1:B4).</li>
                                        <li>Go to the **Insert tab**, and in the "Charts" group, select a **2-D Column chart**.</li>
                                        <li>Add a **Chart Title** like "Quarterly Sales Performance".</li>
                                        <li>Add **Axis Titles** for "Month" and "Sales Amount".</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-semibold mt-4">Exercise 2: Create a Line Chart</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Create a table with "Year" (2020, 2021, 2022, 2023) in column D and "Website Visitors" (1000, 1200, 1500, 1300) in column E.</li>
                                        <li>Select the data (D1:E5).</li>
                                        <li>Go to **Insert tab &gt; Charts group**, and select a **2-D Line chart**.</li>
                                        <li>Customize the chart by adding a **Chart Title** "Annual Website Visitors Trend".</li>
                                        <li>Experiment with the **paintbrush icon** to change the chart style or color.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-semibold mt-4">Exercise 3: Create a Pie Chart</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Create a table for "Expense Categories" (Rent, Utilities, Food, Transport) in column G and "Amount" (800, 150, 300, 100) in column H.</li>
                                        <li>Select the data (G1:H5).</li>
                                        <li>Go to **Insert tab &gt; Charts group**, and select a **2-D Pie chart**.</li>
                                        <li>Add **Data Labels** to show percentages on the slices.</li>
                                        <li>Move this pie chart to a **new chart sheet** named "Expenses Breakdown". (Right-click chart &gt; Move Chart...).</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> {/* End of Topic 2 styled div */}

                {/* Topic 3: Preparing Worksheets for Printing */}
                <div className={`mb-8 p-4 rounded-lg border-l-4 ${topic3Style.bgColor} ${topic3Style.borderColor}`}>
                    <h3 className={`text-2xl font-medium mb-2 ${topic3Style.titleColor}`}>
                        Topic 3: Preparing Worksheets for Printing
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Objective: This session focuses on the crucial steps of
                        preparing your Excel worksheets for professional-looking printouts, ensuring
                        that your data is presented clearly and efficiently on paper.
                    </p>

                    <div className="mb-6">
                        <h3 className={`text-2xl font-medium mb-4 mt-4 ${topic3Style.titleColor}`}>Key Learning Points:</h3>

                        {/* Setting Print Areas */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Setting Print Areas:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    The **Print Area** defines a specific range of cells you want to print, ignoring any other data on the sheet.
                                </li>
                                <li>
                                    To set: **Select the desired range of cells**, then go to **Page Layout Tab &gt; Print Area &gt; Set Print Area**.
                                </li>
                                <li>
                                    To remove: Go to **Page Layout Tab &gt; Print Area &gt; Clear Print Area**.
                                </li>
                            </ul>
                        </div>

                        {/* Adjusting Page Breaks */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Adjusting Page Breaks:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    **Page breaks** control exactly where one printed page ends and the next begins.
                                </li>
                                <li>
                                    **Page Break Preview (View Tab):** This is your best friend for page breaks! Go to **View Tab &gt; Workbook Views group &gt; Page Break Preview**. You'll see blue dashed lines representing automatic breaks and solid blue lines for manual breaks. You can **drag these lines** to adjust where pages split.
                                </li>
                                <li>
                                    **Insert/Remove Breaks (Page Layout Tab):** For more precise control, go to **Page Layout Tab &gt; Page Setup group &gt; Breaks**. Here, you can **Insert Page Break** or **Remove Page Break**.
                                </li>
                            </ul>
                        </div>

                        {/* Adding Headers and Footers */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Adding Headers and Footers:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    Headers and Footers allow you to add **consistent information** (like page numbers, document titles, dates, or company logos) to the top and bottom of each printed page.
                                </li>
                                <li>
                                    **Access:** You can access the Header & Footer tools from the **Page Layout Tab &gt; Page Setup &gt; Print Titles &gt; Header/Footer tab**, or more directly from **Insert Tab &gt; Text group &gt; Header & Footer**.
                                </li>
                                <li>
                                    **Customization:** Once in the Header & Footer view, you'll see **Left, Center, and Right sections** for both the header and footer.
                                </li>
                                <li>
                                    **Built-in Codes:** Use special codes to automatically insert dynamic information, such as:
                                    <ul className="list-circle pl-8 mt-1 space-y-1 text-gray-600">
                                        <li><code className="bg-gray-200 p-1 rounded">&amp;[Page]</code> for the current page number.</li>
                                        <li><code className="bg-gray-200 p-1 rounded">&amp;[Pages]</code> for the total number of pages.</li>
                                        <li><code className="bg-gray-200 p-1 rounded">&amp;[Date]</code> for the current date.</li>
                                        <li><code className="bg-gray-200 p-1 rounded">&amp;[Time]</code> for the current time.</li>
                                        <li><code className="bg-gray-200 p-1 rounded">&amp;[File]</code> for the workbook file name.</li>
                                        <li><code className="bg-gray-200 p-1 rounded">&amp;[Tab]</code> for the worksheet tab name.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/* Understanding Print Preview and Scaling Options */}
                        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <p className="font-semibold text-xl mb-2 text-gray-800">Understanding Print Preview and Scaling Options:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    **Print Preview:** Always, always use **File Tab &gt; Print** to **preview your worksheet** before sending it to the printer. This lets you see exactly how it will look on paper and make adjustments.
                                </li>
                                <li>
                                    **Scaling (Page Layout Tab &gt; Scale to Fit group):**
                                    <ul className="list-circle pl-8 mt-1 space-y-1 text-gray-600">
                                        <li>
                                            **"Fit Sheet on One Page":** Shrinks all content to fit onto a single printed page.
                                        </li>
                                        <li>
                                            **"Fit All Columns on One Page":** Shrinks content horizontally so all columns fit on one page width, while rows can span multiple pages vertically.
                                        </li>
                                        <li>
                                            **"Fit All Rows on One Page":** Shrinks content vertically so all rows fit on one page height, while columns can span multiple pages horizontally.
                                        </li>
                                        <li>
                                            You can also **adjust the percentage scale** manually if you need more granular control over shrinking or enlarging.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    **Margins and Orientation (Page Layout Tab):** Adjust **page margins** (narrow, wide, custom) and **page orientation** (Portrait or Landscape) from the "Page Layout" tab to optimize your printout.
                                </li>
                            </ul>
                        </div>

                        {/* Class Work/Exercises for Topic 3 */}
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <h3 className={`text-2xl font-medium mb-4 ${topic3Style.titleColor}`}>
                                Class Work/Exercises (Topic 3):
                            </h3>
                            <ul className="list-disc pl-8 space-y-2 text-gray-700">
                                <li>
                                    <p className="font-semibold">Exercise 1: Setting Print Area and Preview</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Open any Excel sheet with data that spans multiple columns and rows (e.g., your Product Catalog from Topic 1).</li>
                                        <li>Select only a specific section of your data (e.g., just the Product IDs and Names).</li>
                                        <li>Go to **Page Layout Tab &gt; Print Area &gt; Set Print Area**.</li>
                                        <li>Go to **File Tab &gt; Print** and observe how only your selected area appears in the print preview.</li>
                                        <li>Return to the sheet and clear the print area: **Page Layout Tab &gt; Print Area &gt; Clear Print Area**.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-semibold mt-4">Exercise 2: Adjusting Page Breaks</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Open a sheet with a lot of data that naturally extends over several pages.</li>
                                        <li>Go to **View Tab &gt; Page Break Preview**. Notice the automatic page breaks (dashed lines).</li>
                                        <li>Drag one of the dashed page break lines to manually adjust where a page breaks.</li>
                                        <li>Go to **Page Layout Tab &gt; Breaks &gt; Insert Page Break** to add a new manual page break.</li>
                                        <li>Go to **Page Layout Tab &gt; Breaks &gt; Remove Page Break** to remove a manual break.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-semibold mt-4">Exercise 3: Adding Headers and Footers</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Go to **Insert Tab &gt; Header & Footer**. This will switch your view.</li>
                                        <li>In the left section of the Header, type your name.</li>
                                        <li>In the center section of the Header, click the "Page Number" button (or type <code className="bg-gray-200 p-1 rounded">&amp;[Page]</code>).</li>
                                        <li>In the right section of the Header, click the "Current Date" button (or type <code className="bg-gray-200 p-1 rounded">&amp;[Date]</code>).</li>
                                        <li>Scroll down to the Footer. In the center section, type "Confidential" or your company name.</li>
                                        <li>Switch back to Normal view (**View Tab &gt; Normal**).</li>
                                        <li>Go to **File Tab &gt; Print** to see your added headers and footers in the preview.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-semibold mt-4">Exercise 4: Using Scaling Options</p>
                                    <ul className="list-circle pl-5 mt-1 text-gray-600">
                                        <li>Open a complex sheet that might not fit on one page.</li>
                                        <li>Go to **File Tab &gt; Print** and see how many pages it currently uses.</li>
                                        <li>Go to **Page Layout Tab &gt; Scale to Fit group**.</li>
                                        <li>Try selecting **"Fit Sheet on One Page"**. Go back to Print Preview. Observe the change.</li>
                                        <li>Then try **"Fit All Columns on One Page"** and preview again.</li>
                                        <li>Finally, try adjusting the **Scale percentage** manually (e.g., to 75% or 120%) and see how it affects the printout in the preview.</li>
                                        <li>Experiment with **Orientation** (Portrait/Landscape) and **Margins**.</li>
                                    </ul>
                                </li>
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

export default MsExcelWeek4;