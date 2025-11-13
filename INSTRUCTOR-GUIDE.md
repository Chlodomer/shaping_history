# Instructor Guide
## Shaping History: Stage-Based Composition Tool

**Last Updated**: November 13, 2025  
**Version**: 2.0

---

## Overview

This tool teaches historiographical construction through a 4-stage scaffolded process where students become Eusebius of Caesarea writing about persecution in 303 CE.

### Key Innovation
Students don't just make choices—they explicitly structure their composition and rationalize their decisions before writing.

---

## Learning Objectives

Students will be able to:
1. **Recognize** that historical narratives are deliberately constructed
2. **Understand** how early compositional choices constrain later options
3. **Experience** the difference between structural planning and actual writing
4. **Articulate** their compositional reasoning through required rationalization
5. **Apply** source criticism skills to reading ancient texts

---

## Tool Structure (15-20 minutes)

### Stage 1: Multiple Choice Decisions (5-7 min)
- 4 high-level choices: emphasis, protagonist, violence detail, endpoint
- Mid-feedback after 2 choices
- Authorial profile assigned (e.g., "Theological Comforter", "Martyrological Chronicler")

### Stage 2: Structure Composition (5-7 min)
- Select 6-8 narrative components (from pool of 16 based on Stage 1)
- Drag-and-drop to sequence them
- **Required**: Write 2-4 sentence rationalization of structural choices

### Stage 3: Write Narrative (5-7 min)
- Compose 100-200 word narrative as Eusebius
- Structure reference visible as guide
- Must follow Stage 2 sequence
- Real-time word count validation

### Stage 4: Export & Review (2-3 min)
- Complete summary of all work
- Download as JSON file

---

## How to Use This Tool

### Option 1: Pre-Lecture (Inductive)
- Assign before teaching Eusebius
- Students discover compositional concepts experientially
- Lecture deepens understanding with historical context
- **Advantage**: Students arrive with questions

### Option 2: Post-Lecture (Deductive)
- Teach Eusebius first
- Assign tool to apply concepts
- Use submissions in discussion
- **Advantage**: Students have historical context

### Option 3: In-Class Activity
- Project tool, work through as group
- Discuss each choice before selecting
- Rich immediate discussion
- **Advantage**: Collaborative learning

### Option 4: Homework
- Assign independently
- Students submit JSON
- Grade for completion/quality
- **Advantage**: Saves class time

---

## Assessment Options

### Tier 1: Completion (5-10% of grade)
- Did student complete all 4 stages?
- Is JSON file submitted?

### Tier 2: Reasoning Quality (10-15%)
- Completion PLUS:
- Stage 2 rationalization thoughtfulness
- Stage 3 follows Stage 2 structure

### Tier 3: Sophistication (15-20%)
- All of above PLUS:
- Narrative quality and historical appropriateness
- Compositional awareness evident
- Use of course vocabulary

### Sample Rubric (Tier 3)

**Excellent (90-100%)**:
- Thoughtful rationalization showing structural understanding
- Narrative clearly follows stated structure
- Demonstrates compositional awareness
- Historically appropriate choices

**Good (80-89%)**:
- Reasonable rationalization
- Narrative generally follows structure
- Some compositional awareness

**Satisfactory (70-79%)**:
- Basic rationalization
- Narrative present but may not follow structure closely
- Minimal compositional awareness

**Needs Improvement (<70%)**:
- Weak/missing rationalization
- Narrative doesn't follow structure
- No evidence of compositional understanding

---

## Understanding the JSON Export

**File structure**:
```json
{
  "metadata": {"timestamp", "wordCount", "version"},
  "stage1": {"choices", "choicesReadable", "narrativeProfile"},
  "stage2": {"selectedComponentIds", "componentSequence", "rationalization"},
  "stage3": {"narrative", "wordCount"}
}
```

**What to look for**:
- **Stage 2 rationalization**: Is it thoughtful? Does it explain structural logic?
- **Coherence**: Does Stage 3 narrative actually follow Stage 2 sequence?
- **Awareness**: Do students recognize what they emphasized/omitted?

---

## Discussion Prompts

**After completion**:
1. "What did you emphasize in your narrative? What did you omit? Why?"
2. "How did your Stage 1 choices limit your Stage 2 options?"
3. "Was it easier to plan structure or write the narrative? Why?"
4. "How does this change how you read Eusebius's actual text?"
5. "If you wrote this 10 years later, what might change?"

**For analysis**:
6. "Compare your authorial profile to classmates. How do narratives differ?"
7. "What does your structural rationalization reveal about your priorities?"
8. "Can historical writing ever be 'objective'? Why or why not?"

---

## Technical Information

### Data & Privacy
- All data stored locally in student browsers
- No server, no tracking, no database
- Students control export via JSON download
- GDPR/privacy compliant

### Browser Requirements
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- JavaScript enabled
- localStorage enabled (not incognito mode)

### Troubleshooting
- **Progress not saving**: Check if localStorage enabled
- **Can't download**: Check browser download permissions
- **Drag-and-drop not working**: Try different browser

---

## Sample Assignment Text

**Shaping History Composition Tool (10 points)**

Complete the 4-stage composition tool and submit your JSON file.

**Instructions**:
1. Access: https://chlodomer.github.io/shaping_history/
2. Complete all 4 stages (15-20 minutes)
3. Download JSON file in Stage 4
4. Submit to [location] by [date]

**Grading**:
- Completion (5 pts): All 4 stages finished
- Rationalization (3 pts): Stage 2 explanation shows thoughtful structural reasoning
- Coherence (2 pts): Stage 3 narrative follows Stage 2 structure

**There are no right answers**—engage seriously with the process!

---

## Pedagogical Notes

### Why Stage-Based?
- **Progressive scaffolding**: Abstract → concrete → written
- **Explicit metacognition**: Must rationalize structural choices
- **Constrains creativity productively**: Stage 1 limits Stage 2 options
- **Better assessment data**: Structured JSON vs. free-text

### What Students Experience
- Authorship as constrained choice, not free creation
- How structure precedes effective narrative
- That "objectivity" is impossible—all choices create perspective
- Ancient authors faced real compositional decisions

---

## Future Enhancements (Potential)

- Add 313 CE revision stage (compare 303→313)
- Include Augustine module
- Instructor dashboard showing aggregate choices
- "Compare to actual Eusebius" mode
- Example narratives for each profile

---

## Support & Resources

**For Students**: See STUDENT-INSTRUCTIONS.md
**Technical Issues**: https://github.com/Chlodomer/shaping_history/issues
**Tool URL**: https://chlodomer.github.io/shaping_history/

---

**Version**: 2.0 (Stage-Based Composition Tool)  
**Status**: Ready for classroom use  
**Date**: November 13, 2025
