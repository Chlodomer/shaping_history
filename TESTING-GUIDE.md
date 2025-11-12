# Testing Guide
## Shaping History Game

**Created**: November 11, 2025
**Status**: Initial build complete, ready for testing

---

## Quick Start Testing

### Opening the Game
1. Navigate to the repository root
2. Open `index.html` in a web browser
3. Or use command: `open index.html` (Mac) / `start index.html` (Windows)

---

## Test Checklist

### Phase 1: Basic Functionality
- [ ] Game loads without errors (check browser console: F12)
- [ ] Welcome screen displays correctly
- [ ] "Start Game" button works
- [ ] Progress indicator appears after welcome screen
- [ ] Can navigate through all screens

### Phase 2: Chapter 1 (Eusebius)
- [ ] Chapter 1 intro displays
- [ ] Source text screen displays
- [ ] All 3 decisions (303 CE) work:
  - [ ] Decision 1: Bishops hiding
  - [ ] Decision 2: Emphasis choice
  - [ ] Decision 3: Collaboration
- [ ] Choice cards highlight when selected
- [ ] Continue button enables after selection
- [ ] Time jump screen displays
- [ ] All 2 decisions (313 CE) work:
  - [ ] Decision 4: Reframing
  - [ ] Decision 5: Revise bishops
- [ ] Comparison screen shows both versions
- [ ] Text highlighting works (added/changed content)
- [ ] Reflection textarea works
- [ ] Text auto-saves (check localStorage in browser dev tools)

### Phase 3: Chapter 2 (Augustine)
- [ ] Chapter 2 intro displays
- [ ] Memory fragments screen displays
- [ ] All 4 decisions work:
  - [ ] Decision 1: Voice description
  - [ ] Decision 2: Tears emphasis
  - [ ] Decision 3: Perfect text
  - [ ] Decision 4: Community impact
- [ ] Constructed narrative displays correctly
- [ ] Narrative matches choices made
- [ ] Reflection textarea works

### Phase 4: Conclusion
- [ ] Conclusion screen displays
- [ ] Final reflection textarea works
- [ ] "Play Again" button shows confirmation
- [ ] "Play Again" button resets game
- [ ] "Finish" button saves final reflection
- [ ] "Finish" button shows completion message

### Phase 5: Data Persistence
- [ ] Close browser tab
- [ ] Reopen index.html
- [ ] Game resumes from last position
- [ ] Choices are preserved
- [ ] Reflections are preserved

### Phase 6: Responsive Design
**Desktop (>1024px)**:
- [ ] Layout looks good
- [ ] Comparison screen shows side-by-side
- [ ] Text is readable
- [ ] Buttons are properly aligned

**Tablet (768-1023px)**:
- [ ] Layout adapts properly
- [ ] Comparison might stack or stay side-by-side
- [ ] Text remains readable

**Mobile (<768px)**:
- [ ] Comparison stacks vertically
- [ ] Buttons are full-width
- [ ] Touch targets are large enough
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling

### Phase 7: Browser Compatibility
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Phase 8: Edge Cases
- [ ] Click Continue without making a choice (should stay disabled)
- [ ] Refresh page mid-game (should resume)
- [ ] Clear localStorage manually (should start fresh)
- [ ] Try XSS in reflection textarea (should be safe)
- [ ] Very long reflection text (should handle gracefully)

---

## Testing the Text Generation

### Eusebius 303 CE Combinations to Test

**Test 1: Maximum violence emphasis**
- Choice 1: Shamefully
- Choice 2: Violence
- Choice 3: Specific
- **Expected result**: Dark, detailed account with names

**Test 2: Hero narrative**
- Choice 1: Omit
- Choice 2: Courage
- Choice 3: Omit
- **Expected result**: Positive, martyr-focused account

**Test 3: Balanced approach**
- Choice 1: Survive
- Choice 2: Both
- Choice 3: Brief
- **Expected result**: Nuanced account with context

### Eusebius 313 CE Revisions to Test

**Test 4: Complete reframe**
- 303 choices: Shamefully, Violence, Specific
- 313 choices: Preparation, Soften
- **Expected result**: Text should show softening and theological reframe

**Test 5: Minimal change**
- 303 choices: Survive, Both, Brief
- 313 choices: Evil, Keep
- **Expected result**: Text should remain similar

**Test 6: Remove embarrassing content**
- 303 choices: Shamefully, Violence, Specific
- 313 choices: Test, Remove
- **Expected result**: Bishop section should disappear, reframe added

### Augustine Combinations to Test

**Test 7: Maximum divine emphasis**
- Choice 1: Divine
- Choice 2: Spiritual
- Choice 3: Divine
- Choice 4: Social
- **Expected result**: Supernatural, community-focused narrative

**Test 8: Psychological emphasis**
- Choice 1: Natural
- Choice 2: Emotional
- Choice 3: Fact
- Choice 4: Private
- **Expected result**: Interior, personal narrative

**Test 9: Ambiguous middle**
- Choice 1: Mysterious
- Choice 2: Both
- Choice 3: Acknowledge
- Choice 4: Both
- **Expected result**: Balanced narrative leaving room for interpretation

---

## Checking localStorage

**Chrome/Edge/Firefox:**
1. F12 to open DevTools
2. Go to "Application" tab (Chrome/Edge) or "Storage" tab (Firefox)
3. Click "Local Storage" → your file URL
4. Look for key: `shapingHistoryGame`
5. View JSON data

**Safari:**
1. Develop → Show Web Inspector (enable Develop menu in Preferences first)
2. Go to "Storage" tab
3. Look for localStorage

**What to check:**
- Are choices being saved?
- Are reflections being saved?
- Is currentChapter/currentScreen updating?
- Does data persist after refresh?

---

## Common Issues and Solutions

### Issue: Game doesn't load
**Check**: Browser console for errors
**Fix**: Make sure all three files (index.html, styles.css, game.js) are in the same folder

### Issue: Styles not loading
**Check**: Browser console for 404 errors
**Fix**: Verify styles.css path in index.html

### Issue: JavaScript not running
**Check**: Browser console for syntax errors
**Fix**: Verify game.js path in index.html

### Issue: localStorage not working
**Check**: Are you in private/incognito mode?
**Fix**: Use regular browser window

### Issue: Progress doesn't save
**Check**: localStorage quota (usually 5-10MB)
**Fix**: Clear old data if needed

### Issue: Text generation wrong
**Check**: console.log the choices object
**Fix**: Verify choice IDs match between content and logic

### Issue: Responsive layout broken
**Check**: Browser width with DevTools
**Fix**: Test media queries at breakpoints

---

## Performance Testing

### Load Time
- **Target**: <2 seconds on 3G
- **Test**: Chrome DevTools → Network tab → Throttle to "Slow 3G"
- **Check**: Total page load time

### File Sizes
- index.html: ~1KB ✓
- styles.css: ~11KB ✓
- game.js: ~36KB ✓
- **Total**: ~48KB (well under 500KB target) ✓

### Runtime Performance
- **Test**: Use slow device or CPU throttling
- **Check**: Smooth animations, responsive buttons
- **Target**: 60 FPS during transitions

---

## Accessibility Testing

### Keyboard Navigation
1. Tab through all interactive elements
2. Check focus indicators are visible
3. Use Enter/Space to select choices
4. Verify logical tab order

### Screen Reader
**Mac (VoiceOver)**:
1. Cmd + F5 to enable
2. Navigate through game
3. Check that all content is announced
4. Verify button labels are clear

**Windows (NVDA/JAWS)**:
1. Install screen reader
2. Navigate through game
3. Check announcements

### Color Contrast
- **Tool**: WebAIM Contrast Checker
- **Test**: All text/background combinations
- **Target**: WCAG AA (4.5:1 for normal text, 3:1 for large text)

### Zoom Testing
1. Zoom browser to 200% (Cmd/Ctrl + +)
2. Check layout doesn't break
3. Verify text remains readable
4. Test all interactions still work

---

## User Testing Protocol

### Setup
1. Recruit 5-10 students
2. Mix of desktop and mobile users
3. Provide game URL (once deployed)

### Instructions for Testers
"Please play through this game completely. We want to see:
- Where you get confused
- If anything is unclear
- How long it takes you
- Whether you write reflections
- Any technical issues"

### Observation Checklist
- [ ] Do they read instructions carefully?
- [ ] Do they understand the choices?
- [ ] Do they write reflections?
- [ ] Where do they pause or hesitate?
- [ ] Do they complete the whole game?
- [ ] How long does it take? (target: 10-12 min)

### Post-Play Survey
1. Was the game clear and easy to use? (1-5)
2. Did you understand what you were supposed to do? (Yes/No)
3. Did you write reflections? (Yes/No) Why or why not?
4. What was confusing or unclear?
5. What did you learn about ancient authors?
6. How long did it take you? (minutes)
7. What device did you use? (Desktop/Mobile/Tablet)
8. Any other feedback?

---

## Bug Reporting Template

When you find issues, report them like this:

```
**Bug**: [Brief description]
**Steps to reproduce**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected behavior**: [What should happen]
**Actual behavior**: [What actually happens]
**Browser**: [Chrome 119, Safari 17, etc.]
**Device**: [Desktop, iPhone 14, etc.]
**Screenshot**: [If relevant]
**Console errors**: [Copy from F12 console]
```

---

## Next Steps After Testing

### If Issues Found
1. Document all bugs
2. Prioritize by severity
3. Fix critical issues first
4. Re-test after fixes

### If All Working
1. Move to Phase 3: Polish
2. Add subtle animations
3. Fine-tune responsive design
4. Optimize accessibility
5. Final proofread of all text

### Ready for Deployment
1. Minify code (optional)
2. Set up GitHub repository
3. Enable GitHub Pages
4. Test live URL
5. Create student instructions

---

**Testing started**: [Date]
**Testing completed**: [Date]
**Bugs found**: [Number]
**Bugs fixed**: [Number]
**Ready for deployment**: [Yes/No]
