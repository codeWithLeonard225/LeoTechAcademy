import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdWrdWk3 = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigates back one step in the history
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50">
            <button
                onClick={handleBackClick}
                className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
                &larr; Back
            </button>
            {/* Introduction to Week 3 */}
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-emerald-400 pb-3">
                    Week 3: Mastering Advanced Document Layouts
                </h1>
                <p className="text-xl text-gray-700 text-left leading-relaxed max-w-3xl mx-auto">
                    Last week, we mastered Styles and automation tools to ensure consistent formatting. This week, we'll take those skills further to handle longer, more complex documents like reports, proposals, and manuals. You'll learn how to create documents with different layouts, control page numbering precisely, and build automatic navigation tools, saving you countless hours and making your work look highly professional.
                </p>
            </header>

            {/* Topic 1: Section Breaks */}
            <section className="mb-12 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-400 pb-3">
                    Topic 1: Section Breaks: The Key to Advanced Page Layouts
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    What we'll cover: <span className="font-semibold">Section breaks</span> are invisible markers that divide your document into separate sections. They are absolutely critical for applying different formatting (like page orientation, headers/footers, or page numbers) to different parts of the same document. Without them, your entire document has uniform settings.
                </p>

                {/* Section 1.1: Understanding Section Break Types */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        1. Understanding Section Break Types
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                        <li>
                            <span className="font-semibold">Next Page:</span> Starts the new section on the next page. Most common type.
                        </li>
                        <li>
                            <span className="font-semibold">Continuous:</span> Starts the new section on the same page. Useful for changing column layouts in the middle of a page (e.g., a two-column section within a single-column page).
                        </li>
                        <li>
                            <span className="font-semibold">Even Page:</span> Starts the new section on the next even-numbered page.
                        </li>
                        <li>
                            <span className="font-semibold">Odd Page:</span> Starts the new section on the next odd-numbered page. (Often used for new chapters in books to always start on a right-hand page).
                        </li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/section-break-types.PNG" // Placeholder for an image showing the different section break options in the Breaks menu
                            alt="Screenshot showing the various types of section breaks in Word."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Visualizing the different section break types available in Word.
                    </p>
                </div>

                {/* Section 1.2: Why Section Breaks are Crucial */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        2. Why Section Breaks are Crucial for Office Documents
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-3 mb-4">
                        <li>
                            <span className="font-semibold">Different Page Orientation:</span> Have a wide table on one page that needs to be landscape, while the rest of the document is portrait.
                        </li>
                        <li>
                            <span className="font-semibold">Different Headers & Footers:</span> Your Executive Summary might have a different header than the main report, or an Appendix might have its own header.
                        </li>
                        <li>
                            <span className="font-semibold">Restarting Page Numbering:</span> An appendix might need to start its own page numbering from '1'.
                        </li>
                        <li>
                            <span className="font-semibold">Changing Columns:</span> Apply a multi-column layout to just one part of a page or document.
                        </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Practical Use:</span> Creating professional reports that have a unique title page, an executive summary, a main body, and appendices, each with its own layout, numbering, or header information, all within one Word file!
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/report-sections-example.PNG" // Placeholder for an image illustrating different sections in a report (e.g., title page, contents, main body, appendix, showing varied headers/footers/orientations)
                            alt="Example of a professional report with multiple sections and varied layouts."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Section breaks enable complex, professional document structures.
                    </p>
                </div>

                {/* Section 1.3: Inserting Section Breaks */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        3. Inserting Section Breaks
                    </h3>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">How:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Place your cursor precisely where you want the new section to begin.</li>
                        <li>Go to the <span className="font-semibold">Layout Tab</span> (or Page Layout in older Word versions) &gt; <span className="font-semibold">Page Setup</span> group.</li>
                        <li>Click on <span className="font-semibold">Breaks</span>.</li>
                        <li>Under <span className="font-semibold">Section Breaks</span>, choose the desired type (<span className="font-semibold">Next Page</span> is usually the starting point).</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/insert-section-break.PNG" // Placeholder for a screenshot showing the Layout tab -> Breaks menu -> Section Breaks options
                            alt="Screenshot demonstrating how to insert a section break via the Layout tab."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Inserting a 'Next Page' section break from the Layout tab.
                    </p>

                    <h4 className="text-2xl font-medium text-gray-700 mt-8 mb-3">Viewing Section Breaks (Essential for Troubleshooting!):</h4>
                    <h4 className="text-xl font-normal text-gray-700 mb-2">How:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Go to the <span className="font-semibold">Home Tab</span> &gt; <span className="font-semibold">Paragraph</span> group &gt; Click the <span className="font-semibold">Show/Hide ¶</span> button (looks like a backwards P).</li>
                    </ul>
                    <h4 className="text-xl font-normal text-gray-700 mb-2">Why it's useful:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Section breaks are invisible by default. Turning on Show/Hide ¶ allows you to see exactly where they are inserted and helps you troubleshoot layout issues.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Shortcut:</span> Ctrl + Shift + 8 (toggles Show/Hide ¶)
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/show-hide-button.PNG" // Placeholder for a screenshot highlighting the Show/Hide ¶ button on the Home tab
                            alt="Screenshot showing the Show/Hide Paragraph marks button on the Home tab."
                            className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Locating the Show/Hide ¶ button to reveal hidden formatting marks.
                    </p>
                    {/* <div className="flex justify-center mt-6">
                        <img
                            src="/images/visible-section-break.PNG" // Placeholder for a screenshot showing a document with Show/Hide ¶ enabled, clearly showing a "Section Break (Next Page)" marker
                            alt="Screenshot of a document with visible section break markers."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div> */}
                    {/* <p className="text-sm text-gray-600 mt-2 text-center italic">
                        A visible 'Section Break (Next Page)' marker after enabling Show/Hide ¶.
                    </p> */}
                </div>

                {/* Section 1.4: Removing Section Breaks */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        4. Removing Section Breaks
                    </h3>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">How:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Turn on <span className="font-semibold">Show/Hide ¶</span> to see the break.</li>
                        <li>Place your cursor before the section break marker and press <span className="font-semibold">Delete</span>.</li>
                    </ul>
                    <p className="text-lg text-red-700 leading-relaxed font-semibold">
                        Caution: Deleting a section break will merge the formatting of the two sections.
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/delete-section-break.PNG" // Placeholder for a screenshot showing a cursor before a visible section break, indicating deletion
                            alt="Screenshot demonstrating how to delete a visible section break."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Deleting a section break by placing the cursor before it and pressing Delete.
                    </p>
                </div>
            </section>

            {/* Topic 2: Automated Tables of Contents & Document Navigation */}
            <section className="mb-12 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-400 pb-3">
                    Topic 2: Automated Tables of Contents & Document Navigation
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    What we'll cover: Learn how to create dynamic <span className="font-semibold">Table of Contents (TOC)</span> that update automatically, and how to use <span className="font-semibold">bookmarks</span> and <span className="font-semibold">cross-references</span> for smart internal navigation.
                </p>

                {/* Section 2.1: Generating an Automatic Table of Contents (TOC) */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        1. Generating an Automatic Table of Contents (TOC)
                    </h3>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">Foundation (Recap from Week 2!):</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        An automated TOC relies entirely on your document being structured with <span className="font-semibold">Heading Styles</span> (Heading 1, Heading 2, Heading 3, etc.). If your headings aren't styled, Word can't build a TOC automatically.
                    </p>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">How to Insert:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                        <li>Place your cursor where you want the TOC to appear (usually after the title page/executive summary, and often on its own page using a Next Page section break).</li>
                        <li>Go to the <span className="font-semibold">References Tab</span> &gt; <span className="font-semibold">Table of Contents</span> group.</li>
                        <li>Click <span className="font-semibold">Table of Contents</span> and choose one of the Automatic Table styles.</li>
                    </ol>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Practical Use:</span> Creates a professional, clickable navigation tool for long reports, proposals, or manuals. Readers can click on an entry to jump directly to that section.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Shortcut:</span> Alt + Shift + O (Opens the Table of Contents dialog, but easier to use Ribbon for first time).
                    </p>
                </div>

                {/* Section 2.2: Updating a Table of Contents */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        2. Updating a Table of Contents
                    </h3>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">Purpose:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        If you add, remove, or change headings, or if page numbers shift, your TOC needs to be refreshed.
                    </p>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">How:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                        <li>Click anywhere inside the Table of Contents.</li>
                        <li>Click the <span className="font-semibold">Update Table</span> button that appears above it, or right-click the TOC and choose <span className="font-semibold">Update Field</span>.</li>
                        <li>You'll get two options:
                            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                                <li><span className="font-semibold">Update page numbers only:</span> Use this for minor text edits where headings haven't changed, but content has shifted. (Faster)</li>
                                <li><span className="font-semibold">Update entire table:</span> Use this if you've added, deleted, or changed heading text. (Slower but more thorough).</li>
                            </ul>
                        </li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Shortcut (Update Field):</span> Select the TOC, then press F9.
                    </p>
                </div>

                {/* Section 2.3: Bookmarks */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        3. Bookmarks
                    </h3>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">Purpose:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        To mark specific locations in your document that you can quickly jump to, or refer to using cross-references.
                    </p>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">Inserting a Bookmark:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                        <li>Select the text or place your cursor where you want to create a bookmark.</li>
                        <li>Go to <span className="font-semibold">Insert Tab</span> &gt; <span className="font-semibold">Links</span> group &gt; <span className="font-semibold">Bookmark</span>.</li>
                        <li>Type a unique, descriptive name (no spaces allowed) and click <span className="font-semibold">Add</span>.</li>
                    </ol>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">Navigating with Bookmarks:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                        <li><span className="font-semibold">Insert Tab</span> &gt; <span className="font-semibold">Links</span> group &gt; <span className="font-semibold">Bookmark</span>.</li>
                        <li>Select the bookmark name and click <span className="font-semibold">Go To</span>.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Shortcut (Go To):</span> Ctrl + G. In the Go To tab, choose Bookmark and select from the list.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Practical Use:</span> Quick navigation within very long documents, especially useful for reviewers or when presenting.
                    </p>
                </div>

                {/* Section 2.4: Cross-references */}
                <div className="mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                        4. Cross-references
                    </h3>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">Purpose:</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        To create dynamic links to headings, figures, tables, equations, or bookmarks within the same document. If the referenced item moves or its number/page changes, the cross-reference updates automatically.
                    </p>
                    <h4 className="text-2xl font-medium text-gray-700 mb-3">Inserting a Cross-reference:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                        <li>Type introductory text (e.g., "See Figure ").</li>
                        <li>Go to <span className="font-semibold">References Tab</span> &gt; <span className="font-semibold">Captions</span> group &gt; <span className="font-semibold">Cross-reference</span>.</li>
                        <li>In the dialog box:
                            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                                <li><span className="font-semibold">Reference type:</span> Choose what you want to link to (e.g., Heading, Figure, Table, Bookmark).</li>
                                <li><span className="font-semibold">Insert reference to:</span> Choose what information you want to display (e.g., Heading text, Page number, Figure number).</li>
                                <li>Select the specific item you want to refer to from the list.</li>
                            </ul>
                        </li>
                        <li>Click <span className="font-semibold">Insert</span>, then Close.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Updating Cross-references:</span> Like TOCs, they are fields. Select the cross-reference and press F9.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Practical Use:</span> Essential for formal reports, manuals, or proposals to ensure accuracy when referring to other parts of the document (e.g., "As shown in Figure 3 on page 10...", where both "Figure 3" and "page 10" update if the figure's position or number changes).
                    </p>
                </div>
            </section>

         
        </div>
    );
};

export default AdWrdWk3;