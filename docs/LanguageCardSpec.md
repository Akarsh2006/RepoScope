# Language Card Specification

## Goal

Create a GitHub-native language statistics card that closely follows GitHub's visual language while remaining fully customizable.

---

## Design Reference

GitHub repository language section.

Example:

Languages

█████████████████████████████████████

● TypeScript 95.6%
● JavaScript 4.4%

---

## Layout

+--------------------------------------------------+
| Languages                                        |
|                                                  |
| ████████████████████████████████████████████     |
|                                                  |
| ● TypeScript 95.6%   ● JavaScript 4.4%           |
| ● Java 2.3%          ● Kotlin 1.8%               |
|                                                  |
| Repositories: 28                                 |
| Languages: 4                                     |
| Top Language: TypeScript                         |
+--------------------------------------------------+

---

## Sections

### Header

- Title

---

### Distribution Bar

Single segmented horizontal bar.

Each segment:

- proportional width
- GitHub language color
- rounded container

---

### Legend

Each language contains:

- Colored dot
- Language name
- Percentage

Grid layout.

---

### Summary

Optional.

Contains:

- Total repositories
- Total languages
- Top language
- Total bytes analyzed
- Last updated

---

## Configuration

Users should be able to configure:

- Theme
- Width
- Hidden languages
- Top languages
- Summary visibility
- Legend visibility
- Distribution bar visibility

---

## Future

Potential additions:

- Language icons
- Hover tooltips (HTML output)
- Animations
- Light theme
- Compact mode
- Markdown generation