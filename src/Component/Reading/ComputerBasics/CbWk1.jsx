import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CbWk1 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Placeholder image for general computer interface, or specific parts if available
    const imageUrl = "/images/computer-setup.png"; // You'd replace this with an actual path to a general computer setup image

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                Computer Basics: Week 1 - First Steps with the Computer 🚀
            </h1>

            {/* Lesson 1 Section */}
            <section className="mb-8 p-4 rounded-lg border-l-4 border-blue-300 bg-blue-50">
                <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                    Lesson 1: Meet Your Computer! 🤝
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello! Today is a big day – you're starting your computer adventure!
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    What is this amazing machine?
                </p>
                <div className="p-3 bg-blue-100 rounded-md border border-blue-200 mb-6">
                    <p className="text-gray-800 leading-relaxed font-medium">
                        A computer is a smart helper. It lets you write, draw, watch videos, listen to music, and find information! Think of it like a very clever friend who can do many things for you.
                    </p>
                </div>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Let's meet the parts of your computer: 🖥️
                </h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">The Monitor:</span> This is the screen! Just like a TV, this is where you see everything the computer is doing. Look at it now – you can see different pictures and words.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/monitor.png"
                                alt="Image of a computer monitor."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The monitor displays everything your computer is doing.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold">The Keyboard:</span> This is where all the letters and numbers are. You'll use this to type words, like writing a letter or sending a message. Feel the keys – they're ready for your fingers!
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/keyboard.png"
                                alt="Image of a computer keyboard."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The keyboard is used for typing.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold">The Mouse:</span> This is a small helper you move with your hand. See the arrow (we call it a pointer) on your screen? It moves exactly where your mouse moves! This pointer helps you choose things on the screen.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/mouse.png"
                                alt="Image of a computer mouse."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The mouse helps you control the pointer on the screen.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold">The Tower (System Case):</span> This is the main box. It's the "brain" of the computer! All the thinking happens inside this box. Don't worry about what's inside for now, just know it's super important!
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/computer-tower.png"
                                alt="Image of a computer tower or system case."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The computer tower houses the main components of the computer.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold">Speakers:</span> These are for sound! When you watch a video or listen to music, the sound comes from here.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/speakers.png"
                                alt="Image of computer speakers."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Speakers produce sound from the computer.
                        </p>
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Turning Your Computer On and Off (The Right Way!) 💡
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    This is very important! We need to start and stop the computer correctly.
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">To Turn ON:</span> Find the power button on your Monitor and on your Tower. They usually have a special circle symbol (<span className="font-bold text-lg">⏻</span>). Press them once! Wait a little bit, and your screen will light up.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/power-symbol.png"
                                alt="Image of a typical power button symbol."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The universal power symbol.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold">To Turn OFF (Shut Down):</span> This is the most important part!
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                            <li>Look at the very bottom-left corner of your screen. See the **Windows Start Button** (it looks like four squares)? Click on it once with your mouse.
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/windows-start-button.png"
                                        alt="Image of the Windows Start button."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Windows Start button, usually in the bottom-left corner.
                                </p>
                            </li>
                            <li>Now, look for a little power symbol (<span className="font-bold text-lg">⏻</span> again). Click on that!</li>
                            <li>You'll see options like "**Shut Down**." Click on "**Shut Down**."
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/shut-down-option.png"
                                        alt="Screenshot of the Windows Start Menu with Shut Down option highlighted."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Click 'Shut Down' to safely turn off your computer.
                                </p>
                            </li>
                            <li>The screen will go dark, and the computer will turn off safely. Give it a moment.</li>
                            <li><span className="font-semibold text-red-700">Why is this important?</span> If you just pull the plug, you can break the computer or lose your work! We always shut down properly.</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Your Desktop – Your Workspace! 🖼️
                </h3>
                <ul className="list-disc pl-8 space-y-3 text-gray-700 mb-6">
                    <li>
                        When your computer starts, you see the **Desktop**. This is your main workspace, like a table where you put your tools.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/computer-desktop.png"
                                alt="Image of a typical computer desktop with icons and taskbar."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The Desktop is your main workspace, where you see icons and programs.
                        </p>
                    </li>
                    <li>
                        See the little pictures on your desktop? Those are **Icons**. They are shortcuts to programs or files. We'll use them more later!
                    </li>
                    <li>
                        At the very bottom, there's a long bar. That's the **Taskbar**. It shows you what programs are open.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/windows-taskbar.png"
                                alt="Image of the Windows Taskbar at the bottom of the screen."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The Taskbar shows open applications and system icons.
                        </p>
                    </li>
                    <li>
                        The **Start Button / Start Menu:** On the left side of the Taskbar is the Start Button (the four squares). Click it now! A menu pops up – that's the Start Menu. It's your doorway to all your programs and settings!
                    </li>
                    <li>
                        The **Notification Area:** On the far right of the Taskbar, near the clock, is the Notification Area. It shows you quick updates like your internet connection (Wi-Fi) or speaker volume.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Let's Practice with the Mouse! 🖱️
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    The mouse is your pointer's best friend.
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">Hold it gently:</span> Place your hand over the mouse. Your first finger should rest on the left button, and your middle finger on the right button.
                    </li>
                    <li>
                        <span className="font-semibold">Move the mouse:</span> Slide the mouse on your desk. See how the arrow pointer on the screen moves with your hand? Great job!
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/mouse-pointer.png"
                                alt="Image of a mouse pointer on a computer screen."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The mouse pointer moves with your physical mouse.
                        </p>
                    </li>
                    <li>
                        <span className="font-semibold">Left Click (The "OK" Button):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                            <li>Point your arrow over an icon (like the "**Recycle Bin**").</li>
                            <li>Press the **left mouse button once** and let go. This is a "click."</li>
                            <li>Congratulate yourself! You just **selected** that icon. It changes color slightly.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Left Double-Click (The "Open This!" Button):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                            <li>Point your arrow over the "**Recycle Bin**" icon again.
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/recycle-bin-icon.png"
                                        alt="Image of the Recycle Bin icon on the desktop."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Recycle Bin icon, often found on the desktop.
                                </p>
                            </li>
                            <li>Now, press the **left mouse button twice, very quickly! Click-click!**</li>
                            <li>Wow! The Recycle Bin window opened! You just launched your first "program"!</li>
                            <li>To close it, look for the little "**X**" in the top-right corner of the window. Click the "**X**" once.
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/window-close-button.png"
                                        alt="Screenshot of an open window with the close (X) button highlighted."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Click the 'X' to close an open window.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Right Click (The "More Options" Button):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                            <li>Point your arrow over an empty space on your Desktop.</li>
                            <li>Press the **right mouse button once** and let go.</li>
                            <li>See a new menu pop up? This gives you "more options" for that spot. Don't click on anything else for now, just left-click on an empty space to make the menu disappear.
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/right-click-menu.png"
                                        alt="Screenshot of a right-click context menu on the desktop."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    A right-click menu provides more options.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ol>

                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    Great work in Session 1! 🎉
                </p>
                <p className="text-gray-700 leading-relaxed">
                    You've met your computer, learned how to start and stop it, and started making friends with your mouse. Give yourself a pat on the back! We'll do more next time.
                </p>
            </section>

            {/* Lesson 2 Section - Distinct Styling */}
            <section className="mt-8 p-4 rounded-lg border-l-4 border-green-300 bg-green-50">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                    Lesson 2: Moving Around & Making It Your Own! 📁🎨
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello again, smart learner! Today, we'll learn how to find things on your computer and make your screen look nice.
                </p>

                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                    Finding Your Way Around (My Computer / This PC) 🧭
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Your computer has places to store all your work, like a big cabinet. We find these places using "**My Computer**" or "**This PC**."
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li>Look on your Desktop for an icon that says "**This PC**" or "**My Computer**."
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/this-pc-icon.png"
                                alt="Image of the 'This PC' or 'My Computer' icon on the desktop."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The 'This PC' icon provides access to your computer's storage.
                        </p>
                    </li>
                    <li>Point your mouse arrow over it.</li>
                    <li>Double-click (left button, twice, fast!) that icon.</li>
                    <li>Fantastic! A new window opens. This window shows you the different storage parts of your computer. You might see something called "**Local Disk (C:)**" – that's your computer's main storage.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/this-pc-window.png"
                                alt="Screenshot of the 'This PC' window showing storage drives."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The 'This PC' window shows your computer's storage locations.
                        </p>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                    Let's Create a Folder! 📂
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    A folder is like a clear bag or a file cabinet drawer. It helps you keep your files organized.
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li>Make sure you are on the Desktop (close any open windows by clicking the "**X**").</li>
                    <li>Find an empty space on your Desktop.</li>
                    <li>Right-click (remember, the right mouse button!) on that empty space.</li>
                    <li>A menu will pop up. Move your mouse pointer down to "**New**". Don't click yet!
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/right-click-menu.png"
                                alt="Screenshot of the right-click menu on the desktop with 'New' option highlighted."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Right-click on an empty space to open this menu.
                        </p>
                    </li>
                    <li>Another small menu will appear next to it. Move your mouse to "**Folder**" and then left-click once.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/new-folder-option.png"
                                alt="Screenshot of the 'New' submenu showing the 'Folder' option."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Select 'Folder' from the 'New' submenu.
                        </p>
                    </li>
                    <li>Amazing! A new folder appears. It will be highlighted, ready for a name. Type "**My Files**" and then press the **Enter** key on your keyboard.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/new-folder-created.png"
                                alt="Image of a newly created folder icon, ready for typing a name."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            A new folder appears, ready for you to type its name.
                        </p>
                    </li>
                    <li>Congratulations! You just made your very first folder! You're becoming a computer organizer!</li>
                </ol>
                <div className="p-3 bg-green-100 rounded-md border border-green-200 mb-6 flex items-center">
                    <span className="text-green-700 text-2xl mr-2">💡</span>
                    <p className="text-gray-800 leading-relaxed font-medium">
                        <span className="font-bold">Did You Know?</span> There's a quick way to make a new folder! While you're on the Desktop or in an open folder, you can hold down the <span className="font-bold">Shift</span> key AND the <span className="font-bold">Ctrl</span> key, then press the letter <span className="font-bold">N</span> (for New). Try it! (Shift + Ctrl + N). A new folder will appear like magic! ✨
                    </p>
                </div>

                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                    Adding and Deleting Icons (Shortcuts) 🗑️
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Icons on your desktop are like quick ways to open programs.
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li><span className="font-semibold">To Add an Icon (Shortcut):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                            <li>Click the **Start Button** (bottom-left, the four squares).</li>
                            <li>Look at the list of programs. Find a program like "**Notepad**" or "**WordPad**" (we'll use these more later!).
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/start-menu-notepad.png"
                                        alt="Screenshot of the Windows Start Menu with Notepad highlighted in the program list."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Find programs like Notepad in the Start Menu.
                                </p>
                            </li>
                            <li>Click and hold down the left mouse button on "Notepad."</li>
                            <li>Drag the icon all the way to your Desktop and then let go of the mouse button.
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/notepad-shortcut-desktop.png"
                                        alt="Image of the Notepad shortcut icon placed on the desktop."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    A shortcut appears on your desktop.
                                </p>
                            </li>
                            <li>Excellent! You now have a shortcut for Notepad on your desktop!</li>
                        </ul>
                    </li>
                    <li><span className="font-semibold">To Delete an Icon (Shortcut):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                            <li>Point your arrow over the Notepad icon you just put on the Desktop.</li>
                            <li>Right-click on it.
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/shortcut-right-click-menu.png"
                                        alt="Screenshot of the right-click menu on a desktop shortcut."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Right-click on the shortcut to see more options.
                                </p>
                            </li>
                            <li>A menu appears. Look for "**Delete**" and left-click on it.</li>
                            <li>It will ask, "Are you sure you want to move this shortcut to the Recycle Bin?" Click "**Yes**".
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/delete-shortcut-confirmation.png"
                                        alt="Screenshot of the confirmation dialog when deleting a shortcut."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Confirm to move the shortcut to the Recycle Bin.
                                </p>
                            </li>
                            <li>Good job! Remember, you only deleted the **shortcut** from the desktop, not the program itself. The program is still in your Start Menu!</li>
                        </ul>
                    </li>
                </ol>
            </section>

            {/* Lesson 3 Section - Distinct Styling */}
            <section className="mt-8 p-4 rounded-lg border-l-4 border-purple-300 bg-purple-50">
                <h2 className="text-3xl font-semibold text-purple-800 mb-4">
                    Lesson 3: Making Your Computer Screen Look Nice (Personalization!) ✨
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You can change how your computer screen looks!
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li>Find an empty space on your Desktop.</li>
                    <li>Right-click on that empty space.</li>
                    <li>From the menu, left-click on "**Personalize**".
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/right-click-personalize.png" // Placeholder for right-click menu with Personalize
                                alt="Screenshot of the desktop right-click menu with 'Personalize' highlighted."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Right-click on the desktop and select 'Personalize'.
                        </p>
                    </li>
                    <li>A new window opens! This is where you change many things.
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/personalization-window.png" // Placeholder for Personalization settings window
                                alt="Screenshot of the Personalization settings window in Windows."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The Personalization window allows you to customize your desktop.
                        </p>
                    </li>
                    <li><span className="font-semibold">Changing Background (Wallpaper):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                            <li>In the "Personalize" window, on the left side, make sure "**Background**" is selected.
                                <div className="flex justify-center mt-6">
                                    <img
                                        src="/images/computerBasics/personalize-background.png" // Placeholder for Background section in Personalization
                                        alt="Screenshot of the 'Background' section within Personalization settings, showing wallpaper options."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Choose 'Background' to change your desktop wallpaper.
                                </p>
                            </li>
                            <li>Look at the pictures. Click on a picture you like.</li>
                            <li>Wow! Look at your Desktop! It has a new background.</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                    Playing Music and Videos! ▶️
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Your computer can be a great entertainment center!
                </p>
                <ol className="list-decimal pl-8 space-y-3 text-gray-700 mb-6">
                    <li>Your teacher will show you where to find a sample video file or music file on the computer. It might be in a folder like "**Videos**" or "**Music**."
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/sample-media-file.png" // Placeholder for a sample video/music file icon
                                alt="Image of a sample video or music file icon."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            Look for video or music files in their respective folders.
                        </p>
                    </li>
                    <li>Point your mouse arrow over the video file.</li>
                    <li>Double-click that file.</li>
                    <li>Hear that? See that? The video or music started playing! You're now a media manager!
                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/computerBasics/media-player-window.png" // Placeholder for a media player window playing content
                                alt="Screenshot of a media player window playing a video or music."
                                className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            The media player will open and start playing.
                        </p>
                    </li>
                    <li>To stop it, look for the "**X**" in the top-right corner of the player window and click it.</li>
                </ol>

                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    You've done so much today! ✨
                </p>
                <p className="text-gray-700 leading-relaxed">
                    You're navigating like a pro, organizing your files, and making your computer look personal. You're building confidence with every click! Get ready for some serious typing practice next time!
                </p>
            </section>


            {/* Footer Section */}
            <footer className="bg-blue-700 text-white py-4 px-6 text-center text-sm mt-8">
                <p>&copy; 2025 Computer Basics Course. All rights reserved.</p>
            </footer>

            {/* Full-screen Modal for Image (using the general computer setup placeholder) */}
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
                            alt="Computer Setup Diagram - Full Screen"
                            className="max-w-full max-h-screen object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CbWk1;