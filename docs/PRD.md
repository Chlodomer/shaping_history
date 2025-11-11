# Product Requirements Document (PRD)
## Shaping History: Ancient Authors and Their Agendas

**Version:** 1.0
**Date:** November 11, 2025
**Author:** Course Instructor
**Status:** Draft

---

## 1. Executive Summary

### 1.1 Product Overview
"Shaping History" is an educational interactive game that teaches students about historiographical bias, authorial perspective, and the construction of historical narratives through two case studies: Eusebius of Caesarea's revisions of persecution accounts (303-325 CE) and Augustine of Hippo's crafting of his conversion narrative in the *Confessions* (397 CE).

### 1.2 Problem Statement
Students often approach historical primary sources as neutral, objective records of "what happened." They struggle to recognize that even eyewitness accounts are shaped by the author's:
- Political position and power relationships
- Theological or ideological agenda
- Temporal distance from events
- Intended audience
- Rhetorical training and literary conventions

### 1.3 Solution
An interactive game where students **become the author**, making editorial decisions about the same historical events from different perspectives and time periods. By experiencing the editorial process firsthand, students internalize that all historical writing involves selection, emphasis, and framing.

### 1.4 Success Criteria
- Students can articulate how authorial perspective shapes historical narratives
- Students recognize that "truth" and "bias" are not binary opposites
- Students apply source criticism skills to other historical texts
- Game completion rate >80% among students
- Average playtime: 10-12 minutes

---

## 2. Goals and Objectives

### 2.1 Educational Goals
1. **Primary Goal**: Teach students to recognize and analyze authorial agenda in primary sources
2. **Secondary Goals**:
   - Understand the relationship between power and memory
   - Recognize revision as a historical process (texts change over time)
   - Develop empathy for historical actors facing complex choices
   - Apply critical thinking to source evaluation

### 2.2 Learning Outcomes
By the end of the game, students will be able to:
- Identify specific editorial choices that reveal authorial agenda
- Explain how an author's changing circumstances affect their interpretation of events
- Analyze what texts omit as well as what they include
- Distinguish between "lying" and "selective truth-telling"
- Apply these concepts to other historical sources

### 2.3 Pedagogical Approach
- **Experiential learning**: Learning by doing (being the editor)
- **Reflective practice**: Prompting students to articulate their thinking
- **Constructivist**: Students build understanding through active engagement
- **No wrong answers**: Encouraging thoughtful exploration over "correct" responses

---

## 3. Target Audience

### 3.1 Primary Audience
- University students enrolled in "Introduction to Early Medieval Europe"
- Age range: 18-25
- Academic level: Undergraduate (likely 1st-2nd year)
- **Non-native English speakers** (Hebrew L1, English as academic language)
- Varied digital literacy (assume basic competency)

### 3.2 Audience Characteristics
- **Language needs**: Simple, clear English; avoid idioms, complex syntax
- **Prior knowledge**: Have attended lectures on Eusebius and Augustine
- **Engagement style**: Prefer clear instructions, visible progress, immediate feedback
- **Device usage**: Mix of desktop/laptop and mobile devices
- **Time availability**: Will play during or after class, or as homework

### 3.3 Accessibility Requirements
- Works on mobile and desktop
- Readable text size (minimum 16px)
- High contrast (WCAG AA compliant)
- Simple navigation (no complex gestures)
- No time pressure
- Optional tooltips for terminology

---

## 4. User Stories

### 4.1 Core User Stories

**As a student**, I want to:
- Understand how historians shape their narratives so I can critically evaluate sources
- Experience the editorial process so I can see how choices affect meaning
- Get clear context before making decisions so I'm not confused
- Reflect on my choices so I can understand what I learned
- Complete the game in 10-15 minutes so it fits my schedule

**As an instructor**, I want to:
- Reinforce lecture concepts through interactive experience
- See student reflections to assess understanding
- Deploy easily via GitHub Pages without complex setup
- Ensure all students can access the game regardless of device
- Use student choices as discussion prompts in class

### 4.2 Edge Cases
- Student clicks through without reading → Reflection prompts catch this
- Student is confused by terminology → Tooltips and context boxes help
- Student wants to replay with different choices → Allow restart
- Student is on slow connection → Minimize file size, no external dependencies

---

## 5. Features and Requirements

### 5.1 Core Features (MVP)

#### Feature 1: Two-Chapter Structure
- **Description**: Game divided into two sequential chapters (Eusebius, Augustine)
- **Requirements**:
  - Clear chapter markers and transitions
  - Progress indicator showing current position
  - Ability to move forward but not backward (prevents overthinking)
  - Each chapter ~5 minutes

#### Feature 2: Contextual Introduction Screens
- **Description**: Before each decision point, provide clear historical context
- **Requirements**:
  - Date, location, author's situation explained simply
  - 2-3 sentences maximum per context screen
  - Visual separation from decision screens
  - "Continue" button to proceed

#### Feature 3: Editorial Choice Points
- **Description**: Present text excerpts with 3-4 editorial options
- **Requirements**:
  - Original text displayed prominently
  - 2-4 choice buttons per decision
  - Each choice clearly explained (no ambiguity)
  - Visual feedback when choice selected
  - Choices stored for later display

#### Feature 4: Time-Based Revision (Eusebius Chapter)
- **Description**: Edit same passage in 303 CE, then again in 313 CE
- **Requirements**:
  - Clear time jump marker ("Now it is 313 CE...")
  - Same passage displayed both times
  - Different choice options reflecting new circumstances
  - Side-by-side comparison at end showing both versions

#### Feature 5: Side-by-Side Comparison Display
- **Description**: Show student's edited versions alongside each other
- **Requirements**:
  - Responsive layout (stacked on mobile, side-by-side on desktop)
  - Highlighting or color-coding of differences
  - Labels: "Your 303 CE version" / "Your 313 CE version"
  - Readable text size

#### Feature 6: Reflection Prompts
- **Description**: Open-ended questions asking students to explain their thinking
- **Requirements**:
  - Text area for 1-3 sentence responses
  - Prompts appear after each chapter
  - Non-mandatory but encouraged
  - Responses saved to localStorage (optional: export/copy feature)
  - Example prompts visible to guide thinking

#### Feature 7: Conclusion Screen
- **Description**: Final summary reinforcing key learning points
- **Requirements**:
  - 3-5 bullet points summarizing lessons
  - Final optional reflection question
  - Link to restart game
  - Acknowledgment/credits

### 5.2 Nice-to-Have Features (Post-MVP)
- Export/email reflections to instructor
- Share results with classmates
- Comparison with "historical" versions (what did Eusebius/Augustine actually emphasize?)
- Achievement badges for thoughtful reflections
- Additional chapters for more authors

---

## 6. Content Specifications

### 6.1 Chapter 1: Eusebius's Revisions

#### Context Screens
**Screen 1.1 - Introduction**
```
You are Eusebius of Caesarea.
The year is 303 CE.
Christians are being persecuted by the Roman emperor Diocletian.
You are writing about what you see happening in your city.
```

**Screen 1.2 - Time Jump**
```
Time passes...
Now it is 313 CE.
The persecution is over. Constantine is the new emperor.
He supports Christians. You are now a respected bishop.
You are revising your account of the persecution.
```

#### Source Text (Simplified from Ecclesiastical History 8.2-3)
```
"During the persecution, church buildings were destroyed.
Holy books were burned in public squares.
Some church leaders showed courage and were killed.
Other leaders hid from the soldiers.
Some were captured and gave information to the Romans.
Many ordinary Christians also faced difficult choices."
```

#### Decision Points - 303 CE
**Decision 1.1: Describing bishops who hid**
- Context: "A bishop hid from soldiers. How do you describe this?"
- Choices:
  - A) "He hid shamefully" (emphasize failure)
  - B) "He hid to survive" (neutral/understanding)
  - C) [Don't mention it] (omit entirely)

**Decision 1.2: What to emphasize**
- Context: "What part of the persecution do you want readers to remember most?"
- Choices:
  - A) The violence and destruction (emphasize suffering)
  - B) The courage of martyrs (emphasize heroism)
  - C) Both equally (balanced)

**Decision 1.3: Leaders who collaborated**
- Context: "Some priests gave holy books to Romans to save their lives. What do you write?"
- Choices:
  - A) Give specific details about who did this (name and shame)
  - B) Mention it briefly without details (acknowledge but protect)
  - C) Don't include this information (omit)

#### Decision Points - 313 CE
**Decision 1.4: Reframing persecution's meaning**
- Context: "Constantine has won. Christians are now safe. What does the persecution mean now?"
- Choices:
  - A) It was evil that tried to destroy Christianity (maintain original view)
  - B) It was a test from God that made Christianity stronger (theological reframe)
  - C) It was preparation for Constantine's victory (providential reframe)

**Decision 1.5: Revisiting bishops who hid**
- Context: "You wrote about bishops who hid. Some are now your colleagues. What do you do?"
- Choices:
  - A) Keep your critical description unchanged (maintain critique)
  - B) Soften the language to be more understanding (protect colleagues)
  - C) Remove this section entirely (erase embarrassment)

#### Reflection Prompt 1
```
"Look at your two versions of the same events.
Why did your text change between 303 CE and 313 CE?
What was different about your situation?"

[Text box for 1-3 sentence response]
```

### 6.2 Chapter 2: Augustine's Construction

#### Context Screens
**Screen 2.1 - Introduction**
```
You are Augustine of Hippo.
The year is 397 CE.
You are writing a book called "Confessions."
You are describing your conversion to Christianity.
The conversion happened in 386 CE - eleven years ago.
You are now a bishop. You want to teach others about God's grace.
```

#### Memory Fragments
```
"You remember your conversion in a garden in Milan:
- You were crying under a fig tree
- You heard a voice - maybe a child singing
- You picked up Paul's letters and read a passage
- You felt sudden certainty and peace
- Your friend Alypius was there
- You told your mother Monica

Now you must write this story. Your choices shape what it means."
```

#### Decision Points
**Decision 2.1: The voice**
- Context: "You heard someone say 'Take and read' (tolle lege). How do you describe this voice?"
- Choices:
  - A) "I heard God speaking through a child" (clearly divine)
  - B) "I heard a voice - I don't know where it came from" (mysterious/ambiguous)
  - C) "I heard a child playing nearby" (natural explanation)

**Decision 2.2: Emotional vs. spiritual**
- Context: "You were crying. What do you emphasize about those tears?"
- Choices:
  - A) My emotional pain and suffering (psychological focus)
  - B) My spiritual struggle with God's call (theological focus)
  - C) Both emotions and spiritual meaning (balanced)

**Decision 2.3: The perfect text**
- Context: "You opened Paul's letters randomly. The passage was PERFECT for your struggle. How do you present this?"
- Choices:
  - A) "God guided me to exactly the right passage" (divine providence)
  - B) "The passage seemed almost too perfect to be chance" (acknowledge coincidence)
  - C) "I read a passage from Romans 13" (just state the fact)

**Decision 2.4: Private vs. communal**
- Context: "Your friend Alypius was nearby. He converted too after hearing your story."
- Choices:
  - A) Focus on my private, personal experience alone (individual focus)
  - B) Show how my conversion affected Alypius and my mother (communal focus)
  - C) Both my experience and how it spread to others (balanced)

#### Reflection Prompt 2
```
"You are writing about events from 11 years ago.
You are now a bishop teaching others.
How might time and your new role have shaped this story?
What might you have remembered differently if you wrote it in 386 CE?"

[Text box for 1-3 sentence response]
```

### 6.3 Conclusion Screen
```
**What You Learned**

Both Eusebius and Augustine were shaping their stories based on:
• Their current situation (persecuted witness vs. powerful bishop)
• Their goals (survival, teaching, justifying power)
• Their audience (who will read this?)
• Time passing (events look different years later)

This doesn't mean they lied.
But they chose what to emphasize, what to omit, and how to frame events.

All historians do this.
All writers do this.
Even you did this just now.

**Final Question:**
"When you tell a story from your own life, what choices do you make?
What do you emphasize? What do you leave out? Why?"

[Optional text box]

[Button: Play Again] [Button: Finish]
```

### 6.4 Content Guidelines
- **Sentence length**: Maximum 15-20 words
- **Vocabulary**: Common academic English (avoid rare words)
- **Tone**: Respectful, clear, instructive but not condescending
- **Cultural sensitivity**: Acknowledge these are religious texts for many people
- **Historical accuracy**: All scenarios based on actual textual/historical evidence

---

## 7. Technical Specifications

### 7.1 Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **No frameworks required**: Vanilla JS for simplicity and load speed
- **No backend**: Entirely client-side
- **No database**: localStorage for saving progress/reflections
- **Deployment**: GitHub Pages (static hosting)

### 7.2 Browser Compatibility
- **Minimum support**:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
- **Mobile browsers**: iOS Safari, Chrome Android
- **Fallbacks**: Provide non-JS warning message

### 7.3 Performance Requirements
- **Initial load**: < 2 seconds on 3G connection
- **File size**: Total < 500KB (uncompressed)
- **No external dependencies**: No CDN libraries (reduce load time and dependency risk)
- **Smooth transitions**: No janky animations

### 7.4 Data Storage
- **localStorage**: Save game state, choices, reflections
- **Data structure**:
```javascript
{
  gameState: {
    currentChapter: 1 or 2,
    currentScreen: integer,
    completed: boolean
  },
  eusebius: {
    choices303: [choice1, choice2, choice3],
    choices313: [choice1, choice2],
    reflection: "text"
  },
  augustine: {
    choices: [choice1, choice2, choice3, choice4],
    reflection: "text"
  },
  finalReflection: "text",
  timestamp: ISO date
}
```

### 7.5 File Structure
```
shaping-history-game/
├── docs/
│   ├── PRD.md (this document)
│   ├── content-guide.md
│   └── technical-spec.md
├── src/
│   ├── index.html
│   ├── styles.css
│   └── game.js
├── assets/
│   └── (future: icons, textures if needed)
├── README.md
└── LICENSE
```

---

## 8. Design Requirements

### 8.1 Visual Design Principles
1. **Minimalism**: Clean, uncluttered interface focused on text
2. **Subtle antiquity**: Hints of manuscript aesthetic without skeuomorphism
3. **Readability**: Text is primary content - must be easy to read
4. **Whitespace**: Generous spacing for breathing room
5. **Consistency**: Unified color palette and typography throughout

### 8.2 Color Palette
```
Primary colors:
- Background: #F5F1E8 (warm cream - like old parchment)
- Text: #3E2723 (dark brown - like ink)
- Accent: #8D6E63 (muted terracotta)
- Borders: #D7CCC8 (light taupe)

Secondary colors:
- Context boxes: #E8EAF6 (light lavender blue)
- Highlight: #FFF3E0 (soft amber)
- Button hover: #BCAAA4 (warm grey)
```

### 8.3 Typography
```
Headers:
- Font: Georgia, "Times New Roman", serif
- Sizes:
  - H1: 32px (title)
  - H2: 24px (chapter titles)
  - H3: 20px (section headers)

Body:
- Font: Georgia, "Palatino", serif
- Size: 18px
- Line height: 1.6
- Max width: 700px (readable line length)

UI elements (buttons, labels):
- Font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Size: 16px
- Weight: 500
```

### 8.4 Layout Specifications

#### Desktop (> 768px)
- Centered content column: 700px max-width
- Side margins: minimum 40px
- Vertical rhythm: 24px baseline grid
- Buttons: Inline or side-by-side

#### Mobile (< 768px)
- Full-width content with 20px padding
- Stacked layout
- Buttons: Full-width, stacked
- Larger touch targets (minimum 44x44px)

### 8.5 Subtle Antiquity Elements
- **Thin border frames**: 1px solid borders around text areas
- **Horizontal rules**: Thin lines (1-2px) separating sections
- **Slight texture**: Very subtle noise/grain on background (5-10% opacity)
- **Decorative corners**: Simple geometric ornaments at corners (optional)
- **Drop caps**: First letter of chapters slightly enlarged (optional)
- **NO**: Torn paper edges, wax seals, quill pens, scrolls (too literal)

### 8.6 Interactive Elements

#### Buttons
- **Style**: Solid background, rounded corners (4px), subtle shadow
- **States**:
  - Default: Terracotta background, white text
  - Hover: Slightly darker, scale 1.02
  - Active: Pressed effect (scale 0.98)
  - Disabled: Grey background, reduced opacity

#### Choice Buttons (radio-style)
- **Style**: White background, border, left-aligned text
- **States**:
  - Default: Light border
  - Hover: Colored border, slight background tint
  - Selected: Colored background, white text, checkmark or indicator

#### Text Areas (for reflections)
- **Style**: White background, subtle border, padding
- **Placeholder text**: Light grey, helpful prompt
- **Character count**: Optional, displayed subtly

### 8.7 Transitions and Animations
- **Screen transitions**: Fade in/out (300ms)
- **Button interactions**: Scale/color changes (150ms)
- **No**: Sliding, spinning, bouncing (distracting)
- **Preference**: Subtle, smooth, purposeful

### 8.8 Responsive Breakpoints
```
Mobile: 0-767px
Tablet: 768-1023px
Desktop: 1024px+
```

---

## 9. User Flow

### 9.1 Complete User Journey

```
[START]
    ↓
[Welcome Screen]
- Title: "Shaping History"
- Brief intro (2-3 sentences)
- "Start Game" button
    ↓
[Chapter 1 Intro]
- "You are Eusebius, 303 CE"
- Historical context
- "Continue" button
    ↓
[Show Source Text]
- Display persecution passage
- "This is what happened. Now you must write about it."
- "Continue" button
    ↓
[Decision 1.1] → [Decision 1.2] → [Decision 1.3]
(Each: Context → Choices → Selection → Continue)
    ↓
[Time Jump Screen]
- "Now it is 313 CE..."
- New context
- "Continue" button
    ↓
[Decision 1.4] → [Decision 1.5]
    ↓
[Comparison Screen]
- Side-by-side display
- Highlighting of changes
- "Continue" button
    ↓
[Reflection Prompt 1]
- Question displayed
- Text area
- "Continue" button (optional to write)
    ↓
[Chapter 2 Intro]
- "You are Augustine, 397 CE"
- Historical context
- "Continue" button
    ↓
[Memory Fragments]
- Display what Augustine remembers
- "Continue" button
    ↓
[Decision 2.1] → [Decision 2.2] → [Decision 2.3] → [Decision 2.4]
    ↓
[Constructed Narrative Display]
- Show student's version of Augustine's story
- Based on their choices
- "Continue" button
    ↓
[Reflection Prompt 2]
- Question displayed
- Text area
- "Continue" button
    ↓
[Conclusion Screen]
- Key lessons (bullet points)
- Final optional question
- "Play Again" or "Finish" buttons
    ↓
[END]
```

### 9.2 Navigation Rules
- **Forward only**: Cannot go back (prevents overthinking)
- **Clear progress**: Always show "Step X of Y" or chapter indicator
- **Autosave**: Every choice saved to localStorage
- **Resume capability**: Can close and resume later
- **Restart option**: Available from conclusion screen

### 9.3 Error Handling
- **No internet**: Game works offline after initial load
- **localStorage full**: Graceful degradation (game works, just no save)
- **Browser too old**: Display upgrade message
- **Screen too small**: Warn if < 320px width

---

## 10. Success Metrics

### 10.1 Quantitative Metrics
- **Completion rate**: Target >80% of students who start
- **Average time**: Target 10-12 minutes
- **Reflection submission rate**: Target >60% write at least one reflection
- **Replay rate**: Track how many replay with different choices
- **Device usage**: Monitor desktop vs. mobile split

### 10.2 Qualitative Metrics
- **Student reflections**: Read for depth of understanding
- **Instructor feedback**: Gather feedback on pedagogical value
- **Classroom discussion**: Does game generate productive discussion?
- **Learning outcomes**: Can students apply concepts to new sources?

### 10.3 Assessment Questions (Post-Game)
1. "Can an eyewitness account also be biased?" (Yes/No understanding)
2. "Give one example of how Eusebius's situation changed how he told his story" (Application)
3. "Why might Augustine have emphasized divine grace in his conversion story?" (Analysis)

---

## 11. Timeline and Milestones

### 11.1 Development Phases

**Phase 1: Documentation (CURRENT)**
- Week 1: Complete PRD ✓
- Week 1: Create content guide
- Week 1: Create technical specification

**Phase 2: Core Development**
- Week 1-2: HTML structure and content integration
- Week 1-2: CSS styling (base styles, responsive layout)
- Week 1-2: JavaScript game logic (state management, navigation)

**Phase 3: Polish**
- Week 2: Transitions and animations
- Week 2: Accessibility improvements
- Week 2: Mobile optimization
- Week 2: Testing on multiple devices/browsers

**Phase 4: Testing**
- Week 2-3: Internal testing (instructor)
- Week 3: Pilot with 5-10 students
- Week 3: Iterate based on feedback

**Phase 5: Launch**
- Week 3: Deploy to GitHub Pages
- Week 3: Create instructions for students
- Week 4: Monitor usage and gather feedback

### 11.2 Dependencies
- Content finalization (passage selection, choice wording)
- Student availability for pilot testing
- GitHub Pages access for deployment

---

## 12. Risks and Mitigations

### 12.1 Risk: Students click through without reading
**Mitigation**:
- Reflection prompts catch superficial engagement
- Require 1-2 second delays before "Continue" buttons activate
- Make choices engaging and meaningfully different

### 12.2 Risk: Language barrier causes confusion
**Mitigation**:
- Pilot with non-native speakers
- Provide tooltips for difficult terms
- Use simple sentence structures
- Include context boxes with clarifications

### 12.3 Risk: Technical issues on mobile devices
**Mitigation**:
- Test on actual devices (not just simulators)
- Ensure touch targets are 44x44px minimum
- Avoid hover-dependent interactions
- Progressive enhancement approach

### 12.4 Risk: Low engagement (boring gameplay)
**Mitigation**:
- Keep playtime short (10 min)
- Use compelling choices with clear stakes
- Show immediate visual feedback for choices
- Make reflection prompts genuinely interesting

### 12.5 Risk: GitHub Pages downtime or access issues
**Mitigation**:
- Provide downloadable HTML file as backup
- Consider Netlify/Vercel as alternative hosts
- Create PDF with QR code for easy access

---

## 13. Future Enhancements (Post-V1)

### 13.1 Additional Content
- More authors: Bede, Gregory of Tours, Einhard
- More scenarios within existing chapters
- Primary source excerpts for comparison

### 13.2 Features
- Export reflections to email/PDF
- Instructor dashboard to see aggregate student choices
- Comparison mode: See how peers chose differently
- "Historical accuracy" mode: Compare to actual emphasis in texts

### 13.3 Gamification (Optional)
- Badges for thoughtful reflections
- "Historian's eye" achievement for spotting all silences
- Leaderboard for most insightful reflections (peer-voted)

### 13.4 Multimedia
- Audio voiceovers for context (accessibility + engagement)
- Simple illustrations (maps, portraits)
- Background ambient sound (subtle, toggleable)

---

## 14. Appendices

### 14.1 Glossary of Terms
- **PRD**: Product Requirements Document
- **MVP**: Minimum Viable Product (core features only)
- **localStorage**: Browser storage for client-side data
- **Responsive design**: Adapts to different screen sizes
- **Skeuomorphism**: Design mimicking real-world objects (e.g., leather-bound book interface)
- **Accessibility**: Design that works for users with disabilities
- **WCAG**: Web Content Accessibility Guidelines

### 14.2 References
- Lecture 2: Eusebius and Persecution Narratives
- Lecture 3: Augustine's Confessions
- Eusebius, *Ecclesiastical History*, Book 8
- Augustine, *Confessions*, Book 8, sections 28-30

### 14.3 Version History
- v1.0 (2025-11-11): Initial PRD draft

---

## 15. Sign-Off

**Document prepared by**: Course Instructor
**Reviewed by**: [Pending]
**Approved for development**: [Pending]
**Date**: November 11, 2025

---

**Next Steps:**
1. Review and approve this PRD
2. Begin content finalization (exact passage wording)
3. Create wireframes for key screens
4. Begin HTML structure development
