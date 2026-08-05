# RepoScope

RepoScope is an open-source GitHub analytics engine that transforms repository data into beautiful, customizable SVG visualizations.

## Features

-  Language Statistics Card
-  Theme Support
-  Configurable Analysis
-  GitHub Action (Coming Soon)
-  CLI (Coming Soon)

## Architecture

```
GitHub API
    ↓
GitHub Client
    ↓
GitHub Service
    ↓
Analyzers
    ↓
Renderers
    ↓
SVG Output
```

## Project Structure

```
src/
├── api/
├── analyzers/
├── config/
├── constants/
├── renderers/
├── types/
└── utils/
```

## Vision

See:

- docs/VISION.md
- docs/ARCHITECTURE.md