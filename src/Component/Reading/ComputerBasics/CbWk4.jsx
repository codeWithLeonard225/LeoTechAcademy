import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CbWk4 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // Not used in this specific content, but kept for consistency if you add interactive images

    const handleBackClick = () => {
        navigate(-1);
    };

    // Placeholder functions for modal, if you decide to implement image modals later
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
                Computer Basics: Week 4 - Keeping Your Computer Healthy & Looking Ahead! 🚀
            </h1>

            {/* Lesson 9 Section */}
            <section className="mb-8 p-4 rounded-lg border-l-4 border-purple-300 bg-purple-50">
                <h2 className="text-3xl font-semibold text-purple-800 mb-4">
                    Lesson 9: Keeping Your Computer Clean & Running Smoothly 🧼
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello, amazing computer managers! Today, we're going to learn how to keep your
                    computer tidy and running well, just like you clean your home! A clean computer
                    is a happy computer.
                </p>

                <h3 className="text-2xl font-semibold text-purple-700 mb-3">Why is Cleaning Important?</h3>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>
                        Just like a dusty room can make it hard to breathe, a "messy" computer (full of old files or dust) can run slowly or have problems.
                    </li>
                    <li>
                        Cleaning helps your computer work **faster** and last **longer**!
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold text-purple-700 mb-3">Part 1: Digital Cleaning (Tidying Up Your Files!) 🗑️</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    You've already learned some of this, but let's practice making sure your digital space is neat!
                </p>

                {/* Recycle Bin */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">1. The Recycle Bin (Your Computer's Trash Can!)</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Remember this icon on your Desktop? It's where files go when you delete them.
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/recycle-bin-icon.png"
                                alt="Image of the Recycle Bin icon on a desktop."
                                className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">The Recycle Bin icon.</p>
                    </li>
                    <li>**Finding it:** Look for the **Recycle Bin** icon on your Desktop.</li>
                    <li>**Opening it:** Double-click the **Recycle Bin** icon.</li>
                    <li>**Seeing what's inside:** You'll see any files you've recently deleted.</li>
                    <li>**Restoring a file:** If you accidentally deleted something, you can get it back! **Right-click** on a file in the Recycle Bin, and choose "**Restore**". The file goes back to where it was!</li>
                    <li>**Emptying the Recycle Bin (Permanent Delete!):**
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                            <li>When you are sure you don't need any of the files in the Recycle Bin, you can empty it.</li>
                            <li>**Right-click** on the **Recycle Bin** icon on your Desktop.</li>
                            <li>Choose "**Empty Recycle Bin**".</li>
                            <li>The computer will ask, "Are you sure you want to permanently delete these files?" Click "**Yes**".</li>
                            <li>Great job! Your Recycle Bin is now empty, freeing up space on your computer!</li>
                            <li>
                                💡 **Important!** Once you empty the Recycle Bin, the files are usually gone forever. Be careful before you empty it!
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* Deleting Unnecessary Files */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">2. Deleting Unnecessary Files and Folders:</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Sometimes we download files we only need once, or create practice folders we don't need anymore. These can take up space.
                </p>
                <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Open "**This PC**" from your Desktop.</li>
                    <li>Click on "**Downloads**" on the left side. This folder often has many old files!
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/downloads-folder.png"
                                alt="Image of the Downloads folder in File Explorer."
                                className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">The Downloads folder in File Explorer.</p>
                    </li>
                    <li>Look for any files or folders you know you don't need anymore (maybe an old document, or a picture you copied twice).</li>
                    <li>Click on it once to **select** it.</li>
                    <li>Press the **Delete (Del) key** on your keyboard.</li>
                    <li>The file will disappear (it goes to the Recycle Bin!).</li>
                    <li>Congratulations! You're clearing out old clutter!</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mb-6">
                    💡 **Tip!** It's always a good idea to keep your "**Documents**" and "**Pictures**" folders organized and delete old files you don't need.
                </p>

                {/* Basic Disk Cleanup */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">3. Basic Disk Cleanup (Windows' Built-in Sweeper!)</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Your computer has a special tool to find and remove old, temporary files that you don't see easily.
                </p>
                <h5 className="text-lg font-semibold text-purple-500 mb-2">How to find it:</h5>
                <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Open "**This PC**" from your Desktop.</li>
                    <li>**Right-click** on your main storage drive, usually called "**Local Disk (C:)**".</li>
                    <li>From the menu, choose "**Properties**".
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/local-disk-properties.png"
                                alt="Image of Local Disk C properties menu."
                                className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">Right-click Local Disk (C:) and choose 'Properties'.</p>
                    </li>
                    <li>In the new window, look for a button that says "**Disk Cleanup**". Click it!
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/disk-cleanup-button.png"
                                alt="Image of Disk Cleanup button in drive properties."
                                className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">Click 'Disk Cleanup'.</p>
                    </li>
                    <li>The computer will take a few moments to scan.</li>
                    <li>A new window will show you different types of files you can clean. For now, just look at it. Don't click "**OK**" yet unless your teacher tells you to. This shows you how much space you can save!</li>
                    <li>Click "**Cancel**" to close the Disk Cleanup window for now.</li>
                </ol>
                <p className="text-gray-800 leading-relaxed text-lg font-bold mt-4">
                    Great! You know where to find this useful tool!
                </p>

                <h3 className="text-2xl font-semibold text-purple-700 mb-3 mt-8">Part 2: Physical Cleaning (Keeping Your Computer Clean on the Outside!) 🧹</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Dust and dirt can hurt your computer's parts inside and out.
                </p>

                {/* Cleaning the Screen */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">1. Cleaning the Screen (Monitor):</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Use a **soft, clean, dry cloth** (like a microfiber cloth).</li>
                    <li>Gently wipe the screen to remove dust and fingerprints.</li>
                    <li>**NEVER spray liquid directly on the screen!** Spray it on the cloth first, if needed, and make sure the computer is **OFF**.</li>
                </ul>

                {/* Cleaning the Keyboard */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">2. Cleaning the Keyboard:</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Turn the keyboard upside down and gently shake out any crumbs or dust.</li>
                    <li>You can use a soft brush or a special keyboard vacuum (ask your teacher).</li>
                    <li>Avoid eating and drinking near your keyboard! **Spills are very dangerous** for keyboards.</li>
                </ul>

                {/* Cleaning the Mouse */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">3. Cleaning the Mouse:</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Wipe the top and bottom of your mouse with a soft, dry cloth. Keep the sensor (the light underneath) clean.</li>
                </ul>

                {/* Keeping the Area Dust-Free */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">4. Keeping the Area Dust-Free:</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>Try to keep the area around your computer clean and free of excessive dust. This helps the computer stay cool.</li>
                </ul>

                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    You've done an excellent job learning how to keep your computer clean and healthy, inside and out! This will help it serve you well for a long time. You're becoming a true computer guardian! ✨
                </p>
            </section>

            {/* --- */}

            {/* Lesson 10 Section */}
            <section className="mt-8 p-4 rounded-lg border-l-4 border-green-300 bg-green-50">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                    Lesson 10: Troubleshooting Simple Problems & Staying Healthy with Your Computer 👩‍⚕️
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello, resilient learners! Today, we'll learn what to do when your computer acts a little funny, and how to use it safely for your body.
                </p>

                <h3 className="text-2xl font-semibold text-green-700 mb-3">Part 1: Troubleshooting Simple Problems (Being Your Own Computer Helper!) 🛠️</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Sometimes computers can freeze or slow down. Don't panic! You can often fix simple problems yourself.
                </p>

                {/* Program Stuck */}
                <h4 className="text-xl font-semibold text-green-600 mb-2">1. "My Program is Stuck!" (Closing a Frozen Program):</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Sometimes a program stops working and won't close. This is called "freezing."
                </p>
                <h5 className="text-lg font-semibold text-green-500 mb-2">How to fix:</h5>
                <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Hold down these three keys at the same time: **Ctrl + Alt + Delete** (Press Ctrl, then Alt, then Del, all together!).
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/ctrl-alt-del.png"
                                alt="Image of Ctrl, Alt, and Delete keys."
                                className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">Press Ctrl + Alt + Delete together.</p>
                    </li>
                    <li>A blue screen will appear. Click on "**Task Manager**".</li>
                    <li>The Task Manager window shows you all the programs running. Look for the program that says "**Not Responding**" or is highlighted.
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/task-manager-frozen-app.png"
                                alt="Image of Task Manager with a 'Not Responding' application."
                                className="rounded-md shadow-md w-full max-w-lg h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">Find 'Not Responding' app in Task Manager.</p>
                    </li>
                    <li>Click on the name of the frozen program once.</li>
                    <li>Click the "**End task**" button (usually at the bottom-right).</li>
                    <li>Great job! The frozen program should close.</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mb-6">
                    **Practice:** Your teacher will simulate a frozen program to let you practice this important skill.
                </p>

                {/* Computer Slow/Frozen */}
                <h4 className="text-xl font-semibold text-green-600 mb-2">2. "My Computer is Slow/Frozen!" (Restarting the Computer):</h4>
                <p className="text-700 leading-relaxed mb-4">
                    If many programs are stuck, or the whole computer is very slow, a simple **Restart** can fix many problems.
                </p>
                <h5 className="text-lg font-semibold text-green-500 mb-2">How to Restart:</h5>
                <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-4">
                    <li>Click the **Start Button** (bottom-left, four squares).
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/windows-start-button.png"
                                alt="Image of the Windows Start button."
                                className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">Click the Start Button.</p>
                    </li>
                    <li>Click the **Power icon** (⏻).
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/power-icon-start-menu.png"
                                alt="Image of the power icon in the Start Menu."
                                className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">The power icon in the Start Menu.</p>
                    </li>
                    <li>Click "**Restart**".
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/restart-option.png"
                                alt="Image of the Restart option in the power menu."
                                className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">Select 'Restart' from the power options.</p>
                    </li>
                    <li>The computer will turn off and then turn itself back on. This is like giving it a fresh start!</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mb-6">
                    💡 **Important!** Always try to save your work before restarting, if possible.
                </p>

                {/* Turn Off and On Again */}
                <h4 className="text-xl font-semibold text-green-600 mb-2">3. "Have You Tried Turning It Off and On Again?" (The Magic Fix!):</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                    This might sound funny, but many small problems (like internet not working, or sound not playing) can be fixed by completely turning off your computer and then turning it back on. Always use the **proper Shut Down method** (from Session 1) for this.
                </p>

                <h3 className="text-2xl font-semibold text-green-700 mb-3 mt-8">Part 2: Staying Healthy with Your Computer (Digital Well-Being!) 🧘‍♀️</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Using the computer is great, but it's important to use it in a way that is good for your body and your eyes.
                </p>

                {/* Good Posture */}
                <h4 className="text-xl font-semibold text-green-600 mb-2">1. Good Posture (Sitting Correctly!):</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
                    <li>**Sit Straight:** Keep your back straight against the chair, but relaxed.</li>
                    <li>**Feet Flat:** Your feet should be flat on the floor or on a footrest.</li>
                    <li>**Arms Relaxed:** Your elbows should be bent at about a 90-degree angle.</li>
                    <li>**Eyes Level:** Your monitor should be at arm's length, and the top of the screen should be about eye level or slightly below. This saves your neck and eyes!
                        <div className="flex justify-center my-4">
                            <img
                                src="/images/computerBasics/good-posture.png"
                                alt="Image illustrating good computer posture."
                                className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 text-center italic">Maintain good posture to avoid strain.</p>
                    </li>
                    <li>**Practice:** Your teacher will help you adjust your chair and screen for good posture.</li>
                </ul>

                {/* Taking Breaks */}
                <h4 className="text-xl font-semibold text-green-600 mb-2">2. Taking Breaks (For Your Eyes and Body!):</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
                    <li>It's not good to stare at the screen for too long without a break.</li>
                    <li>**The 20-20-20 Rule:** Every **20 minutes**, look at something **20 feet** away for at least **20 seconds**. This helps your eyes relax.</li>
                    <li>**Stretch and Move:** Get up, walk around, and stretch your arms and legs every hour or so. This prevents stiffness.</li>
                    <li>**Practice:** We will take a 5-minute stretching break during this session!</li>
                </ul>

                {/* Good Lighting */}
                <h4 className="text-xl font-semibold text-green-600 mb-2">3. Good Lighting:</h4>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>Make sure there's enough light in the room, but the light should not reflect off your screen into your eyes. Avoid **glare**!</li>
                </ul>

                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    You are now learning how to be a smart computer user who knows how to fix small problems and take care of your body while using technology! Keep practicing these healthy habits. 🌱
                </p>
            </section>

            {/* --- */}

            {/* Bonus 11 Section */}
            <section className="mt-8 p-4 rounded-lg border-l-4 border-yellow-300 bg-yellow-50">
                <h2 className="text-3xl font-semibold text-yellow-800 mb-4">
                    Bonus 11: Review & Your Next Steps! 🎉
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello, incredible computer learners! This is our last session of the Computer Basics course. Today, we'll review everything you've learned and talk about your exciting next steps!
                </p>

                <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Part 1: Reviewing Your Journey!</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Let's think about all the amazing things you can now do:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>**Computer Basics:** You know the parts of a computer and how to turn it on and off safely.</li>
                    <li>**Mouse Mastery:** You can click, double-click, and right-click like a pro!</li>
                    <li>**Keyboard Superpowers:** You know the job of every key and can type basic sentences.</li>
                    <li>**Navigating Windows:** You can use the Desktop, Taskbar, Start Menu, and "This PC" to find your way around.</li>
                    <li>**Personalization:** You can change your background and organize your desktop.</li>
                    <li>**Saving Work:** You can create documents and save them so you don't lose them!</li>
                    <li>**Control Panel:** You know how to find and use basic settings for sound, date/time, and user accounts.</li>
                    <li>**Managing Software:** You know how to install and uninstall programs safely.</li>
                    <li>**Sharing Files:** You can copy files to and from USB drives and even your phone!</li>
                    <li>**Internet Connection:** You can connect your computer to the internet using your phone's hotspot.</li>
                    <li>**Basic Security:** You know about viruses, antivirus, being careful what you click, and strong passwords.</li>
                    <li>**Cleaning & Maintenance:** You can digitally clean your computer and know how to fix simple problems!</li>
                    <li>**Healthy Habits:** You know about good posture and taking breaks.</li>
                </ul>

                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    Wow! You've learned so much! Give yourselves a huge round of applause! 👏 Your journey in computer literacy has truly just begun! What's next for you on your digital adventure?
                </p>
            </section>
              {/* Footer Section */}
            <footer className="bg-blue-700 text-white py-4 px-6 text-center text-sm mt-8">
                <p>&copy; 2025 Computer Basics Course. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CbWk4;