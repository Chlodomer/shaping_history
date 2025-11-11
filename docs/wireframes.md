# Wireframes and Visual Mockups
## Shaping History Game

**Version**: 1.0
**Date**: November 11, 2025
**Purpose**: Visual layout specifications for all screen types

---

## Design Principles Recap

- **Minimalist**: Clean, uncluttered
- **Readable**: Text is primary content
- **Subtle antiquity**: Hints without skeuomorphism
- **Responsive**: Works on mobile and desktop
- **Accessible**: High contrast, clear hierarchy

---

## Screen Type 1: Title/Welcome Screen

```
┌───────────────────────────────────────────────┐
│                                               │
│                                               │
│           ╔══════════════════╗                │
│           ║  SHAPING HISTORY ║                │
│           ╚══════════════════╝                │
│                                               │
│     Ancient Authors and Their Agendas         │
│                                               │
│     ┌─────────────────────────────────┐      │
│     │ In this game, you will be two   │      │
│     │ ancient authors. You will edit  │      │
│     │ their texts.                    │      │
│     │                                 │      │
│     │ There are no wrong answers.     │      │
│     │ We want to see your thinking.   │      │
│     └─────────────────────────────────┘      │
│                                               │
│                                               │
│              [ Start Game ]                   │
│                                               │
│                                               │
└───────────────────────────────────────────────┘

DESIGN NOTES:
- Center-aligned
- Title uses decorative border (thin lines, geometric)
- Subtitle smaller, serif font
- Text box has subtle background tint (#F9F7F4)
- Button: Solid terracotta background, white text
- Generous vertical spacing
```

### CSS Specifications
```css
.welcome-screen {
  text-align: center;
  padding: 60px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.title {
  font-size: 32px;
  font-family: var(--font-serif);
  color: var(--color-accent);
  border: 2px solid var(--color-border);
  padding: 16px 32px;
  display: inline-block;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: 40px;
}

.intro-box {
  background: #F9F7F4;
  border: 1px solid var(--color-border);
  padding: 24px;
  margin: 40px 0;
  line-height: 1.7;
}

.start-button {
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;
}
```

---

## Screen Type 2: Context/Introduction Screen

```
┌───────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐  │
│ │ Progress: Chapter 1 of 2                │  │
│ └─────────────────────────────────────────┘  │
│                                               │
│   Chapter 1: Eusebius's Revisions             │
│   ─────────────────────────────────           │
│                                               │
│   You are Eusebius of Caesarea.               │
│   The year is 303 CE.                         │
│                                               │
│   The Roman emperor Diocletian is             │
│   persecuting Christians.                     │
│   Soldiers are destroying churches and        │
│   burning holy books.                         │
│   Some Christians are being killed.           │
│                                               │
│   You are writing about what you see.         │
│   You want people to remember what happened.  │
│                                               │
│                                               │
│                                               │
│                                               │
│                         [ Continue → ]        │
│                                               │
└───────────────────────────────────────────────┘

DESIGN NOTES:
- Progress bar at top (subtle, not dominant)
- Chapter title: larger, underlined with thin line
- Body text: 18px, serif, 1.6 line height
- Paragraphs separated by line breaks
- Continue button: bottom right
- Tooltips appear on hover/tap (indicated by underline or ? icon)
```

### CSS Specifications
```css
.context-screen {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
}

.progress-indicator {
  background: var(--color-border);
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--color-text);
  margin-bottom: 40px;
}

.chapter-title {
  font-size: 28px;
  color: var(--color-text);
  margin-bottom: 8px;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 8px;
}

.context-text {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 24px;
}

.context-text p {
  margin-bottom: 16px;
}

.continue-button {
  float: right;
  background: var(--color-accent);
  color: white;
  padding: 12px 32px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
```

---

## Screen Type 3: Choice/Decision Screen

```
┌───────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐  │
│ │ Progress: Chapter 1 - Step 2 of 8       │  │
│ └─────────────────────────────────────────┘  │
│                                               │
│   303 CE - Your First Choice                  │
│   ─────────────────────────────────           │
│                                               │
│   ┌─────────────────────────────────────┐    │
│   │ ℹ️ CONTEXT                          │    │
│   │                                     │    │
│   │ A bishop in your city hid from     │    │
│   │ soldiers. He did not want to be    │    │
│   │ captured and killed.               │    │
│   └─────────────────────────────────────┘    │
│                                               │
│   How do you describe what the bishop did?    │
│                                               │
│   ┌─────────────────────────────────────┐    │
│   │ ○  He hid shamefully                │    │
│   │                                     │    │
│   │    This makes the bishop look bad.  │    │
│   │    It says he was a coward.        │    │
│   └─────────────────────────────────────┘    │
│                                               │
│   ┌─────────────────────────────────────┐    │
│   │ ○  He hid to survive                │    │
│   │                                     │    │
│   │    This is neutral. It explains     │    │
│   │    his reason without judging.      │    │
│   └─────────────────────────────────────┘    │
│                                               │
│   ┌─────────────────────────────────────┐    │
│   │ ○  [Don't mention it]               │    │
│   │                                     │    │
│   │    This leaves it out of your       │    │
│   │    account completely.              │    │
│   └─────────────────────────────────────┘    │
│                                               │
│                         [ Continue → ]        │
│                    (disabled until choice)    │
└───────────────────────────────────────────────┘

DESIGN NOTES:
- Context box: Light blue background (#E8EAF6)
- Context box has icon (ℹ️) or label
- Question in bold or slightly larger
- Choice cards: White background, border
- Radio button (○) on left
- Choice text bold/prominent
- Explanation text smaller, gray
- Cards have hover state (border color changes)
- Selected card: Filled radio (●), colored border
- Continue button disabled until choice made
```

### CSS Specifications
```css
.choice-screen {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
}

.context-box {
  background: #E8EAF6;
  border: 1px solid #C5CAE9;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 32px;
}

.context-box::before {
  content: "ℹ️ CONTEXT";
  display: block;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.question {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
  color: var(--color-text);
}

.choice-card {
  background: white;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 150ms ease;
}

.choice-card:hover {
  border-color: var(--color-accent);
  background: #FAFAFA;
}

.choice-card.selected {
  border-color: var(--color-accent);
  background: #FFF3E0;
}

.choice-card input[type="radio"] {
  margin-right: 12px;
  transform: scale(1.2);
}

.choice-main {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
}

.choice-explanation {
  font-size: 16px;
  color: #666;
  margin-left: 28px;
  line-height: 1.5;
}

.continue-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

---

## Screen Type 4: Comparison Screen (Side-by-Side)

```
┌───────────────────────────────────────────────┐
│                                               │
│   Your Two Versions                           │
│   ─────────────────────────────────           │
│                                               │
│   Look at how your account changed:           │
│                                               │
│   ┌─────────────────┐  ┌─────────────────┐   │
│   │ 303 CE VERSION  │  │ 313 CE VERSION  │   │
│   └─────────────────┘  └─────────────────┘   │
│                                               │
│   ┌─────────────────┐  ┌─────────────────┐   │
│   │ During the      │  │ During the      │   │
│   │ persecution,    │  │ persecution,    │   │
│   │ terrible        │  │ we saw both     │   │
│   │ violence        │  │ destruction and │   │
│   │ destroyed our   │  │ courage.        │   │
│   │ churches.       │  │                 │   │
│   │                 │  │ This suffering  │   │
│   │ Some church     │  │ was a test from │   │
│   │ leaders hid     │  │ God that made   │   │
│   │ shamefully from │  │ our faith       │   │
│   │ the soldiers.   │  │ stronger.       │   │
│   │                 │  │                 │   │
│   │ Several priests │  │ Some gave       │   │
│   │ gave holy books │  │ information to  │   │
│   │ to the Romans.  │  │ authorities.    │   │
│   └─────────────────┘  └─────────────────┘   │
│                                               │
│   [Color highlighting shows changes]          │
│                                               │
│                         [ Continue → ]        │
│                                               │
└───────────────────────────────────────────────┘

MOBILE VERSION (Stacked):
┌─────────────────────────┐
│ Your Two Versions       │
│ ─────────────────       │
│                         │
│ ┌─────────────────────┐ │
│ │ 303 CE VERSION      │ │
│ ├─────────────────────┤ │
│ │ During the          │ │
│ │ persecution...      │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ 313 CE VERSION      │ │
│ ├─────────────────────┤ │
│ │ During the          │ │
│ │ persecution...      │ │
│ └─────────────────────┘ │
│                         │
│      [ Continue → ]     │
└─────────────────────────┘

DESIGN NOTES:
- Desktop: Two columns side-by-side
- Mobile: Stacked vertically
- Each version in bordered box
- Headers distinguish versions
- Highlighting for differences:
  - Additions: Soft green background
  - Removals: Soft red background (or strikethrough)
  - Changes: Soft yellow background
- Subtle, not garish colors
```

### CSS Specifications
```css
.comparison-screen {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.comparison-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .comparison-container {
    grid-template-columns: 1fr;
  }
}

.version-box {
  background: white;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  padding: 24px;
}

.version-header {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.version-text {
  font-size: 16px;
  line-height: 1.7;
}

/* Highlighting differences */
.added {
  background: #E8F5E9; /* Light green */
  padding: 2px 4px;
  border-radius: 2px;
}

.removed {
  background: #FFEBEE; /* Light red */
  padding: 2px 4px;
  border-radius: 2px;
  text-decoration: line-through;
}

.changed {
  background: #FFF9C4; /* Light yellow */
  padding: 2px 4px;
  border-radius: 2px;
}
```

---

## Screen Type 5: Reflection Screen

```
┌───────────────────────────────────────────────┐
│                                               │
│   Reflection: Think About Your Choices        │
│   ─────────────────────────────────────       │
│                                               │
│   Look at your two versions of the same       │
│   events.                                     │
│                                               │
│   Why did your text change between 303 CE     │
│   and 313 CE?                                 │
│   What was different about your situation?    │
│                                               │
│   ┌─────────────────────────────────────┐    │
│   │                                     │    │
│   │ [Text area - 3-4 rows high]        │    │
│   │                                     │    │
│   │                                     │    │
│   └─────────────────────────────────────┘    │
│                                               │
│   ┌─────────────────────────────────────┐    │
│   │ 💡 EXAMPLE:                         │    │
│   │ "In 303 I was afraid and wanted     │    │
│   │ sympathy. In 313 I was safe and     │    │
│   │ wanted to show God's plan."         │    │
│   └─────────────────────────────────────┘    │
│                                               │
│   (Optional - but we'd love to see your       │
│    thinking!)                                 │
│                                               │
│                         [ Continue → ]        │
│                                               │
└───────────────────────────────────────────────┘

DESIGN NOTES:
- Question clearly stated
- Text area: White background, border, padding
- Placeholder text in light gray
- Example box: Light background, icon
- Note about optional: Small, non-intrusive
- Continue button works whether or not they write
- Auto-save to localStorage on input
```

### CSS Specifications
```css
.reflection-screen {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
}

.reflection-question {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
  line-height: 1.6;
}

.reflection-textarea {
  width: 100%;
  min-height: 120px;
  padding: 16px;
  font-family: var(--font-serif);
  font-size: 16px;
  line-height: 1.6;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 20px;
}

.reflection-textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.example-box {
  background: #FFFDE7; /* Light yellow */
  border: 1px solid #FFF9C4;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 1.6;
}

.example-box::before {
  content: "💡 EXAMPLE:";
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
}

.optional-note {
  font-size: 14px;
  color: #666;
  font-style: italic;
  margin-bottom: 24px;
}
```

---

## Screen Type 6: Transition/Time Jump Screen

```
┌───────────────────────────────────────────────┐
│                                               │
│                                               │
│                                               │
│           ┌─────────────────────┐             │
│           │                     │             │
│           │   Time passes...    │             │
│           │                     │             │
│           │ Ten years go by.    │             │
│           │                     │             │
│           └─────────────────────┘             │
│                                               │
│              Now it is 313 CE.                │
│                                               │
│              The persecution is over.         │
│              Diocletian is no longer emperor. │
│                                               │
│              The new emperor is Constantine.  │
│              Constantine supports Christians. │
│              He is building new churches.     │
│                                               │
│              You are now a respected bishop.  │
│              You are revising your account.   │
│                                               │
│                                               │
│                    [ Continue → ]             │
│                                               │
│                                               │
└───────────────────────────────────────────────┘

DESIGN NOTES:
- Center-aligned
- Time passage emphasized (box, different styling)
- Clear temporal marker
- New situation explained
- Generous spacing
- Could add subtle transition animation (fade in)
```

### CSS Specifications
```css
.transition-screen {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 20px;
}

.time-marker {
  border: 2px solid var(--color-border);
  padding: 24px;
  margin: 40px 0;
  font-size: 20px;
  font-style: italic;
  color: var(--color-accent);
}

.new-situation {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.new-situation p {
  margin-bottom: 12px;
}
```

---

## Common UI Components

### Progress Indicator (Top Bar)
```
┌─────────────────────────────────────┐
│ Chapter 1 of 2  ▮▮▮▮▮▮▮▯▯▯  60%   │
└─────────────────────────────────────┘

Alternative (Simple):
┌─────────────────────────────────────┐
│ Chapter 1 of 2 - Step 3 of 8        │
└─────────────────────────────────────┘
```

### Buttons

**Primary Button (Continue, Start)**
```
┌──────────────┐
│  Continue →  │  (Hover: slightly darker)
└──────────────┘
```

**Secondary Button (Play Again, Restart)**
```
┌──────────────┐
│  Play Again  │  (Outline style)
└──────────────┘
```

### Tooltip
```
           ┌─────────────────────────┐
persecution│ When a government hunts │
───────────│ and punishes people for │
           │ their religion          │
           └─────────────────────────┘
```

### Loading State (if needed)
```
    Loading...
    ─  ─  ─  (animated dots)
```

---

## Responsive Breakpoints

### Desktop (>1024px)
- Two-column comparison layouts
- Max-width containers (700-900px)
- Side margins generous

### Tablet (768-1023px)
- Single column
- Slightly narrower containers
- Maintain readability

### Mobile (<768px)
- Full-width with padding
- Stacked layouts
- Larger touch targets (min 44x44px)
- Full-width buttons
- Simplified navigation

---

## Accessibility Features

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to select choices
- Focus indicators clearly visible

### Screen Reader
- Semantic HTML (main, section, article)
- ARIA labels where needed
- Alt text for any images
- Skip links if needed

### Visual
- Minimum contrast ratio: 4.5:1 (WCAG AA)
- Text resizable to 200% without breaking
- No reliance on color alone for meaning

---

## Animation and Transitions

### Screen Transitions
```css
.screen {
  animation: fadeIn 300ms ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Button Hover
```css
.button:hover {
  transform: scale(1.02);
  transition: transform 150ms ease;
}
```

### Choice Selection
```css
.choice-card {
  transition: all 150ms ease;
}

.choice-card.selected {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

**Keep it subtle!** No spinning, bouncing, or sliding.

---

## Color Palette Reference

```
Background:   #F5F1E8  ████  (warm cream)
Text:         #3E2723  ████  (dark brown)
Accent:       #8D6E63  ████  (muted terracotta)
Border:       #D7CCC8  ████  (light taupe)
Context:      #E8EAF6  ████  (light blue)
Highlight:    #FFF3E0  ████  (soft amber)
Success:      #E8F5E9  ████  (light green)
Warning:      #FFF9C4  ████  (light yellow)
Error:        #FFEBEE  ████  (light red)
```

---

## Typography Scale

```
H1 (Title):        32px / 40px line-height
H2 (Chapter):      28px / 36px
H3 (Section):      24px / 32px
H4 (Screen title): 20px / 28px
Body:              18px / 29px (1.6 line-height)
Small:             16px / 26px
Tiny:              14px / 22px
```

---

## Spacing System

```
--spacing-xs:   8px   (tight spacing)
--spacing-sm:   16px  (related elements)
--spacing-md:   24px  (paragraphs)
--spacing-lg:   40px  (sections)
--spacing-xl:   60px  (major divisions)
```

---

**Document Status**: Complete
**Next Step**: Use these wireframes during implementation
