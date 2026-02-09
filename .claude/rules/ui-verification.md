---
description: When making UI changes to HTML, CSS, or JavaScript rendering
---

# UI Verification Rules

- Always verify UI changes visually in the browser — do not assume code changes render correctly
- A browser refresh is often necessary to apply new code changes
- `gameState` and `localStorage` can persist stale state and prevent seeing a fresh UI — clear them when debugging
- If direct UI clicks are unreliable, use direct JavaScript calls (e.g., `selectAuthor('eusebius')`) to trigger functions
- Summarize all changes made and explicitly note any planned items that were not implemented, with reasons
