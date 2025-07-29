import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Simple Toggle Component for Before/After Effect (Consider moving to its own file like BeforeAfterToggle.jsx)
const BeforeAfterToggle = ({ beforeSrc, afterSrc, description }) => {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <div className="flex flex-col items-center my-6 p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-3 italic text-center">{description}</p>
            <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg h-48 md:h-64 lg:h-80 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg shadow-md border border-gray-200">
                <img
                    src={showAfter ? afterSrc : beforeSrc}
                    alt={showAfter ? "After effect" : "Before effect"}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
                />
            </div>
            <div className="mt-4">
                <button
                    onClick={() => setShowAfter(!showAfter)}
                    className="px-4 py-2 bg-blue-500 text-white text-base rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus->ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                    Show {showAfter ? 'Original' : 'Modified'}
                </button>
            </div>
        </div>
    );
};


const AdWrdWk2 = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigates back one step in the history
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <button
                onClick={handleBackClick}
                className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
                &larr; Back
            </button>

            {/* --- Introduction to Week 2 --- */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-emerald-400 pb-3">
                Introduction to Week 2: Mastering Styles, Themes, Quick Parts & Templates
            </h1>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                This week is a game-changer for moving beyond manual typing and formatting. We'll learn how to use Word's powerful Styles, Themes, Quick Parts, and Templates. These tools allow you to apply consistent formatting with a click, reuse content, and create professional-looking documents quickly, saving you immense time in your daily office tasks.
            </p>

            {/* --- Topic 1: Mastering Styles for Consistent Formatting --- */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-300 pb-3">
                Topic 1: Mastering Styles for Consistent Formatting
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What we'll cover: Styles are the secret to consistent, professional-looking documents that are easy to update. They'll transform how you format.
            </p>

            {/* Section 1: Understanding Styles */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    1. Understanding Styles
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">What are Styles?</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Think of them as pre-packaged sets of formatting (like font type, size, color, bold/italic, alignment, line spacing, paragraph spacing) that you can apply with a single click.
                        In Word, you can find the **Styles Gallery** on the **Home tab**. The **Styles Pane** (accessible via a small arrow in the bottom right of the Styles group) provides a more detailed view and control over all available styles.
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/styles-gallery-pane.PNG" // Placeholder image
                            alt="Screenshot of Word's Styles Gallery and Styles Pane"
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        The Styles Gallery on the Home tab (top) and the Styles Pane (right) in Word.
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Why use them?</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Time-Saving:</span> Apply complex formatting in an instant.</li>
                        <li><span className="font-semibold">Consistency:</span> Ensures all headings, body text, or quotes in your document (and across documents) look exactly the same.</li>
                        <li><span className="font-semibold">Easy Updates:</span> Change a style once, and all text formatted with that style updates automatically throughout your document.</li>
                        <li><span className="font-semibold">Foundation for Advanced Features:</span> Styles are essential for automatically generating a Table of Contents, for document navigation, and for many automation tools.</li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Style Types:</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                        Word has different styles for Paragraphs, Characters, Lists, and Tables.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>We'll focus mostly on <span className="font-semibold">Paragraph Styles</span> as they are the most commonly used for structuring documents.</li>
                        <li><span className="font-semibold">Built-in Styles:</span> Word comes with many pre-defined styles like Normal, Heading 1, Heading 2, Title, Subtitle, Quote.</li>
                    </ul>
                </div>
            </section>

            {/* Section 2: Applying & Modifying Styles */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    2. Applying & Modifying Styles
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Applying Styles:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">How:</span> Select the text or place your cursor in the paragraph you want to format. Go to the **Home Tab** &gt; **Styles** group. Click on the desired style in the gallery or open the **Styles Pane** (small arrow in bottom right of Styles group).</li>
                        <li><span className="font-semibold">Shortcut (Apply a Style):</span> <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">Shift</kbd> + <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">S</kbd> (opens the Apply Styles dialog box, where you can type the style name quickly).</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/apply-style-example.png" // Placeholder image
                            alt="Screenshot showing text selected and a style being applied from the Styles Gallery."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Applying a style from the Styles Gallery.
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Modifying Existing Styles:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> To customize Word's built-in styles or your own existing styles to match your company's branding or your preferences.</li>
                        <li><span className="font-semibold">How:</span>
                            <ul className="list-circle list-inside text-gray-600 space-y-1 pl-6 mt-1">
                                <li>Format some text the way you want the style to look (e.g., change Heading 1 to green, bold, Arial 16pt).</li>
                                <li>Right-click on the style name in the Styles Gallery or Styles Pane.</li>
                                <li>Choose <span className="font-semibold">Update [Style Name] to Match Selection.</span> (This is the quickest way!)</li>
                                <li>Alternatively, choose <span className="font-semibold">Modify...</span> to open a dialog box with more detailed options.</li>
                            </ul>
                        </li>
                        <li><span className="font-semibold">Important Concept: Global Changes:</span> When you modify a style, all text in your document that uses that style will instantly update. Imagine updating all 50 headings in a long report with two clicks!</li>
                    </ul>
                    <BeforeAfterToggle
                        beforeSrc="/images/heading1-default.PNG" // Placeholder: Image of default Heading 1
                        afterSrc="/images/heading1-modified.PNG" // Placeholder: Image of Heading 1 after modification
                        description="Toggle to see how modifying a style updates all instances globally."
                    />
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Clearing Formatting:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> To remove all direct formatting (bold, color, etc.) and return text to its underlying style (usually Normal).</li>
                        <li><span className="font-semibold">How:</span> Select text &gt; Home Tab &gt; Font group &gt; <span className="font-semibold">Clear All Formatting</span> button (the A with an eraser).</li>
                        <li><span className="font-semibold">Shortcut:</span> <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">Spacebar</kbd> (clears character-level formatting) or <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">Q</kbd> (clears paragraph-level formatting).</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/clear-formatting-button.PNG" // Placeholder image
                            alt="Screenshot of the Clear All Formatting button in Word."
                            className="rounded-md shadow-md w-full max-w-xs md:max-w-sm h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        The 'Clear All Formatting' button.
                    </p>
                </div>
            </section>

            {/* Section 3: Creating New Styles */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    3. Creating New Styles
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Purpose:</h3>
                    <p className="text-gray-700 leading-relaxed">
                        To define your own custom styles for specific types of text not covered by built-in styles (e.g., "Company Disclaimer," "Project Code," "Quote Block").
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">How (Based on Selection - <span className="font-semibold">Quickest Way</span>):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Format a paragraph or text exactly how you want your new style to look.</li>
                        <li>Go to the **Home Tab** &gt; **Styles** group &gt; Click the small <span className="font-semibold">More</span> arrow in the bottom right of the Styles Gallery.</li>
                        <li>Choose <span className="font-semibold">Create a Style</span>. Give it a meaningful name.</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/create-style-from-selection.PNG" // Placeholder image
                            alt="Screenshot showing the 'Create a Style' option in the Styles dropdown."
                            className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Creating a new style based on selected text.
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">How (From Scratch - <span className="font-semibold">More Control</span>):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Open the **Styles Pane** (Home Tab &gt; click the small arrow in bottom right of Styles group).</li>
                        <li>Click the <span className="font-semibold">New Style</span> button (bottom left of Styles Pane).</li>
                        <li>Define all settings (name, font, size, color, paragraph spacing, border, etc.).</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/new-style-dialog.PNG" // Placeholder image
                            alt="Screenshot of the 'Create New Style from Formatting' dialog box."
                            className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        The 'Create New Style from Formatting' dialog for detailed control.
                    </p>
                </div>
            </section>

            ---

           {/* --- Topic 2: Document Themes & Quick Parts for Efficiency --- */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-purple-400 pb-3">
                Topic 2: Document Themes & Quick Parts for Efficiency
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What we'll cover: Beyond individual styles, we'll look at how to apply a complete document "look" with Themes, and how to store and reuse frequently used text and graphics with Quick Parts.
            </p>

            {/* Section 1: Document Themes */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    1. Document Themes
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">What are Themes?</h3>
                    <p className="text-gray-700 leading-relaxed">
                        A comprehensive design package that includes a set of coordinated colors, fonts, and effects. When you apply a theme, it instantly changes the overall visual appearance of your entire document. All your styles (Heading 1, Normal, etc.) will automatically adapt to the theme's colors and fonts.
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/document-themes-gallery.png" // Placeholder for Themes gallery
                            alt="Screenshot of the Document Themes gallery in Word."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        The Themes gallery on the Design tab allows you to quickly change your document's overall look.
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Applying & Customizing Themes:</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Themes in Microsoft Word allow you to quickly change the entire visual aesthetic of your document by controlling its default fonts, colors, and effects. This ensures a consistent and professional look across all your materials.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-700 mb-3">Step 1: Prepare Your Document with Styles (<span className="font-semibold">ESSENTIAL FIRST STEP!</span>)</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        For themes to work their magic effectively, your document's content needs to be structured using Word's built-in styles. Themes don't change text that's just manually bolded or given a specific font size; they change the appearance of styles.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Open Your Word Document:</span> Start with your Word document (the text you pasted earlier is perfect).</li>
                        <li><span className="font-semibold">Apply Built-in Styles to Your Text:</span>
                            <ul className="list-circle list-inside text-gray-600 space-y-1 pl-6 mt-1">
                                <li>For your <span className="font-semibold">Main Title</span> (e.g., "The Future of Technology in Sierra Leone"): Select the text. Go to the <span className="font-semibold">Home tab</span> &gt; "<span className="font-semibold">Styles</span>" group &gt; Click "<span className="font-semibold">Title</span>".</li>
                                <li>For your <span className="font-semibold">Main Headings</span> (e.g., "Embracing Digital Transformation", "Key Areas of Technological Advancement", etc.): Select each heading. Go to the <span className="font-semibold">Home tab</span> &gt; "<span className="font-semibold">Styles</span>" group &gt; Click "<span className="font-semibold">Heading 1</span>".</li>
                                <li>For <span className="font-semibold">Sub-headings</span> (if you had them, e.g., sections within "Key Areas"): Select each sub-heading. Go to the <span className="font-semibold">Home tab</span> &gt; "<span className="font-semibold">Styles</span>" group &gt; Click "<span className="font-semibold">Heading 2</span>".</li>
                                <li>For your <span className="font-semibold">main body paragraphs</span>: Select a paragraph. Go to the <span className="font-semibold">Home tab</span> &gt; "<span className="font-semibold">Styles</span>" group &gt; Click "<span className="font-semibold">Normal</span>". (Most body text is already "<span className="font-semibold">Normal</span>" by default, but it's good to confirm).</li>
                                <li>For <span className="font-semibold">lists</span> (like your bullet points): Select the list. Go to the <span className="font-semibold">Home tab</span> &gt; "<span className="font-semibold">Styles</span>" group &gt; Click "<span className="font-semibold">List Paragraph</span>" (if visible, or just ensure they're using "<span className="font-semibold">Normal</span>" with bullet points).</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed italic mb-4">
                        <span className="font-semibold">Why this is essential:</span> By applying these styles, you "tag" your text. When you change a theme, Word knows exactly which part of your document is a "Title," which is a "Heading 1," and which is "Normal" text, and it updates their appearance according to the new theme's definitions for those specific styles.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Consider Objects (Shapes, Charts - Optional but Recommended):</span> If you have inserted shapes, charts, or SmartArt, when you apply colors to them, try to choose colors from the "<span className="font-semibold">Theme Colors</span>" section in the color picker. This ensures their colors will also update automatically when you switch themes.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-700 mb-3">Step 2: Applying a Pre-Set Theme</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        Once your document is styled correctly, applying themes is simple.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Go to the Design Tab:</span> On the Word ribbon, click the <span className="font-semibold">Design tab</span>. This tab is specifically for overall document formatting and branding.</li>
                        <li><span className="font-semibold">Choose a Theme from the Gallery:</span>
                            <ul className="list-circle list-inside text-gray-600 space-y-1 pl-6 mt-1">
                                <li>In the "<span className="font-semibold">Document Formatting</span>" group on the <span className="font-semibold">Design tab</span> (usually on the left side), click on the <span className="font-semibold">Themes button</span>.</li>
                                <li>A dropdown gallery of pre-designed themes will appear.</li>
                                <li>Hover your mouse over different themes. You'll see a live preview in your document of how the fonts, colors, and overall appearance will change.</li>
                                <li>Click on the theme you want to apply.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed italic mb-4">
                        <span className="font-semibold">Result:</span> Your document's fonts and colors (for elements using styles or theme colors) will instantly update to match the chosen theme.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-700 mb-3">Step 3: Customizing Your Current Theme (Colors & Fonts)</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        After applying a theme, you can fine-tune its individual components (colors and fonts) to better match specific needs or brand guidelines without switching to a completely different theme.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Ensure You're on the Design Tab:</span> If you've navigated away, click back on the <span className="font-semibold">Design tab</span>.</li>
                        <li><span className="font-semibold">Change the Theme's Color Palette:</span>
                            <ul className="list-circle list-inside text-gray-600 space-y-1 pl-6 mt-1">
                                <li>In the "<span className="font-semibold">Document Formatting</span>" group, click the <span className="font-semibold">Colors button</span>.</li>
                                <li>A dropdown will appear, showing various color palettes that work with your current theme.</li>
                                <li>Hover over different color sets. Notice how the colors of your headings, body text, and any shapes/charts using theme colors will change.</li>
                                <li>Click on the color set you prefer.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed italic mb-4">
                        <span className="font-semibold">Result:</span> The color scheme of your document will update.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Change the Theme's Font Set:</span>
                            <ul className="list-circle list-inside text-gray-600 space-y-1 pl-6 mt-1">
                                <li>In the "<span className="font-semibold">Document Formatting</span>" group, click the <span className="font-semibold">Fonts button</span>.</li>
                                <li>A dropdown will show pairs of fonts (one for headings, one for body text).</li>
                                <li>Hover over different font sets. You'll see your headings and body text change fonts (while maintaining their original numerical sizes, as defined by their respective styles).</li>
                                <li>Click on the font set you prefer.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed italic mb-4">
                        <span className="font-semibold">Result:</span> Your document's typography will update according to the new font set.
                    </p>

                    <BeforeAfterToggle
                        beforeSrc="/images/theme-default.PNG" // Placeholder for default theme example
                        afterSrc="/images/theme-modified.PNG" // Placeholder for modified theme example
                        description="Toggle to see how applying a new theme transforms the document's appearance."
                    />
                </div>
            </section>

            {/* Section 2: Quick Parts (Building Blocks) */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    2. Quick Parts (Building Blocks)
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">What are Quick Parts?</h3>
                    <p className="text-gray-700 leading-relaxed">
                        They are reusable chunks of content (text, graphics, tables, formatted paragraphs, even fields) that you can save and insert into any Word document with ease. They are stored in "galleries."
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/quick-parts-gallery.png" // Placeholder for Quick Parts gallery
                            alt="Screenshot of the Quick Parts gallery in Word."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        The Quick Parts gallery, accessible from the Insert tab.
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Creating & Saving Quick Parts:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li>Select the text, image, table, or combination you want to save as a Quick Part.</li>
                        <li>Go to <span className="font-semibold">Insert Tab</span> &gt; Text group &gt; <span className="font-semibold">Quick Parts</span> &gt; <span className="font-semibold">Save Selection to Quick Part Gallery.</span></li>
                        <li>Give it a descriptive name (e.g., "Company Address Block," "Standard Disclaimer," "Signature with Logo").</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/save-selection-quick-part.PNG" // Placeholder for Save Selection dialog
                            alt="Screenshot of the 'Save Selection to Quick Part Gallery' dialog box."
                            className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Saving a selected piece of content as a reusable Quick Part.
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Inserting Quick Parts:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">How:</span> Place your cursor where you want to insert it. Go to <span className="font-semibold">Insert Tab</span> &gt; Text group &gt; <span className="font-semibold">Quick Parts</span> &gt; select your saved Quick Part from the gallery.</li>
                        <li><span className="font-semibold">Shortcut (If you know the name):</span> Type the full name of your Quick Part (e.g., "Company Address Block") and press <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">F3</kbd>.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Practical Use:</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-6 mt-2">
                        <li>Inserting standard company addresses, legal disclaimers, frequently used paragraphs in reports, complex signature blocks, or pre-formatted tables.</li>
                        <li>Massive time-saver for repetitive tasks – no more copying and pasting from old documents!</li>
                    </ul>
                </div>
            </section>

            {/* Section 3: AutoCorrect Options (Advanced Use for Text Efficiency) */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    3. AutoCorrect Options (Advanced Use for Text Efficiency)
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Beyond Basic Corrections:</h3>
                    <p className="text-gray-700 leading-relaxed">
                        AutoCorrect isn't just for fixing typos! You can use it to create your own text expansions.
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">How:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li>Type a short abbreviation (e.g., <kbd className="font-mono bg-gray-200 px-2 py-1 rounded">sllh</kbd> for "Sierra Leone Leones").</li>
                        <li>Type the full phrase or even insert a symbol (like a phone icon).</li>
                        <li>Go to <span className="font-semibold">File</span> &gt; <span className="font-semibold">Options</span> &gt; <span className="font-semibold">Proofing</span> &gt; <span className="font-semibold">AutoCorrect Options...</span></li>
                        <li>In the <span className="font-semibold">Replace</span> box, type your abbreviation (<kbd className="font-mono bg-gray-200 px-2 py-1 rounded">sllh</kbd>).</li>
                        <li>In the <span className="font-semibold">With</span> box, type or paste the full phrase/symbol ("Sierra Leone Leones").</li>
                        <li>Click <span className="font-semibold">Add</span>, then <span className="font-semibold">OK</span>.</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/autocorrect-options.png" // Placeholder for AutoCorrect Options dialog
                            alt="Screenshot of the AutoCorrect Options dialog box."
                            className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        The AutoCorrect Options dialog for creating custom text expansions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Practical Use:</span> Quickly expand common company names, long product codes, department names, or insert frequently used symbols (like ©, ™, 📞) by typing just a few characters.
                    </p>
                </div>
            </section>

            ---

            {/* --- Topic 3: Harnessing Templates for Streamlined Document Creation --- */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-purple-400 pb-3">
                Topic 3: Harnessing Templates for Streamlined Document Creation
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What we'll cover: Templates are the ultimate tool for ensuring consistent document look and feel across an entire organization.
            </p>

            {/* Section 1: Understanding Templates */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    1. Understanding Templates (<span className="font-semibold">.dotx</span> files)
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">What are Templates?</h3>
                    <p className="text-gray-700 leading-relaxed">
                        They are master blueprints for documents. A template is a pre-designed file that serves as a starting point for new documents. It can include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li>Pre-set styles (from <span className="font-semibold">Topic 1</span>).</li>
                        <li>A document theme (from <span className="font-semibold">Topic 2</span>).</li>
                        <li>Pre-defined page layout settings (margins, orientation).</li>
                        <li>Placeholder text.</li>
                        <li>Quick Parts (from <span className="font-semibold">Topic 2</span>).</li>
                        <li>Boilerplate content (text that rarely changes).</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/template-concept.png" // Placeholder for a conceptual image of a template or a template gallery
                            alt="Illustration of a document template as a blueprint."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Templates act as a blueprint for consistent document creation.
                    </p>

                    <h3 className="text-2xl font-medium text-gray-700 mb-3 mt-6">Why use them?</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Ensures Consistency:</span> Every document created from the template will have the same foundational look.</li>
                        <li><span className="font-semibold">Automates Setup:</span> No need to re-format margins, fonts, or insert standard text blocks every time.</li>
                        <li><span className="font-semibold">Prevents Accidental Changes:</span> Users create a new document based on the template, so the original template remains untouched and ready for future use.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-semibold">Template vs. Document:</span> When you open a <span className="font-semibold">.docx</span> file, you are opening the document itself. When you open a <span className="font-semibold">.dotx</span> file (a template) or create a "<span className="font-semibold">New</span>" document from a template, Word actually creates a new, unsaved document based on that template, leaving the original template intact.
                    </p>
                </div>
            </section>

            {/* Section 2: Using Built-in & Online Templates */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    2. Using Built-in & Online Templates
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">How:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">File</span> &gt; <span className="font-semibold">New</span>. You'll see many built-in templates (e.g., resumes, calendars, reports, letters) and can search for more online.</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/file-new-templates.jpg" // Placeholder for File > New showing built-in templates
                            alt="Screenshot of Word's File > New screen with template options."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Accessing built-in and online templates via **File  New**.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        <span className="font-semibold">Practical Use:</span> Don't start from scratch for common document types if Word already has a good template!
                    </p>
                </div>
            </section>

            {/* Section 3: Creating Custom Templates */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    3. Creating Custom Templates
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Purpose:</h3>
                    <p className="text-gray-700 leading-relaxed">
                        To build your own company-specific templates for frequently used documents (e.g., company letterhead, meeting minutes, project proposal forms, invoice templates).
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">How (From an Existing Document - <span className="font-semibold">Easiest Way</span>):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Create and format a document exactly how you want your template to look (include your custom styles, themes, Quick Parts, company logo, placeholder text).</li>
                        <li>Go to <span className="font-semibold">File</span> &gt; <span className="font-semibold">Save As</span> &gt; <span className="font-semibold">Browse</span> to your preferred location (often <span className="font-semibold">Documents\Custom Office Templates</span>).</li>
                        <li>In the "<span className="font-semibold">Save as type</span>" dropdown, choose <span className="font-semibold">Word Template (*.dotx)</span>.</li>
                        <li>Give it a clear name (e.g., <span className="font-semibold">Company_Letterhead.dotx</span>, <span className="font-semibold">Meeting_Minutes_Template.dotx</span>).</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <img
                            src="/images/save-as-dotx.png" // Placeholder for Save As dialog showing .dotx selection
                            alt="Screenshot of Word's Save As dialog box with Word Template (.dotx) selected."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        Saving a document as a Word Template (<span className="font-semibold">.dotx</span> file).
                    </p>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">How (Starting from Scratch - <span className="font-semibold">More Control</span>):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">File</span> &gt; <span className="font-semibold">New</span> &gt; <span className="font-semibold">Blank Document</span>.</li>
                        <li>Set up all your styles, theme, page layout, insert Quick Parts, and any boilerplate text.</li>
                        <li>Then <span className="font-semibold">File</span> &gt; <span className="font-semibold">Save As</span> &gt; <span className="font-semibold">Word Template (*.dotx)</span>.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Practical Use:</span> This is highly valuable for offices, ensuring all staff can easily create consistent, branded documents without manual effort.
                    </p>
                </div>
            </section>

            {/* Section 4: Protecting Template Content */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    4. Protecting Template Content (<span className="font-semibold">Basic Intro</span>)
                </h2>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Purpose:</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        To prevent users from accidentally changing parts of the template that should remain fixed (e.g., company logo, specific disclaimers).
                    </p>

                    <h3 className="text-2xl font-medium text-gray-700 mb-3">How (Brief Mention):</h3>
                    <p className="text-gray-700 leading-relaxed">
                        This often involves using "<span className="font-semibold">Developer</span>" tools to create fillable fields and restrict editing to certain sections, which we might explore in a later week. For now, understand that templates can be protected.
                    </p>
                    {/* <div className="flex justify-center mt-6">
                        <img
                            src="/images/developer-tab-restrict-editing.PNG" // Placeholder for Developer tab showing Restrict Editing
                            alt="Screenshot of Word's Developer tab with the Restrict Editing option highlighted."
                            className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                        />
                    </div> */}
                    <p className="text-sm text-gray-600 mt-2 text-center italic">
                        The **Developer** tab, where options like **Restrict Editing** can be found for template protection.
                    </p>
                </div>
            </section>

            <h3 className="text-2xl font-medium text-gray-700 mb-3">How:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><span className="font-semibold">File</span> &gt; <span className="font-semibold">Options</span> &gt; <span className="font-semibold">Proofing</span> &gt; <span className="font-semibold">AutoCorrect Options...</span></li>
                <li>In the dialog box:
                    <ul className="list-circle list-inside text-gray-600 space-y-1 pl-6 mt-1">
                        <li>In the "<span className="font-semibold">Replace</span>" field, type a short, unique abbreviation (e.g., "slgov", "mylogo").</li>
                        <li>In the "<span className="font-semibold">With</span>" field, type the full text or insert the formatted text/graphic you want it to expand to.</li>
                    </ul>
                </li>
                <li>Click <span className="font-semibold">Add</span>, then <span className="font-semibold">OK</span>.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Practical Use:</span>
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-6 mt-2">
                <li>Typing "slgov" to automatically insert "Government of Sierra Leone".</li>
                <li>Typing "addys" to insert your full company address.</li>
                <li>Typing "sigblk" to insert your complete signature block with contact info and logo.</li>
            </ul>

            {/* Footer Section (Optional) */}
            <footer className="bg-indigo-700 text-white p-4 text-center text-sm rounded-b-lg mt-4">
                <p>&copy; 2025 Study Notes. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default AdWrdWk2;