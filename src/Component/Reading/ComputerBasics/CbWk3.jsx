import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CbWk3 = () => {
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
                Computer Basics: Week 3 - Sharing & Connecting! 🔗
            </h1>

            {/* Lesson 6 Section - Connecting Phone & Sharing Files */}
            <section className="mb-8 p-4 rounded-lg border-l-4 border-purple-400 bg-purple-50">
                <h2 className="text-3xl font-semibold text-purple-800 mb-4">
                    Lesson 6: Connecting Your Phone to the Computer & Sharing Files 📱↔️💻
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello, savvy learners! Today, we're going to bridge the gap between your phone and your
                    computer! You'll learn how to connect them and share files like music, videos,
                    and photos.
                </p>

                <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                    Connecting Your Phone to Your Computer (Communicating!)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Your phone and computer can talk to each other! We mostly use a USB cable for this.
                </p>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">Find Your Phone's USB Cable:</span> This is the cable you use to charge your phone.
                    </li>
                    <li>
                        <span className="font-semibold">Find a USB Port on Your Computer:</span> Look on the front or sides of your computer (the Tower) for
                        a small rectangular slot.
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Carefully plug one end of the USB cable into your phone.</li>
                            <li>Carefully plug the other end of the USB cable into the computer's USB port.
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/usb-ports.png"
                                        alt="Image showing various USB ports on a computer."
                                        className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/usb-ports.png", "Various USB ports")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    USB ports are typically rectangular and found on the front or sides of the computer.
                                </p>
                            </li>
                            <li>Listen! You might hear a small sound from your computer, telling you something new has been plugged in.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">On Your Phone (Important Step!):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Once connected, look at your phone's screen.</li>
                            <li>You might see a message pop up asking, "Allow access to phone data?" or "Use USB for?"
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/phone-usb-options.png"
                                        alt="Screenshot of a phone asking for USB connection options like 'Allow access' or 'File transfer'."
                                        className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/phone-usb-options.png", "Phone USB connection options")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Your phone will ask for permission or connection type when connected via USB.
                                </p>
                            </li>
                            <li>You MUST tap "Allow" or choose "File transfer" / "MTP" on your phone. If you don't do this, your computer won't be able to see your phone's files.</li>
                            <li>💡 Tip! Sometimes you need to swipe down from the top of your phone screen to see these options in the "Notifications" area.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">On Your Computer (Finding Your Phone):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Now, open "This PC" on your Desktop (double-click its icon).</li>
                            <li>Look for your phone's name (like "Tecno Pop", "Samsung Phone", or "iPhone") listed under "Devices and drives."
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/this-pc-phone.png"
                                        alt="Screenshot of 'This PC' window showing a connected phone under 'Devices and drives'."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/this-pc-phone.png", "Connected phone in 'This PC'")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Your connected phone will appear under "Devices and drives" in "This PC".
                                </p>
                            </li>
                            <li>Double-click on your phone's icon.</li>
                            <li>Yes! You're now inside your phone's storage from your computer!</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                    Sharing Files: Copying Music, Videos, and Photos!
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Now that your computer can see your phone, let's copy some files!
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                    <span className="font-semibold">What is Copying?</span> It means making a duplicate or copy of a file. The original file stays
                    where it is, and you get a new version in a new place.
                </p>
                <h4 className="text-xl font-semibold text-purple-700 mb-2">Let's copy from your Phone to your Computer:</h4>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">Inside your phone's storage</span> (the window you just opened from "This PC"),
                        find a common folder where pictures and videos are kept. It's often called
                        "DCIM" (for photos/videos) or "Pictures" or
                        "Videos" or "Music".
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Double-click to open one of these folders.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Find a file to copy:</span> See a picture or video file you want to copy?
                    </li>
                    <li>
                        <span className="font-semibold">Select the file:</span> Click on it once with your left mouse button.
                    </li>
                    <li>
                        <span className="font-semibold">Copy the file:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Right-click on the selected file.</li>
                            <li>From the menu that pops up, left-click on "Copy". (Nothing seems to happen, but the computer remembered the file!)</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Go to your computer's "Pictures" or "Videos" folder:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>On the left side of your "This PC" window, you'll see "Pictures" or "Videos" under "This PC". Click on "Pictures" or "Videos" once.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Paste the file:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Find an empty space in the "Pictures" or "Videos" folder window.</li>
                            <li>Right-click in that empty space.</li>
                            <li>From the menu, left-click on "Paste".</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Amazing!</span> You just copied a file from your phone to your computer! See the file appear?
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-purple-700 mb-3">
                    Using USB Flash Drives (Pendrives) for Copying Files Locally
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    A USB Flash Drive (or "pendrive") is like a tiny, portable storage box. You can
                    put files on it and carry them to another computer!
                </p>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">Insert the USB Drive:</span> Find a USB port on your computer. Gently push the USB drive into the
                        port until it clicks.
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You might hear a sound from your computer.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Open the USB Drive:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Open "This PC" from your Desktop.</li>
                            <li>Look for a new icon that says "USB Drive (E:)" or similar (the letter might be different).
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/usb-drive-icon.png"
                                        alt="Screenshot of 'This PC' showing a connected USB drive."
                                        className="rounded-md shadow-md w-full max-w-xl h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/usb-drive-icon.png", "USB drive icon in 'This PC'")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    A USB drive appears as a new icon under "Devices and drives."
                                </p>
                            </li>
                            <li>Double-click on your USB drive's icon. You're in!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Copying Files To and From the USB Drive:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><span className="font-semibold">Copying a file from your computer to the USB drive:</span>
                                <ul className="list-circle pl-5 mt-1 space-y-1">
                                    <li>Go to your "Documents" folder (from "This PC").</li>
                                    <li>Find the "My First Story" file we made earlier.</li>
                                    <li>Right-click on "My First Story". Choose "Copy".</li>
                                    <li>Now, go back to your USB Drive window.</li>
                                    <li>Right-click in an empty space inside the USB Drive window. Choose "Paste".</li>
                                    <li>Wonderful! Your story is now on your USB drive too!</li>
                                </ul>
                            </li>
                            <li>💡 Did You Know? You can also drag and drop files! Click and hold the left mouse button on a file, drag it to the USB Drive icon on the left, and let go!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Safely Removing Your USB Drive (VERY IMPORTANT!):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>NEVER just pull out the USB drive! This can damage the drive or lose your files.</li>
                            <li>Look at the Notification Area (bottom-right of your screen, near the clock).</li>
                            <li>Find a small icon that looks like a USB plug with a checkmark (✓).
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/safely-remove-hardware.png"
                                        alt="Screenshot of the 'Safely Remove Hardware' icon in the Windows Notification Area."
                                        className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/safely-remove-hardware.png", "Safely Remove Hardware icon")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Always safely eject your USB drive before removing it.
                                </p>
                            </li>
                            <li>Click on this icon once.</li>
                            <li>A small box will pop up. Click on "Eject [Your USB Drive Name]".</li>
                            <li>The computer will say "Safe to Remove Hardware." Now you can gently pull out your USB drive.</li>
                            <li>Congratulations! You've safely moved files!</li>
                        </ul>
                    </li>
                </ol>
                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    Today, you've connected your phone, copied files, and learned to use a USB drive
                    safely! These are truly powerful skills. Give yourself a big cheer!
                </p>
            </section>

            <hr className="my-8 border-gray-300" />

            {/* Lesson 7 Section - Internet */}
            <section className="mb-8 p-4 rounded-lg border-l-4 border-emerald-400 bg-emerald-50">
                <h2 className="text-3xl font-semibold text-emerald-800 mb-4">
                    Lesson 7: Your Window to the World (Internet!) 🌐
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello, curious minds! Today is an exciting day – we're going to connect your computer to the amazing world of the Internet!
                </p>
                <h3 className="text-2xl font-semibold text-emerald-700 mb-3">What is the Internet?</h3>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>Imagine a giant library, a huge post office, and a global marketplace, all connected together! That's the Internet.</li>
                    <li>It lets computers all over the world talk to each other.</li>
                    <li>Why use it? To find information, read news, watch videos, listen to music, learn new things, and much more!</li>
                </ul>

                <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
                    Connecting Your Phone's Internet to Your Computer (Hotspot / Tethering!)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Many people in Sierra Leone use their phones to get internet. You can share your phone's
                    internet with your computer! This is called tethering or using your
                    phone as a hotspot.
                </p>

                <h4 className="text-xl font-semibold text-emerald-700 mb-2">Method 1: Wi-Fi Hotspot (Using your phone wirelessly)</h4>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">On Your Phone:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Go to your phone's Settings app.</li>
                            <li>Look for "Network & Internet," "Connection & Sharing," or "Hotspot & Tethering." (The name can vary between phones).</li>
                            <li>Find and tap on "Personal Hotspot" or "Wi-Fi Hotspot".</li>
                            <li>Turn it ON.</li>
                            <li><span className="font-bold">Very Important:</span> Note down the "Hotspot Name" (also called SSID) and the "Password" shown on your phone screen. You'll need these!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">On Your Computer:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Look at the Notification Area (bottom-right of the Taskbar).</li>
                            <li>Click on the Wi-Fi icon (it looks like curved lines, ⌢).
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/wifi-icon-taskbar.png"
                                        alt="Screenshot of the Wi-Fi icon in the Windows Taskbar Notification Area."
                                        className="rounded-md shadow-md w-full max-w-xs h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/wifi-icon-taskbar.png", "Wi-Fi icon on Taskbar")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Wi-Fi icon is typically found in the notification area of your taskbar.
                                </p>
                            </li>
                            <li>A list of Wi-Fi networks will appear. Find your phone's Hotspot Name (the one you noted down).</li>
                            <li>Click on your phone's Hotspot Name in the list.</li>
                            <li>Click the "Connect" button.</li>
                            <li>The computer will ask for the "Security key" or "Password". Type in the password you noted down from your phone. Make sure it's exactly right (capital letters, small letters, numbers!).</li>
                            <li>Click "Next" or "OK".</li>
                            <li>Congratulations! Your computer is now connected to the internet using your phone! The Wi-Fi icon on your computer should now show a solid connection.</li>
                        </ul>
                    </li>
                </ol>

                <h4 className="text-xl font-semibold text-emerald-700 mb-2">Method 2: USB Tethering (Using a cable)</h4>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">On Your Phone:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Plug your phone into the computer with its USB cable (like we did in Session 6).</li>
                            <li>On your phone, go to Settings &gt; "Network & Internet" or "Connection & Sharing."</li>
                            <li>Find "USB Tethering" and turn it ON.</li>
                            <li>💡 Tip! If your phone asks "Allow access to phone data?", choose "No" or "Charge only" for this method, as we just want the internet, not file access.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">On Your Computer:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Your computer should automatically detect the internet connection from your phone via the USB cable. You won't see a Wi-Fi icon, but the internet connection icon in the Notification Area should show it's connected.</li>
                            <li>Hooray! Your computer is now online!</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
                    Exploring the Internet with a Web Browser!
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    A Web Browser is a special program that lets you visit websites on the Internet.
                    Think of it as your internet window!
                </p>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">Open a Web Browser:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Look for icons like Google Chrome (Chrome) or Microsoft Edge (E) on your Taskbar or Desktop. Click on one to open it!
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/browser-icons.png"
                                        alt="Image showing common web browser icons like Chrome and Edge."
                                        className="rounded-md shadow-md w-full max-w-sm h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/browser-icons.png", "Web browser icons")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    Common web browser icons like Google Chrome and Microsoft Edge.
                                </p>
                            </li>
                            <li>Great! A new window opens. This is your web browser!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Visiting a Website:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Look for the long bar at the very top of the browser window. This is the Address Bar (sometimes called the URL bar). It's where you type website addresses.</li>
                            <li>Click in the Address Bar. Type this address: <span className="font-mono">www.google.com</span> (this is a very famous search website).</li>
                            <li>Press the Enter key on your keyboard.
                                <div className="flex justify-center my-4">
                                    <img
                                        src="/images/computerBasics/google-homepage.png"
                                        alt="Screenshot of the Google search engine homepage."
                                        className="rounded-md shadow-md w-full max-w-2xl h-auto border border-gray-200"
                                        onClick={() => handleImageClick("/images/computerBasics/google-homepage.png", "Google homepage")}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center italic">
                                    The Google search engine homepage.
                                </p>
                            </li>
                            <li>Amazing! You're on the Google website!</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Searching for Information:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>On the Google website, you'll see a big search box.</li>
                            <li>Click in the search box and type something you want to know about, like "Freetown news" or "Sierra Leone culture".</li>
                            <li>Press the Enter key.</li>
                            <li>Wow! You'll see a list of websites related to your search! You are now an internet explorer!</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
                    Downloading Music, Videos, and PC Games Software Online (Basic Concept)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    When you find music, videos, or games on the internet and save them to your computer,
                    it's called downloading.
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li><span className="font-semibold">How it Works (Simple):</span> When you're on a website that
                        offers music or videos, you'll often see a "Download" button
                        or a link. When you click it, the file starts saving to your computer,
                        usually in the "Downloads" folder (found in "This
                        PC").
                    </li>
                    <li>
                        <span className="font-semibold">Important Safety Tip:</span>
                        <ul className="list-circle pl-5 mt-2 space-y-1">
                            <li><span className="font-bold">Only download from trusted websites!</span> Downloading from unknown or suspicious websites can put "viruses" (bad programs) on your computer.</li>
                            <li>Your teacher will demonstrate downloading a safe, small file (like a public domain image or a short, free audio clip) from a trusted source to show you the process. We will not be downloading large games or movies in class.</li>
                        </ul>
                    </li>
                </ul>
                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    You've taken a huge step today by connecting to the internet and Browse! This opens up a whole new world of
                    learning and connection. Practice connecting your phone, it's a super useful
                    skill!
                </p>
            </section>

            <hr className="my-8 border-gray-300" />

            {/* Lesson 8 Section - Internet Security Tips */}
            <section className="mb-8 p-4 rounded-lg border-l-4 border-rose-400 bg-rose-50">
                <h2 className="text-3xl font-semibold text-rose-800 mb-4">
                    Lesson 8: Staying Safe Online (Internet Security Tips!) 🛡️
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hello, wise learners! The internet is amazing, but just like in the real world, we need to
                    be careful. Today, we'll learn simple ways to stay safe when you're online.
                </p>
                <h3 className="text-2xl font-semibold text-rose-700 mb-3">Why Do We Need to Be Careful Online?</h3>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>The internet has good things and bad things.</li>
                    <li><span className="font-semibold">Bad programs (Viruses/Malware):</span> Just like you can get sick,
                        computers can get "sick" with bad programs called viruses or
                        malware. These can steal your information or break your computer.
                    </li>
                    <li><span className="font-semibold">Bad people:</span> Not everyone online is kind or honest. Some people try to trick you.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-rose-700 mb-3">
                    Your Computer's Shield: Antivirus Software (Windows Defender)
                </h3>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>Good news! Your Windows computer usually has a built-in "shield" called Windows Defender (or another Antivirus program).</li>
                    <li><span className="font-semibold">What it does:</span> It's like a guard dog for your computer, always looking for bad programs and trying to stop them.</li>
                    <li><span className="font-semibold">Important:</span> This guard dog needs to be updated regularly!</li>
                    <ul className="list-circle pl-5 mt-2 space-y-1">
                        <li><span className="font-semibold">To check:</span> Click the Start Button &gt; Settings (⚙) &gt; Update & Security &gt; Windows Security.</li>
                        <li>You should see a green checkmark next to "Virus & threat protection." This means your guard dog is active!
                            <div className="flex justify-center my-4">
                                <img
                                    src="/images/computerBasics/windows-security-checkmark.png"
                                    alt="Screenshot of Windows Security showing a green checkmark for 'Virus & threat protection'."
                                    className="rounded-md shadow-md w-full max-w-md h-auto border border-gray-200"
                                    onClick={() => handleImageClick("/images/computerBasics/windows-security-checkmark.png", "Windows Security checkmark")}
                                />
                            </div>
                            <p className="text-sm text-gray-600 mt-2 text-center italic">
                                A green checkmark in Windows Security indicates active virus and threat protection.
                            </p>
                        </li>
                    </ul>
                </ul>

                <h3 className="text-2xl font-semibold text-rose-700 mb-3">
                    Key Safety Rules for Using the Internet:
                </h3>
                <ol className="list-decimal pl-8 space-y-4 text-gray-700 mb-6">
                    <li>
                        <span className="font-semibold">Be Careful What You Click! (Especially Links):</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Imagine someone you don't know hands you a paper on the street that looks suspicious. You wouldn't just touch it, right?</li>
                            <li>It's the same online. If you get an email or a message with a link that looks strange or is from someone you don't know, <span className="font-bold">DO NOT CLICK ON IT!</span></li>
                            <li>💡 Tip: If you're not sure, ask someone you trust (like your teacher or a family member).</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Don't Open Unknown Attachments:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Emails can have "attachments" (files joined to the email, like a photo or document).</li>
                            <li>If an email is from someone you don't know, or it looks suspicious, <span className="font-bold">DO NOT</span> open any attachments! They can hide viruses.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Think Before You Share Personal Information:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Your full name, home address, phone number, and bank details are private!</li>
                            <li><span className="font-bold">NEVER</span> share this information with strangers online or on websites you don't fully trust.</li>
                            <li>Only share what is necessary on trusted sites (like official banking sites, if you use them).</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Use Strong Passwords:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>A password is like a lock for your computer or online accounts. Make it strong!</li>
                            <li><span className="font-semibold">Good Password Tip:</span> Use a mix of:
                                <ul className="list-circle pl-5 mt-1">
                                    <li>Capital letters (A, B, C)</li>
                                    <li>Small letters (a, b, c)</li>
                                    <li>Numbers (1, 2, 3)</li>
                                    <li>Symbols (! @ # $)</li>
                                </ul>
                            </li>
                            <li>Make your password at least 8-10 characters long.</li>
                            <li>Do <span className="font-bold">NOT</span> use: Your name, your birthday, "123456", or "password".</li>
                            <li>Practice: We already learned how to set a password for your Windows account in Session 4 (Settings &gt; Accounts &gt; Sign-in options). Practice making a strong password for your computer.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Don't Believe Everything You See Online:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Anyone can put information on the internet. Not all of it is true!</li>
                            <li>If you read something surprising or unbelievable, try to find the same information on other trusted websites (like big news organizations).</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Keep Your Computer Updated:</span>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Just like your phone needs updates, your computer does too!</li>
                            <li>Updates fix problems and make your computer safer.</li>
                            <li>Your teacher will show you where Windows Updates are (Start Button &gt; Settings &gt; Update & Security &gt; Windows Update). It's good to let your computer update regularly.</li>
                        </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-semibold text-rose-700 mb-3">Hands-on Practice:</h3>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
                    <li>Your teacher will demonstrate how to check if Windows Defender is active.</li>
                    <li>Practice setting a strong password for your computer if you haven't already.</li>
                    <li>Discuss different online scenarios and decide what's safe or not.</li>
                </ul>
                <p className="text-gray-800 leading-relaxed text-xl font-bold mt-8 mb-4">
                    You are now a smart and safe internet user! Being careful online is just as important as being careful
                    in the real world. You're doing amazing!
                </p>
            </section>
             {/* Footer Section */}
            <footer className="bg-blue-700 text-white py-4 px-6 text-center text-sm mt-8">
                <p>&copy; 2025 Computer Basics Course. All rights reserved.</p>
            </footer>

            {/* Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="relative bg-white p-2 rounded-lg max-w-3xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 text-3xl font-bold"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <img src={modalImage} alt={modalAltText} className="max-w-full max-h-[85vh] object-contain" />
                        {modalAltText && (
                            <p className="text-center text-gray-700 mt-2">{modalAltText}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CbWk3;