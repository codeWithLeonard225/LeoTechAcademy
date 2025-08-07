import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CbWk2 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalAltText, setModalAltText] = useState('');

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleImageClick = (src, alt) => {
        setModalImage(src);
        setModalAltText(alt);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage('');
        setModalAltText('');
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
                Computer Basics: Week 2 - Working with Information & Settings ⚙️
            </h1>

            {/* Lesson 4 Section - Keyboard */}
            <section className="mb-8 p-4 rounded-lg border-l-4 border-indigo-400 bg-indigo-50">
                <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
                    Lesson 4: Keyboard ⌨️
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello, amazing learners! You've mastered the mouse, and now it's time to unlock the secrets of your keyboard. This is how you tell your computer words, numbers, and commands!
                </p>

                <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                    Your Keyboard: A Map of Power!
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Look down at your keyboard. It might seem like a lot of buttons, but we'll break them down. Each key has a special job.
                </p>
                <div className="flex justify-center my-6">
                    <img
                        src="/images/computerBasics/full-keyboard.png"
                        alt="Image of a full computer keyboard layout."
                        className="rounded-md shadow-md w-full max-w-2xl h-auto border border-gray-200"
                        onClick={() => handleImageClick("/images/computerBasics/full-keyboard.png", "Full computer keyboard layout")}
                    />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                    A typical full-sized computer keyboard.
                </p>

                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">The Alphabet Keys (A-Z):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>These are the letters you use to type words. They are arranged in a special order (not A-B-C-D) called QWERTY. Don't worry about the name, just know where the letters are!</li>
                            <li>Practice: Type your name now. See the letters appear on the screen!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Number Keys (0-9):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You'll find these numbers in two places:
                                <ul className="list-circle pl-5 mt-1">
                                    <li>At the top: Above the alphabet keys.</li>
                                    <li>On the right side (Numeric Keypad): A block of numbers that looks like a calculator.
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/numeric-keypad.png"
                                                alt="Image of a numeric keypad on a keyboard."
                                                className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/numeric-keypad.png", "Numeric keypad on a keyboard")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            The numeric keypad on the right side of the keyboard.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>Practice: Type your age or today's date using the numbers at the top.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Spacebar:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>This is the longest bar at the bottom of your keyboard.</li>
                            <li>Job: It puts a space between your words. Without it, your words would looklikethis!</li>
                            <li>Practice: Type "Freetown" then press the Spacebar, then type "Sierra Leone." See the space? Good!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Enter / Return Key (↩):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>This key is usually on the right side, above the Shift key, and might be shaped like an 'L' or a long rectangle. It often has an arrow that curves down and to the left.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/enter-key.png"
                                        alt="Image of the Enter key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/enter-key.png", "The Enter key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Enter key is used for new lines or confirming actions.
                                </p>
                            </li>
                            <li>Job 1 (New Line): When you're typing, it moves your blinking cursor to the next line.</li>
                            <li>Job 2 (OK/Confirm): Sometimes, it acts like pressing "OK" or "Go" after you've typed something (like in a search box).</li>
                            <li>Practice: Type a sentence, then press Enter. See how your cursor jumps to the next line?</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Backspace Key (←):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>This key is usually above the Enter key and has a left-pointing arrow.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/backspace-key.png"
                                        alt="Image of the Backspace key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/backspace-key.png", "The Backspace key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Backspace key deletes characters to the left.
                                </p>
                            </li>
                            <li>Job: It deletes letters <span className="font-bold">behind</span> your blinking cursor, one by one. It's your "undo mistake" key!</li>
                            <li>Practice: Type "helllo" (with an extra 'l'). Now press Backspace twice. Did you fix it to "hello"? Great!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Delete Key (Del):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You'll usually find this near the Backspace key, or in a separate small block of keys.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/delete-key.png"
                                        alt="Image of the Delete key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/delete-key.png", "The Delete key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Delete key removes characters to the right or selected items.
                                </p>
                            </li>
                            <li>Job: It deletes letters <span className="font-bold">in front</span> of your blinking cursor, or deletes items you have selected (like files or icons).</li>
                            <li>Practice: Type "word" then move your cursor before the 'w' using the arrow keys (we'll cover them next). Now press Delete. Did the 'w' disappear? Excellent!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Shift Keys (↑):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You have two Shift keys, one on the left and one on the right, usually below the Enter key. They have an upward-pointing arrow.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/shift-key.png"
                                        alt="Image of the Shift key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/shift-key.png", "The Shift key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Shift key is used to type capital letters or top symbols.
                                </p>
                            </li>
                            <li>Job 1 (Capital Letters): If you hold down a Shift key and then press a letter, you get a CAPITAL LETTER!</li>
                            <li>Job 2 (Top Symbols): Many keys have two symbols on them (e.g., '1' and '!'). If you hold down Shift and press that key, you get the top symbol!</li>
                            <li>These are the signs like: <span className="font-mono">! @ # $ % ^ & * ( ) - _ = + [ ] { } ; : ' " , &lt; . &gt; / ? \ |</span> They usually share the same keys as numbers or letters.</li>
                            <li>👉 Try: Hold Shift + press the key to see the symbol appear!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Caps Lock Key (↑ with a line):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>This key is on the left side, above the left Shift key.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/caps-lock-key.png"
                                        alt="Image of the Caps Lock key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/caps-lock-key.png", "The Caps Lock key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Caps Lock key toggles between uppercase and lowercase letters.
                                </p>
                            </li>
                            <li>Job: If you press Caps Lock once, it locks all your letter keys to type in CAPITAL LETTERS automatically. Press it again to turn it off. There's often a small light on the keyboard that turns on/off with Caps Lock.</li>
                            <li>Practice: Press Caps Lock. Now type. Are all your letters capital? Press Caps Lock again. Now type. Are they small again? Perfect!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Tab Key (→∣):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>This key is on the far left, above Caps Lock. It often has two arrows pointing opposite directions.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/tab-key.png"
                                        alt="Image of the Tab key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/tab-key.png", "The Tab key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Tab key creates large indents or moves between fields.
                                </p>
                            </li>
                            <li>Job: It moves your blinking cursor a longer distance forward, creating a bigger space than the Spacebar. It can also move you between different boxes on a form.</li>
                            <li>Practice: In Notepad, press Tab a few times. See how the cursor jumps?</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Ctrl (Control) Keys & Alt (Alternate) Keys:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You have two of each, usually on either side of the Spacebar.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/ctrl-alt-keys.png"
                                        alt="Image of Ctrl and Alt keys on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/ctrl-alt-keys.png", "The Ctrl and Alt keys")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Ctrl and Alt keys are used in combination with other keys for shortcuts.
                                </p>
                            </li>
                            <li>Job: These keys don't do anything by themselves. They are "helper" keys! You hold them down while pressing another key to do special commands (called shortcuts).</li>
                            <li>Example (don't worry about remembering this yet!): Holding Ctrl and pressing C (for Copy) copies something. Holding Ctrl and pressing V (for Paste) puts it somewhere else. We will learn important shortcuts later!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Arrow Keys (↑↓←→):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>These are a small set of four keys, usually arranged in a cross shape, near the bottom-right of your main keyboard.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/arrow-keys.png"
                                        alt="Image of arrow keys on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/arrow-keys.png", "The Arrow keys")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Arrow keys move the cursor without deleting text.
                                </p>
                            </li>
                            <li>Job: They move your blinking cursor up, down, left, or right in a document, without erasing anything.</li>
                            <li>Practice: Type a few sentences in Notepad. Now use your arrow keys to move your cursor to different parts of your sentences. See how it moves without changing the words?</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">The Function Keys (F1, F2, F3... F12):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>These are a row of keys at the very top of your keyboard.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/function-keys.png"
                                        alt="Image of Function keys (F1-F12) on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/function-keys.png", "The Function keys")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Function keys (F1-F12) have special program-dependent functions.
                                </p>
                            </li>
                            <li>Job: They have special functions that can change depending on what program you are using. For example, F1 often opens "Help" for a program. Don't worry too much about these for now.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Esc (Escape):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Used to cancel something or exit full screen.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/esc-key.png"
                                        alt="Image of the Esc key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/esc-key.png", "The Esc key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Esc key is used to cancel actions or exit full screen.
                                </p>
                            </li>
                            <li>Example: Watching a video full screen? Press Esc to go back.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Windows Key:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Press to open the Start Menu.
                                <div className="flex justify-center mt-4">
                                    <img
                                        src="/images/computerBasics/windows-key.png"
                                        alt="Image of the Windows key on a keyboard."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/windows-key.png", "The Windows key")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Windows key opens the Start Menu.
                                </p>
                            </li>
                            <li>It’s your shortcut to everything on your computer.</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                    Typing Posture (How to Sit and Hold Your Hands) 🧘‍♀️
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    This is important for comfort and speed!
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li><span className="font-semibold">Sit Up Straight:</span> Keep your back straight, but relaxed.</li>
                    <li><span className="font-semibold">Feet Flat:</span> Place your feet flat on the floor.</li>
                    <li><span className="font-semibold">Wrists Straight:</span> Don't bend your wrists up or down too much. Keep them straight and relaxed.</li>
                    <li><span className="font-semibold">Fingers Curved:</span> Place your fingers gently over the "home row" keys (A, S, D, F for your left hand; J, K, L, ; for your right hand). Your teacher will show you. These are your starting points!
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/typing-posture.png"
                                alt="Illustration of correct typing posture."
                                className="rounded-md shadow-md w-full max-w-lg h-auto border border-gray-200"
                                onClick={() => handleImageClick("/images/computerBasics/typing-posture.png", "Correct typing posture")}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Maintain good posture for comfort and efficiency while typing.
                        </p>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                    Hands-on Practice – Let's Get Typing! ✍️
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Now, let's put it all together!
                </p>
                <div className="p-4 bg-indigo-100 rounded-md border border-indigo-200 mb-6">
                    <p className="font-semibold mb-2">Open Notepad (or WordPad).</p>
                    <p className="font-semibold mb-2">Practice Typing:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Type your full name and address.</li>
                        <li>Type "I am learning computer basics in Freetown, Sierra Leone."</li>
                        <li>Type a few sentences about your favorite food or a recent event.</li>
                        <li>Focus on using: Spacebar, Enter, Backspace to fix mistakes, and Shift for capital letters.</li>
                        <li>Try using the Arrow Keys to move around your text and fix things.</li>
                    </ul>
                    <p className="font-semibold mt-4">Saving Your Work (So You Don't Lose It!)</p>
                    <p className="text-sm text-gray-600 mt-2">
                        (Your teacher will guide you on how to save your typed work in Notepad/WordPad, building on the folder creation from Lesson 2).
                    </p>
                </div>

                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    You are a typing master in the making! This session was a deep dive, and you handled it perfectly. Knowing your keyboard well will make everything else so much easier. Keep practicing those keys! See you next time!
                </p>
            </section>

            <hr className="my-8 border-gray-300" />

            {/* Lesson 5 Section - Control Panel */}
            <section className="mb-8 p-4 rounded-lg border-l-4 border-teal-400 bg-teal-50">
                <h2 className="text-3xl font-semibold text-teal-800 mb-4">
                    Lesson 5: Your computer’s "Brain Room" (The Control Panel!) 🎛️
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Think of the Control Panel as the computer's "brain room" or command center. It's where you find all the switches and buttons to change how your computer works and manage its different parts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You've used "Settings" a little bit, but the Control Panel is an older, powerful tool that organizes things into neat categories.
                </p>

                <h3 className="text-2xl font-semibold text-teal-700 mb-3">
                    1. Opening the Control Panel:
                </h3>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li>Click the Start Button (bottom-left, four squares).</li>
                    <li>In the search box that pops up, type "<span className="font-semibold">Control Panel</span>".</li>
                    <li>When you see "<span className="font-semibold">Control Panel</span>" appear in the list, left-click on it once.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/control-panel-search.png"
                                alt="Screenshot of Windows Start Menu search for Control Panel."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                onClick={() => handleImageClick("/images/computerBasics/control-panel-search.png", "Windows Start Menu search for Control Panel")}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Search for 'Control Panel' in the Start Menu.
                        </p>
                    </li>
                    <li>Good job! The Control Panel window will open.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/control-panel-window.png"
                                alt="Screenshot of the Control Panel window."
                                className="rounded-md shadow-md w-full max-w-2xl h-auto border border-gray-200"
                                onClick={() => handleImageClick("/images/computerBasics/control-panel-window.png", "The Control Panel window")}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The Control Panel window, showing various categories.
                        </p>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-teal-700 mb-3">
                    2. Viewing by Categories:
                </h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700 mb-6">
                    <li>Look at the top-right corner of the Control Panel window. You'll see "<span className="font-semibold">View by: Category</span>". If it says something else, click on it and choose "<span className="font-semibold">Category</span>".
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/control-panel-view-by-category.png"
                                alt="Screenshot of Control Panel showing 'View by: Category' option."
                                className="rounded-md shadow-md w-full max-w-lg h-auto border border-gray-200"
                                onClick={() => handleImageClick("/images/computerBasics/control-panel-view-by-category.png", "Control Panel 'View by: Category' option")}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Ensure 'View by: Category' is selected for easier navigation.
                        </p>
                    </li>
                    <li>This helps organize everything into groups, making it easier to find what you need.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-teal-700 mb-3">
                    3. Let's Explore the Categories (Your Computer's Departments!):
                </h3>
                <ul className="list-disc pl-8 space-y-4 text-gray-700 mb-6">
                    <li><span className="font-semibold">a. System and Security:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This is like the security office and general information desk for your computer. It helps you check if your computer is safe and gives you basic info about it.</li>
                            <li>Use: We won't go deep here now, but it's where you would check for "Windows Update" (which keeps your computer running smoothly) or find basic information about your computer (like how much memory it has).</li>
                            <li>Practice: Just click on "<span className="font-semibold">System and Security</span>" to see what's inside. Then click the back arrow (usually top-left in the window) to return to the main Control Panel categories.</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">b. Network and Internet:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This is where you manage how your computer connects to the internet, like connecting to Wi-Fi or setting up internet from your phone.</li>
                            <li>Use: We will use this category later when we connect your phone's internet to the computer!</li>
                            <li>Practice: Click on "<span className="font-semibold">Network and Internet</span>". You might see options like "Network and Sharing Center." Click the back arrow to go back.</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">c. Hardware and Sound:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This category helps you manage all the "hardware" parts you can touch, like your speakers, printer, or other devices you plug in.</li>
                            <li>Use (Adjusting Sound - Revisited!):
                                <ol className="list-alpha pl-5 mt-2 space-y-2">
                                    <li>Click on "<span className="font-semibold">Hardware and Sound</span>".</li>
                                    <li>Now click on "<span className="font-semibold">Adjust system volume</span>" under the "Sound" section.
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/adjust-system-volume.png"
                                                alt="Screenshot of 'Hardware and Sound' in Control Panel, showing 'Adjust system volume'."
                                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/adjust-system-volume.png", "'Adjust system volume' option in Control Panel")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            Click 'Adjust system volume' to change audio levels.
                                        </p>
                                    </li>
                                    <li>A small window will pop up with a slider. Click and drag the slider to the left and right to make your computer's sound quieter or louder.
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/volume-mixer.png"
                                                alt="Screenshot of the Volume Mixer window with a slider."
                                                className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/volume-mixer.png", "The Volume Mixer window")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            Drag the slider to adjust the system volume.
                                        </p>
                                    </li>
                                    <li>Excellent! Now you know two ways to control your volume!</li>
                                    <li>When done, click the "X" to close the Volume Mixer, then click the back arrow to return to categories.</li>
                                </ol>
                            </li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">d. Programs:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This is where you install new programs or uninstall (remove) programs you don't need anymore. We'll use this more in the next session!</li>
                            <li>Practice: Just click on "<span className="font-semibold">Programs</span>". You'll see "Uninstall a program." Click the back arrow for now.</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">e. User Accounts:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This is very important! It's where you manage the people who use the computer. Each person can have their own "user account" with their own files and settings, protected by a password.</li>
                            <li>Use (Changing Your Picture):
                                <ol className="list-alpha pl-5 mt-2 space-y-2">
                                    <li>Click on "<span className="font-semibold">User Accounts</span>".</li>
                                    <li>Now click on "<span className="font-semibold">Change account type</span>" or "<span className="font-semibold">Change your account picture</span>" (depending on your Windows version).
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/change-account-picture.png"
                                                alt="Screenshot of 'User Accounts' in Control Panel, showing options to change account picture."
                                                className="rounded-md shadow-md w-full max-w-lg h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/change-account-picture.png", "'Change your account picture' option")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            Change your user account picture to personalize it.
                                        </p>
                                    </li>
                                    <li>You'll see different pictures you can choose from. Click on one you like.
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/choose-account-picture.png"
                                                alt="Screenshot of options to choose a new account picture."
                                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/choose-account-picture.png", "Choosing a new account picture")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            Select a picture to set as your user account image.
                                        </p>
                                    </li>
                                    <li>Awesome! Your account picture has changed. This makes your computer feel more personal!</li>
                                    <li>Click the back arrow to return to categories.</li>
                                </ol>
                            </li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">f. Appearance and Personalization:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This is where you change how your computer looks – like your desktop background, screen colors, and other visual settings. (We briefly covered background in Session 2, but this is the main hub!)</li>
                            <li>Practice: Click on "<span className="font-semibold">Appearance and Personalization</span>". You'll see "Change desktop background." You don't need to change it now, but you know where to find it! Click the back arrow.</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">g. Clock and Region:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This controls your computer's date, time, and where you are in the world (your "region"). Having the correct time is very important for connecting to the internet later!</li>
                            <li>Use (Checking Date & Time - Revisited!):
                                <ol className="list-alpha pl-5 mt-2 space-y-2">
                                    <li>Click on "<span className="font-semibold">Clock and Region</span>".</li>
                                    <li>Now click on "<span className="font-semibold">Set the time and date</span>".
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/set-time-date.png"
                                                alt="Screenshot of 'Clock and Region' in Control Panel, showing 'Set the time and date'."
                                                className="rounded-md shadow-md w-full max-w-lg h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/set-time-date.png", "'Set the time and date' option")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            Open 'Set the time and date' settings.
                                        </p>
                                    </li>
                                    <li>A small box will open. Click the "<span className="font-semibold">Internet Time</span>" tab at the top.
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/internet-time-tab.png"
                                                alt="Screenshot of 'Date and Time' window showing 'Internet Time' tab."
                                                className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/internet-time-tab.png", "The 'Internet Time' tab in Date and Time settings")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            Check the 'Internet Time' tab to synchronize.
                                        </p>
                                    </li>
                                    <li>Make sure there's a checkmark next to "Synchronize with an Internet time server." If not, ask your teacher for help. This helps your computer automatically get the correct time from the internet.</li>
                                    <li>Click "OK" to close this window, then click the back arrow in the Control Panel.</li>
                                </ol>
                            </li>
                            <li>Practice: Go to "Clock and Region" and confirm your computer's time settings.</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">h. Ease of Access:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-2">
                            <li>What it does: This category helps people who might have difficulty seeing, hearing, or using a mouse or keyboard. It has tools to make the computer easier to use for everyone!</li>
                            <li>Use (Making Things Bigger - Magnifier):
                                <ol className="list-alpha pl-5 mt-2 space-y-2">
                                    <li>Click on "<span className="font-semibold">Ease of Access</span>".</li>
                                    <li>Now click on "<span className="font-semibold">Start Magnifier</span>" (under "Ease of Access Center").
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/start-magnifier.png"
                                                alt="Screenshot of 'Ease of Access Center' with 'Start Magnifier' highlighted."
                                                className="rounded-md shadow-md w-full max-w-lg h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/start-magnifier.png", "'Start Magnifier' option")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            Select 'Start Magnifier' to enlarge screen content.
                                        </p>
                                    </li>
                                    <li>Wow! A magnifying glass appears, making things on your screen look much bigger! This is very helpful if text is too small.
                                        <div className="flex justify-center mt-4">
                                            <img
                                                src="/images/computerBasics/magnifier-tool.png"
                                                alt="Screenshot of the Magnifier tool in action, enlarging part of the screen."
                                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                                onClick={() => handleImageClick("/images/computerBasics/magnifier-tool.png", "The Magnifier tool enlarging screen content")}
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                                            The Magnifier tool makes on-screen items larger.
                                        </p>
                                    </li>
                                    <li>To close the Magnifier, click the "X" in the small Magnifier window.</li>
                                    <li>Click the back arrow in the Control Panel.</li>
                                </ol>
                            </li>
                            <li>Practice: Open and close the Magnifier tool.</li>
                        </ul>
                    </li>
                </ul>

                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    You're doing incredibly well today! You've written and saved your work like a pro, and now you've bravely explored the computer's Control Panel, learning about its important categories. Keep up the fantastic work!
                </p>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-700 text-white py-4 px-6 text-center text-sm mt-8">
                <p>&copy; 2025 Computer Basics Course. All rights reserved.</p>
            </footer>

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
                            src={modalImage}
                            alt={modalAltText}
                            className="max-w-full max-h-screen object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CbWk2;