# Technical Specification
## Shaping History Game

**Version**: 1.0
**Date**: November 11, 2025

---

## 1. Architecture Overview

### 1.1 System Design
```
┌─────────────────────────────────────────┐
│         Browser (Client-Side)           │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │   HTML   │  │   CSS    │           │
│  │ Content  │  │  Styles  │           │
│  └──────────┘  └──────────┘           │
│                                         │
│  ┌──────────────────────────┐          │
│  │      Game Engine (JS)    │          │
│  │  - State Management      │          │
│  │  - Navigation            │          │
│  │  - Choice Tracking       │          │
│  │  - Display Logic         │          │
│  └──────────────────────────┘          │
│              ↓                          │
│  ┌──────────────────────────┐          │
│  │    localStorage API      │          │
│  │  - Save game state       │          │
│  │  - Save reflections      │          │
│  └──────────────────────────┘          │
└─────────────────────────────────────────┘
```

### 1.2 Technology Choices

**Why vanilla JavaScript?**
- No build process needed
- Faster load times (no framework overhead)
- Easier for future maintainers to understand
- Works offline once loaded
- No version conflicts or breaking changes

**Why localStorage?**
- Persists across sessions
- No server needed
- Simple API
- Works offline
- Privacy-friendly (data never leaves device)

**Why GitHub Pages?**
- Free hosting
- Simple deployment (git push)
- Built-in CI/CD
- SSL by default
- No server maintenance

---

## 2. Data Models

### 2.1 Game State Object
```javascript
const gameState = {
  // Version for future migrations
  version: "1.0",

  // Current position
  currentChapter: 1, // 1 or 2
  currentScreen: "intro", // Screen identifier

  // Completion tracking
  started: "2025-11-11T10:30:00.000Z", // ISO timestamp
  lastPlayed: "2025-11-11T10:35:00.000Z",
  completed: false,

  // Chapter 1: Eusebius
  eusebius: {
    choices303: {
      bishopsHiding: "B", // Choice ID
      emphasis: "A",
      collaboration: "C"
    },
    choices313: {
      reframing: "B",
      revisitBishops: "B"
    },
    reflection: "His situation changed from victim to powerful bishop, so he needed to protect his colleagues and justify Constantine's victory.",
    completed: false
  },

  // Chapter 2: Augustine
  augustine: {
    choices: {
      voice: "B",
      tears: "C",
      perfectText: "A",
      privateVsCommunal: "C"
    },
    reflection: "Writing 11 years later as a bishop, he emphasized God's grace more than if he wrote immediately after.",
    completed: false
  },

  // Final reflection
  finalReflection: "I emphasize achievements and leave out embarrassing moments when telling my story.",

  // Analytics (optional)
  timeSpent: 720 // seconds
};
```

### 2.2 Content Structure
```javascript
const content = {
  chapters: [
    {
      id: "eusebius",
      title: "Chapter 1: Eusebius's Revisions",
      screens: [
        {
          id: "intro",
          type: "context",
          content: {
            text: "You are Eusebius of Caesarea...",
            continueButton: "Continue"
          }
        },
        {
          id: "source-text",
          type: "text-display",
          content: {
            heading: "This is what happened:",
            text: "During the persecution...",
            continueButton: "Continue"
          }
        },
        {
          id: "decision-1",
          type: "choice",
          content: {
            context: "A bishop hid from soldiers...",
            question: "How do you describe this?",
            choices: [
              {
                id: "A",
                text: "He hid shamefully",
                result: "shame"
              },
              {
                id: "B",
                text: "He hid to survive",
                result: "neutral"
              },
              {
                id: "C",
                text: "[Don't mention it]",
                result: "omit"
              }
            ]
          }
        }
        // ... more screens
      ]
    }
    // ... more chapters
  ]
};
```

---

## 3. Core Components

### 3.1 State Manager
```javascript
class StateManager {
  constructor() {
    this.state = this.loadState() || this.getInitialState();
  }

  getInitialState() {
    return {
      version: "1.0",
      currentChapter: 1,
      currentScreen: "intro",
      started: new Date().toISOString(),
      // ... rest of initial state
    };
  }

  loadState() {
    const saved = localStorage.getItem('shapingHistoryGame');
    return saved ? JSON.parse(saved) : null;
  }

  saveState() {
    this.state.lastPlayed = new Date().toISOString();
    localStorage.setItem('shapingHistoryGame', JSON.stringify(this.state));
  }

  recordChoice(chapter, timeperiod, decisionId, choiceId) {
    // Update state with choice
    this.saveState();
  }

  recordReflection(chapter, text) {
    // Update state with reflection
    this.saveState();
  }

  reset() {
    this.state = this.getInitialState();
    this.saveState();
  }
}
```

### 3.2 Screen Manager
```javascript
class ScreenManager {
  constructor(stateManager) {
    this.stateManager = stateManager;
    this.contentData = content; // Loaded from content.js or embedded
    this.container = document.getElementById('game-container');
  }

  render() {
    const { currentChapter, currentScreen } = this.stateManager.state;
    const screen = this.getScreen(currentChapter, currentScreen);

    // Clear container
    this.container.innerHTML = '';

    // Render based on screen type
    switch (screen.type) {
      case 'context':
        this.renderContext(screen);
        break;
      case 'choice':
        this.renderChoice(screen);
        break;
      case 'comparison':
        this.renderComparison(screen);
        break;
      case 'reflection':
        this.renderReflection(screen);
        break;
      // ... other screen types
    }
  }

  renderContext(screen) {
    // Create DOM elements for context screen
    // Add event listener to Continue button
  }

  renderChoice(screen) {
    // Create DOM elements for choice screen
    // Add event listeners to choice buttons
  }

  nextScreen() {
    // Advance to next screen
    // Update state
    // Re-render
  }
}
```

### 3.3 Comparison Builder
```javascript
class ComparisonBuilder {
  constructor(stateManager) {
    this.stateManager = stateManager;
  }

  buildEusebiusComparison() {
    const { choices303, choices313 } = this.stateManager.state.eusebius;

    // Build text based on choices
    const text303 = this.constructText(choices303, "303");
    const text313 = this.constructText(choices313, "313");

    return {
      version303: text303,
      version313: text313,
      differences: this.highlightDifferences(text303, text313)
    };
  }

  constructText(choices, period) {
    // Logic to build narrative based on choices
    let text = "During the persecution, ";

    if (choices.emphasis === "A") {
      text += "terrible violence destroyed our churches. ";
    } else if (choices.emphasis === "B") {
      text += "brave martyrs showed great courage. ";
    }

    // ... more logic

    return text;
  }

  highlightDifferences(text1, text2) {
    // Simple diff algorithm
    // Mark added/removed/changed portions
    // Return array of changes
  }
}
```

---

## 4. File Structure and Organization

### 4.1 Directory Layout
```
src/
├── index.html          # Main entry point
├── styles.css          # All styles
├── game.js             # Game logic (or split into modules)
└── content.js          # Content data (optional separate file)
```

**Alternative (modular approach)**:
```
src/
├── index.html
├── css/
│   ├── base.css       # Reset, variables
│   ├── layout.css     # Grid, containers
│   ├── components.css # Buttons, cards, etc.
│   └── screens.css    # Screen-specific styles
├── js/
│   ├── main.js        # Entry point
│   ├── state.js       # State management
│   ├── screen.js      # Screen rendering
│   ├── comparison.js  # Comparison logic
│   └── content.js     # Content data
└── assets/
    └── (fonts, icons if needed)
```

### 4.2 HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shaping History</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Progress indicator -->
  <div id="progress-bar">
    <div class="progress-fill"></div>
    <span class="progress-text">Chapter 1 of 2</span>
  </div>

  <!-- Main game container -->
  <main id="game-container">
    <!-- Screens rendered dynamically here -->
  </main>

  <!-- Footer (optional) -->
  <footer>
    <button id="restart-btn" class="text-button">Start Over</button>
  </footer>

  <script src="game.js"></script>
</body>
</html>
```

### 4.3 CSS Structure
```css
/* ===== CSS VARIABLES ===== */
:root {
  --color-bg: #F5F1E8;
  --color-text: #3E2723;
  --color-accent: #8D6E63;
  --color-border: #D7CCC8;
  --color-context: #E8EAF6;

  --font-serif: Georgia, "Times New Roman", serif;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;

  --border-radius: 4px;
  --transition-speed: 300ms;
}

/* ===== BASE STYLES ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-serif);
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
}

/* ===== LAYOUT ===== */
#game-container {
  max-width: 700px;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
  min-height: 80vh;
}

/* ===== COMPONENTS ===== */
/* (buttons, cards, etc.) */

/* ===== SCREEN TYPES ===== */
/* (specific layouts for each screen type) */

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  /* Mobile adjustments */
}
```

---

## 5. Key Algorithms

### 5.1 Navigation State Machine
```javascript
const navigationMap = {
  "eusebius": {
    "intro": "source-text",
    "source-text": "decision-1",
    "decision-1": "decision-2",
    "decision-2": "decision-3",
    "decision-3": "time-jump",
    "time-jump": "decision-4",
    "decision-4": "decision-5",
    "decision-5": "comparison",
    "comparison": "reflection",
    "reflection": "chapter-end"
  },
  "augustine": {
    "intro": "memory-fragments",
    "memory-fragments": "decision-1",
    // ... etc
  }
};

function getNextScreen(currentChapter, currentScreen) {
  return navigationMap[currentChapter][currentScreen];
}
```

### 5.2 Text Construction Logic
```javascript
function constructEusebiusText(choices, period) {
  const templates = {
    opening: "During the persecution, ",
    violence: {
      A: "terrible violence destroyed our churches and scattered our community. ",
      B: "",
      C: ""
    },
    martyrs: {
      A: "",
      B: "brave martyrs showed the world true courage. ",
      C: "both destruction and courage were visible. "
    },
    bishops: {
      A: "Some bishops hid shamefully from their duty. ",
      B: "Some bishops hid to survive and continue their work. ",
      C: "" // omitted
    },
    collaboration: {
      A: "Certain priests gave holy books to the Romans. Father Marcus and Presbyter John were among them. ",
      B: "Some gave information to authorities. ",
      C: "" // omitted
    }
  };

  let text = templates.opening;
  text += templates.violence[choices.emphasis] || "";
  text += templates.martyrs[choices.emphasis] || "";
  text += templates.bishops[choices.bishopsHiding] || "";
  text += templates.collaboration[choices.collaboration] || "";

  // Period-specific additions
  if (period === "313") {
    if (choices.reframing === "B") {
      text += "\n\nThis suffering was a test from God that strengthened our faith.";
    } else if (choices.reframing === "C") {
      text += "\n\nThese trials prepared the way for Constantine's Christian empire.";
    }
  }

  return text;
}
```

### 5.3 Difference Highlighting
```javascript
function highlightDifferences(text1, text2) {
  // Simple word-level diff
  const words1 = text1.split(' ');
  const words2 = text2.split(' ');

  const diff = [];

  // Mark additions, removals, changes
  // This is simplified - could use a proper diff library

  return {
    text1Annotated: annotateText(text1, diff, 'original'),
    text2Annotated: annotateText(text2, diff, 'revised')
  };
}
```

---

## 6. Performance Optimization

### 6.1 Load Time Optimization
- **Inline critical CSS**: First-screen styles in `<head>`
- **Minify**: Compress HTML/CSS/JS for production
- **No external dependencies**: Everything self-contained
- **Lazy load non-critical content**: Load chapter 2 content only after chapter 1 complete

### 6.2 Runtime Performance
- **Debounce text input**: Don't save on every keystroke
- **Requestanimationframe for animations**: Smooth 60fps
- **Event delegation**: Single listener for multiple buttons
- **Virtual scrolling**: Only if long content lists (probably not needed)

### 6.3 Memory Management
- **Clear unused DOM nodes**: Remove old screens from DOM
- **Limit localStorage size**: ~5KB total (well under 5MB limit)
- **No memory leaks**: Remove event listeners when screens change

---

## 7. Browser Compatibility

### 7.1 Required Features
| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| localStorage | 4+ | 3.5+ | 4+ | 8+ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| ES6 (const/let, arrow functions) | 49+ | 51+ | 10+ | 14+ |
| Flexbox | 29+ | 28+ | 9+ | 11+ |

**Target support**: Browsers from ~2017+

### 7.2 Fallbacks
```javascript
// Check for required features
if (!window.localStorage) {
  alert("Your browser doesn't support saving progress. You can still play, but progress won't be saved.");
}

// CSS Grid fallback
@supports not (display: grid) {
  .comparison-container {
    display: flex;
    flex-direction: column;
  }
}
```

---

## 8. Testing Strategy

### 8.1 Unit Testing (Manual)
- Test each choice leads to correct state update
- Test localStorage save/load
- Test navigation between screens
- Test text construction for all choice combinations

### 8.2 Integration Testing
- Complete playthroughs on each target browser
- Test resume functionality (close tab, reopen)
- Test on actual mobile devices (iOS, Android)
- Test with slow network (throttle to 3G)

### 8.3 User Testing
- Pilot with 5-10 students
- Observe:
  - Confusion points
  - Reading time per screen
  - Whether they write reflections
  - Mobile vs desktop preferences
- Gather feedback via survey

### 8.4 Accessibility Testing
- Test with keyboard-only navigation (Tab, Enter, Space)
- Test with screen reader (VoiceOver on Safari)
- Test color contrast (use WebAIM contrast checker)
- Test with zoom at 200%

---

## 9. Deployment

### 9.1 GitHub Pages Setup
```bash
# 1. Create repository
git init
git add .
git commit -m "Initial commit"

# 2. Create GitHub repo and push
git remote add origin https://github.com/username/shaping-history.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages
# Go to repository Settings > Pages
# Source: main branch, /src folder (or root if src files at root)
# Save

# 4. Access at:
# https://username.github.io/shaping-history/
```

### 9.2 Deployment Checklist
- [ ] Remove console.log statements
- [ ] Minify CSS and JS (optional but recommended)
- [ ] Test all links and paths are relative (not absolute)
- [ ] Verify mobile responsiveness
- [ ] Test in incognito/private mode (fresh localStorage)
- [ ] Add favicon
- [ ] Update README with live link
- [ ] Create student instructions document

### 9.3 Alternative Hosting
If GitHub Pages has issues:
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Free tier, easy GitHub integration
- **Local file**: Download as .zip, open index.html

---

## 10. Maintenance

### 10.1 Content Updates
- All content in one place (`content.js` or in `game.js`)
- Update text without touching logic
- Version bump triggers localStorage reset (careful!)

### 10.2 Bug Fixes
- Test fix locally
- Push to GitHub
- GitHub Pages auto-deploys (2-5 minutes)

### 10.3 Analytics (Optional)
- Add simple analytics (Google Analytics or Plausible)
- Track: page views, completion rate, time spent
- Privacy-focused: Don't track personal data

---

## 11. Security Considerations

### 11.1 Data Privacy
- **No server**: No data leaves device
- **No tracking**: Unless analytics added
- **No personal info collected**: Only game choices and reflections
- **localStorage only**: Data stays on student's device

### 11.2 Content Security
- **No user-generated content displayed publicly**: Reflections stay local
- **No eval() or innerHTML with user input**: XSS prevention
- **Sanitize if adding export feature**: Prevent injection attacks

---

## 12. Troubleshooting

### 12.1 Common Issues

**Problem**: Game doesn't load
- **Solution**: Check browser compatibility, try different browser

**Problem**: Progress not saving
- **Solution**: Check if localStorage enabled, try disabling private browsing

**Problem**: Layout broken on mobile
- **Solution**: Test viewport meta tag, check media queries

**Problem**: Can't click buttons
- **Solution**: Check z-index, ensure event listeners attached

---

## Appendix A: Code Style Guide

### A.1 JavaScript
- Use ES6 features (const, let, arrow functions)
- camelCase for variables and functions
- PascalCase for classes
- Descriptive names (no single letters except loop counters)
- Comments for complex logic

### A.2 CSS
- kebab-case for class names
- BEM methodology optional but helpful
- Mobile-first media queries
- Comments for section headings

### A.3 HTML
- Semantic elements (main, section, article)
- Meaningful IDs and classes
- Alt text for images (if any added)
- ARIA labels for accessibility

---

**Document Status**: Complete
**Next Review**: After development complete
