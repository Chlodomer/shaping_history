# Shaping History - Project Context

## Overview
Interactive educational web app teaching university students about historiographical construction. Students role-play as ancient historians (Eusebius of Caesarea or Augustine of Hippo) making deliberate narrative choices. Vanilla HTML/CSS/JS, hosted on GitHub Pages.

## Architecture
- `index.html` — minimal entry point, loads styles.css and game.js
- `game.js` — all application logic, content objects, rendering, state management (~1,336 lines)
- `styles.css` — dark elegant design with responsive layout (~1,165 lines)
- `Images/` — all illustration assets
- `docs/` — PRD, technical spec, content guide, wireframes, project tracker

## Coding Conventions

### Images
- Inject as HTML `<img>` tags with paths relative to project root: `Images/filename.png`
- Reuse existing CSS classes for sizing: `.intro-visual`, `.intro-illustration-img`, `.title-illustration`
- Use `max-height` inline styles on `<img>` tags for fine-tuning within specific panels

### Content & Rendering
- Content objects (titleContent, eusebiusBio, augustineBio, stage1Content, etc.) contain full HTML strings for images and dynamic elements
- Pre-compute HTML strings in render functions, then set `innerHTML` once
- Author-specific content in shared render functions uses `if (gameState.selectedAuthor === 'authorName')` checks

### Action Buttons
- Wrap in divs with classes like `stage-actions`, `writing-actions`, `export-actions`

## User Preferences
- All relevant illustrations must be present in the UI
- "Start Over" button available on every screen
