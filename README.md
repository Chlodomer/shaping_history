# Shaping History: Stage-Based Composition Tool

An educational interactive tool teaching students about historiographical construction and authorial decision-making through a structured composition process.

**🎮 Use the tool**: https://chlodomer.github.io/shaping_history/

**📁 GitHub repository**: https://github.com/Chlodomer/shaping_history

**🐛 Report issues**: https://github.com/Chlodomer/shaping_history/issues

## Overview

Students become Eusebius of Caesarea in 303 CE, composing an account of Christian persecution through a 4-stage process: making compositional choices, selecting narrative components, structuring their account, and writing their narrative. Through this scaffolded experience, students learn that all historical writing involves deliberate selection, emphasis, and framing.

## Educational Context

This tool supplements lectures on:
- **Lecture 2**: Eusebius and persecution narratives
- Early Christian historiography and source criticism

**Learning outcomes**:
- Recognize how compositional choices shape historical narratives
- Understand narrative construction as a deliberate process
- Develop source criticism skills through hands-on practice
- Distinguish between "lying" and "selective truth-telling"
- Experience the constraints and decisions ancient authors faced

## Project Structure

```
shaping_history/
├── index.html        # Entry point (deploys from root)
├── styles.css        # Dark elegant design with vibrant accents
├── game.js           # 4-stage composition logic (vanilla JS)
├── docs/             # Documentation
│   ├── PRD.md        # Product Requirements Document
│   ├── technical-spec.md
│   ├── content-guide.md
│   ├── wireframes.md
│   └── project-tracker.md
├── STUDENT-INSTRUCTIONS.md
├── INSTRUCTOR-GUIDE.md
├── TESTING-GUIDE.md
└── README.md         # This file
```

## Technical Stack

- **Pure HTML/CSS/JavaScript** (no frameworks)
- **No backend required** (fully client-side)
- **localStorage** for saving progress
- **GitHub Pages** for deployment

## Development Timeline

1. **Documentation** (Week 1): PRD, specs, content finalization
2. **Core Development** (Week 1-2): HTML/CSS/JS implementation
3. **Polish** (Week 2): Responsive design, accessibility, animations
4. **Testing** (Week 2-3): Internal + pilot with students
5. **Launch** (Week 3): Deploy to GitHub Pages

## Getting Started

### For Development

1. Clone the repository
2. Open `index.html` in a browser (root folder)
3. No build process needed - edit and refresh!

### For Deployment

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Point to main branch, `/(root)` folder
4. Access at: `https://[username].github.io/[repo-name]/`

## Target Audience

- University students (18-25 years old)
- Non-native English speakers
- Undergraduate level (Introduction to Early Medieval Europe)
- Mixed device usage (mobile + desktop)

## Key Features

- **4-stage composition process**:
  - **Stage 1**: Make high-level compositional choices (emphasis, protagonist, violence detail, endpoint)
  - **Stage 2**: Select and sequence 6-8 narrative components
  - **Stage 3**: Write 100-200 word narrative following your structure
  - **Stage 4**: Review and export your work as JSON
- **Scaffolded learning**: Each stage builds on the previous one
- **Structural awareness**: Students explicitly rationalize their compositional choices
- **Auto-save functionality**: Progress saved automatically in browser
- **JSON export**: Complete work downloadable for instructor review
- **15-20 minute completion time**: Fits into class or homework
- **Modern, elegant design**: Dark theme with vibrant pink/purple accents

## Contact

For questions or feedback, contact the course instructor.

## License

[To be determined]

---

**Status**: ✅ Complete and deployed
**Version**: 2.0 (Stage-based composition tool)
**Last updated**: November 13, 2025
