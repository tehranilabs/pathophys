# Pathophysiology Quiz Web App 🧬

An interactive, mobile-responsive educational quiz application designed for pathophysiology students to test and reinforce their knowledge of disease mechanisms.

## Features ✨

- **Interactive Quiz Interface**: Multiple-choice questions with immediate feedback
- **Educational Explanations**: Detailed explanations for each answer to reinforce learning
- **Score Tracking**: Real-time score updates and comprehensive results summary
- **Mobile-Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Randomized Questions**: Questions are shuffled for varied practice sessions
- **Landing Page**: Clear instructions and features overview for new users

## Quick Start 🚀

### For Students

1. Open `landing.html` in any modern web browser to start
2. Read the instructions and click "Start Quiz"
3. Answer the questions and receive instant feedback
4. Review your results at the end

### For Educators - Deployment Options

#### Option 1: Local File System
Simply open `landing.html` directly in a web browser. No server required!

#### Option 2: GitHub Pages (Recommended)
1. Fork or upload this repository to GitHub
2. Go to repository Settings → Pages
3. Select the main branch as source
4. Your quiz will be available at: `https://[username].github.io/[repo-name]/landing.html`

#### Option 3: Web Server
Upload all files to any web server:
- Apache
- Nginx
- Node.js server (like http-server)
- Python SimpleHTTPServer: `python -m http.server 8000`

## Customizing Questions 📝

### File Structure
```
pathophys/
├── landing.html      # Landing page with instructions
├── index.html        # Main quiz page
├── quiz.js           # Quiz logic and questions
├── style.css         # Styling and responsive design
└── README.md         # This file
```

### How to Edit Questions

Questions are stored in the `quiz.js` file in the `quizQuestions` array. Each question follows this structure:

```javascript
{
    question: "Your question text here?",
    answers: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctAnswer: 1,  // Index of correct answer (0-3)
    explanation: "Detailed explanation of why this answer is correct and others are not."
}
```

### Step-by-Step Guide to Add/Edit Questions

1. **Open `quiz.js`** in any text editor (Notepad++, VS Code, Sublime Text, etc.)

2. **Locate the `quizQuestions` array** (starts around line 2)

3. **To add a new question**, copy this template and add it to the array:
   ```javascript
   {
       question: "What is the pathophysiology of [condition]?",
       answers: [
           "First option",
           "Second option (correct)",
           "Third option",
           "Fourth option"
       ],
       correctAnswer: 1,
       explanation: "The correct answer is [X] because..."
   },
   ```

4. **To edit an existing question**, simply modify the text, answers, correctAnswer index, or explanation

5. **Save the file** and refresh your browser to see changes

### Important Notes ⚠️

- The `correctAnswer` field uses **zero-based indexing**:
  - 0 = first answer
  - 1 = second answer
  - 2 = third answer
  - 3 = fourth answer

- Always include a **comma** after each question object (except the last one)

- Keep explanations **clear and educational** - they help students learn from mistakes

- Questions are **automatically randomized** each time the quiz loads

### Example Questions by Topic

The default quiz includes questions covering:
- Diabetes mellitus (Type 1)
- Cardiovascular disease (Atherosclerosis, Hypertension)
- Respiratory disease (COPD, Asthma)
- Renal disease (Acute kidney injury, Chronic kidney disease)
- Autoimmune disorders (Rheumatoid arthritis)
- Neurological conditions (Ischemic stroke)
- Hepatic disease (Cirrhosis)

## Customizing the Appearance 🎨

### Changing Colors

Edit the CSS variables in `style.css` (around line 7):

```css
:root {
    --primary-color: #2563eb;      /* Main theme color */
    --primary-dark: #1e40af;       /* Darker shade */
    --success-color: #22c55e;      /* Correct answer color */
    --error-color: #ef4444;        /* Incorrect answer color */
    /* ... more colors ... */
}
```

### Changing Text Content

- **Landing page**: Edit `landing.html`
- **Quiz page header**: Edit `index.html`
- **Button labels**: Edit `index.html` and `landing.html`

## Mobile Responsiveness 📱

The quiz automatically adapts to different screen sizes:
- **Desktop**: Full-width layout with side-by-side elements
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Single-column layout with touch-friendly buttons

Test on multiple devices or use browser developer tools (F12 → Device Toolbar).

## Browser Compatibility 🌐

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Minimum browser versions: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+

## Troubleshooting 🔧

### Quiz doesn't load
- Check browser console for JavaScript errors (F12 → Console)
- Ensure all files are in the same directory
- Verify `quiz.js` is properly linked in `index.html`

### Questions not appearing
- Check the `quizQuestions` array syntax in `quiz.js`
- Ensure all commas are in the right places
- Verify `correctAnswer` indices are within range (0-3 for 4 answers)

### Styling issues
- Clear browser cache
- Ensure `style.css` is properly linked in HTML files
- Check for CSS syntax errors

## Educational Best Practices 💡

### Creating Effective Questions

1. **Be Specific**: Focus on one concept per question
2. **Clear Distractors**: Wrong answers should be plausible but clearly incorrect
3. **Educational Explanations**: Help students understand WHY an answer is correct
4. **Varied Difficulty**: Mix easier recall questions with complex application questions
5. **Clinical Relevance**: Tie concepts to real clinical scenarios when possible

### Recommended Quiz Length

- **Short quiz**: 10-15 questions (15-20 minutes)
- **Medium quiz**: 20-30 questions (30-40 minutes)
- **Long quiz**: 40+ questions (60+ minutes)

The current default is 10 questions, which is ideal for quick knowledge checks.

## License 📄

This educational tool is free to use and modify for educational purposes. Feel free to adapt it for your teaching needs.

## Support and Contributions 🤝

For issues, suggestions, or contributions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Submit pull requests for improvements

## Credits 👏

Created for pathophysiology education. Special thanks to all educators using this tool to enhance student learning.

---

**Happy Teaching! 📚✨**