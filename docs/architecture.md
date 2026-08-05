# RepoScope Architecture

## High-Level Flow

GitHub API
↓
API Layer
↓
Service Layer
↓
Analyzers
↓
Renderers
↓
SVG Output

---

## Layers

### API Layer

Responsible for communicating with GitHub.

Examples:
- GitHubClient

Responsibilities:
- Authentication
- API Requests
- Pagination

---

### Service Layer

Provides higher-level operations built on top of the API.

Examples:
- GitHubService

Responsibilities:
- Fetch repositories
- Fetch languages
- Combine API calls

---

### Analyzer Layer

Transforms raw GitHub data into structured statistics.

Examples:
- LanguageAnalyzer

Responsibilities:
- Aggregate data
- Calculate percentages
- Sort results
- Filter data

Analyzers never generate SVGs.

---

### Renderer Layer

Responsible only for presentation.

Examples:
- LanguageCard
- DashboardCard

Responsibilities:
- SVG generation
- Layout
- Typography
- Theme support

Renderers never fetch or calculate data.

---

## Dependency Direction

Renderers
↑
Analyzers
↑
Services
↑
API

Lower layers never depend on higher layers.

---

## Design Principles

- Single Responsibility Principle
- Separation of Concerns
- Composition over Inheritance
- Strong Typing
- Reusable Components