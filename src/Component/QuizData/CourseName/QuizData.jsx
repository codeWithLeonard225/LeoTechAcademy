// This file will hold all your quiz data locally.

const allQuizzes = {
  "week_1": {
    "title": "Week 1: Introduction to Programming Quiz",
    "description": "Test your knowledge on the fundamental concepts introduced in Week 1.",
    "questions": [
      {
        "questionText": "What does CPU stand for?",
        "options": [
          "Central Process Unit",
          "Control Processing Unit",
          "Central Processing Unit",
          "Computer Personal Unit"
        ],
        "correctAnswer": "Central Processing Unit"
      },
      {
        "questionText": "Which of the following is NOT a programming language?",
        "options": [
          "Python",
          "Java",
          "HTML",
          "C++"
        ],
        "correctAnswer": "HTML"
      },
      {
        "questionText": "What is the main purpose of an operating system?",
        "options": [
          "To browse the internet",
          "To manage computer hardware and software resources",
          "To write code",
          "To store data permanently"
        ],
        "correctAnswer": "To manage computer hardware and software resources"
      },
      {
        "questionText": "What is a 'variable' in programming?",
        "options": [
          "A fixed value that never changes",
          "A name given to a storage area that programs can manipulate",
          "A type of computer virus",
          "A command used to print output"
        ],
        "correctAnswer": "A name given to a storage area that programs can manipulate"
      },
      {
        "questionText": "Which symbol is commonly used for single-line comments in Python?",
        "options": [
          "//",
          "/*",
          "#",
          "",
          "'this is a comment'"
        ],
        "correctAnswer": "/* this is a comment */"
      },
      {
        "questionText": "How do you write 'Hello World' in an alert box using JavaScript?",
        "options": [
          "msgBox('Hello World');",
          "alertBox('Hello World');",
          "alert('Hello World');",
          "msg('Hello World');"
        ],
        "correctAnswer": "alert('Hello World');"
      },
      {
        "questionText": "Which tag defines the document's body?",
        "options": [
          "<section>",
          "<body>",
          "<main>",
          "<article>"
        ],
        "correctAnswer": "<body>"
      },
      {
        "questionText": "Which CSS property is used for changing the font of an element?",
        "options": [
          "font-name",
          "font-family",
          "text-font",
          "font-type"
        ],
        "correctAnswer": "font-family"
      },
      {
        "questionText": "Which operator is used to assign a value to a JavaScript variable?",
        "options": [
          "*",
          "x",
          "=",
          "-"
        ],
        "correctAnswer": "="
      }
    ]
  },
  // computer Basics
  "CBweek_1": {
    "title": "Week 1: Computer Basics Quiz",
    "description": "Test your knowledge on identifying computer parts, basic operations, mouse skills, file organization, personalization, and media playback from Lesson 1, 2, and 3.",
    "questions": [
      {
        "questionText": "What is the primary function of the computer's 'Monitor'?",
        "options": ["To type text", "To produce sound", "To display images and text", "To store files"],
        "correctAnswer": "To display images and text"
      },
      {
        "questionText": "Which action correctly turns OFF your computer?",
        "options": ["Pulling the power cord", "Pressing the power button once quickly", "Clicking the Start Button, then the Power symbol, then 'Shut Down'", "Closing all open windows"],
        "correctAnswer": "Clicking the Start Button, then the Power symbol, then 'Shut Down'"
      },
      {
        "questionText": "What does a single LEFT-click of the mouse typically do?",
        "options": ["Opens a program", "Selects an item", "Shows more options", "Deletes a file"],
        "correctAnswer": "Selects an item"
      },
      {
        "questionText": "Which part of the computer is considered its 'brain' and performs calculations?",
        "options": ["Monitor", "Keyboard", "Tower (System Case)", "Speakers"],
        "correctAnswer": "Tower (System Case)"
      },
      {
        "questionText": "What is the long bar at the bottom of your screen that shows currently open programs?",
        "options": ["Desktop", "Taskbar", "Scrollbar", "Ribbon"],
        "correctAnswer": "Taskbar"
      },
      {
        "questionText": "What is the purpose of 'double-clicking' an icon with the left mouse button?",
        "options": ["To select the icon", "To rename the icon", "To open or launch the program/file", "To view icon properties"],
        "correctAnswer": "To open or launch the program/file"
      },
      {
        "questionText": "Which keyboard shortcut allows you to quickly create a 'New Folder'?",
        "options": ["Ctrl + S", "Alt + F4", "Shift + Ctrl + N", "Ctrl + C"],
        "correctAnswer": "Shift + Ctrl + N"
      },
      {
        "questionText": "When you delete a 'shortcut' icon from your Desktop, what happens to the actual program it represents?",
        "options": ["The program is also uninstalled from the computer", "The program moves to the Recycle Bin", "The program remains installed and accessible", "The program becomes corrupted"],
        "correctAnswer": "The program remains installed and accessible"
      },
      {
        "questionText": "How do you typically access 'Personalization' settings to change your desktop background?",
        "options": ["Double-click 'My Computer'", "Right-click on an empty space on the Desktop and select 'Personalize'", "Click the 'X' button on any open window", "Press the power button on the monitor"],
        "correctAnswer": "Right-click on an empty space on the Desktop and select 'Personalize'"
      },
      {
        "questionText": "What is the main function of a 'Folder' on a computer?",
        "options": ["To play games", "To browse the internet", "To send emails", "To organize and store files"],
        "correctAnswer": "To organize and store files"
      },
      {
        "questionText": "What is the 'Recycle Bin' icon commonly used for?",
        "options": ["Storing new files", "Holding deleted files temporarily", "Playing music", "Changing computer settings"],
        "correctAnswer": "Holding deleted files temporarily"
      },
      {
        "questionText": "Which mouse action is used to reveal a 'menu of more options' for an item or empty space?",
        "options": ["Left-click", "Double-click", "Right-click", "Scroll wheel click"],
        "correctAnswer": "Right-click"
      },
      {
        "questionText": "What does 'Local Disk (C:)' typically represent in 'This PC' or 'My Computer'?",
        "options": ["Your printer", "Your computer's main storage drive", "Your internet connection", "An external USB drive"],
        "correctAnswer": "Your computer's main storage drive"
      },
      {
        "questionText": "How do you close an open window on your computer screen?",
        "options": ["Click the minimize button", "Click the 'X' in the top-right corner of the window", "Press the Enter key", "Drag the window to the Taskbar"],
        "correctAnswer": "Click the 'X' in the top-right corner of the window"
      },
      {
        "questionText": "What is the term for the overall workspace you see when your computer is on and ready?",
        "options": ["Start Menu", "Control Panel", "Desktop", "Taskbar"],
        "correctAnswer": "Desktop"
      },
      {
        "questionText": "Which component is used to type letters, numbers, and symbols into the computer?",
        "options": ["Monitor", "Mouse", "Keyboard", "Speakers"],
        "correctAnswer": "Keyboard"
      },
      {
        "questionText": "If you want to play a video file, what is the most common way to start it?",
        "options": ["Right-click the file and select 'Delete'", "Single-click the file", "Double-click the file with the left mouse button", "Drag the file to the Recycle Bin"],
        "correctAnswer": "Double-click the file with the left mouse button"
      },
      {
        "questionText": "What is the small arrow that moves on your screen when you move your mouse?",
        "options": ["Cursor", "Pointer", "Icon", "Widget"],
        "correctAnswer": "Pointer"
      },
      {
        "questionText": "Which area of the Taskbar usually shows quick updates like internet connection or speaker volume?",
        "options": ["Start Button", "Search bar", "Pinned apps", "Notification Area"],
        "correctAnswer": "Notification Area"
      },
      {
        "questionText": "What is the power symbol that indicates an ON/OFF button?",
        "options": ["⏻", "▶️", "⏸️", "⏹️"],
        "correctAnswer": "⏻"
      }
    ]
  },
  "CBweek_2": {
    "title": "Week 2: Keyboard & Control Panel Quiz",
    "description": "Test your knowledge on keyboard functions, typing posture, and navigating the Control Panel from Week 2 lessons.",
    "questions": [
      {
        "questionText": "Which key is used to create a single space between words?",
        "options": ["Enter Key", "Tab Key", "Spacebar", "Backspace Key"],
        "correctAnswer": "Spacebar"
      },
      {
        "questionText": "To type a capital letter, which key do you hold down while pressing the letter key?",
        "options": ["Caps Lock", "Alt Key", "Shift Key", "Ctrl Key"],
        "correctAnswer": "Shift Key"
      },
      {
        "questionText": "What is the function of the Backspace key?",
        "options": ["Deletes characters to the right of the cursor", "Moves the cursor to the beginning of the line", "Deletes characters to the left of the cursor", "Inserts a new line"],
        "correctAnswer": "Deletes characters to the left of the cursor"
      },
      {
        "questionText": "Which key, when pressed, allows you to type all letters in uppercase without holding down another key?",
        "options": ["Shift Key", "Ctrl Key", "Caps Lock", "Num Lock"],
        "correctAnswer": "Caps Lock"
      },
      {
        "questionText": "What is the primary purpose of the 'Control Panel' (or 'Settings' in newer Windows versions)?",
        "options": ["To browse the internet", "To create documents and spreadsheets", "To adjust computer settings and manage hardware/software", "To play games"],
        "correctAnswer": "To adjust computer settings and manage hardware/software"
      },
      {
        "questionText": "Which category in the Control Panel would you typically use to change your computer's date and time?",
        "options": ["Programs", "Network and Internet", "Clock and Region", "Hardware and Sound"],
        "correctAnswer": "Clock and Region"
      },
      {
        "questionText": "To correctly change your screen resolution or display settings, which Control Panel category should you open?",
        "options": ["User Accounts", "System and Security", "Appearance and Personalization", "Programs and Features"],
        "correctAnswer": "Appearance and Personalization"
      },
      {
        "questionText": "Which of these is NOT a good practice for ergonomic typing?",
        "options": ["Keeping wrists straight and relaxed", "Sitting with your back straight and shoulders relaxed", "Placing your feet flat on the floor or on a footrest", "Bending your elbows at a sharp 45-degree angle"],
        "correctAnswer": "Bending your elbows at a sharp 45-degree angle"
      },
      {
        "questionText": "What is the main function of the 'Enter' (or 'Return') key?",
        "options": ["To delete characters", "To insert a space", "To move the cursor to the next line or confirm an action", "To switch between open applications"],
        "correctAnswer": "To move the cursor to the next line or confirm an action"
      },
      {
        "questionText": "Which key is commonly used in combination with other keys to perform 'shortcuts' like Copy (Ctrl+C) or Paste (Ctrl+V)?",
        "options": ["Shift Key", "Alt Key", "Function Keys (F1-F12)", "Ctrl Key"],
        "correctAnswer": "Ctrl Key"
      },
      {
        "questionText": "What is the purpose of the 'Delete' key?",
        "options": ["To delete characters to the left of the cursor", "To insert a new line", "To delete characters to the right of the cursor or selected items", "To undo the last action"],
        "correctAnswer": "To delete characters to the right of the cursor or selected items"
      },
      {
        "questionText": "Which keys are used to move the cursor up, down, left, or right in a document?",
        "options": ["Number Keys", "Function Keys", "Arrow Keys", "Shift Keys"],
        "correctAnswer": "Arrow Keys"
      },
      {
        "questionText": "If you want to add a new user account to your computer, which Control Panel category would you visit?",
        "options": ["System and Security", "Network and Internet", "User Accounts", "Programs and Features"],
        "correctAnswer": "User Accounts"
      },
      {
        "questionText": "The numeric keypad is most useful for:",
        "options": ["Typing capital letters rapidly", "Performing calculations and entering large amounts of numerical data", "Controlling media playback (play, pause, stop)", "Navigating web pages"],
        "correctAnswer": "Performing calculations and entering large amounts of numerical data"
      },
      {
        "questionText": "What is the primary function of the 'Windows Key' (often with a Windows logo)?",
        "options": ["To lock the computer screen", "To open the Start Menu or Start Screen", "To take a screenshot", "To adjust screen brightness"],
        "correctAnswer": "To open the Start Menu or Start Screen"
      },
      {
        "questionText": "Which Control Panel option would you select to uninstall a program from your computer?",
        "options": ["Device Manager", "System Restore", "Programs and Features", "Internet Options"],
        "correctAnswer": "Programs and Features"
      },
      {
        "questionText": "What is the standard hand position on the keyboard for touch typing?",
        "options": ["Fingers flat on the keys, wrists resting on the desk", "Index fingers on 'F' and 'J' keys (home row)", "Thumbs on the Spacebar, other fingers floating randomly", "Hands positioned anywhere, as long as you can see the keys"],
        "correctAnswer": "Index fingers on 'F' and 'J' keys (home row)"
      },
      {
        "questionText": "Which key is used to move the cursor one tab stop or indent in a word processor?",
        "options": ["Spacebar", "Shift Key", "Tab Key", "Ctrl Key"],
        "correctAnswer": "Tab Key"
      },
      {
        "questionText": "In the Control Panel, where would you typically go to configure sound devices like speakers or microphones?",
        "options": ["Programs and Features", "Network and Sharing Center", "Hardware and Sound", "System and Security"],
        "correctAnswer": "Hardware and Sound"
      },
      {
        "questionText": "Which of the following is a common keyboard shortcut to 'Undo' the last action?",
        "options": ["Ctrl + S", "Ctrl + C", "Ctrl + Z", "Ctrl + P"],
        "correctAnswer": "Ctrl + Z"
      }
    ]
  },
  "CBweek_3": {
    "title": "Week 3: Sharing & Connecting Quiz",
    "description": "Test your knowledge on connecting devices, sharing files, using the internet, and staying safe online from Week 3 lessons.",
    "questions": [
      {
        "questionText": "What type of cable is primarily used to connect your phone to your computer for file sharing?",
        "options": ["HDMI cable", "USB cable", "Ethernet cable", "Audio jack cable"],
        "correctAnswer": "USB cable"
      },
      {
        "questionText": "When connecting your phone to a computer for file transfer, what important option must you often select on your phone's screen?",
        "options": ["Make a call", "Charge only", "Disable Wi-Fi", "File transfer / MTP"],
        "correctAnswer": "File transfer / MTP"
      },
      {
        "questionText": "After connecting your phone to the computer via USB, where would you typically find your phone's storage listed on the computer?",
        "options": ["In the 'Recycle Bin'", "Under 'Devices and drives' in 'This PC'", "In 'Documents'", "On the web browser"],
        "correctAnswer": "Under 'Devices and drives' in 'This PC'"
      },
      {
        "questionText": "What does 'copying' a file mean in the context of file management?",
        "options": ["Making a duplicate of the file, with the original remaining in its place.", "Moving the original file to a new location, deleting the old one.", "Renaming the file to something new.", "Deleting the file permanently from the computer."],
        "correctAnswer": "Making a duplicate of the file, with the original remaining in its place."
      },
      {
        "questionText": "What is a USB Flash Drive commonly called?",
        "options": ["Compact Disc", "Pendrive", "External Hard Disk", "Floppy Disk"],
        "correctAnswer": "Pendrive"
      },
      {
        "questionText": "Why is it important to 'Safely Remove Hardware' before unplugging a USB flash drive?",
        "options": ["To prevent viruses from entering the computer.", "To charge the USB drive faster.", "To update the drive's software.", "To avoid damaging the drive or losing files."],
        "correctAnswer": "To avoid damaging the drive or losing files."
      },
      {
        "questionText": "What is the Internet best described as?",
        "options": ["A program for playing games.", "A single, massive computer.", "A global network that allows computers to communicate and share information.", "A type of operating system."],
        "correctAnswer": "A global network that allows computers to communicate and share information."
      },
      {
        "questionText": "What is the term for sharing your phone's internet connection with your computer?",
        "options": ["Bluetooth sharing", "AirDropping", "Tethering or Hotspot", "Syncing"],
        "correctAnswer": "Tethering or Hotspot"
      },
      {
        "questionText": "When setting up a Wi-Fi Hotspot on your phone, what two pieces of information are 'Very Important' to note down for connecting your computer?",
        "options": ["Phone model and battery percentage", "Hotspot Name (SSID) and Password", "Date and time", "Number of contacts and storage space"],
        "correctAnswer": "Hotspot Name (SSID) and Password"
      },
      {
        "questionText": "What is a 'Web Browser' used for?",
        "options": ["Typing documents and creating spreadsheets.", "Playing offline video games.", "Visiting websites and exploring the Internet.", "Connecting printers to the computer."],
        "correctAnswer": "Visiting websites and exploring the Internet."
      },
      {
        "questionText": "Which of these is an example of a Web Browser icon?",
        "options": ["A yellow folder icon", "A blue 'E' or a colorful circle (Chrome)", "A small speaker icon", "A power button icon"],
        "correctAnswer": "A blue 'E' or a colorful circle (Chrome)"
      },
      {
        "questionText": "What is the long bar at the very top of the browser window where you type website addresses called?",
        "options": ["Search bar", "Status bar", "Toolbar", "Address Bar (URL bar)"],
        "correctAnswer": "Address Bar (URL bar)"
      },
      {
        "questionText": "What happens when you 'download' music, videos, or software from the internet?",
        "options": ["The files are deleted from the internet.", "The files are sent to another computer.", "The files are saved from the internet to your computer.", "The files are played directly without saving."],
        "correctAnswer": "The files are saved from the internet to your computer."
      },
      {
        "questionText": "Where are downloaded files usually saved on your computer?",
        "options": ["Desktop", "'My Documents' folder", "'Downloads' folder", "Recycle Bin"],
        "correctAnswer": "'Downloads' folder"
      },
      {
        "questionText": "What is 'Antivirus Software' like Windows Defender designed to protect your computer from?",
        "options": ["Dust and physical damage.", "Power outages.", "Bad programs like viruses or malware.", "Slow internet connection."],
        "correctAnswer": "Bad programs like viruses or malware."
      },
      {
        "questionText": "If you receive an email with a strange link or attachment from someone you don't know, what is the safest action?",
        "options": ["Click the link immediately to see what it is.", "Open the attachment to check its content.", "Reply to the sender asking for more information.", "DO NOT click the link or open the attachment."],
        "correctAnswer": "DO NOT click the link or open the attachment."
      },
      {
        "questionText": "Why should you never share your full name, home address, or bank details with strangers online?",
        "options": ["It makes your computer run slower.", "It can lead to identity theft or other dangers.", "It will cause your internet connection to drop.", "It prevents you from downloading files."],
        "correctAnswer": "It can lead to identity theft or other dangers."
      },
      {
        "questionText": "What is a characteristic of a 'strong password'?",
        "options": ["It is your birthday or common words like 'password'.", "It is only made of numbers.", "It uses a mix of capital letters, small letters, numbers, and symbols.", "It is exactly 5 characters long."],
        "correctAnswer": "It uses a mix of capital letters, small letters, numbers, and symbols."
      },
      {
        "questionText": "Why is it important to keep your computer updated regularly?",
        "options": ["To change the color of your computer screen.", "To make the computer physically cleaner.", "To fix problems and make your computer safer.", "To increase the computer's storage space."],
        "correctAnswer": "To fix problems and make your computer safer."
      },
      {
        "questionText": "When Browse the internet, what is a good practice if you read something surprising or unbelievable?",
        "options": ["Immediately share it with everyone you know.", "Assume it's true because it's online.", "Close the browser and don't think about it.", "Try to find the same information on other trusted websites."],
        "correctAnswer": "Try to find the same information on other trusted websites."
      }
    ]
  },
  "CBweek_4": {
    "title": "Week 4: Documents, Spreadsheets & Presentations Quiz",
    "description": "Test your knowledge on creating and managing documents, working with data in spreadsheets, and designing presentations.",
    "questions": [
      {
        "questionText": "Which type of software is primarily used for writing letters, reports, and other text-based documents?",
        "options": ["Spreadsheet software", "Presentation software", "Word processing software", "Web browser"],
        "correctAnswer": "Word processing software"
      },
      {
        "questionText": "In a word processor, what feature allows you to change the appearance of text, such as its size or style?",
        "options": ["Page Layout", "Font Formatting", "Spell Check", "Print Preview"],
        "correctAnswer": "Font Formatting"
      },
      {
        "questionText": "To save a document for the first time, which option would you typically choose?",
        "options": ["Save As", "Open", "Print", "New"],
        "correctAnswer": "Save As"
      },
      {
        "questionText": "What is the file extension commonly associated with Microsoft Word documents?",
        "options": [".xlsx", ".pptx", ".docx", ".pdf"],
        "correctAnswer": ".docx"
      },
      {
        "questionText": "What is the main purpose of spreadsheet software like Microsoft Excel?",
        "options": ["Creating photo albums", "Managing and analyzing numerical data", "Designing complex graphics", "Writing computer programs"],
        "correctAnswer": "Managing and analyzing numerical data"
      },
      {
        "questionText": "In a spreadsheet, what is the intersection of a row and a column called?",
        "options": ["Graph", "Formula", "Cell", "Table"],
        "correctAnswer": "Cell"
      },
      {
        "questionText": "Which symbol typically indicates that you are entering a formula in a spreadsheet cell?",
        "options": ["#", "@", "=", "$"],
        "correctAnswer": "="
      },
      {
        "questionText": "What does a formula like '=SUM(A1:A5)' do in a spreadsheet?",
        "options": ["Calculates the average of cells A1 to A5", "Adds the values in cells A1 through A5", "Multiplies the values in cells A1 to A5", "Counts the number of entries in cells A1 to A5"],
        "correctAnswer": "Adds the values in cells A1 through A5"
      },
      {
        "questionText": "What is the file extension commonly associated with Microsoft Excel spreadsheets?",
        "options": [".pptx", ".docx", ".pdf", ".xlsx"],
        "correctAnswer": ".xlsx"
      },
      {
        "questionText": "Which type of software is used to create visual aids for speeches or presentations?",
        "options": ["Word processing software", "Spreadsheet software", "Presentation software", "Database software"],
        "correctAnswer": "Presentation software"
      },
      {
        "questionText": "In presentation software, what is an individual page called?",
        "options": ["Document", "Sheet", "Slide", "Canvas"],
        "correctAnswer": "Slide"
      },
      {
        "questionText": "What is the purpose of 'transitions' in a presentation?",
        "options": ["To add background music to the slides.", "To control how text appears on a slide.", "To add visual effects between slides.", "To change the font style of titles."],
        "correctAnswer": "To add visual effects between slides."
      },
      {
        "questionText": "Which view in presentation software allows you to rearrange the order of your slides easily?",
        "options": ["Normal View", "Slide Sorter View", "Reading View", "Outline View"],
        "correctAnswer": "Slide Sorter View"
      },
      {
        "questionText": "What is the file extension commonly associated with Microsoft PowerPoint presentations?",
        "options": [".docx", ".xlsx", ".pptx", ".jpg"],
        "correctAnswer": ".pptx"
      },
      {
        "questionText": "To insert an image into a document, spreadsheet, or presentation, which menu tab would you most likely use?",
        "options": ["Review", "View", "Insert", "Data"],
        "correctAnswer": "Insert"
      },
      {
        "questionText": "Which shortcut key combination is typically used for 'Copy' in most applications?",
        "options": ["Ctrl + S", "Ctrl + V", "Ctrl + X", "Ctrl + C"],
        "correctAnswer": "Ctrl + C"
      },
      {
        "questionText": "Which shortcut key combination is typically used for 'Paste' in most applications?",
        "options": ["Ctrl + P", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        "correctAnswer": "Ctrl + V"
      },
      {
        "questionText": "What is the purpose of 'Undo' and 'Redo' functions in software applications?",
        "options": ["To delete text permanently.", "To quickly save and open files.", "To reverse or re-apply the last action.", "To change the font size."],
        "correctAnswer": "To reverse or re-apply the last action."
      },
      {
        "questionText": "Before printing a document, what feature allows you to see how it will look on paper?",
        "options": ["Spell Check", "Print Preview", "Grammar Check", "Page Setup"],
        "correctAnswer": "Print Preview"
      },
      {
        "questionText": "What is a 'template' in office software?",
        "options": ["A document that cannot be edited.", "A pre-designed structure that you can use as a starting point.", "A tool for checking spelling and grammar.", "A way to share your document online."],
        "correctAnswer": "A pre-designed structure that you can use as a starting point."
      }
    ]
  },
  // ms word for beginners
  "MSweek_1": {
    "title": "Week 1: MS Word Basics Quiz",
    "description": "Test your knowledge on the fundamental concepts of MS Word, basic typing, lists, editing, and saving documents.",
    "questions": [
      {
        "questionText": "What is the primary function of Microsoft Word?",
        "options": ["To manage spreadsheets", "To create presentations", "To process and format text documents", "To browse the internet"],
        "correctAnswer": "To process and format text documents"
      },
      {
        "questionText": "Which key is used to type capital letters without holding Shift?",
        "options": ["Tab", "Alt", "Caps Lock", "Ctrl"],
        "correctAnswer": "Caps Lock"
      },
      {
        "questionText": "Which key is used to create a new line or paragraph?",
        "options": ["Spacebar", "Backspace", "Enter", "Ctrl"],
        "correctAnswer": "Enter"
      },
      {
        "questionText": "Which feature is used to copy formatting from one part of the document to another?",
        "options": ["Copy", "Format Painter", "Paste", "Undo"],
        "correctAnswer": "Format Painter"
      },
      {
        "questionText": "How do you select an entire word quickly?",
        "options": ["Triple-click the word", "Double-click the word", "Right-click the word", "Hold Ctrl and click"],
        "correctAnswer": "Double-click the word"
      },
      {
        "questionText": "What is the keyboard shortcut for Save?",
        "options": ["Ctrl+S", "Ctrl+P", "Ctrl+C", "Ctrl+Z"],
        "correctAnswer": "Ctrl+S"
      },
      {
        "questionText": "Which icon do you click to open an existing document?",
        "options": ["Save", "New", "Open", "Close"],
        "correctAnswer": "Open"
      },
      {
        "questionText": "Which of the following is NOT a valid file format in Word?",
        "options": [".docx", ".txt", ".xls", ".pdf"],
        "correctAnswer": ".xls"
      },
      {
        "questionText": "What is the function of Ctrl+Z?",
        "options": ["Redo", "Undo", "Cut", "Save"],
        "correctAnswer": "Undo"
      },
      {
        "questionText": "Which option is used to paste copied content?",
        "options": ["Ctrl+X", "Ctrl+V", "Ctrl+C", "Ctrl+Z"],
        "correctAnswer": "Ctrl+V"
      },
      {
        "questionText": "How do you cut text from a document?",
        "options": ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"],
        "correctAnswer": "Ctrl+X"
      },
      {
        "questionText": "Which list type is best for showing steps in order?",
        "options": ["Bulleted", "Numbered", "Symbol", "Outline"],
        "correctAnswer": "Numbered"
      },
      {
        "questionText": "Which tab contains font style options?",
        "options": ["Insert", "Layout", "Home", "Review"],
        "correctAnswer": "Home"
      },
      {
        "questionText": "Which option is used to underline selected text?",
        "options": ["Ctrl+U", "Ctrl+B", "Ctrl+I", "Ctrl+L"],
        "correctAnswer": "Ctrl+U"
      },
      {
        "questionText": "What does the Backspace key do?",
        "options": ["Creates space", "Deletes left character", "Moves cursor forward", "Saves file"],
        "correctAnswer": "Deletes left character"
      },
      {
        "questionText": "Which toolbar lets you quickly access Save, Undo, and Redo?",
        "options": ["Ribbon", "Status Bar", "Quick Access Toolbar", "Scroll Bar"],
        "correctAnswer": "Quick Access Toolbar"
      },
      {
        "questionText": "Which command opens a blank document?",
        "options": ["New", "Open", "Save", "Print"],
        "correctAnswer": "New"
      },
      {
        "questionText": "To select all text in a document, press:",
        "options": ["Ctrl+A", "Ctrl+E", "Ctrl+L", "Ctrl+Shift"],
        "correctAnswer": "Ctrl+A"
      },
      {
        "questionText": "Where is the Undo button usually found?",
        "options": ["On the Ribbon", "In the View tab", "Quick Access Toolbar", "File Menu"],
        "correctAnswer": "Quick Access Toolbar"
      },
      {
        "questionText": "What is the default file extension when saving in Word?",
        "options": [".txt", ".pdf", ".docx", ".rtf"],
        "correctAnswer": ".docx"
      }
    ]
  },
  "MSweek_2": {
    "title": "Week 2: Paragraph & Page Layout Quiz",
    "description": "Assess your knowledge of text alignment, spacing, headers, footers, and layout options.",
    "questions": [
      {
        "questionText": "Which alignment option centers text?",
        "options": ["Left Align", "Center Align", "Right Align", "Justify"],
        "correctAnswer": "Center Align"
      },
      {
        "questionText": "What does line spacing control?",
        "options": ["Font thickness", "Space between lines", "Margin size", "Text color"],
        "correctAnswer": "Space between lines"
      },
      {
        "questionText": "Which shortcut aligns text to the right?",
        "options": ["Ctrl+R", "Ctrl+L", "Ctrl+E", "Ctrl+J"],
        "correctAnswer": "Ctrl+R"
      },
      {
        "questionText": "Which alignment distributes text evenly on both sides?",
        "options": ["Left", "Center", "Right", "Justify"],
        "correctAnswer": "Justify"
      },
      {
        "questionText": "Which tab contains 'Orientation' and 'Margins'?",
        "options": ["Home", "Insert", "Layout", "Review"],
        "correctAnswer": "Layout"
      },
      {
        "questionText": "How do you insert page numbers?",
        "options": ["Insert tab > Page Number", "Layout tab > Margins", "Home tab > Font", "View tab > Zoom"],
        "correctAnswer": "Insert tab > Page Number"
      },
      {
        "questionText": "Which part of the document appears at the bottom of each page?",
        "options": ["Title", "Footer", "Header", "Body"],
        "correctAnswer": "Footer"
      },
      {
        "questionText": "To add your name to the top of every page, use:",
        "options": ["Footer", "Header", "Text Box", "Table"],
        "correctAnswer": "Header"
      },
      {
        "questionText": "What is the default page orientation?",
        "options": ["Landscape", "Portrait", "Rotated", "Diagonal"],
        "correctAnswer": "Portrait"
      },
      {
        "questionText": "What is the purpose of margins?",
        "options": ["Change font", "Control spacing around text", "Add bullets", "Insert images"],
        "correctAnswer": "Control spacing around text"
      },
      {
        "questionText": "What does the Paragraph dialog box allow you to set?",
        "options": ["Font style", "Page size", "Indentation and spacing", "Margins"],
        "correctAnswer": "Indentation and spacing"
      },
      {
        "questionText": "Which shortcut justifies a paragraph?",
        "options": ["Ctrl+J", "Ctrl+M", "Ctrl+F", "Ctrl+T"],
        "correctAnswer": "Ctrl+J"
      },
      {
        "questionText": "What unit is often used to set images?",
        "options": ["Pixels", "Points", "Inches", "Bytes"],
        "correctAnswer": "Inches"
      },
      {
        "questionText": "To increase space before a paragraph, go to:",
        "options": ["Layout > Spacing", "Insert > Text Box", "Home > Font", "Review > Comments"],
        "correctAnswer": "Layout > Spacing"
      },
      {
        "questionText": "Where can you adjust Indentation settings?",
        "options": ["Layout tab", "Insert tab", "Review tab", "File tab"],
        "correctAnswer": "Layout tab"
      },
      {
        "questionText": "What is a hanging indent?",
        "options": ["Text starts on the second line", "First line is indented", "All lines are center aligned", "Text is justified"],
        "correctAnswer": "Text starts on the second line"
      },
      {
        "questionText": "To add a footer, go to:",
        "options": ["Insert > Footer", "Home > Font", "Layout > Page Setup", "View > Gridlines"],
        "correctAnswer": "Insert > Footer"
      },
      {
        "questionText": "To apply double spacing, go to:",
        "options": ["Home > Paragraph", "Insert > Table", "Layout > Breaks", "File > Options"],
        "correctAnswer": "Home > Paragraph"
      },
      {
        "questionText": "Where is the 'Columns' option located?",
        "options": ["Layout Tab", "Insert Tab", "Home Tab", "References Tab"],
        "correctAnswer": "Layout Tab"
      },
      {
        "questionText": "Which section allows for custom spacing and tab stops?",
        "options": ["Paragraph Settings", "Page Layout", "Font Styles", "Insert Menu"],
        "correctAnswer": "Paragraph Settings"
      }
    ]
  },
  "MSweek_3": {
    "title": "Week 3: Tables, Images & Drawing Tools Quiz",
    "description": "Test your knowledge on working with tables, inserting images, using shapes, and text boxes in MS Word.",
    "questions": [
      {
        "questionText": "Which feature allows you to organize data in rows and columns?",
        "options": ["Table", "Shape", "Chart", "Text Box"],
        "correctAnswer": "Table"
      },
      {
        "questionText": "Which tab would you use to insert a table?",
        "options": ["Layout", "Home", "Insert", "View"],
        "correctAnswer": "Insert"
      },
      {
        "questionText": "What action combines two or more selected cells into one?",
        "options": ["Split Cells", "Insert Cells", "Merge Cells", "Align Cells"],
        "correctAnswer": "Merge Cells"
      },
      {
        "questionText": "What command do you use to separate a cell into multiple cells?",
        "options": ["Merge", "Split", "Resize", "Wrap Text"],
        "correctAnswer": "Split"
      },
      {
        "questionText": "How can you insert an image into a Word document?",
        "options": ["Insert > Shape", "Layout > Picture", "Insert > Picture", "Design > Picture"],
        "correctAnswer": "Insert > Picture"
      },
      {
        "questionText": "Which option allows you to change how text flows around an image?",
        "options": ["Image Layout", "Text Wrapping", "Image Effects", "Image Filter"],
        "correctAnswer": "Text Wrapping"
      },
      {
        "questionText": "Which format allows you to insert clip art or saved pictures?",
        "options": ["Insert > Icons", "Insert > Online Pictures", "Insert > Text Box", "Insert > Symbol"],
        "correctAnswer": "Insert > Online Pictures"
      },
      {
        "questionText": "Which shape allows you to draw arrows, boxes, or circles?",
        "options": ["Table", "Image", "Shape", "Border"],
        "correctAnswer": "Shape"
      },
      {
        "questionText": "Where can you find the option to insert shapes in MS Word?",
        "options": ["Layout", "Insert", "Home", "References"],
        "correctAnswer": "Insert"
      },
      {
        "questionText": "What is a Text Box used for?",
        "options": ["To insert tables", "To add free-floating text", "To add images", "To insert hyperlinks"],
        "correctAnswer": "To add free-floating text"
      },
      {
        "questionText": "Which tab appears when you click on a shape or image?",
        "options": ["Insert", "Draw", "Format", "View"],
        "correctAnswer": "Format"
      },
      {
        "questionText": "Which tool can you use to resize an image?",
        "options": ["Text Wrapping", "Crop Tool", "Page Layout", "Alignment Tool"],
        "correctAnswer": "Crop Tool"
      },
      {
        "questionText": "What does 'Alt Text' do for an image?",
        "options": ["Makes the image clickable", "Adds a caption", "Helps screen readers describe the image", "Changes brightness"],
        "correctAnswer": "Helps screen readers describe the image"
      },
      {
        "questionText": "Which option would you use to make a table span across the page?",
        "options": ["Merge Cells", "Text Wrapping", "AutoFit to Window", "Insert Row"],
        "correctAnswer": "AutoFit to Window"
      },
      {
        "questionText": "Which menu allows you to insert a row above a selected row in a table?",
        "options": ["Layout (Table Tools)", "Home", "Insert", "View"],
        "correctAnswer": "Layout (Table Tools)"
      },
      {
        "questionText": "Which tool allows you to rotate a shape or image?",
        "options": ["Text Effects", "Rotate Handle", "Crop Tool", "Align"],
        "correctAnswer": "Rotate Handle"
      },
      {
        "questionText": "What kind of content can a Text Box contain?",
        "options": ["Only images", "Only numbers", "Text, images, and formatting", "Only tables"],
        "correctAnswer": "Text, images, and formatting"
      },
      {
        "questionText": "To change the background color of a shape, which setting do you use?",
        "options": ["Text Fill", "Shape Fill", "Outline", "Style"],
        "correctAnswer": "Shape Fill"
      },
      {
        "questionText": "Which of the following helps to align images and shapes more accurately?",
        "options": ["Ruler", "Gridlines", "Header", "Caption"],
        "correctAnswer": "Gridlines"
      },
      {
        "questionText": "Which feature lets you move an image freely anywhere on the page?",
        "options": ["Wrap Text > In Line with Text", "Wrap Text > Behind Text", "Wrap Text > Square", "Wrap Text > Tight"],
        "correctAnswer": "Wrap Text > Tight"
      }
    ]
  },
  "MSweek_4": {
    "title": "Week 4: Review, Proofreading, Accessibility & Printing",
    "description": "Review all concepts from previous weeks and test your knowledge of proofreading, accessibility, and printing options in MS Word.",
    "questions": [
      {
        "questionText": "Which feature checks for spelling and grammar errors in a document?",
        "options": ["Proofing", "Spell Check", "AutoCorrect", "Find and Replace"],
        "correctAnswer": "Spell Check"
      },
      {
        "questionText": "What tool suggests synonyms for words in your document?",
        "options": ["Editor", "Thesaurus", "Spell Checker", "Translator"],
        "correctAnswer": "Thesaurus"
      },
      {
        "questionText": "What does the 'Accessibility Checker' help with?",
        "options": ["Formatting headers", "Making documents easy to read for everyone", "Creating tables", "Printing options"],
        "correctAnswer": "Making documents easy to read for everyone"
      },
      {
        "questionText": "Which feature highlights repeated words and grammar suggestions?",
        "options": ["Smart Lookup", "Spell Check", "Editor", "Clipboard"],
        "correctAnswer": "Editor"
      },
      {
        "questionText": "Which button lets you see how your document will look when printed?",
        "options": ["Print Preview", "Page Layout", "Review", "Header"],
        "correctAnswer": "Print Preview"
      },
      {
        "questionText": "What does Ctrl+P do in MS Word?",
        "options": ["Paste text", "Print document", "Preview file", "Page break"],
        "correctAnswer": "Print document"
      },
      {
        "questionText": "Which file type is best for sharing a document without editing?",
        "options": [".docx", ".txt", ".pdf", ".html"],
        "correctAnswer": ".pdf"
      },
      {
        "questionText": "What is the benefit of using 'Save As PDF'?",
        "options": ["It allows animation", "The file becomes editable", "It protects layout and content", "It increases file size"],
        "correctAnswer": "It protects layout and content"
      },
      {
        "questionText": "Which print setting allows you to print multiple pages on one sheet?",
        "options": ["Page Break", "Print Selection", "Pages Per Sheet", "Fit to Page"],
        "correctAnswer": "Pages Per Sheet"
      },
      {
        "questionText": "What is the purpose of 'Page Break' in MS Word?",
        "options": ["Insert a blank page", "Start a new page without pressing Enter many times", "Add a footer", "Zoom in the document"],
        "correctAnswer": "Start a new page without pressing Enter many times"
      },
      {
        "questionText": "Which section lets you insert comments and track changes?",
        "options": ["Insert", "Review", "Layout", "View"],
        "correctAnswer": "Review"
      },
      {
        "questionText": "How do you check the number of words in a document?",
        "options": ["Insert > Word Count", "Review > Word Count", "View > Page Count", "Home > Tools"],
        "correctAnswer": "Review > Word Count"
      },
      {
        "questionText": "Which button quickly replaces a word throughout the document?",
        "options": ["Replace", "Undo", "Track Changes", "Zoom"],
        "correctAnswer": "Replace"
      },
      {
        "questionText": "What is the purpose of 'Track Changes'?",
        "options": ["Zoom in the page", "Highlight corrections and edits", "Spell check words", "Make text bold"],
        "correctAnswer": "Highlight corrections and edits"
      },
      {
        "questionText": "To make your document readable by screen readers, you should:",
        "options": ["Use only images", "Avoid headers", "Use proper headings and alt text", "Use colored fonts"],
        "correctAnswer": "Use proper headings and alt text"
      },
      {
        "questionText": "What option controls how close the text is to the edge of the page?",
        "options": ["Header", "Footer", "Margins", "Padding"],
        "correctAnswer": "Margins"
      },
      {
        "questionText": "How do you ensure someone cannot change your document easily?",
        "options": ["Save As Image", "Print It", "Convert to PDF", "Add Comments"],
        "correctAnswer": "Convert to PDF"
      },
      {
        "questionText": "Which button allows you to preview each page before printing?",
        "options": ["Page Layout", "Print Preview", "References", "File Explorer"],
        "correctAnswer": "Print Preview"
      },
      {
        "questionText": "To remove all spelling error underlines, what should you do?",
        "options": ["Ignore All in Spell Check", "Click Undo", "Zoom Out", "Use Replace"],
        "correctAnswer": "Ignore All in Spell Check"
      },
      {
        "questionText": "Which command allows users to comment without changing the document content?",
        "options": ["Highlight", "Insert", "New Comment", "Clipboard"],
        "correctAnswer": "New Comment"
      }
    ]
  },

  // ms word advance for office
  "Adwrdwk1": {
    "title": "Week 1: Image Management Fundamentals Quiz",
    "description": "Assess your understanding of inserting, resizing, positioning, wrapping, and basic adjustments of images in Microsoft Word.",
    "questions": [
      {
        "questionText": "Which tab in Word is primarily used for inserting images?",
        "options": ["Home", "Insert", "Layout", "Design"],
        "correctAnswer": "Insert"
      },
      {
        "questionText": "What is the most common method to resize an image proportionally in Word?",
        "options": [
          "Drag any side handle",
          "Drag a corner handle",
          "Drag the top handle only",
          "Use the Crop tool"
        ],
        "correctAnswer": "Drag a corner handle"
      },
      {
        "questionText": "Which feature allows text to flow around an image?",
        "options": [
          "Image Border",
          "Text Wrapping",
          "Image Alignment",
          "Picture Style"
        ],
        "correctAnswer": "Text Wrapping"
      },
      {
        "questionText": "To make an image move freely on the page, independent of the text, which Text Wrapping option would you typically choose?",
        "options": [
          "In Line with Text",
          "Square",
          "Tight",
          "Through"
        ],
        "correctAnswer": "Through"
      },
      {
        "questionText": "Which option would you select to remove an unwanted part of an image?",
        "options": [
          "Rotate",
          "Compress Picture",
          "Crop",
          "Recolor"
        ],
        "correctAnswer": "Crop"
      },
      {
        "questionText": "Where do you typically find the 'Corrections' options (Brightness, Contrast, Sharpen/Soften) for an image?",
        "options": [
          "Home tab",
          "Insert tab",
          "Picture Format tab (or Format tab for Pictures)",
          "Review tab"
        ],
        "correctAnswer": "Picture Format tab (or Format tab for Pictures)"
      },
      {
        "questionText": "What does 'In Line with Text' text wrapping mean for an image?",
        "options": [
          "The image floats above the text",
          "The image is treated like a character within the text line",
          "Text wraps tightly around the image's irregular shape",
          "The image is always centered on the page"
        ],
        "correctAnswer": "The image is treated like a character within the text line"
      },
      {
        "questionText": "You want to lighten or darken an image. Which adjustment would you use?",
        "options": [
          "Artistic Effects",
          "Color Saturation",
          "Brightness/Contrast (Corrections)",
          "Transparency"
        ],
        "correctAnswer": "Brightness/Contrast (Corrections)"
      },
      {
        "questionText": "To add a border or shadow to an image, you would use which set of options?",
        "options": [
          "Text Effects",
          "Picture Styles",
          "Page Borders",
          "Paragraph Borders"
        ],
        "correctAnswer": "Picture Styles"
      },
      {
        "questionText": "Which option allows you to send an image behind text?",
        "options": [
          "Bring Forward",
          "Bring to Front",
          "Send Backward",
          "Send to Back"
        ],
        "correctAnswer": "Send to Back"
      },
      {
        "questionText": "What is the purpose of the 'Compress Pictures' option?",
        "options": [
          "To make the image larger",
          "To reduce the file size of the image",
          "To add more details to the image",
          "To change the image format (e.g., from JPG to PNG)"
        ],
        "correctAnswer": "To reduce the file size of the image"
      },
      {
        "questionText": "Which text wrapping option causes text to wrap around the bounding box of the image, even if the image is irregularly shaped?",
        "options": [
          "Tight",
          "Through",
          "Square",
          "Top and Bottom"
        ],
        "correctAnswer": "Square"
      },
      {
        "questionText": "If you want to place an image directly on top of specific text, which text wrapping might you use?",
        "options": [
          "In Front of Text",
          "Behind Text",
          "In Line with Text",
          "Top and Bottom"
        ],
        "correctAnswer": "In Front of Text"
      },
      {
        "questionText": "To apply a predefined visual effect like a reflection or glow to an image, you would look under:",
        "options": [
          "Colors",
          "Artistic Effects",
          "Picture Effects",
          "Corrections"
        ],
        "correctAnswer": "Picture Effects"
      },
      {
        "questionText": "What does the 'Remove Background' tool allow you to do?",
        "options": [
          "Delete the entire image",
          "Make the image transparent",
          "Isolate the main subject of an image by making the background transparent",
          "Change the background color of the Word document"
        ],
        "correctAnswer": "Isolate the main subject of an image by making the background transparent"
      },
      {
        "questionText": "Which action allows you to precisely move an image by a small increment?",
        "options": [
          "Dragging with the mouse only",
          "Using the arrow keys after selecting the image",
          "Copying and pasting the image",
          "Changing the document's margins"
        ],
        "correctAnswer": "Using the arrow keys after selecting the image"
      },
      {
        "questionText": "What is the benefit of grouping multiple images and shapes together?",
        "options": [
          "It makes them transparent",
          "They can be moved and resized as a single object",
          "It converts them to text",
          "It applies a watermark to them"
        ],
        "correctAnswer": "They can be moved and resized as a single object"
      },
      {
        "questionText": "To revert an image to its original state after applying several adjustments, you would use which option?",
        "options": [
          "Crop",
          "Recolor",
          "Reset Picture",
          "Compress Picture"
        ],
        "correctAnswer": "Reset Picture"
      },
      {
        "questionText": "When an image is 'In Line with Text', what happens if you add or remove text before it?",
        "options": [
          "The image stays in a fixed position on the page",
          "The image moves with the text as if it were a character",
          "The text wrapping changes automatically",
          "The image becomes uneditable"
        ],
        "correctAnswer": "The image moves with the text as if it were a character"
      },
      {
        "questionText": "Which option enables you to change the color tone of an image (e.g., grayscale, sepia)?",
        "options": [
          "Artistic Effects",
          "Transparency",
          "Color (Recolor/Saturation/Tone)",
          "Border"
        ],
        "correctAnswer": "Color (Recolor/Saturation/Tone)"
      }
    ]
  },
  "AdWrdwk2": {
    "title": "Week 2: Styles & Themes Quiz",
    "description": "Test your understanding of Microsoft Word Styles and Themes, including their application, modification, and benefits.",
    "questions": [
      {
        "questionText": "What is the primary purpose of using Styles in a Word document?",
        "options": [
          "To add decorative borders to pages",
          "To ensure consistent formatting and streamline updates",
          "To insert images and charts easily",
          "To automatically translate text into different languages"
        ],
        "correctAnswer": "To ensure consistent formatting and streamline updates"
      },
      {
        "questionText": "Which type of style affects the entire paragraph, including indentation and line spacing?",
        "options": [
          "Character Style",
          "Table Style",
          "Paragraph Style",
          "List Style"
        ],
        "correctAnswer": "Paragraph Style"
      },
      {
        "questionText": "Where can you find the Styles pane in Microsoft Word?",
        "options": [
          "Insert tab",
          "Review tab",
          "Home tab",
          "View tab"
        ],
        "correctAnswer": "Home tab"
      },
      {
        "questionText": "You've applied 'Heading 1' to a title. If you change the font size of 'Heading 1' in the Styles pane, what happens to the title?",
        "options": [
          "It remains unchanged until manually updated",
          "It automatically updates to the new font size",
          "It reverts to the default font size",
          "The document crashes"
        ],
        "correctAnswer": "It automatically updates to the new font size"
      },
      {
        "questionText": "How would you create a *new* Paragraph Style based on the formatting of existing text in your document?",
        "options": [
          "Right-click the text and choose 'Copy Formatting'",
          "Select the text, then in the Styles pane, click 'New Style' and choose 'Paragraph'",
          "Go to File > Options > Styles",
          "Use the Format Painter tool"
        ],
        "correctAnswer": "Select the text, then in the Styles pane, click 'New Style' and choose 'Paragraph'"
      },
      {
        "questionText": "What is a Document Theme primarily composed of?",
        "options": [
          "Only font styles and sizes",
          "Margins, page breaks, and column settings",
          "Theme Colors, Theme Fonts, and Theme Effects",
          "Headers, footers, and page numbers"
        ],
        "correctAnswer": "Theme Colors, Theme Fonts, and Theme Effects"
      },
      {
        "questionText": "Which tab in Word contains options for applying Document Themes?",
        "options": [
          "Home tab",
          "Insert tab",
          "Design tab",
          "Layout tab"
        ],
        "correctAnswer": "Design tab"
      },
      {
        "questionText": "If you apply a new Document Theme, what generally happens to text that was formatted with built-in Word Styles (like Heading 1, Normal)?",
        "options": [
          "Their formatting remains unchanged",
          "They automatically update to reflect the new Theme's colors and fonts",
          "They are converted to plain text",
          "Only their font color changes, not the font style"
        ],
        "correctAnswer": "They automatically update to reflect the new Theme's colors and fonts"
      },
      {
        "questionText": "You want to create a custom color palette for your company's documents. Where would you go to define and save these custom colors as part of a Theme?",
        "options": [
          "File > Print Options",
          "Home tab > Font group > Color palette",
          "Design tab > Colors > Customize Colors",
          "Review tab > Language options"
        ],
        "correctAnswer": "Design tab > Colors > Customize Colors"
      },
      {
        "questionText": "What is the key advantage of saving a custom Document Theme?",
        "options": [
          "It encrypts your document for security",
          "It allows you to quickly apply a consistent look (colors, fonts, effects) across multiple documents",
          "It compresses the file size of your document",
          "It enables real-time collaboration with others"
        ],
        "correctAnswer": "It allows you to quickly apply a consistent look (colors, fonts, effects) across multiple documents"
      },
      {
        "questionText": "Which action will update an existing Style to match changes you've manually made to selected text?",
        "options": [
          "Double-clicking the style name in the Styles pane",
          "Right-clicking the style name in the Styles pane and choosing 'Update [Style Name] to Match Selection'",
          "Pressing Ctrl+Z (Undo)",
          "Saving the document as a new file type"
        ],
        "correctAnswer": "Right-clicking the style name in the Styles pane and choosing 'Update [Style Name] to Match Selection'"
      },
      {
        "questionText": "What is a 'Character Style' used for?",
        "options": [
          "Formatting entire paragraphs",
          "Formatting individual words or characters within a paragraph",
          "Applying a background color to the entire page",
          "Creating bulleted and numbered lists"
        ],
        "correctAnswer": "Formatting individual words or characters within a paragraph"
      },
      {
        "questionText": "What happens if you delete a custom Style that is currently applied to text in your document?",
        "options": [
          "The text formatted with that style also gets deleted",
          "The text formatted with that style reverts to the 'Normal' style",
          "Word applies a random style to the affected text",
          "You are prevented from deleting the style"
        ],
        "correctAnswer": "The text formatted with that style reverts to the 'Normal' style"
      },
      {
        "questionText": "You've defined custom Theme Fonts. Where do you go to save these custom fonts as part of your overall Theme?",
        "options": [
          "Insert tab > Symbols",
          "Layout tab > Page Setup",
          "Design tab > Fonts > Customize Fonts",
          "Home tab > Clipboard"
        ],
        "correctAnswer": "Design tab > Fonts > Customize Fonts"
      },
      {
        "questionText": "True or False: Styles help improve document navigation and the creation of automatic Tables of Contents.",
        "options": ["True", "False"],
        "correctAnswer": "True"
      },
      {
        "questionText": "If you apply a new Theme, and then apply a custom Style you created, which formatting takes precedence for the elements defined in both?",
        "options": [
          "The Theme's formatting always overrides the Style's",
          "The Style's formatting overrides the Theme's for that specific text",
          "Neither, they cancel each other out",
          "It depends on the order in which they were applied"
        ],
        "correctAnswer": "The Style's formatting overrides the Theme's for that specific text"
      },
      {
        "questionText": "Which option is NOT a component of a Word Document Theme?",
        "options": [
          "Theme Colors",
          "Theme Fonts",
          "Theme Effects",
          "Paragraph Spacing"
        ],
        "correctAnswer": "Paragraph Spacing"
      },
      {
        "questionText": "To reuse a specific combination of heading and body fonts across multiple documents, what should you do?",
        "options": [
          "Manually select the fonts each time",
          "Save them as a custom Theme Font set",
          "Print a copy and refer to it",
          "Only use built-in font combinations"
        ],
        "correctAnswer": "Save them as a custom Theme Font set"
      },
      {
        "questionText": "Which of these is a benefit of using Styles?",
        "options": [
          "It makes your document load faster",
          "It makes it easier to change the formatting of all similar elements (e.g., all headings) with a single click",
          "It adds security to your document",
          "It converts your document to a PDF"
        ],
        "correctAnswer": "It makes it easier to change the formatting of all similar elements (e.g., all headings) with a single click"
      },
      {
        "questionText": "What is the advantage of using 'Linked Styles' (combining Paragraph and Character formatting)?",
        "options": [
          "They only apply to tables",
          "They can be applied to either a whole paragraph or just a selection of text within it",
          "They automatically translate text",
          "They prevent anyone from editing the document"
        ],
        "correctAnswer": "They can be applied to either a whole paragraph or just a selection of text within it"
      }
    ]
  },








  // ms excel for beginers
  
  "MSexcel_1": {
    "title": "Week 1: MS Excel Basics Quiz",
    "description": "Test your knowledge on the fundamental concepts of Microsoft Excel, including interface navigation, data entry, formatting, formulas, and basic functions.",
    "questions": [
      {
        "questionText": "Which area in Excel displays the address of the currently selected cell or named ranges?",
        "options": ["Formula Bar", "Status Bar", "Name Box", "Ribbon"],
        "correctAnswer": "Name Box"
      },
      {
        "questionText": "What character must precede every formula in Excel to ensure it performs a calculation?",
        "options": ["#", "@", "=", "$"],
        "correctAnswer": "="
      },
      {
        "questionText": "Which feature allows you to quickly extend a series of data (like 'Monday, Tuesday...' or '1, 2, 3...') by dragging a small square at the bottom-right corner of a cell?",
        "options": ["AutoSum", "Flash Fill", "AutoFill", "Data Validation"],
        "correctAnswer": "AutoFill"
      },
      {
        "questionText": "If a formula contains `A1` and you copy it down a column, how will the cell reference behave by default?",
        "options": ["It will remain `A1`.", "It will change to `$A$1`.", "It will adjust to `A2`, `A3`, etc.", "It will become an error."],
        "correctAnswer": "It will adjust to `A2`, `A3`, etc."
      },
      {
        "questionText": "Which function would you use to calculate the average of a range of numbers in Excel?",
        "options": ["SUM", "COUNT", "MEAN", "AVERAGE"],
        "correctAnswer": "AVERAGE"
      },
      {
        "questionText": "Which tab and group would you find options like 'Bold', 'Italic', and 'Fill Color' for cells?",
        "options": ["Data Tab > Sort & Filter Group", "Insert Tab > Illustrations Group", "Home Tab > Font Group", "Page Layout Tab > Themes Group"],
        "correctAnswer": "Home Tab > Font Group"
      },
      {
        "questionText": "What does 'Wrap Text' do to content within an Excel cell?",
        "options": ["It merges multiple cells into one.", "It changes the font size to fit the cell width.", "It displays long text on multiple lines within a cell.", "It hides the text that is too long for the cell."],
        "correctAnswer": "It displays long text on multiple lines within a cell."
      },
      {
        "questionText": "If you are entering data into cell A1 and press 'Tab', where will your cursor move next?",
        "options": ["Down to cell A2", "Up to cell A0", "Right to cell B1", "Left to cell Z1"],
        "correctAnswer": "Right to cell B1"
      },
      {
        "questionText": "You need to change the width of Column C to exactly fit its widest content. What is the quickest way to do this using a mouse action?",
        "options": ["Drag the right border of column C manually.", "Double-click the line between column C and column D in the column headers.", "Right-click on column C header and select 'Column Width'.", "Select column C and press Ctrl + A."],
        "correctAnswer": "Double-click the line between column C and column D in the column headers."
      },
      {
        "questionText": "In the formula `= (5 + 3) * 2`, what is the purpose of the parentheses?",
        "options": ["They indicate a cell range.", "They convert the result to a currency format.", "They ensure the addition is performed before the multiplication.", "They make the cell reference absolute."],
        "correctAnswer": "They ensure the addition is performed before the multiplication."
      },
      {
        "questionText": "What is the term for a collection of related worksheets saved in a single file?",
        "options": ["Document", "Presentation", "Workbook", "Database"],
        "correctAnswer": "Workbook"
      },
      {
        "questionText": "Which of the following is NOT a common data type you can enter into an Excel cell?",
        "options": ["Text", "Number", "Image", "Date"],
        "correctAnswer": "Image"
      },
      {
        "questionText": "To select an entire row in Excel, where should you click?",
        "options": ["The row number on the left side of the worksheet.", "The column letter at the top of the worksheet.", "Any cell within that row.", "The 'Select All' button."],
        "correctAnswer": "The row number on the left side of the worksheet."
      },
      {
        "questionText": "Which function is used to find the highest value in a range of numbers?",
        "options": ["MIN", "SUM", "COUNT", "MAX"],
        "correctAnswer": "MAX"
      },
      {
        "questionText": "If you want to quickly add up a column of numbers, which button on the Home tab would you most likely use?",
        "options": ["Sort", "Filter", "AutoSum", "Conditional Formatting"],
        "correctAnswer": "AutoSum"
      },
      {
        "questionText": "What does the green square at the bottom-right corner of a selected cell indicate?",
        "options": ["It's a merge point.", "It's the fill handle.", "It's a comment indicator.", "It means the cell is locked."],
        "correctAnswer": "It's the fill handle."
      },
      {
        "questionText": "Which keyboard shortcut is commonly used to undo the last action in Excel?",
        "options": ["Ctrl + S", "Ctrl + C", "Ctrl + Z", "Ctrl + V"],
        "correctAnswer": "Ctrl + Z"
      },
      {
        "questionText": "To display a number as a percentage (e.g., 0.25 as 25%), which number format would you apply?",
        "options": ["Currency", "General", "Percentage", "Date"],
        "correctAnswer": "Percentage"
      },
      {
        "questionText": "When you open a new, blank Excel file, what is the default name given to the first sheet?",
        "options": ["Sheet1", "Workbook1", "Data1", "NewSheet"],
        "correctAnswer": "Sheet1"
      },
      {
        "questionText": "What is the primary purpose of the 'Ribbon' in Excel?",
        "options": ["To display calculation results.", "To show the current file path.", "To organize and display commands and tools.", "To provide a quick access toolbar."],
        "correctAnswer": "To organize and display commands and tools."
      }
    ]
  },
  "MSexcel_2": {
    "title": "Week 2: Working with Data in Excel Quiz",
    "description": "Assess your understanding of managing rows, columns, and cells, working with cell ranges, basic data sorting and filtering, and applying conditional formatting in Excel.",
    "questions": [
      {
        "questionText": "What is the primary purpose of inserting or deleting rows and columns in Excel?",
        "options": [
          "To change the font size of data",
          "To adjust the spreadsheet's layout and organize data",
          "To apply mathematical formulas",
          "To save the workbook"
        ],
        "correctAnswer": "To adjust the spreadsheet's layout and organize data"
      },
      {
        "questionText": "When you insert a new column using the standard method, where does it typically appear relative to the selected column?",
        "options": [
          "To the right",
          "Below",
          "To the left",
          "Above"
        ],
        "correctAnswer": "To the left"
      },
      {
        "questionText": "Which action would you take to hide a column without deleting its data?",
        "options": [
          "Press the Delete key",
          "Right-click the column header and select 'Hide'",
          "Double-click the column header",
          "Change the column's font color to white"
        ],
        "correctAnswer": "Right-click the column header and select 'Hide'"
      },
      {
        "questionText": "What does 'A1:C5' represent in Excel?",
        "options": [
          "A single, individual cell",
          "The entire worksheet",
          "A collection of cells from A1 to C5",
          "A formula"
        ],
        "correctAnswer": "A collection of cells from A1 to C5"
      },
      {
        "questionText": "Which keyboard shortcut is commonly used to select an entire column?",
        "options": [
          "Ctrl + R",
          "Ctrl + C",
          "Ctrl + Spacebar",
          "Ctrl + V"
        ],
        "correctAnswer": "Ctrl + Spacebar"
      },
      {
        "questionText": "To select multiple non-contiguous cells or ranges, what key must you hold down while clicking?",
        "options": [
          "Shift",
          "Alt",
          "Ctrl",
          "Tab"
        ],
        "correctAnswer": "Ctrl"
      },
      {
        "questionText": "What is the main benefit of naming a range in Excel?",
        "options": [
          "It makes the text bold",
          "It allows for easier navigation and formula creation",
          "It hides the data",
          "It prints the data automatically"
        ],
        "correctAnswer": "It allows for easier navigation and formula creation"
      },
      {
        "questionText": "Which tab on the Ribbon would you typically use to define a named range?",
        "options": [
          "Home",
          "Insert",
          "Formulas",
          "Data"
        ],
        "correctAnswer": "Formulas"
      },
      {
        "questionText": "What does sorting data in Excel primarily allow you to do?",
        "options": [
          "Change the color of cells",
          "Rearrange data in a specific order (e.g., alphabetical, numerical)",
          "Create charts and graphs",
          "Delete duplicate entries"
        ],
        "correctAnswer": "Rearrange data in a specific order (e.g., alphabetical, numerical)"
      },
      {
        "questionText": "If you want to sort a list of names from Z to A, which sort order would you choose?",
        "options": [
          "Ascending",
          "Largest to Smallest",
          "Descending",
          "Oldest to Newest"
        ],
        "correctAnswer": "Descending"
      },
      {
        "questionText": "When performing a custom sort on multiple columns, why would you use the 'Add Level' button?",
        "options": [
          "To add more data to the spreadsheet",
          "To create an additional sorting criterion",
          "To remove existing sort levels",
          "To change the worksheet name"
        ],
        "correctAnswer": "To create an additional sorting criterion"
      },
      {
        "questionText": "What is the primary function of filtering data in Excel?",
        "options": [
          "To permanently delete unwanted rows",
          "To rearrange the order of data",
          "To display only the rows that meet specific criteria",
          "To calculate sums and averages"
        ],
        "correctAnswer": "To display only the rows that meet specific criteria"
      },
      {
        "questionText": "After applying a filter to a column, what visual cue indicates that a filter is active on that column?",
        "options": [
          "The column header will change color.",
          "A small funnel icon appears next to the column header.",
          "The entire column disappears.",
          "The numbers in the column turn red."
        ],
        "correctAnswer": "A small funnel icon appears next to the column header."
      },
      {
        "questionText": "What is Conditional Formatting used for in Excel?",
        "options": [
          "To lock cells so they cannot be edited",
          "To apply formatting (like colors, icons, data bars) to cells based on their values",
          "To convert data from text to numbers",
          "To automatically create a chart"
        ],
        "correctAnswer": "To apply formatting (like colors, icons, data bars) to cells based on their values"
      },
      {
        "questionText": "If you want to highlight all numbers greater than 500 in a range, which Conditional Formatting rule type would you most likely use?",
        "options": [
          "Top/Bottom Rules",
          "Data Bars",
          "Highlight Cells Rules (e.g., 'Greater Than')",
          "Icon Sets"
        ],
        "correctAnswer": "Highlight Cells Rules (e.g., 'Greater Than')"
      },
      {
        "questionText": "Which Conditional Formatting option visually represents the value of a cell by drawing a bar within the cell?",
        "options": [
          "Color Scales",
          "Icon Sets",
          "Highlight Cells Rules",
          "Data Bars"
        ],
        "correctAnswer": "Data Bars"
      },
      {
        "questionText": "When you filter data in Excel, what happens to the rows that do not meet the filter criteria?",
        "options": [
          "They are permanently deleted.",
          "They are moved to a new worksheet.",
          "They are temporarily removed from view but still exist in the worksheet.",
          "They are converted into charts."
        ],
        "correctAnswer": "They are temporarily removed from view but still exist in the worksheet."
      },
      {
        "questionText": "Which tab on the Ribbon contains the 'Sort & Filter' commands?",
        "options": [
          "Insert",
          "Formulas",
          "Data",
          "Review"
        ],
        "correctAnswer": "Data"
      },
      {
        "questionText": "To quickly select all contiguous data from the currently active cell to the end of the data block, which keyboard combination can you use?",
        "options": [
          "Ctrl + Z",
          "Ctrl + Shift + Arrow Keys",
          "Ctrl + P",
          "Ctrl + S"
        ],
        "correctAnswer": "Ctrl + Shift + Arrow Keys"
      },
      {
        "questionText": "If you want to quickly clear all filters from your data, what is a common way to do it?",
        "options": [
          "Close and reopen the workbook",
          "Go to Data tab > Sort & Filter group > Clear",
          "Delete all filtered rows",
          "Change the font color of filtered cells"
        ],
        "correctAnswer": "Go to Data tab > Sort & Filter group > Clear"
      }
    ]
  },
  "MSexcel_3": {
    "title": "Week 3: Essential Functions and Data Quiz",
    "description": "Test your knowledge on Text Functions, Date Functions, Logical IF statements, and Data Validation in Microsoft Excel.",
    "questions": [
      {
        "questionText": "Which Excel function is used to join several text strings into one?",
        "options": [
          "COMBINE",
          "JOIN",
          "CONCATENATE",
          "TEXTJOIN"
        ],
        "correctAnswer": "CONCATENATE"
      },
      {
        "questionText": "If cell A1 contains 'Apple Pie', what would the formula `=LEFT(A1, 5)` return?",
        "options": [
          "Apple",
          "Pie",
          "Apple ",
          "Apple P"
        ],
        "correctAnswer": "Apple"
      },
      {
        "questionText": "To extract the last 3 characters from a cell containing 'Product-XYZ', which function would you use?",
        "options": [
          "LEFT",
          "MID",
          "RIGHT",
          "FIND"
        ],
        "correctAnswer": "RIGHT"
      },
      {
        "questionText": "Cell B2 contains 'Data Analysis'. What will `=LEN(B2)` return?",
        "options": [
          "13",
          "12",
          "11",
          "10"
        ],
        "correctAnswer": "13"
      },
      {
        "questionText": "What does the formula `=UPPER(\"excel\")` return?",
        "options": [
          "excel",
          "Excel",
          "EXCEL",
          "ExCeL"
        ],
        "correctAnswer": "EXCEL"
      },
      {
        "questionText": "Which function returns the current date and time, updating automatically when the workbook is opened or recalculated?",
        "options": [
          "DATE()",
          "TODAY()",
          "NOW()",
          "CURRENTDATE()"
        ],
        "correctAnswer": "NOW()"
      },
      {
        "questionText": "If cell A3 contains '15-March-2024', what will the formula `=MONTH(A3)` return?",
        "options": [
          "March",
          "3",
          "15",
          "2024"
        ],
        "correctAnswer": "3"
      },
      {
        "questionText": "To find out how many days have passed since '01-January-2024' until today, which arithmetic operation would you use with dates?",
        "options": [
          "Addition (+)",
          "Multiplication (*)",
          "Subtraction (-)",
          "Division (/)"
        ],
        "correctAnswer": "Subtraction (-)"
      },
      {
        "questionText": "Which Excel function allows you to perform a calculation or return a value based on whether a condition is true or false?",
        "options": [
          "SUMIF",
          "AND",
          "OR",
          "IF"
        ],
        "correctAnswer": "IF"
      },
      {
        "questionText": "What is the correct syntax for a simple IF function?",
        "options": [
          "=IF(value_if_true, logical_test, value_if_false)",
          "=IF(logical_test, value_if_true, value_if_false)",
          "=IF(logical_test; value_if_true; value_if_false)",
          "=IF(value_if_false, value_if_true, logical_test)"
        ],
        "correctAnswer": "=IF(logical_test, value_if_true, value_if_false)"
      },
      {
        "questionText": "In the formula `=IF(C2>50, \"Pass\", \"Fail\")`, what is `\"Pass\"`?",
        "options": [
          "The logical_test",
          "The value if the condition is false",
          "The value if the condition is true",
          "An error message"
        ],
        "correctAnswer": "The value if the condition is true"
      },
      {
        "questionText": "When using an IF function, if you want to return text like 'High' or 'Low', how must the text be enclosed in the formula?",
        "options": [
          "In single quotes ('')",
          "In parentheses ()",
          "In double quotes (\"\")",
          "No enclosure is needed"
        ],
        "correctAnswer": "In double quotes (\"\")"
      },
      {
        "questionText": "What is the primary benefit of using Data Validation in Excel?",
        "options": [
          "To change cell colors",
          "To prevent common data entry errors",
          "To speed up calculations",
          "To automatically create charts"
        ],
        "correctAnswer": "To prevent common data entry errors"
      },
      {
        "questionText": "Which tab on the Excel Ribbon do you go to access Data Validation?",
        "options": [
          "Home",
          "Insert",
          "Data",
          "Review"
        ],
        "correctAnswer": "Data"
      },
      {
        "questionText": "You want to ensure users can only enter whole numbers between 1 and 100 into a cell. Which 'Allow' option in Data Validation should you choose?",
        "options": [
          "Decimal",
          "List",
          "Whole number",
          "Text length"
        ],
        "correctAnswer": "Whole number"
      },
      {
        "questionText": "To create a dropdown menu of predefined options (e.g., 'Yes', 'No', 'N/A') in a cell, which Data Validation 'Allow' option is used?",
        "options": [
          "Any value",
          "List",
          "Custom",
          "Text length"
        ],
        "correctAnswer": "List"
      },
      {
        "questionText": "What is the purpose of an 'Input Message' in Data Validation?",
        "options": [
          "To stop invalid data from being entered",
          "To display a warning after invalid data is entered",
          "To provide helpful guidance when a user selects the cell",
          "To clear existing validation rules"
        ],
        "correctAnswer": "To provide helpful guidance when a user selects the cell"
      },
      {
        "questionText": "If you set an 'Error Alert' style to 'Stop', what happens when a user tries to enter data that doesn't meet the validation rule?",
        "options": [
          "The entry is allowed, and a small warning icon appears.",
          "The entry is allowed without any notification.",
          "The entry is prevented, and the user must correct it.",
          "The cell's background turns red."
        ],
        "correctAnswer": "The entry is prevented, and the user must correct it."
      },
      {
        "questionText": "Which option would you click in the Data Validation dialog box to remove all validation rules from the selected cells?",
        "options": [
          "Delete Rule",
          "Remove Formatting",
          "Clear All",
          "Reset Settings"
        ],
        "correctAnswer": "Clear All"
      },
      {
        "questionText": "If you need to extract characters from the middle of a text string, which function would be most appropriate?",
        "options": [
          "LEFT",
          "RIGHT",
          "MID",
          "SEARCH"
        ],
        "correctAnswer": "MID"
      }
    ]
  },
  "MSexcel_4": {
    "title": "Week 4: Data Lookups, Visualization, and Printing Quiz",
    "description": "Test your knowledge on Lookup Functions (VLOOKUP, HLOOKUP), Creating Basic Charts, and Preparing Worksheets for Printing in Microsoft Excel.",
    "questions": [
      {
        "questionText": "Which Excel function is primarily used to search for a value in the first column of a table and return a corresponding value from a specified column in the same row?",
        "options": [
          "HLOOKUP",
          "INDEX",
          "MATCH",
          "VLOOKUP"
        ],
        "correctAnswer": "VLOOKUP"
      },
      {
        "questionText": "In the VLOOKUP formula `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`, what does `col_index_num` represent?",
        "options": [
          "The column number where the `lookup_value` is located.",
          "The row number from which to return a value.",
          "The column number in the `table_array` from which to return a value.",
          "The total number of columns in the `table_array`."
        ],
        "correctAnswer": "The column number in the `table_array` from which to return a value."
      },
      {
        "questionText": "When should you use `FALSE` for the `range_lookup` argument in VLOOKUP?",
        "options": [
          "When your table is sorted numerically.",
          "When you need an approximate match.",
          "When you require an exact match for the `lookup_value`.",
          "When searching for text values only."
        ],
        "correctAnswer": "When you require an exact match for the `lookup_value`."
      },
      {
        "questionText": "Which chart type is best suited for showing trends over time or continuous data?",
        "options": [
          "Pie Chart",
          "Bar Chart",
          "Scatter Plot",
          "Line Chart"
        ],
        "correctAnswer": "Line Chart"
      },
      {
        "questionText": "To quickly add or remove elements like Chart Title or Axis Titles from a selected chart in Excel, which icon should you look for next to the chart?",
        "options": [
          "A paintbrush icon",
          "A plus (+) icon",
          "A funnel icon",
          "A filter icon"
        ],
        "correctAnswer": "A plus (+) icon"
      },
      {
        "questionText": "If you want to print only a specific section of your worksheet and exclude other data, what feature should you use?",
        "options": [
          "Page Breaks",
          "Scale to Fit",
          "Print Area",
          "Print Titles"
        ],
        "correctAnswer": "Print Area"
      },
      {
        "questionText": "In Excel's Print Preview, if your data spans too many columns for one page, which scaling option would you choose to ensure all columns fit on a single page width?",
        "options": [
          "Fit Sheet on One Page",
          "Fit All Rows on One Page",
          "Fit All Columns on One Page",
          "Custom Scale to 100%"
        ],
        "correctAnswer": "Fit All Columns on One Page"
      },
      {
        "questionText": "Which of the following built-in codes would you use in a footer to automatically display the current page number?",
        "options": [
          "&[Date]",
          "&[File]",
          "&[Page]",
          "&[Tab]"
        ],
        "correctAnswer": "&[Page]"
      },
      {
        "questionText": "What is the primary difference between VLOOKUP and HLOOKUP?",
        "options": [
          "VLOOKUP searches vertically, HLOOKUP searches horizontally.",
          "VLOOKUP uses exact matches, HLOOKUP uses approximate matches.",
          "VLOOKUP is for numbers, HLOOKUP is for text.",
          "There is no significant difference; they are interchangeable."
        ],
        "correctAnswer": "VLOOKUP searches vertically, HLOOKUP searches horizontally."
      },
      {
        "questionText": "You've created a sales report and want to display the proportion of sales contributed by each product category. Which chart type would be most appropriate?",
        "options": [
          "Column Chart",
          "Line Chart",
          "Pie Chart",
          "Area Chart"
        ],
        "correctAnswer": "Pie Chart"
      }
    ]
  },

  // Ms Access

  "MSAccess_Week1": {
    "title": "Week 1: Introduction to Microsoft Access Quiz",
    "description": "Test your understanding of fundamental database concepts, Access interface navigation, table creation, and basic field properties.",
    "questions": [
      {
        "questionText": "What is the primary purpose of a database?",
        "options": [
          "To create presentations and slideshows.",
          "To store, organize, find, update, and report information quickly and correctly.",
          "To perform complex mathematical calculations only.",
          "To send emails and manage contacts."
        ],
        "correctAnswer": "To store, organize, find, update, and report information quickly and correctly."
      },
      {
        "questionText": "In a database, what does 'Entity' refer to?",
        "options": [
          "A specific piece of information, like a student's first name.",
          "The entire database file itself.",
          "The 'thing' or subject about which you store data (e.g., Student, Patient, Item).",
          "A unique identifier for each record."
        ],
        "correctAnswer": "The 'thing' or subject about which you store data (e.g., Student, Patient, Item)."
      },
      {
        "questionText": "Which of the following is NOT a benefit of using a database?",
        "options": [
          "Increased data accuracy.",
          "Faster data retrieval and reporting.",
          "Difficulty in sharing data among multiple users.",
          "Enhanced data security."
        ],
        "correctAnswer": "Difficulty in sharing data among multiple users."
      },
      {
        "questionText": "What is the function of a 'Primary Key' (PK) in an Access table?",
        "options": [
          "To automatically sum up numerical fields.",
          "To define the visual style of the table.",
          "To uniquely identify each record in a table, ensuring no two records are the same.",
          "To specify the order in which data is entered into the table."
        ],
        "correctAnswer": "To uniquely identify each record in a table, ensuring no two records are the same."
      },
      {
        "questionText": "When creating a new table in Microsoft Access, which 'View' is primarily used to define field names, data types, and set the Primary Key?",
        "options": [
          "Layout View",
          "Print Preview",
          "Datasheet View",
          "Design View"
        ],
        "correctAnswer": "Design View"
      },
      {
        "questionText": "If you want the 'StudentID' field to automatically generate a unique number for each new record, which Data Type should you choose in Access?",
        "options": [
          "Number",
          "Text",
          "AutoNumber",
          "Currency"
        ],
        "correctAnswer": "AutoNumber"
      },
      {
        "questionText": "What is the keyboard shortcut to save your changes in Access Design View?",
        "options": [
          "Ctrl+V",
          "Ctrl+C",
          "Ctrl+S",
          "Ctrl+X"
        ],
        "correctAnswer": "Ctrl+S"
      },
      {
        "questionText": "Which 'View' in Access is used for entering, sorting, and filtering data records?",
        "options": [
          "Design View",
          "SQL View",
          "Report View",
          "Datasheet View"
        ],
        "correctAnswer": "Datasheet View"
      },
      {
        "questionText": "What does setting a field's 'Required' property to 'Yes' in Design View achieve?",
        "options": [
          "It makes the field automatically fill with data.",
          "It ensures that the field cannot be left empty when a new record is entered.",
          "It converts the field's data type to Text.",
          "It hides the field from Datasheet View."
        ],
        "correctAnswer": "It ensures that the field cannot be left empty when a new record is entered."
      },
      {
        "questionText": "How can you AutoFit a column's width in Datasheet View?",
        "options": [
          "Right-click the column header and select 'Hide Field'.",
          "Double-click the left edge of the column header.",
          "Double-click the right edge of a column header until the double-arrow shows.",
          "Drag the bottom edge of the column header."
        ],
        "correctAnswer": "Double-click the right edge of a column header until the double-arrow shows."
      },
      {
        "questionText": "Which term refers to a single piece of information about an entity, such as 'FirstName'?",
        "options": [
          "Record",
          "Table",
          "Attribute/Field",
          "Entity"
        ],
        "correctAnswer": "Attribute/Field"
      },
      {
        "questionText": "What is a 'Record' in a database table?",
        "options": [
          "The name of the table.",
          "One full row of data about one entity.",
          "A collection of different tables.",
          "The data type of a field."
        ],
        "correctAnswer": "One full row of data about one entity."
      },
      {
        "questionText": "Which real-life example from the Sierra Leone context was given for a database related to a School?",
        "options": [
          "Incidents, People involved, Reports.",
          "Items, Suppliers, Purchases, Sales.",
          "Patients, Visits, Medicines, Payments.",
          "Students, Subjects, Classes, Teachers, Results."
        ],
        "correctAnswer": "Students, Subjects, Classes, Teachers, Results."
      },
      {
        "questionText": "Why is 'Phone' often stored as a 'Text' data type in Access instead of 'Number'?",
        "options": [
          "Because phone numbers always contain letters.",
          "Because phone numbers are not typically used in mathematical calculations.",
          "Because 'Number' data type is only for whole numbers.",
          "Because 'Text' fields are faster to search."
        ],
        "correctAnswer": "Because phone numbers are not typically used in mathematical calculations."
      },
      {
        "questionText": "After opening Microsoft Access, what is the first step to creating a brand new database file?",
        "options": [
          "Click 'Open Existing Database'.",
          "Click 'Blank Database'.",
          "Click 'New Table'.",
          "Click 'Run Query'."
        ],
        "correctAnswer": "Click 'Blank Database'."
      },
      {
        "questionText": "In Design View, where can you typically find options like 'Required' and 'Field Size' for a selected field?",
        "options": [
          "In the ribbon at the very top of the Access window.",
          "In the 'Field Properties' area at the bottom of the Design View window.",
          "By right-clicking on the table name.",
          "In the 'Datasheet View' tab."
        ],
        "correctAnswer": "In the 'Field Properties' area at the bottom of the Design View window."
      },
      {
        "questionText": "What does the keyboard shortcut 'Ctrl+' (Ctrl and apostrophe) do in Datasheet View?",
        "options": [
          "Deletes the current record.",
          "Repeats the value from the cell above.",
          "Inserts a new blank record.",
          "Opens the field properties dialog."
        ],
        "correctAnswer": "Repeats the value from the cell above."
      },
      {
        "questionText": "What is the primary difference between Design View and Datasheet View?",
        "options": [
          "Design View is for printing, Datasheet View is for viewing.",
          "Design View is for coding, Datasheet View is for design.",
          "Design View defines/edits structure (fields, data types); Datasheet View works with data (type, sort, filter).",
          "Design View is only for queries, Datasheet View is only for tables."
        ],
        "correctAnswer": "Design View defines/edits structure (fields, data types); Datasheet View works with data (type, sort, filter)."
      },
      {
        "questionText": "Which action allows you to keep important columns visible while scrolling horizontally in Datasheet View?",
        "options": [
          "Hiding the column.",
          "Deleting the column.",
          "Freezing Fields.",
          "Changing the column's data type."
        ],
        "correctAnswer": "Freezing Fields."
      },
      {
        "questionText": "Which Data Type would be most appropriate for storing 'DateOfBirth'?",
        "options": [
          "Text",
          "Number",
          "Date/Time",
          "Yes/No"
        ],
        "correctAnswer": "Date/Time"
      }
    ]
  },
  "MSAccess_Week2": {
    "title": "Week 2: Microsoft Access Forms Quiz",
    "description": "Test your knowledge on creating, designing, and styling forms in Microsoft Access.",
    "questions": [
      {
        "questionText": "What is a primary reason to use a Form in Access instead of directly interacting with a Table?",
        "options": [
          "Forms are only for viewing data, not editing.",
          "Forms offer a more user-friendly interface for data entry and editing.",
          "Forms allow for complex calculations that tables cannot do.",
          "Forms are required to save any data in Access."
        ],
        "correctAnswer": "Forms offer a more user-friendly interface for data entry and editing."
      },
      {
        "questionText": "Which tab in Access should you go to initiate the 'Form Wizard'?",
        "options": [
          "Home",
          "External Data",
          "Create",
          "Database Tools"
        ],
        "correctAnswer": "Create"
      },
      {
        "questionText": "When using the Form Wizard, which button would you click to move ALL available fields from your table to the form?",
        "options": [
          ">",
          "<",
          "<<",
          ">>"
        ],
        "correctAnswer": ">>"
      },
      {
        "questionText": "Which of the following is NOT a layout option provided by the Form Wizard?",
        "options": [
          "Columnar",
          "Tabular",
          "PivotTable",
          "Justified"
        ],
        "correctAnswer": "PivotTable"
      },
      {
        "questionText": "After creating a form with the Wizard, what are the two main design views you can use to adjust its layout?",
        "options": [
          "Table View and Query View",
          "Layout View and Design View",
          "Print Preview and Report View",
          "Datasheet View and SQL View"
        ],
        "correctAnswer": "Layout View and Design View"
      },
      {
        "questionText": "Which design view allows you to see the actual data while making quick adjustments like moving or resizing fields?",
        "options": [
          "Design View",
          "Datasheet View",
          "Layout View",
          "Print Preview"
        ],
        "correctAnswer": "Layout View"
      },
      {
        "questionText": "To select multiple fields on a form in Layout View for simultaneous adjustment, what key should you hold down while clicking on them?",
        "options": [
          "Ctrl",
          "Alt",
          "Shift",
          "Tab"
        ],
        "correctAnswer": "Shift"
      },
      {
        "questionText": "Which design view gives you full control over the form's structure, including sections like Form Header and Detail, but does NOT show live data?",
        "options": [
          "Layout View",
          "Datasheet View",
          "Design View",
          "Form View"
        ],
        "correctAnswer": "Design View"
      },
      {
        "questionText": "If the 'Property Sheet' is not visible in Design View, which function key can you press to make it appear?",
        "options": [
          "F1",
          "F2",
          "F4",
          "F5"
        ],
        "correctAnswer": "F4"
      },
      {
        "questionText": "To change the background color of an entire form, you should first select the form's gray background and then look for which property in the Property Sheet's 'Format' tab?",
        "options": [
          "Font Color",
          "Border Style",
          "Back Color",
          "Caption"
        ],
        "correctAnswer": "Back Color"
      },
      {
        "questionText": "When adding a background image to a form, which property in the Property Sheet (Format tab) allows you to select the image file?",
        "options": [
          "Image Source",
          "Picture",
          "Background Image",
          "File Path"
        ],
        "correctAnswer": "Picture"
      },
      {
        "questionText": "Which property allows you to control how a background image displays on a form (e.g., stretched, tiled)?",
        "options": [
          "Picture Fit",
          "Image Alignment",
          "Picture Size Mode",
          "Display Mode"
        ],
        "correctAnswer": "Picture Size Mode"
      },
      {
        "questionText": "Where would you typically add a title or logo for the form itself?",
        "options": [
          "Detail section",
          "Form Footer",
          "Form Header",
          "Record Source"
        ],
        "correctAnswer": "Form Header"
      },
      {
        "questionText": "What is generally advised when styling a form regarding colors and images?",
        "options": [
          "Use as many colors and images as possible to make it vibrant.",
          "Keep it simple to ensure readability and ease of use.",
          "Only use dark colors for backgrounds.",
          "Forms should not have any colors or images."
        ],
        "correctAnswer": "Keep it simple to ensure readability and ease of use."
      },
      {
        "questionText": "Which section of a form in Design View typically contains the input boxes and labels for the actual data fields?",
        "options": [
          "Form Header",
          "Page Header",
          "Detail",
          "Form Footer"
        ],
        "correctAnswer": "Detail"
      },
      {
        "questionText": "What is the benefit of using the 'Form Wizard'?",
        "options": [
          "It allows for manual coding of the form's backend.",
          "It provides a quick and guided way to create a basic form from a table.",
          "It's primarily for creating complex reports.",
          "It helps in connecting multiple databases."
        ],
        "correctAnswer": "It provides a quick and guided way to create a basic form from a table."
      },
      {
        "questionText": "If you want to add a button to your form to perform an action (e.g., 'Save Record'), which view would you primarily use?",
        "options": [
          "Layout View",
          "Datasheet View",
          "Design View",
          "Form View"
        ],
        "correctAnswer": "Design View"
      },
      {
        "questionText": "When adjusting the size of a field in Layout View, what appears around the field that you can drag?",
        "options": [
          "Dotted lines",
          "Red circles",
          "Small squares (handles)",
          "Arrows"
        ],
        "correctAnswer": "Small squares (handles)"
      },
      {
        "questionText": "After selecting your source table in the Form Wizard, what does the '>' button do?",
        "options": [
          "Removes a selected field from the form.",
          "Moves all available fields to the form.",
          "Moves a selected field to the form.",
          "Moves a selected field to the left pane."
        ],
        "correctAnswer": "Moves a selected field to the form."
      },
      {
        "questionText": "Which type of control is typically NOT tied to actual data from your table but can be added in Design View?",
        "options": [
          "Input Box",
          "Text Label",
          "Dropdown List",
          "Checkbox"
        ],
        "correctAnswer": "Text Label"
      }
    ]
  },


  // html
  "HTML_Week1": {
    "title": "Week 1: HTML Basics Quiz",
    "description": "Test your understanding of fundamental HTML concepts, document structure, headings, paragraphs, and basic text formatting and lists.",
    "questions": [
      {
        "questionText": "What does HTML stand for?",
        "options": ["HyperText Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
        "correctAnswer": "HyperText Markup Language"
      },
      {
        "questionText": "Which tag represents the root of an HTML document?",
        "options": ["<head>", "<body>", "<html>", "<title>"],
        "correctAnswer": "<html>"
      },
      {
        "questionText": "The `<!DOCTYPE html>` declaration is used to:",
        "options": ["Define a hyperlink", "Declare the HTML version (HTML5)", "Insert an image", "Create a paragraph"],
        "correctAnswer": "Declare the HTML version (HTML5)"
      },
      {
        "questionText": "Which section of an HTML document contains metadata about the page, such as its title and character encoding, but is not visible content?",
        "options": ["<body>", "<section>", "<head>", "<footer>"],
        "correctAnswer": "<head>"
      },
      {
        "questionText": "What is the primary purpose of the `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` tag?",
        "options": ["To set the page's author", "To specify character encoding", "To optimize the page for responsive design", "To link external stylesheets"],
        "correctAnswer": "To optimize the page for responsive design"
      },
      {
        "questionText": "Which HTML tag is used to display the title of the web page in the browser tab?",
        "options": ["<h1>", "<meta>", "<title>", "<head>"],
        "correctAnswer": "<title>"
      },
      {
        "questionText": "All visible content of an HTML page, such as text, images, and links, is placed within which tag?",
        "options": ["<html>", "<head>", "<section>", "<body>"],
        "correctAnswer": "<body>"
      },
      {
        "questionText": "What is the difference between an 'element' and a 'tag' in HTML?",
        "options": [
          "They are the same thing.",
          "An element includes the opening tag, content, and closing tag; a tag is just the opening or closing part.",
          "A tag is for styling, an element is for structure.",
          "An element is always self-closing, a tag is not."
        ],
        "correctAnswer": "An element includes the opening tag, content, and closing tag; a tag is just the opening or closing part."
      },
      {
        "questionText": "Which of the following is an example of a self-closing tag?",
        "options": ["<hr>", "<div>", "<img>", "<span>"],
        "correctAnswer": "<hr>"
      },
      {
        "questionText": "What attribute is used to specify the path to an image file in the `<img>` tag?",
        "options": ["alt", "href", "src", "link"],
        "correctAnswer": "src"
      },
      {
        "questionText": "<u> Leo </u>",
        "options": ["under", "underline", "line", "text"],
        "correctAnswer": "underline"
      },
      {
        "questionText": "Which HTML tag defines the most important heading on a page?",
        "options": ["<h3>", "<h2>", "<h1>", "<h6/>"],
        "correctAnswer": "<h1>"
      },
      {
        "questionText": "Which tag is used to define a standard paragraph of text?",
        "options": ["<para>", "<text>", "<p>", "<br>"],
        "correctAnswer": "<p>"
      },
      {
        "questionText": "To insert a single line break within a paragraph, which tag would you use?",
        "options": ["<lb>", "<break>", "<br>", "<newline>"],
        "correctAnswer": "<br>"
      },
      {
        "questionText": "The `<hr>` tag is used to:",
        "options": ["Create a hyperlink", "Insert an image", "Draw a horizontal line across the page", "Define a header for a table"],
        "correctAnswer": "Draw a horizontal line across the page"
      },
      {
        "questionText": "Which semantic HTML tag should be used for text that is important and should be displayed with strong emphasis (e.g., bold)?",
        "options": ["<b>", "<strong>", "<em>", "<i>"],
        "correctAnswer": "<strong>"
      },
      {
        "questionText": "Which semantic HTML tag should be used for text that needs emphasis (e.g., italicized)?",
        "options": ["<i>", "<em>", "<b>", "<mark>"],
        "correctAnswer": "<em>"
      },
      {
        "questionText": "Which HTML tag is used to create an ordered (numbered) list?",
        "options": ["<ul>", "<ol>", "<list>", "<dl>"],
        "correctAnswer": "<ol>"
      },
      {
        "questionText": "Which HTML tag is used to create an unordered (bulleted) list?",
        "options": ["<ol>", "<li>", "<ul>", "<lu>"],
        "correctAnswer": "<ul>"
      },
      {
        "questionText": "To define a single item within both ordered and unordered lists, which tag is used?",
        "options": ["<item>", "<listitem>", "<li>", "<entry>"],
        "correctAnswer": "<li>"
      }
    ]
  },
  "HTML_Week2": {
    "title": "Week 2: Links, Images, and Basic Media Quiz",
    "description": "Test your knowledge on creating hyperlinks, embedding images, and structuring data with HTML tables.",
    "questions": [
      {
        "questionText": "What does the `<a>` tag stand for in HTML?",
        "options": ["Area", "Anchor", "Attribute", "Action"],
        "correctAnswer": "Anchor"
      },
      {
        "questionText": "Which attribute of the `<a>` tag specifies the destination URL of a hyperlink?",
        "options": ["src", "link", "url", "href"],
        "correctAnswer": "href"
      },
      {
        "questionText": "To open a linked document in a new browser window or tab, which `target` attribute value should be used?",
        "options": ["_self", "_parent", "_blank", "_top"],
        "correctAnswer": "_blank"
      },
      {
        "questionText": "If you link to an `about.html` file located in the same directory as your `index.html`, what type of path are you using?",
        "options": ["Absolute URL", "Root-relative path", "Relative path", "Server path"],
        "correctAnswer": "Relative path"
      },
      {
        "questionText": "How would you create a link to a section within the same page that has `id=\"contact\"`?",
        "options": ["<a href=\"/contact\">", "<a id=\"contact_link\">", "<a href=\"#contact\">", "<a link=\"contact\">"],
        "correctAnswer": "<a href=\"#contact\">"
      },
      {
        "questionText": "What is the correct syntax for an email link?",
        "options": ["<a email=\"test@example.com\">", "<a href=\"mail:test@example.com\">", "<a href=\"mailto:test@example.com\">", "<a src=\"test@example.com\">"],
        "correctAnswer": "<a href=\"mailto:test@example.com\">"
      },
      {
        "questionText": "Which HTML tag is used to embed an image into a web page?",
        "options": ["<picture>", "<graphic>", "<img>", "<photo>"],
        "correctAnswer": "<img>"
      },
      {
        "questionText": "Is the `<img>` tag a self-closing tag?",
        "options": ["Yes, it doesn't require a separate closing tag.", "No, it always needs a closing `</img>` tag.", "Only when used with the `alt` attribute.", "Only when used with the `src` attribute."],
        "correctAnswer": "Yes, it doesn't require a separate closing tag."
      },
      {
        "questionText": "What is the primary purpose of the `alt` attribute in the `<img>` tag?",
        "options": ["To define the image's alignment", "To provide alternative text for screen readers and when the image fails to load", "To specify the image's dimensions", "To add a tooltip when hovering over the image"],
        "correctAnswer": "To provide alternative text for screen readers and when the image fails to load"
      },
      {
        "questionText": "Which type of image path is a full web address (e.g., `https://www.example.com/image.png`)?",
        "options": ["Relative path", "Absolute URL", "Local path", "Server path"],
        "correctAnswer": "Absolute URL"
      },
      {
        "questionText": "While CSS is generally preferred, which HTML attributes can be used directly on the `<img>` tag for basic image dimension control?",
        "options": ["size and dimension", "x and y", "length and width", "width and height"],
        "correctAnswer": "width and height"
      },
      {
        "questionText": "Which HTML tag is used to define a table?",
        "options": ["<tab>", "<grid>", "<table>", "<data>"],
        "correctAnswer": "<table>"
      },
      {
        "questionText": "In an HTML table, which tag defines a single row?",
        "options": ["<td>", "<th>", "<tr>", "<tbody>"],
        "correctAnswer": "<tr>"
      },
      {
        "questionText": "Which HTML tag defines a table header cell?",
        "options": ["<th>", "<td>", "<thead>", "<header>"],
        "correctAnswer": "<th>"
      },
      {
        "questionText": "Which HTML tag defines a standard data cell within a table row?",
        "options": ["<dt>", "<dc>", "<data>", "<td>"],
        "correctAnswer": "<td>"
      },
      {
        "questionText": "The `colspan` attribute is used to:",
        "options": ["Make a cell span across multiple rows", "Make a cell span across multiple columns", "Change the background color of a cell", "Align text within a cell"],
        "correctAnswer": "Make a cell span across multiple columns"
      },
      {
        "questionText": "The `rowspan` attribute is used to:",
        "options": ["Make a cell span across multiple rows", "Make a cell span across multiple columns", "Add a new row to the table", "Specify the row number"],
        "correctAnswer": "Make a cell span across multiple rows"
      },
      {
        "questionText": "Which tag is used for semantically grouping the header content of a table?",
        "options": ["<head>", "<th>", "<thead>", "<header>"],
        "correctAnswer": "<thead>"
      },
      {
        "questionText": "Which tag is used for semantically grouping the main body content of a table?",
        "options": ["<body>", "<td>", "<tbody>", "<main>"],
        "correctAnswer": "<tbody>"
      },
      {
        "questionText": "Which tag is used for semantically grouping the footer content of a table?",
        "options": ["<foot>", "<tfoot>", "<footer>", "<tf>"],
        "correctAnswer": "<tfoot>"
      }
    ]
  },
  "HTML_Week3": {
    "title": "Week 3: Forms and Semantic HTML Quiz",
    "description": "Test your knowledge on collecting user input with forms, writing meaningful HTML, and embedding multimedia.",
    "questions": [
      {
        "questionText": "Which HTML tag is used to define an HTML form for user input?",
        "options": ["<input>", "<form>", "<label>", "<fieldset>"],
        "correctAnswer": "<form>"
      },
      {
        "questionText": "Which attribute of the `<form>` tag specifies where to send the form data when submitted?",
        "options": ["type", "method", "action", "name"],
        "correctAnswer": "action"
      },
      {
        "questionText": "What `type` attribute value for an `<input>` tag is used for single-line text input?",
        "options": ["textarea", "password", "text", "string"],
        "correctAnswer": "text"
      },
      {
        "questionText": "To allow a user to select only one option from a group, which `type` attribute value should be used for `<input>` tags (assuming they share the same `name` attribute)?",
        "options": ["checkbox", "radio", "select", "option"],
        "correctAnswer": "radio"
      },
      {
        "questionText": "Which tag is used to associate a label with an input field, improving accessibility?",
        "options": ["<text>", "<label>", "<legend>", "<figcaption>"],
        "correctAnswer": "<label>"
      },
      {
        "questionText": "The `placeholder` attribute in an `<input>` field provides:",
        "options": ["The initial value of the input", "A hint for the user about expected input", "The name of the input field", "A unique identifier for the input"],
        "correctAnswer": "A hint for the user about expected input"
      },
      {
        "questionText": "Which HTML tag is used for creating a multi-line text input area?",
        "options": ["<input type=\"text-area\">", "<textfield>", "<textarea>", "<p>"],
        "correctAnswer": "<textarea>"
      },
      {
        "questionText": "What HTML tags are typically used together to create a dropdown list?",
        "options": ["<list> and <item>", "<dropdown> and <option>", "<select> and <option>", "<datalist> and <value>"],
        "correctAnswer": "<select> and <option>"
      },
      {
        "questionText": "What is the main idea behind 'Semantic HTML'?",
        "options": [
          "Using HTML tags that style content precisely.",
          "Using HTML tags that clearly describe the meaning or purpose of the content they contain.",
          "Using HTML tags that reduce the file size of the document.",
          "Using HTML tags that are only understood by specific browsers."
        ],
        "correctAnswer": "Using HTML tags that clearly describe the meaning or purpose of the content they contain."
      },
      {
        "questionText": "Which of the following is considered a non-semantic HTML tag?",
        "options": ["<header>", "<div>", "<article>", "<nav>"],
        "correctAnswer": "<div>"
      },
      {
        "questionText": "Which semantic HTML5 element is specifically designed to contain navigation links?",
        "options": ["<menu>", "<links>", "<nav>", "<direction>"],
        "correctAnswer": "<nav>"
      },
      {
        "questionText": "There should generally be only one instance of this semantic HTML5 element per page, containing the dominant content of the `<body>`.",
        "options": ["<section>", "<article>", "<main>", "<div>"],
        "correctAnswer": "<main>"
      },
      {
        "questionText": "Which semantic HTML5 element is best suited for independent, self-contained content like a blog post or a news article?",
        "options": ["<section>", "<article>", "<aside>", "<div>"],
        "correctAnswer": "<article>"
      },
      {
        "questionText": "Content that is tangentially related to the main content (like a sidebar or a callout box) should be placed in which semantic HTML5 element?",
        "options": ["<aside>", "<supplement>", "<info>", "<sidebar>"],
        "correctAnswer": "<aside>"
      },
      {
        "questionText": "Which semantic HTML5 element is typically used to contain authorship information, copyright data, or contact information?",
        "options": ["<bottom>", "<credits>", "<summary>", "<footer>"],
        "correctAnswer": "<footer>"
      },
      {
        "questionText": "Which HTML5 tag is used to embed audio content directly into a web page?",
        "options": ["<sound>", "<media>", "<audio>", "<mp3>"],
        "correctAnswer": "<audio>"
      },
      {
        "questionText": "To display the default browser controls (like play/pause, volume) for an `<audio>` or `<video>` element, which attribute must be included?",
        "options": ["autoplay", "source", "controls", "visible"],
        "correctAnswer": "controls"
      },
      {
        "questionText": "Which HTML5 tag is used to embed video content directly into a web page?",
        "options": ["<movie>", "<clip>", "<video>", "<player>"],
        "correctAnswer": "<video>"
      },
      {
        "questionText": "The `poster` attribute in the `<video>` tag is used for what purpose?",
        "options": ["To define the video's resolution", "To specify the video's creator", "To display an image before the video loads", "To link to an external video source"],
        "correctAnswer": "To display an image before the video loads"
      },
      {
        "questionText": "Which HTML tag is commonly used to embed another HTML document within the current document, often seen with YouTube videos or Google Maps?",
        "options": ["<embed>", "<frame>", "<iframe>", "<object>"],
        "correctAnswer": "<iframe>"
      }
    ]
  },
  "HTML_CSS_Week4": {
    "title": "Week 4: HTML Best Practices & CSS Introduction Quiz",
    "description": "Test your understanding of HTML validation, comments, file naming, and the basics of CSS styling (inline, internal, external).",
    "questions": [
      {
        "questionText": "Why is it important to validate your HTML code?",
        "options": [
          "To make your code shorter.",
          "To ensure cross-browser compatibility and better rendering.",
          "To speed up website loading times.",
          "To automatically add styling to your page."
        ],
        "correctAnswer": "To ensure cross-browser compatibility and better rendering."
      },
      {
        "questionText": "Which online tool is recommended for validating HTML code?",
        "options": [
          "Google Chrome Developer Tools",
          "W3C CSS Validator",
          "W3C HTML Validator",
          "Mozilla Firefox Inspector"
        ],
        "correctAnswer": "W3C HTML Validator"
      },
      {
        "questionText": "What is the correct syntax for an HTML comment?",
        "options": [
          "// This is a comment //",
          "/* This is a comment */",
          "",
          "// This is a comment"
        ],
        "correctAnswer": ""
      },
      {
        "questionText": "What is NOT a primary purpose of using comments in HTML?",
        "options": [
          "To explain complex code sections.",
          "To temporarily disable code for debugging.",
          "To add visual styling to elements.",
          "To organize code."
        ],
        "correctAnswer": "To add visual styling to elements."
      },
      {
        "questionText": "Which file naming convention is recommended for HTML files?",
        "options": [
          "my new page.html",
          "My_New_Page.html",
          "my-new-page.html",
          "MyNewPage.html"
        ],
        "correctAnswer": "my-new-page.html"
      },
      {
        "questionText": "What does CSS stand for?",
        "options": [
          "Computer Style Sheets",
          "Creative Style Solutions",
          "Cascading Style Sheets",
          "Colorful Styling Syntax"
        ],
        "correctAnswer": "Cascading Style Sheets"
      },
      {
        "questionText": "Why is it considered good practice to separate HTML (structure) from CSS (style)?",
        "options": [
          "It makes HTML files smaller.",
          "It's only for advanced developers.",
          "It improves maintainability and organization (separation of concerns).",
          "It allows HTML to function without a browser."
        ],
        "correctAnswer": "It improves maintainability and organization (separation of concerns)."
      },
      {
        "questionText": "What is the basic syntax for a CSS rule?",
        "options": [
          "property: value; selector;",
          "{ selector; property: value; }",
          "selector { property: value; }",
          "value: property; selector;"
        ],
        "correctAnswer": "selector { property: value; }"
      },
      {
        "questionText": "Applying styles directly to an HTML element using the `style` attribute is known as:",
        "options": [
          "External CSS",
          "Internal CSS",
          "Inline CSS",
          "Global CSS"
        ],
        "correctAnswer": "Inline CSS"
      },
      {
        "questionText": "Which method of applying CSS is generally discouraged for larger projects due to difficulty in management?",
        "options": [
          "External CSS",
          "Internal CSS",
          "Inline CSS",
          "Using a CSS framework"
        ],
        "correctAnswer": "Inline CSS"
      },
      {
        "questionText": "Where should internal CSS be placed in an HTML document?",
        "options": [
          "At the end of the `<body>` section.",
          "Within a `<style>` tag in the `<head>` section.",
          "In a separate `.css` file.",
          "As an attribute on individual HTML elements."
        ],
        "correctAnswer": "Within a `<style>` tag in the `<head>` section."
      },
      {
        "questionText": "Which CSS property is used to change the color of text?",
        "options": [
          "text-color",
          "font-color",
          "color",
          "text-style"
        ],
        "correctAnswer": "color"
      },
      {
        "questionText": "Which CSS property is used to change the background color of an element?",
        "options": [
          "bg-color",
          "background-color",
          "color-background",
          "fill-color"
        ],
        "correctAnswer": "background-color"
      },
      {
        "questionText": "What is the most recommended and standard way to apply CSS to an HTML document for better maintainability and reusability?",
        "options": [
          "Inline CSS",
          "Internal CSS",
          "External CSS",
          "Using JavaScript for styling"
        ],
        "correctAnswer": "External CSS"
      },
      {
        "questionText": "Which HTML tag is used to link an external stylesheet to an HTML document?",
        "options": [
          "<style>",
          "<css>",
          "<link>",
          "<stylesheet>"
        ],
        "correctAnswer": "<link>"
      },
      {
        "questionText": "What does the `rel=\"stylesheet\"` attribute in a `<link>` tag signify?",
        "options": [
          "It's a relative path to the stylesheet.",
          "It defines the relationship of the linked document as a stylesheet.",
          "It reloads the stylesheet automatically.",
          "It specifies the stylesheet is responsive."
        ],
        "correctAnswer": "It defines the relationship of the linked document as a stylesheet."
      },
      {
        "questionText": "Which attribute of the `<link>` tag specifies the path to the external CSS file?",
        "options": [
          "src",
          "path",
          "href",
          "link"
        ],
        "correctAnswer": "href"
      },
      {
        "questionText": "Which of these is NOT an area covered by 'What's next?' topics typically following basic HTML and CSS?",
        "options": [
          "JavaScript",
          "Web Hosting",
          "Advanced Word Processing",
          "Version Control (Git/GitHub)"
        ],
        "correctAnswer": "Advanced Word Processing"
      },
      {
        "questionText": "What is the purpose of consistent indentation in HTML code?",
        "options": [
          "It's required for the browser to render the page correctly.",
          "It reduces the file size of the HTML document.",
          "It makes the code easier to read and understand.",
          "It prevents HTML validation errors."
        ],
        "correctAnswer": "It makes the code easier to read and understand."
      },
      {
        "questionText": "Which of the following resources is recommended for continued learning in web development?",
        "options": [
          "Wikipedia",
          "W3Schools",
          "Microsoft Word Help",
          "Social Media Feeds"
        ],
        "correctAnswer": "W3Schools"
      }
    ]
  },
  //python
  "Python_Week1": {
    "title": "Week 1: Introduction to Python Quiz",
    "description": "Test your understanding of Python basics, including 'Hello World!', variables, data types, and user input.",
    "questions": [
      {
        "questionText": "What is programming?",
        "options": [
          "Writing documents in a word processor",
          "Giving instructions to a computer",
          "Designing graphics for websites",
          "Browse the internet"
        ],
        "correctAnswer": "Giving instructions to a computer"
      },
      {
        "questionText": "Which of the following best describes Python?",
        "options": [
          "A low-level, compiled programming language",
          "A high-level, interpreted, general-purpose programming language",
          "A markup language for web pages",
          "A database management system"
        ],
        "correctAnswer": "A high-level, interpreted, general-purpose programming language"
      },
      {
        "questionText": "What function is used to print output to the console in Python?",
        "options": ["display()", "write()", "output()", "print()"],
        "correctAnswer": "print()"
      },
      {
        "questionText": "How do you run a Python script named `hello.py` from the terminal?",
        "options": [
          "execute hello.py",
          "run hello.py",
          "python hello.py",
          "open hello.py"
        ],
        "correctAnswer": "python hello.py"
      },
      {
        "questionText": "Which symbol is used for single-line comments in Python?",
        "options": ["//", "/* */", "#", "--"],
        "correctAnswer": "#"
      },
      {
        "questionText": "What are multi-line comments in Python often called, especially when used at the beginning of a function or module?",
        "options": ["Block comments", "Inline comments", "Docstrings", "Multi-comments"],
        "correctAnswer": "Docstrings"
      },
      {
        "questionText": "What is a variable in programming?",
        "options": [
          "A fixed value that cannot be changed",
          "A type of computer hardware",
          "A named container for storing data",
          "A mathematical operation"
        ],
        "correctAnswer": "A named container for storing data"
      },
      {
        "questionText": "Which of the following is a valid Python variable name?",
        "options": ["2my_variable", "my-variable", "my_variable", "my variable"],
        "correctAnswer": "my_variable"
      },
      {
        "questionText": "What is the assignment operator in Python?",
        "options": ["==", ":", "=", "->"],
        "correctAnswer": "="
      },
      {
        "questionText": "Which data type represents whole numbers in Python?",
        "options": ["float", "string", "boolean", "int"],
        "correctAnswer": "int"
      },
      {
        "questionText": "What is the data type of the value `3.14` in Python?",
        "options": ["int", "string", "float", "boolean"],
        "correctAnswer": "float"
      },
      {
        "questionText": "How do you define a string in Python?",
        "options": [
          "Using parentheses: (Hello)",
          "Using angle brackets: <Hello>",
          "Using single or double quotes: 'Hello' or \"Hello\"",
          "Using square brackets: [Hello]"
        ],
        "correctAnswer": "Using single or double quotes: 'Hello' or \"Hello\""
      },
      {
        "questionText": "Which built-in function is used to check the data type of a variable in Python?",
        "options": ["info()", "typeof()", "datatype()", "type()"],
        "correctAnswer": "type()"
      },
      {
        "questionText": "What is the result of `10 // 3` in Python?",
        "options": ["3.333...", "3", "1", "0"],
        "correctAnswer": "3"
      },
      {
        "questionText": "What does the modulo operator (`%`) return?",
        "options": [
          "The quotient of a division",
          "The remainder of a division",
          "The sum of two numbers",
          "The product of two numbers"
        ],
        "correctAnswer": "The remainder of a division"
      },
      {
        "questionText": "How do you concatenate (join) two strings in Python?",
        "options": [
          "Using the & operator",
          "Using the + operator",
          "Using the .join() method (only for lists of strings)",
          "Using the concat() function"
        ],
        "correctAnswer": "Using the + operator"
      },
      {
        "questionText": "What is the primary purpose of the `input()` function in Python?",
        "options": [
          "To display text on the screen",
          "To read data from a file",
          "To get user input from the console",
          "To perform mathematical calculations"
        ],
        "correctAnswer": "To get user input from the console"
      },
      {
        "questionText": "What data type does the `input()` function always return?",
        "options": ["int", "float", "boolean", "string"],
        "correctAnswer": "string"
      },
      {
        "questionText": "You get a string '25' from user input. How would you convert it to an integer in Python?",
        "options": ["to_int('25')", "integer('25')", "int('25')", "convert_int('25')"],
        "correctAnswer": "int('25')"
      },
      {
        "questionText": "Which of the following is the correct syntax for an f-string (formatted string literal) in Python?",
        "options": [
          "\"Hello, {name}!\"",
          "'Hello, [name]!'",
          "f'Hello, {name}!'",
          "format('Hello, {}!', name)"
        ],
        "correctAnswer": "f'Hello, {name}!'"
      }
    ]
  },

  "Python_Week2": {
    "title": "Week 2: Control Flow & Collections Quiz",
    "description": "Test your knowledge on conditional statements (if, elif, else), loops (for, while), and Python lists.",
    "questions": [
      {
        "questionText": "Which of the following is the correct comparison operator for \"equal to\" in Python?",
        "options": [
          "=",
          "==",
          "!=",
          "is"
        ],
        "correctAnswer": "=="
      },
      {
        "questionText": "What is the data type that can only hold `True` or `False` values?",
        "options": [
          "Integer",
          "String",
          "Boolean",
          "Float"
        ],
        "correctAnswer": "Boolean"
      },
      {
        "questionText": "Which logical operator requires *both* conditions to be `True` for the overall condition to be `True`?",
        "options": [
          "or",
          "not",
          "and",
          "either"
        ],
        "correctAnswer": "and"
      },
      {
        "questionText": "In Python, what is the significance of indentation in `if`, `elif`, and `else` statements?",
        "options": [
          "It makes the code look neater.",
          "It defines which lines of code belong to each block.",
          "It is optional and has no functional impact.",
          "It speeds up code execution."
        ],
        "correctAnswer": "It defines which lines of code belong to each block."
      },
      {
        "questionText": "What will be the output of the following code?\n```python\nx = 10\nif x > 15:\n    print(\"A\")\nelif x >= 10:\n    print(\"B\")\nelse:\n    print(\"C\")\n```",
        "options": [
          "A",
          "B",
          "C",
          "Error"
        ],
        "correctAnswer": "B"
      },
      {
        "questionText": "Which type of loop is best suited for iterating over a sequence (like a string or a list) or a fixed number of times using `range()`?",
        "options": [
          "`while` loop",
          "`do-while` loop",
          "`for` loop",
          "`until` loop"
        ],
        "correctAnswer": "`for` loop"
      },
      {
        "questionText": "What does `range(3)` generate in a `for` loop?",
        "options": [
          "1, 2, 3",
          "0, 1, 2",
          "0, 1, 2, 3",
          "1, 2"
        ],
        "correctAnswer": "0, 1, 2"
      },
      {
        "questionText": "What is the primary risk of not having a condition that eventually becomes `False` in a `while` loop?",
        "options": [
          "The loop will run slower.",
          "The loop will only run once.",
          "It will cause a syntax error.",
          "It will create an infinite loop."
        ],
        "correctAnswer": "It will create an infinite loop."
      },
      {
        "questionText": "Which statement immediately terminates the entire loop and moves execution to the code following the loop?",
        "options": [
          "`continue`",
          "`pass`",
          "`break`",
          "`exit`"
        ],
        "correctAnswer": "`break`"
      },
      {
        "questionText": "What will be printed by the following code?\n```python\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)\n```",
        "options": [
          "0, 1, 2",
          "0, 2",
          "1, 2",
          "0, 1"
        ],
        "correctAnswer": "0, 2"
      },
      {
        "questionText": "Which of the following is the correct way to define a Python list?",
        "options": [
          "`my_list = {1, 2, 3}`",
          "`my_list = (1, 2, 3)`",
          "`my_list = [1, 2, 3]`",
          "`my_list = \"1, 2, 3\"`"
        ],
        "correctAnswer": "`my_list = [1, 2, 3]`"
      },
      {
        "questionText": "What characteristic describes Python lists, allowing their elements to be changed after creation?",
        "options": [
          "Immutable",
          "Static",
          "Ordered",
          "Mutable"
        ],
        "correctAnswer": "Mutable"
      },
      {
        "questionText": "Given `my_list = [\"apple\", \"banana\", \"cherry\"]`, how do you access the element \"banana\"?",
        "options": [
          "`my_list[2]`",
          "`my_list[1]`",
          "`my_list[0]`",
          "`my_list[\"banana\"]`"
        ],
        "correctAnswer": "`my_list[1]`"
      },
      {
        "questionText": "What will `fruits[-1]` return from `fruits = [\"grape\", \"kiwi\", \"melon\"]`?",
        "options": [
          "\"grape\"",
          "\"kiwi\"",
          "\"melon\"",
          "Error"
        ],
        "correctAnswer": "\"melon\""
      },
      {
        "questionText": "Which method is used to add an item to the end of a list?",
        "options": [
          "`add()`",
          "`insert()`",
          "`extend()`",
          "`append()`"
        ],
        "correctAnswer": "`append()`"
      },
      {
        "questionText": "What is the output of `len(my_list)` if `my_list = [10, 20, 30, 40]`?",
        "options": [
          "3",
          "4",
          "5",
          "Error"
        ],
        "correctAnswer": "4"
      },
      {
        "questionText": "After executing `numbers = [1, 2, 3]; numbers.remove(2)`, what will `numbers` contain?",
        "options": [
          "`[1, 3]`",
          "`[1, 2]`",
          "`[3]`",
          "`[1, 2, 3]` (no change)"
        ],
        "correctAnswer": "`[1, 3]`"
      },
      {
        "questionText": "Given `data = [\"A\", \"B\", \"C\", \"D\", \"E\"]`, what does `data[1:4]` return?",
        "options": [
          "`[\"A\", \"B\", \"C\"]`",
          "`[\"B\", \"C\", \"D\"]`",
          "`[\"B\", \"C\", \"D\", \"E\"]`",
          "`[\"C\", \"D\", \"E\"]`"
        ],
        "correctAnswer": "`[\"B\", \"C\", \"D\"]`"
      },
      {
        "questionText": "Which of the following correctly changes the second element of `colors = [\"red\", \"green\", \"blue\"]` to \"yellow\"?",
        "options": [
          "`colors[1] = \"yellow\"`",
          "`colors.set(1, \"yellow\")`",
          "`colors.change(1, \"yellow\")`",
          "`colors[2] = \"yellow\"`"
        ],
        "correctAnswer": "`colors[1] = \"yellow\"`"
      },
      {
        "questionText": "When iterating through a list using a `for` loop, what does the loop variable represent in each iteration?\n```python\nmy_list = [10, 20, 30]\nfor item in my_list:\n    # What is 'item' here?\n    pass\n```",
        "options": [
          "The index of the current element.",
          "A copy of the entire list.",
          "The value of the current element.",
          "The length of the list."
        ],
        "correctAnswer": "The value of the current element."
      }
    ]
  },

  "Python_Week3": {
    "title": "Week 3: More Collections & Functions Quiz",
    "description": "Test your understanding of Tuples, Sets, Dictionaries, and Functions in Python.",
    "questions": [
      {
        "questionText": "Which of the following data structures is ordered and immutable?",
        "options": [
          "List",
          "Tuple",
          "Set",
          "Dictionary"
        ],
        "correctAnswer": "Tuple"
      },
      {
        "questionText": "Given `my_tuple = (10, 20, 30)`, which operation will cause an error?",
        "options": [
          "`print(my_tuple[1])`",
          "`for x in my_tuple: print(x)`",
          "`my_tuple[0] = 5`",
          "`len(my_tuple)`"
        ],
        "correctAnswer": "`my_tuple[0] = 5`"
      },
      {
        "questionText": "What is a common use case for tuples in Python?",
        "options": [
          "Storing a collection of items that will frequently change size",
          "Efficiently removing duplicate items from a collection",
          "Representing fixed coordinates like (x, y)",
          "Mapping unique keys to values"
        ],
        "correctAnswer": "Representing fixed coordinates like (x, y)"
      },
      {
        "questionText": "Which of the following best describes a Python Set?",
        "options": [
          "An ordered collection of unique items.",
          "An unordered collection of mutable items.",
          "An unordered collection of unique items.",
          "A collection of key-value pairs."
        ],
        "correctAnswer": "An unordered collection of unique items."
      },
      {
        "questionText": "What will be the content of `my_set` after this code: `my_set = {1, 2, 3, 2, 4}`?",
        "options": [
          "`{1, 2, 3, 2, 4}`",
          "`{1, 2, 3, 4}`",
          "`[1, 2, 3, 4]`",
          "Error, duplicates are not allowed during creation."
        ],
        "correctAnswer": "`{1, 2, 3, 4}`"
      },
      {
        "questionText": "How do you create an empty set in Python?",
        "options": [
          "`my_set = {}`",
          "`my_set = []`",
          "`my_set = set()`",
          "`my_set = new Set()`"
        ],
        "correctAnswer": "`my_set = set()`"
      },
      {
        "questionText": "Which set operation returns all unique items that are present in at least one of two sets?",
        "options": [
          "Intersection",
          "Difference",
          "Symmetric Difference",
          "Union"
        ],
        "correctAnswer": "Union"
      },
      {
        "questionText": "What distinguishes a Dictionary from a List or a Set in Python?",
        "options": [
          "Dictionaries are ordered.",
          "Dictionaries store items as key-value pairs.",
          "Dictionaries only store numbers.",
          "Dictionaries cannot be modified after creation."
        ],
        "correctAnswer": "Dictionaries store items as key-value pairs."
      },
      {
        "questionText": "Which of these is generally suitable to be a key in a Python dictionary?",
        "options": [
          "List",
          "Set",
          "Dictionary",
          "String"
        ],
        "correctAnswer": "String"
      },
      {
        "questionText": "Given `student = {'name': 'John', 'age': 20}`, how do you access John's age?",
        "options": [
          "`student.age`",
          "`student[1]`",
          "`student['age']`",
          "`student.get(20)`"
        ],
        "correctAnswer": "`student['age']`"
      },
      {
        "questionText": "How do you add a new key-value pair `('city': 'London')` to an existing dictionary `my_dict`?",
        "options": [
          "`my_dict.add('city', 'London')`",
          "`my_dict['city'] = 'London'`",
          "`my_dict.insert('city', 'London')`",
          "`my_dict.update('city': 'London')`"
        ],
        "correctAnswer": "`my_dict['city'] = 'London'`"
      },
      {
        "questionText": "Which method would you use to iterate over both the keys and values of a dictionary simultaneously?",
        "options": [
          "`.keys()`",
          "`.values()`",
          "`.items()`",
          "`.get()`"
        ],
        "correctAnswer": "`.items()`"
      },
      {
        "questionText": "What is the main purpose of defining a function in Python?",
        "options": [
          "To make the code run faster.",
          "To avoid repeating blocks of code and improve organization.",
          "To create a new data type.",
          "To hide code from other programmers."
        ],
        "correctAnswer": "To avoid repeating blocks of code and improve organization."
      },
      {
        "questionText": "Which keyword is used to define a function in Python?",
        "options": [
          "`func`",
          "`define`",
          "`function`",
          "`def`"
        ],
        "correctAnswer": "`def`"
      },
      {
        "questionText": "In the function definition `def calculate_sum(a, b):`, what are `a` and `b` called?",
        "options": [
          "Arguments",
          "Return values",
          "Parameters",
          "Variables"
        ],
        "correctAnswer": "Parameters"
      },
      {
        "questionText": "What does a function implicitly return if it does not have an explicit `return` statement?",
        "options": [
          "0",
          "An empty string",
          "None",
          "True"
        ],
        "correctAnswer": "None"
      },
      {
        "questionText": "What is a 'docstring' in a Python function?",
        "options": [
          "A type of error message.",
          "A comment used to disable parts of the function.",
          "A triple-quoted string explaining what the function does.",
          "The name of the function."
        ],
        "correctAnswer": "A triple-quoted string explaining what the function does."
      },
      {
        "questionText": "Variables defined inside a function are said to have what kind of scope?",
        "options": [
          "Global scope",
          "Local scope",
          "Module scope",
          "Block scope"
        ],
        "correctAnswer": "Local scope"
      },
      {
        "questionText": "If a function `greet(name)` is defined, which of the following is a correct way to call it?",
        "options": [
          "`greet name`",
          "`call greet('Alice')`",
          "`greet('Alice')`",
          "`function greet('Alice')`"
        ],
        "correctAnswer": "`greet('Alice')`"
      },
      {
        "questionText": "What is the output of the following code?\n```python\ndef multiply(x, y):\n    return x * y\n\nresult = multiply(4, 5)\nprint(result)\n```",
        "options": [
          "4",
          "5",
          "20",
          "Error"
        ],
        "correctAnswer": "20"
      }
    ]
  },

  "Python_Week4": {
    "title": "Week 4: Error Handling, File I/O & Modules Quiz",
    "description": "Test your understanding of error handling (`try-except`), file input/output, and Python modules.",
    "questions": [
      {
        "questionText": "Which block is used to enclose code that might potentially cause an error in Python?",
        "options": [
          "`except`",
          "`finally`",
          "`try`",
          "`else`"
        ],
        "correctAnswer": "`try`"
      },
      {
        "questionText": "If you perform an operation on an inappropriate data type (e.g., adding a number to a string), what type of error will most likely occur?",
        "options": [
          "`SyntaxError`",
          "`NameError`",
          "`TypeError`",
          "`ValueError`"
        ],
        "correctAnswer": "`TypeError`"
      },
      {
        "questionText": "Which `except` block would catch an error specifically caused by attempting to divide by zero?",
        "options": [
          "`except ValueError:`",
          "`except ZeroDivisionError:`",
          "`except Exception:`",
          "`except TypeError:`"
        ],
        "correctAnswer": "`except ZeroDivisionError:`"
      },
      {
        "questionText": "What is the purpose of the `finally` block in a `try...except...finally` structure?",
        "options": [
          "It executes only if an error occurs.",
          "It executes only if no error occurs.",
          "It always executes, regardless of whether an exception occurred or was handled.",
          "It defines a new function."
        ],
        "correctAnswer": "It always executes, regardless of whether an exception occurred or was handled."
      },
      {
        "questionText": "Which file mode will create a new file if it doesn't exist, or overwrite (truncate) an existing file?",
        "options": [
          "`\"r\"` (read)",
          "`\"a\"` (append)",
          "`\"w\"` (write)",
          "`\"x\"` (exclusive creation)"
        ],
        "correctAnswer": "`\"w\"` (write)"
      },
      {
        "questionText": "What is the recommended and safest way to open and automatically close a file in Python?",
        "options": [
          "Using `file = open(...)` and always remembering `file.close()`",
          "Using the `with` statement (`with open(...) as file:`)",
          "By passing the file object to a garbage collector function",
          "Files are closed automatically by Python; no special handling is needed."
        ],
        "correctAnswer": "Using the `with` statement (`with open(...) as file:`)"
      },
      {
        "questionText": "Which method is used to read the entire content of a file as a single string?",
        "options": [
          "`file.readline()`",
          "`file.readlines()`",
          "`file.read()`",
          "`file.get_content()`"
        ],
        "correctAnswer": "`file.read()`"
      },
      {
        "questionText": "What does iterating directly over a file object (e.g., `for line in file:`) do?",
        "options": [
          "Reads the entire file into memory at once.",
          "Reads only the first line of the file.",
          "Reads the file line by line, which is efficient for large files.",
          "Raises a `TypeError`."
        ],
        "correctAnswer": "Reads the file line by line, which is efficient for large files."
      },
      {
        "questionText": "What are Python modules primarily used for?",
        "options": [
          "To speed up program execution.",
          "To define new programming languages.",
          "To organize code into reusable, logical units.",
          "To encrypt data within a program."
        ],
        "correctAnswer": "To organize code into reusable, logical units."
      },
      {
        "questionText": "Given a module named `my_module.py` containing a function `greet()`, how would you import and call `greet()`?",
        "options": [
          "`import my_module; my_module.greet()`",
          "`call my_module.greet()`",
          "`include my_module.greet()`",
          "`from my_module import *; greet()`"
        ],
        "correctAnswer": "`import my_module; my_module.greet()`"
      },
      {
        "questionText": "Which statement would you use to import only the `randint` function from the `random` module?",
        "options": [
          "`import random.randint`",
          "`from random import randint`",
          "`include random.randint`",
          "`use random randint`"
        ],
        "correctAnswer": "`from random import randint`"
      },
      {
        "questionText": "What is the expected output of this code if the user inputs 'abc' for the first number?\n```python\ntry:\n    num = int(input('Enter a number: '))\n    print(f'You entered: {num}')\nexcept ValueError:\n    print('That was not a valid number!')\n```",
        "options": [
          "You entered: abc",
          "That was not a valid number!",
          "An unexpected error occurred: invalid literal for int()",
          "The program will crash."
        ],
        "correctAnswer": "That was not a valid number!"
      },
      {
        "questionText": "You are writing to a file in 'w' mode. If the file already contains data, what happens to that data when you open it with 'w' mode?",
        "options": [
          "New data is appended to the end.",
          "The old data is read first, then new data is added.",
          "The file's existing content is erased (truncated).",
          "An error (`FileExistsError`) is raised."
        ],
        "correctAnswer": "The file's existing content is erased (truncated)."
      },
      {
        "questionText": "Which module would you typically use for mathematical operations like calculating square roots or using PI?",
        "options": [
          "`sys`",
          "`os`",
          "`math`",
          "`random`"
        ],
        "correctAnswer": "`math`"
      },
      {
        "questionText": "What is the primary benefit of using `try-except` blocks?",
        "options": [
          "To make the code run faster.",
          "To store data permanently.",
          "To prevent program crashes due to unexpected errors.",
          "To create reusable functions."
        ],
        "correctAnswer": "To prevent program crashes due to unexpected errors."
      },
      {
        "questionText": "When reading a file, why might you use `.strip()` on each line?",
        "options": [
          "To convert the line to an integer.",
          "To add extra spaces to the line.",
          "To remove leading/trailing whitespace, including newline characters (`\\n`).",
          "To make the line uppercase."
        ],
        "correctAnswer": "To remove leading/trailing whitespace, including newline characters (`\\n`)."
      },
      {
        "questionText": "What is the main difference between `'w'` and `'a'` file modes?",
        "options": [
          "`\"w\"` is for reading, `\"a\"` is for writing.",
          "`\"w\"` creates/overwrites, `\"a\"` creates/appends.",
          "`\"w\"` is for binary files, `\"a\"` is for text files.",
          "There is no difference; they are interchangeable."
        ],
        "correctAnswer": "`\"w\"` creates/overwrites, `\"a\"` creates/appends."
      },
      {
        "questionText": "If you open a file with `open(\"data.txt\", \"r\")` and `data.txt` does not exist, what will happen?",
        "options": [
          "The file will be created.",
          "An empty string will be returned.",
          "A `FileNotFoundError` will be raised.",
          "The program will continue without issues."
        ],
        "correctAnswer": "A `FileNotFoundError` will be raised."
      },
      {
        "questionText": "Which of these is NOT a common area for Python specialization mentioned in the 'Next Steps' section?",
        "options": [
          "Web Development",
          "Data Science & Machine Learning",
          "Quantum Physics Simulation (without specific Python libraries mentioned)",
          "Automation & Scripting"
        ],
        "correctAnswer": "Quantum Physics Simulation (without specific Python libraries mentioned)"
      },
      {
        "questionText": "What is the primary benefit of Python's 'standard library'?",
        "options": [
          "It makes your code run faster.",
          "It allows Python to run on any operating system.",
          "It provides a vast collection of pre-built modules for common tasks, saving development time.",
          "It's a collection of external, third-party libraries."
        ],
        "correctAnswer": "It provides a vast collection of pre-built modules for common tasks, saving development time."
      }
    ]
  }









};

export default allQuizzes;