// This file will hold all your quiz data locally.

const allQuizzes = {
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
        "questionText": "What unit is often used to set margins?",
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
  }
};

export default allQuizzes;
