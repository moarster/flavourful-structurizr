# Changelog

All notable fork-specific changes are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project
uses [SemVer](https://semver.org/) on top of the upstream Structurizr
version, with the suffix `-fl.<n>` (see the README for the tag policy).

Upstream Structurizr changes are tracked separately in
`changelog-application.md` and `changelog-library.md`.

## [Unreleased]

### Added

- Bundled `markdown-it` plugins enabled in documentation and decision
  views: `attrs`, `anchor`, `task-lists`, `mark`, `ins`, `sub`, `sup`,
  `deflist`, `abbr`, `emoji`, `container`.
- Companion stylesheet `structurizr-markdown-extensions.css` for the
  new Markdown elements (callouts, task lists, anchored headings).
- GitHub Actions workflow that builds and publishes the noble Docker
  image to `ghcr.io/moarster/flavourful-structurizr`.
- Scheduled GitHub Actions workflow that opens a sync PR when upstream
  `vendor/main` advances.
- `NOTICE`, `CHANGES.md` and per-file modification markers for Apache
  License 2.0 §4 compliance.
