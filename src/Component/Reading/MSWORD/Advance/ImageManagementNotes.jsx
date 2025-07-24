import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Simple Toggle Component for Before/After Effect
const BeforeAfterToggle = ({ beforeSrc, afterSrc, description }) => {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <div className="flex flex-col items-center mb-4">
            <p className="text-sm text-gray-600 mb-2 italic">{description}</p>
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md h-48 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg shadow-md">
                <img
                    src={showAfter ? afterSrc : beforeSrc}
                    alt={showAfter ? "After effect" : "Before effect"}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
                />
            </div>
            <div className="mt-2"> {/* Added margin top for button */}
                <button
                    onClick={() => setShowAfter(!showAfter)}
                    className="px-3 py-1 bg-white bg-opacity-80 text-blue-700 text-sm rounded-full shadow-lg hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                    Show {showAfter ? 'Before' : 'After'}
                </button>
            </div>
        </div>
    );
};

const DocumentFeaturesNotes = () => {
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

            {/* --- WEEK 1 Introduction --- */}
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4 border-b-4 border-emerald-400 pb-3">
                WEEK 1: Mastering Visual Elements - Shapes & Images
            </h1>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                This week focuses on taking your understanding of shapes and images from basic insertion to powerful design
                elements. We'll explore how to precisely control, enhance, and arrange visuals
                to make your documents more impactful and professional, essential for creating
                appealing reports, flyers, certificates, and more.
            </p>

            {/* --- Topic 1: Advanced Image Management & Integration --- */}
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-300 pb-3">
                Topic 1: Advanced Image Management & Integration
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What we'll cover: Beyond just putting a picture in your document, we'll learn to refine images, control their appearance, and make them interact perfectly with your text.
            </p>

            {/* Section 1: Inserting Images */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    1. Inserting Images (Quick Review & New Options)
                </h2>
                <div className="mb-6 pl-4 border-l-4 border-purple-300">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Recap:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Insert Tab &gt; Pictures &gt; This Device (from your computer) or Online Pictures (from the web).</li>
                    </ul>
                </div>
                <div className="pl-4 border-l-4 border-green-300">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">New:</h3>
                    <h4 className="text-xl font-medium text-gray-700 mb-2">Screenshots & Screen Clipping:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Quickly capture images of your computer screen.</li>
                        <li><span className="font-semibold">How:</span> Insert Tab &gt; Screenshots. Choose an open window or Screen Clipping to draw a box around a specific area.</li>
                        <li><span className="font-semibold">Use Cases:</span> Documenting software steps, creating instructional guides, quick visual references.</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <img
                            src="images/screenshot-example.png" // Local image path
                            alt="Screenshot example"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md h-auto" // Responsive classes
                        />
                    </div>
                </div>
            </section>

            {/* Section 2: Image Adjustments & Enhancements */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    2. Image Adjustments & Enhancements (The "Picture Format" Tab)
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    When you select an image, the Picture Format tab appears. This is where the magic happens!
                </p>

                {/* Remove Background */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Remove Background:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Make parts of an image transparent.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Picture Format Tab &gt; Remove Background. Use "Mark Areas to Keep" and "Mark Areas to Remove" tools.</li>
                        <li><span className="font-semibold">Use Cases:</span> Isolating logos, people, or objects for clean integration into documents.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4"> {/* Added flex-wrap and gap */}
                        <img
                            src="/images/before.jpg" // Local image path
                            alt="Object with background"
                            className="rounded-md shadow-md w-full sm:w-60 md:w-72 lg:w-80 h-auto" // Responsive widths and h-auto
                        />
                        <img
                            src="/images/after.PNG" // Local image path
                            alt="Object without background"
                            className="rounded-md shadow-md w-full sm:w-60 md:w-72 lg:w-80 h-auto" // Responsive widths and h-auto
                        />
                    </div>
                </div>

                {/* Corrections */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Corrections:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Adjust image sharpness/softness, brightness, and contrast.</li>
                        <li><span className="font-semibold">How:</span> Picture Format Tab &gt; Corrections.</li>
                        <li><span className="font-semibold">Use Cases:</span> Fixing under/overexposed photos, making images clearer.</li>
                    </ul>
                    <BeforeAfterToggle
                        beforeSrc="/images/original-photo.png" // Local image path
                        afterSrc="/images/corrected-photo.png" // Local image path
                        description="Toggle to see a simulated correction effect."
                    />
                </div>

                {/* Color */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Color:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Change image saturation, tone, or recolor it (e.g., grayscale, sepia, a single color tint).</li>
                        <li><span className="font-semibold">How:</span> Picture Format Tab &gt; Color.</li>
                        <li><span className="font-semibold">Use Cases:</span> Matching brand colors, creating stylistic effects.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <img
                            src="/images/color-original.png" // Local image path
                            alt="Original color"
                            className="rounded-md shadow-md w-full sm:w-40 md:w-48 lg:w-48 h-auto"
                        />
                        <img
                            src="/images/color-grayscale.png" // Local image path
                            alt="Grayscale"
                            className="rounded-md shadow-md w-full sm:w-40 md:w-48 lg:w-48 h-auto"
                        />
                        <img
                            src="/images/color-sepia.png" // Local image path
                            alt="Sepia"
                            className="rounded-md shadow-md w-full sm:w-40 md:w-48 lg:w-48 h-auto"
                        />
                    </div>
                </div>

                {/* Artistic Effects */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Artistic Effects:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Apply filters like watercolor, mosaic, glowing edges, etc.</li>
                        <li><span className="font-semibold">How:</span> Picture Format Tab &gt; Artistic Effects.</li>
                        <li><span className="font-semibold">Use Cases:</span> Giving images a unique, artistic look.</li>
                    </ul>
                    <BeforeAfterToggle
                        beforeSrc="/images/original-image.jpg" // Local image path
                        afterSrc="/images/artistic-effect.png" // Local image path
                        description="Toggle to see a simulated artistic effect."
                    />
                </div>

                {/* Compress Pictures */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Compress Pictures:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Reduce the file size of your document (very important!).</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Picture Format Tab &gt; Compress Pictures. Choose application to all pictures and resolution.</li>
                        <li><span className="font-semibold">Why it's important:</span> Prevents large documents that are slow to load, email, or store.</li>
                    </ul>
                    {/* Placeholder for Compress Pictures visual if needed in future */}
                </div>

                {/* Change Picture / Reset Picture */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Change Picture / Reset Picture:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Swap an image while keeping its formatting, or revert all changes.</li>
                        <li><span className="font-semibold">How:</span> Picture Format Tab &gt; Change Picture / Reset Picture.</li>
                        <li><span className="font-semibold">Use Cases:</span> Quickly updating placeholder images in templates, undoing multiple edits.</li>
                    </ul>
                    {/* Placeholder for Change/Reset Picture visual if needed in future */}
                </div>
            </section>

            {/* Section 3: Picture Styles & Borders */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    3. Picture Styles & Borders:
                </h2>

                {/* Picture Styles Gallery */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Picture Styles Gallery:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Pre-designed frames, shadows, and reflections.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Picture Format Tab &gt; Picture Styles group.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <img
                            src="/images/style-normal.jpg" // Local image path
                            alt="Normal picture"
                            className="rounded-md shadow-md w-full sm:w-40 md:w-48 lg:w-48 h-auto"
                        />
                        <img
                            src="/images/style-framed.PNG" // Local image path
                            alt="Framed picture"
                            className="border-4 border-gray-400 p-2 shadow-lg w-full sm:w-40 md:w-48 lg:w-48 h-auto"
                        />
                        <img
                            src="/images/style-shadowed.jpg" // Local image path
                            alt="Shadowed picture"
                            className="shadow-xl w-full sm:w-40 md:w-48 lg:w-48 h-auto"
                        />
                    </div>
                </div>

                {/* Picture Border */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Picture Border:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Customize the line around the image.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Picture Format Tab &gt; Picture Border (choose color, weight, dashes).</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <img
                            src="/images/style-normal.jpg" // Local image path
                            alt="Picture with border"
                            className="border-dashed border-4 border-red-500 p-1 w-full max-w-xs md:max-w-sm h-auto" // Responsive classes
                        />
                    </div>
                </div>

                {/* Picture Effects */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Picture Effects:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Apply individual effects like Shadow, Reflection, Glow, Soft Edges, Bevel, 3-D Rotation.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Picture Format Tab &gt; Picture Effects.</li>
                        <li><span className="font-semibold">Use Cases:</span> Adding depth, realism, or a modern look to your images.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="flex flex-col items-center w-full sm:w-36 md:w-40">
                            <img
                                src="/images/effect-shadow.PNG" // Local image path (using normal image for shadow example)
                                alt="Image with shadow"
                                className="shadow-lg mb-2 w-full h-auto"
                            />
                            <span className="text-sm text-gray-600">Shadow</span>
                        </div>
                        <div className="flex flex-col items-center w-full sm:w-36 md:w-40">
                            <img
                                src="/images/effect-glow.PNG" // Local image path (using normal image for glow example)
                                alt="Image with glow"
                                className="shadow-blue-500/50 shadow-2xl mb-2 w-full h-auto" // Simulating glow
                            />
                            <span className="text-sm text-gray-600">Glow</span>
                        </div>
                        <div className="flex flex-col items-center w-full sm:w-36 md:w-40">
                            <img
                                src="/images/effect-reflection.PNG" // Local image path
                                alt="Image with reflection"
                                className="transform -scale-y-100 rotate-180 mb-2 w-full h-auto" // Crude reflection simulation
                            />
                            <span className="text-sm text-gray-600">Reflection</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Advanced Text Wrapping & Positioning */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    4. Advanced Text Wrapping & Positioning:
                </h2>

                {/* Text Wrapping */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Text Wrapping (Recap & Advanced):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li>How text flows around your image.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Click Layout Options icon next to image, or Picture Format Tab &gt; Wrap Text.</li>
                        <li><span className="font-semibold">Common Options:</span> Square, Tight, Through, Top and Bottom, Behind Text, In Front of Text.</li>
                    </ul>
                    <div className="flex justify-center mt-4 mb-4">
                        <img
                            src="/images/text-wrap-example.PNG" // Local image path
                            alt="Text wrap example"
                            className="rounded-md shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" // Responsive classes
                        />
                    </div>
                    <h4 className="text-xl font-medium text-gray-700 mb-2">New: Edit Wrap Points:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li><span className="font-semibold">Purpose:</span> Precisely control where text flows, especially around irregular shapes.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Wrap Text &gt; Edit Wrap Points. Drag the red points to customize the boundary.</li>
                        <li><span className="font-semibold">Use Cases:</span> Wrapping text perfectly around a person's outline, a product image, or an unusual logo.</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <img
                            src="/images/edit-wrap-points.PNG" // Local image path
                            alt="Edit wrap points conceptual image"
                            className="rounded-md shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" // Responsive classes
                        />
                    </div>
                </div>

                {/* Position Options */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Position Options:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Place images exactly where you want them on the page (e.g., top-right, bottom-center) relative to margins or the page itself.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Picture Format Tab &gt; Position.</li>
                    </ul>
                    <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs text-gray-500">
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-top-left.png" alt="Top Left" className="border border-gray-300 w-full h-auto" />
                            <span>Top Left</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-top-center.png" alt="Top Center" className="border border-gray-300 w-full h-auto" />
                            <span>Top Center</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-top-right.png" alt="Top Right" className="border border-gray-300 w-full h-auto" />
                            <span>Top Right</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-mid-left.png" alt="Middle Left" className="border border-gray-300 w-full h-auto" />
                            <span>Mid Left</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/mid-center.png" alt="Middle Center" className="border border-gray-300 w-full h-auto" />
                            <span>Mid Center</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-mid-right.png" alt="Middle Right" className="border border-gray-300 w-full h-auto" />
                            <span>Mid Right</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-bot-left.png" alt="Bottom Left" className="border border-gray-300 w-full h-auto" />
                            <span>Bot Left</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-bot-center.png" alt="Bottom Center" className="border border-gray-300 w-full h-auto" />
                            <span>Bot Center</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/pos-bot-right.png" alt="Bottom Right" className="border border-gray-300 w-full h-auto" />
                            <span>Bot Right</span>
                        </div>
                    </div>
                </div>

                {/* Anchor Point & Fix Position */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Anchor Point & Fix Position:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Images are "anchored" to a paragraph. If that paragraph moves, the image moves. Fix position on page keeps the image in place regardless of text changes.</li>
                        <li><span className="font-semibold">How:</span> Select image &gt; Layout Options &gt; See More &gt; Position tab &gt; Check Fix position on page.</li>
                        <li><span className="font-semibold">Use Cases:</span> Ensuring diagrams or key images don't shift unexpectedly in long documents.</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <img
                            src="/images/anchored-vs-fixed.png" // Local image path
                            alt="Anchored vs Fixed Position"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md h-auto" // Responsive classes
                        />
                    </div>
                </div>
            </section>

            {/* --- Topic 2: Mastering Shapes & Drawing Tools --- */}
            <hr className="my-10 border-gray-300" /> {/* Horizontal line to separate topics */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-purple-300 pb-3">
                Topic 2: Mastering Shapes & Drawing Tools
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What we'll cover: Beyond basic rectangles and circles, we'll learn to create and manipulate complex shapes for unique designs and layouts.
            </p>

            {/* Section 1: Drawing & Editing Shapes */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    1. Drawing & Editing Shapes (Precision & Customization)
                </h2>

                <div className="mb-6 pl-4 border-l-4 border-teal-300">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Recap:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Insert Tab &gt; Shapes.</li>
                    </ul>
                </div>

                <div className="pl-4 border-l-4 border-indigo-300 mb-6">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Drawing with Precision:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Hold Shift:</span> While drawing for perfect circles, squares, or straight lines (0, 45, 90 degrees).</li>
                        <li><span className="font-semibold">Hold Ctrl:</span> While drawing to draw the shape outwards from its center.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-48 md:w-56">
                            <img
                                src="/images/draw-shift.png"
                                alt="Drawing with Shift for perfect shapes"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Shift (Perfect Circle/Square)</p>
                        </div>
                        <div className="text-center w-full sm:w-48 md:w-56">
                            <img
                                src="/images/draw-ctrl.png"
                                alt="Drawing with Ctrl from center"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Ctrl (Draw from Center)</p>
                        </div>
                    </div>
                </div>

                <div className="pl-4 border-l-4 border-pink-300 mb-6">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Edit Points (Crucial Advanced Tool!):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Modify the exact outline of a shape by manipulating its control points.</li>
                        <li><span className="font-semibold">How:</span> Select shape &gt; Shape Format Tab &gt; Edit Shape &gt; Edit Points. Black squares appear; drag them, or right-click to add/delete points.</li>
                        <li><span className="font-semibold">Use Cases:</span> Creating custom arrows, irregular background elements, unique callout shapes, or even basic vector-style logos directly in Word.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-60 md:w-72">
                            <img
                                src="/images/edit-points-before.png"
                                alt="Shape before editing points"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Original Shape</p>
                        </div>
                        <div className="text-center w-full sm:w-60 md:w-72">
                            <img
                                src="/images/edit-points-after.png"
                                alt="Shape after editing points"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Shape after Edit Points</p>
                        </div>
                    </div>
                </div>

                <div className="pl-4 border-l-4 border-yellow-300">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Drawing Lines & Connectors:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Create precise lines and connectors between shapes (e.g., in flowcharts).</li>
                        <li><span className="font-semibold">How:</span> Insert Tab &gt; Shapes &gt; choose Line or specific Connectors.</li>
                    </ul>
                    {/* <div className="flex justify-center mt-4">
                        <img
                            src="images/lines-connectors.png"
                            alt="Examples of lines and connectors"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md h-auto"
                        />
                    </div> */}
                </div>
            </section>

            {/* Section 2: Comprehensive Shape Formatting */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    2. Comprehensive Shape Formatting (The "Shape Format" Tab)
                </h2>

                {/* Shape Fill */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Shape Fill:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Control the internal color/design of the shape.</li>
                        <li><span className="font-semibold">How:</span> Select shape &gt; Shape Format Tab &gt; Shape Fill.</li>
                        <li><span className="font-semibold">Options:</span> No Fill (transparent), Picture Fill (fill with an image!), Gradient Fill (smooth color blend), Texture Fill.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/fill-solid.png"
                                alt="Solid color fill example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Solid Fill</p>
                        </div>
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/fill-gradient.png"
                                alt="Gradient fill example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Gradient Fill</p>
                        </div>
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/fill-picture.png"
                                alt="Picture fill example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Picture Fill</p>
                        </div>
                    </div>
                </div>

                {/* Shape Outline */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Shape Outline:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Control the border of the shape.</li>
                        <li><span className="font-semibold">How:</span> Select shape &gt; Shape Format Tab &gt; Shape Outline.</li>
                        <li><span className="font-semibold">Options:</span> No Outline (for clean, borderless designs), Weight (thickness), Dashes (dotted/dashed lines), Arrows (for line shapes).</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/outline-solid.png"
                                alt="Solid outline example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Solid Outline</p>
                        </div>
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/outline-dashed.png"
                                alt="Dashed outline example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Dashed Outline</p>
                        </div>
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/outline-none.png"
                                alt="No outline example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">No Outline</p>
                        </div>
                    </div>
                </div>

                {/* Shape Effects */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Shape Effects (In-depth):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Apply visual enhancements to your shapes.</li>
                        <li><span className="font-semibold">How:</span> Select shape &gt; Shape Format Tab &gt; Shape Effects.</li>
                        <li><span className="font-semibold">Options:</span> Shadow, Reflection, Glow, Soft Edges (blurs the edge), Bevel (gives a 3D, raised look), 3-D Rotation (rotates the shape in 3D space).</li>
                        <li><span className="font-semibold">Use Cases:</span> Making buttons look clickable, creating depth, adding a modern aesthetic.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/effect-bevel.png"
                                alt="Bevel effect example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Bevel</p>
                        </div>
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/effect-3d-rotation.png"
                                alt="3D Rotation effect example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">3-D Rotation</p>
                        </div>
                        <div className="text-center w-full sm:w-40 md:w-48">
                            <img
                                src="/images/effect-glow.png" /* Reusing glow image for simplicity */
                                alt="Glow effect example"
                                className="rounded-md shadow-blue-500/50 shadow-2xl mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Glow</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Arranging Multiple Objects */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    3. Arranging Multiple Objects (Shapes, Images, Text Boxes)
                </h2>

                <p className="text-lg text-gray-700 mb-4">
                    When you have many visual elements, knowing how to arrange them is key.
                </p>

                {/* Layering */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Layering (Bring Forward / Send Backward):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Control which object appears on top when they overlap.</li>
                        <li><span className="font-semibold">How:</span> Select object &gt; Shape Format Tab &gt; Bring Forward / Send Backward (or Bring to Front / Send to Back for absolute layering).</li>
                        <li><span className="font-semibold">Use Cases:</span> Placing a company logo over a colored background shape, having text boxes overlay images.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-56 md:w-64">
                            <img
                                src="/images/layer-send-backward.png"
                                alt="Objects before layering adjustment"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Before Send Backward</p>
                        </div>
                        <div className="text-center w-full sm:w-56 md:w-64">
                            <img
                                src="/images/layer-bring-forward.png"
                                alt="Objects after layering adjustment"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">After Bring Forward</p>
                        </div>
                    </div>
                </div>

                {/* Align Tools */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Align Tools (For Professional Neatness!):</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Precisely align and distribute objects relative to each other or the page.</li>
                        <li><span className="font-semibold">How:</span> Select multiple objects (hold Shift or Ctrl and click) &gt; Shape Format Tab &gt; Align.</li>
                        <li><span className="font-semibold">Options:</span> Align Left, Center, Right, Top, Middle, Bottom.</li>
                        <li><span className="font-semibold">Key Concept:</span> Align Selected Objects (aligns selected items relative to each other) vs. Align to Page / Align to Margin (aligns relative to the entire page or its margins).</li>
                        <li><span className="font-semibold">Distribute Horizontally / Vertically:</span> Evenly spaces selected objects.</li>
                        <li><span className="font-semibold">Use Cases:</span> Centering multiple icons, evenly spacing sections of a flowchart, creating balanced visual designs like ID cards.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-48 md:w-56">
                            <img
                                src="/images/align-horizontal.png"
                                alt="Horizontal alignment example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Align & Distribute Horizontally</p>
                        </div>
                        <div className="text-center w-full sm:w-48 md:w-56">
                            <img
                                src="/images/align-vertical.png"
                                alt="Vertical alignment example"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Align & Distribute Vertically</p>
                        </div>
                    </div>
                </div>

                {/* Group / Ungroup */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Group / Ungroup:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> Combine multiple shapes, images, and text boxes into a single unit that moves and resizes together.</li>
                        <li><span className="font-semibold">How:</span> Select multiple objects &gt; Shape Format Tab &gt; Group Objects &gt; Group.</li>
                        <li><span className="font-semibold">Use Cases:</span> Designing a complex header (logo + text + decorative lines) and treating it as one element, making a reusable ID card design.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-60 md:w-72">
                            <img
                                src="/images/group-before.png"
                                alt="Objects before grouping"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Before Grouping</p>
                        </div>
                        <div className="text-center w-full sm:w-60 md:w-72">
                            <img
                                src="/images/group-after.png"
                                alt="Objects after grouping"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">After Grouping</p>
                        </div>
                    </div>
                </div>

                {/* Selection Pane */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Selection Pane:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><span className="font-semibold">Purpose:</span> See a list of all objects on your page, easily select hidden ones, and reorder their layers.</li>
                        <li><span className="font-semibold">How:</span> Shape Format Tab &gt; Selection Pane.</li>
                        <li><span className="font-semibold">Use Cases:</span> Invaluable for complex designs with many overlapping elements; helps manage which object is which and resolve layering issues.</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <img
                            src="/images/selection-pane.png"
                            alt="Screenshot of Selection Pane"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* --- Topic 3: Integrating Text with Visuals (Text Boxes & WordArt) --- */}
            <hr className="my-10 border-gray-300" />
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-orange-300 pb-3">
                Topic 3: Integrating Text with Visuals (Text Boxes & WordArt)
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What we'll cover: How to place and style text within your designs, working seamlessly with images and shapes.
            </p>
             <div className="flex flex-wrap justify-center mt-4 gap-4">
                        <div className="text-center w-full sm:w-60 md:w-72">
                            <img
                                src="/images/textbox.png"
                                alt="Objects before grouping"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">Text Box</p>
                        </div>
                        <div className="text-center w-full sm:w-60 md:w-72">
                            <img
                                src="/images/wordArt.png"
                                alt="Objects after grouping"
                                className="rounded-md shadow-md mb-2 w-full h-auto"
                            />
                            <p className="text-sm text-gray-600">WordArt</p>
                        </div>
                    </div>

            {/* Section 1: Text Boxes (Advanced Usage) */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    1. Text Boxes (Advanced Usage)
                </h2>

                <div className="mb-6 pl-4 border-l-4 border-purple-300">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Recap:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Insert Tab &gt; Text Box &gt; Simple Text Box or Draw Text Box.</li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Text Box as a Design Element:</h3>
                    <p className="text-gray-700">
                        Use it for distinct blocks of text like call-outs, sidebars, quotes, or emphasized information.
                    </p>
                </div>

                {/* Text Box Formatting */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Text Box Formatting:</h3>

                    <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Apply Shape Fill, Outline, and Effects:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li>Apply <span className="font-semibold">Shape Fill</span>, <span className="font-semibold">Outline</span>, and <span className="font-semibold">Effects</span> to the text box container itself (like any other shape).</li>
                    </ul>

                    <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Internal Text Box Margins:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li><span className="font-semibold">Purpose:</span> Adjust the empty space between the text and the inner edge of the text box.</li>
                        <li><span className="font-semibold">How:</span> Select text box &gt; Shape Format Tab &gt; Text Box group &gt; Margins.</li>
                        <li><span className="font-semibold">Use Cases:</span> Preventing text from looking cramped, creating a clean visual separation.</li>
                    </ul>

                    <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Text Direction:</h4>
                     <div className="flex justify-center mt-4">
                        <img
                            src="/images/text-direction.png"
                            alt="Screenshot of Selection Pane"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mb-2"
                        />
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li><span className="font-semibold">Purpose:</span> Change the orientation of text within the box (horizontal, vertical).</li>
                        <li><span className="font-semibold">How:</span> Select text box &gt; Shape Format Tab &gt; Text Box group &gt; Text Direction.</li>
                        <li><span className="font-semibold">Use Cases:</span> Vertical text for certificate edges, book spines, or creative flyer headings.</li>
                    </ul>
                </div>

                {/* Linking Text Boxes */}
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Linking Text Boxes (Advanced & Powerful!):</h3>
                      <div className="flex justify-center mt-4">
                        <img
                            src="/images/linked.jpg"
                            alt="Screenshot of Selection Pane"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mb-2"
                        />
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Purpose:</span> Allows text to automatically flow from one text box to another when the first one is full.</li>
                        <li><span className="font-semibold">How:</span> Select the first text box &gt; Shape Format Tab &gt; Create Link. Then click on the next empty text box where you want the text to flow.</li>
                        <li><span className="font-semibold">Use Cases:</span> Designing multi-column newsletters, brochures, or complex magazine layouts where text needs to flow across different areas of the page.</li>
                    </ul>
                </div>
            </section>

            {/* Section 2: WordArt for Impactful Headings & Stylized Text */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    2. WordArt for Impactful Headings & Stylized Text
                </h2>
                 <div className="flex justify-center mt-4">
                        <img
                            src="/images/wwordaart.jpg"
                            alt="Screenshot of Selection Pane"
                            className="rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mb-2"
                        />
                    </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Purpose:</h3>
                    <p className="text-gray-700 leading-relaxed">
                        WordArt transforms ordinary text into dynamic visual elements. It's ideal for titles, slogans, and emphasized text that needs to stand out as a graphical component rather than just plain text. Unlike regular text in a text box, WordArt offers more extensive visual styling, including 3D effects, shadows, and text transformations, making it perfect for design-heavy documents like flyers, certificates, and presentations.
                    </p>
                    <h3 className="text-2xl font-medium text-gray-700 mb-3 mt-4">How to Insert WordArt:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Insert Tab &gt; WordArt (choose a pre-set style to start).</li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Key Customization Options (using the "Shape Format" Tab when WordArt is selected):</h3>

                    <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">WordArt Styles Gallery:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li>Quick application of diverse pre-designed effects (fills, outlines, shadows, reflections).</li>
                    </ul>

                    <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Text Fill:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li>Change the color inside the letters.</li>
                        <li><span className="font-semibold">Advanced:</span> Use Gradient Fill for smooth color transitions within the text, Picture Fill to fill the text with an image or texture, or Texture Fill for specific patterns.</li>
                        <li><span className="font-semibold">Use Cases:</span> Matching brand gradients, filling text with a relevant background image for a certificate title.</li>
                    </ul>

                    <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Text Outline:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li>Add a border around each letter.</li>
                        <li><span className="font-semibold">Advanced:</span> Adjust Weight (thickness), Dashes (dotted/dashed lines), and color.</li>
                        <li><span className="font-semibold">Use Cases:</span> Making text pop, creating a "neon" effect, or adding a subtle defined edge.</li>
                    </ul>

                    <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Text Effects:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                        <li><span className="font-semibold">Shadow:</span> Add depth with various shadow directions and blur.</li>
                        <li><span className="font-semibold">Reflection:</span> Create a mirrored image below the text.</li>
                        <li><span className="font-semibold">Glow:</span> Add a luminous halo around the text.</li>
                        <li><span className="font-semibold">Bevel:</span> Give text a 3D, raised, or carved appearance.</li>
                        <li><span className="font-semibold">3-D Rotation:</span> Rotate the text in three-dimensional space for perspective effects.</li>
                        <li><span className="font-semibold">Transform (The Powerhouse!):</span>
                            <ul className="list-circle list-inside text-gray-600 space-y-1 pl-6 mt-1">
                                <li><span className="font-semibold">Purpose:</span> Bend, warp, and stretch your WordArt into various complex shapes (e.g., arch, circle, wave, inflate).</li>
                                <li><span className="font-semibold">How:</span> Select WordArt &gt; Shape Format Tab &gt; Text Effects &gt; Transform.</li>
                                <li><span className="font-semibold">Use Cases:</span> Creating circular titles for seals, wave-like headings for a fun event flyer, or unique logos/brand elements.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">WordArt vs. Text Box Text: When to use which?</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">WordArt:</span> When the text itself needs to be a primary visual graphic. Best for short, impactful headings, logos, or emphasized words that require unique styling (e.g., 3D, complex transformations).</li>
                        <li><span className="font-semibold">Text Box Text:</span> When the primary focus is the content and its precise placement, often with simpler formatting, or when text needs to flow across linked boxes. Best for body text, lists, contact information, and long paragraphs that sit alongside other visual elements.</li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-2xl font-medium text-gray-700 mb-3">Best Practices for Professional WordArt Use:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><span className="font-semibold">Less is More:</span> Use WordArt sparingly for key titles or slogans to avoid a cluttered or unprofessional look.</li>
                        <li><span className="font-semibold">Readability First:</span> Ensure your chosen effects don't hinder the text's readability.</li>
                        <li><span className="font-semibold">Consistency:</span> If using WordArt for multiple headings, maintain a consistent style where appropriate.</li>
                        <li><span className="font-semibold">Synergy with Shapes & Images:</span> WordArt works best when it complements other visual elements. Use its positioning, layering, and color to harmonize with surrounding shapes and images.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default DocumentFeaturesNotes;