# Testing Guide
## Shaping History: Stage-Based Composition Tool

**Created**: November 11, 2025
**Updated**: November 13, 2025
**Status**: Version 2.0 Testing Protocols

---

## Quick Start Testing

1. Open https://chlodomer.github.io/shaping_history/
2. Or locally: Open `index.html` in a web browser
3. Complete all 4 stages

---

## Core Functionality Checklist

### Stage 1: Multiple Choice (4 decisions)
- [ ] Intro screen displays with "Begin Stage 1" button
- [ ] Choice 1 (Emphasis): 4 options selectable
- [ ] Choice 2 (Protagonist): 4 options selectable
- [ ] Mid-feedback screen appears after choice 2
- [ ] Choice 3 (Violence): 4 options selectable
- [ ] Choice 4 (Endpoint): 4 options selectable
- [ ] Final summary shows authorial profile
- [ ] "Proceed to Stage 2" button works

### Stage 2: Structure Composition
- [ ] Stage 2 intro screen displays
- [ ] Component selection shows 16 components
- [ ] Can select 6-8 components (not more, not less)
- [ ] "Continue to Sequencing" button enables when 6-8 selected
- [ ] Drag-and-drop sequencing works
- [ ] Can rearrange components by dragging
- [ ] Rationalization textarea accepts input
- [ ] "Continue to Explanation" requires text input
- [ ] Stage 2 summary displays sequence correctly
- [ ] "Proceed to Stage 3" button works

### Stage 3: Write Narrative
- [ ] Stage 3 intro screen displays
- [ ] Writing interface shows with sidebar
- [ ] Textarea accepts input
- [ ] Word counter updates in real-time
- [ ] Word count changes color (red <100, green 100-200, orange >200)
- [ ] Continue button disabled until 100 words
- [ ] Structure reference visible in sidebar
- [ ] Auto-save works (check localStorage)

### Stage 4: Export & Review
- [ ] Stage 4 summary displays all work
- [ ] Stage 1 choices shown
- [ ] Stage 2 sequence and rationalization shown
- [ ] Stage 3 narrative shown with word count
- [ ] "Download Work as JSON" button works
- [ ] JSON file downloads with correct structure
- [ ] Download confirmation toast appears
- [ ] "Revise Narrative" button returns to Stage 3
- [ ] "Start Over" button shows confirmation

---

## Data Persistence Testing

- [ ] Close browser tab mid-Stage 1
- [ ] Reopen - should resume at correct point
- [ ] Close browser during Stage 2 component selection
- [ ] Reopen - selections preserved
- [ ] Close browser during Stage 3 writing
- [ ] Reopen - narrative text preserved
- [ ] Complete tool, close browser, reopen
- [ ] Should be at Stage 4 with all data

---

## JSON Export Validation

Download JSON and verify structure:
```json
{
  "metadata": {
    "timestamp": "ISO-8601 format",
    "dateCompleted": "readable date",
    "wordCount": number,
    "version": "1.0"
  },
  "stage1": {
    "choices": {object with 4 keys},
    "choicesReadable": {object with readable text},
    "narrativeProfile": "string or null"
  },
  "stage2": {
    "selectedComponentIds": [array],
    "componentSequence": [array of objects],
    "rationalization": "string"
  },
  "stage3": {
    "narrative": "string",
    "wordCount": number
  }
}
```

---

## Responsive Design Testing

### Desktop (>900px)
- [ ] Sidebar layout in Stage 3 works
- [ ] Drag-and-drop smooth
- [ ] All content readable
- [ ] Buttons properly aligned

### Tablet (768-900px)
- [ ] Layout adapts
- [ ] Drag-and-drop still works
- [ ] Text readable

### Mobile (<768px)
- [ ] Sidebar stacks below main content
- [ ] Touch-based drag-and-drop works
- [ ] Text readable without zooming
- [ ] No horizontal scroll

---

## Browser Compatibility

Test on:
- [ ] Chrome 90+ (latest)
- [ ] Firefox 88+ (latest)
- [ ] Safari 14+ (latest)
- [ ] Edge 90+ (latest)

---

## Edge Cases

- [ ] Select 0 components in Stage 2 - should not allow continue
- [ ] Select 9 components - should not allow (max 8)
- [ ] Write 50 words in Stage 3 - button disabled
- [ ] Write 250 words - should allow (word counter orange)
- [ ] Empty rationalization - button disabled
- [ ] Refresh during drag operation - state preserved
- [ ] Click "Start Over" - confirm dialog appears
- [ ] localStorage full - handle gracefully
- [ ] Disable JavaScript - show error message

---

## Performance Testing

### Load Time
- Target: <2 seconds on 3G
- Use Chrome DevTools Network tab → Throttle to "Slow 3G"
- Measure total load time

### File Sizes
- index.html: ~31 lines (~1KB)
- styles.css: ~1,165 lines (~24KB)
- game.js: ~1,336 lines (~27KB)
- Total: ~52KB ✓ (well under 500KB target)

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Enter/Space activate buttons
- [ ] Logical tab order

### Screen Reader
- [ ] All text announced
- [ ] Button labels clear
- [ ] Form inputs labeled
- [ ] Structure makes sense audibly

### Color Contrast
- [ ] Text meets WCAG AA (4.5:1)
- [ ] Dark background + light text readable
- [ ] Accent colors distinguishable

---

## User Flow Testing

Complete a full run-through:
1. **Choose**: Emphasis=divine, Protagonist=god, Violence=omit, Endpoint=triumph
2. **Select**: 7 components related to those choices
3. **Sequence**: Arrange in logical order
4. **Rationalize**: Write structural explanation
5. **Write**: Compose 150-word narrative
6. **Export**: Download JSON

Verify:
- [ ] All choices reflected in available components
- [ ] Narrative follows stated structure
- [ ] JSON contains all data correctly

---

## Common Issues Checklist

### Issue: Drag-and-drop not working
**Check**: Touch events on mobile, browser compatibility
**Fix**: Try different browser or use desktop

### Issue: Word count stuck at 0
**Check**: Text actually in textarea, JavaScript running
**Fix**: Refresh page, check console for errors

### Issue: JSON download fails
**Check**: Browser download permissions, popup blockers
**Fix**: Allow downloads, check browser settings

### Issue: Progress not saving
**Check**: localStorage enabled, not in incognito mode
**Fix**: Use regular browsing mode

---

## Pilot Testing Protocol

### With 5-10 Students

**Before**:
1. Brief students on purpose (5 min)
2. Provide URL, ask them to complete independently
3. Request they note any confusion or issues

**Observe**:
- Where do they pause or hesitate?
- Do they read instructions?
- How long does each stage take?
- Do they write thoughtful rationalizations?

**After**:
1. Quick survey (5 questions):
   - Was it clear what to do?
   - Any confusing parts?
   - How long did it take?
   - Did you learn anything?
   - Technical issues?
2. Review JSON submissions
3. Check rationalization quality
4. Note completion rate

---

## Bug Reporting Template

```
**Bug**: [Brief description]
**Steps to reproduce**:
1. [Step 1]
2. [Step 2]

**Expected**: [What should happen]
**Actual**: [What actually happens]
**Browser**: [Chrome 119, etc.]
**Device**: [Desktop/Mobile]
**Console errors**: [From F12]
```

---

## Testing Completion Checklist

- [ ] All 4 stages functional
- [ ] Data persistence working
- [ ] JSON export valid
- [ ] Responsive on mobile/tablet/desktop
- [ ] Works on all target browsers
- [ ] Accessibility features functional
- [ ] Performance targets met
- [ ] Edge cases handled
- [ ] Pilot tested with students
- [ ] Documentation accurate

---

**Testing Status**: [ ] Not Started / [ ] In Progress / [ ] Complete
**Bugs Found**: [Number]
**Bugs Fixed**: [Number]
**Ready for Deployment**: [ ] Yes / [ ] No

**Version**: 2.0
**Last Updated**: November 13, 2025
