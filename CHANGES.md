# Changes from upstream Structurizr

This file enumerates the modifications that Flavourful Structurizr makes
to the upstream [`structurizr/structurizr`](https://github.com/structurizr/structurizr)
codebase, as required by Section 4(b) of the Apache License, Version 2.0.

A short marker comment is also placed at the top of every modified file.
New files authored by Flavourful Structurizr carry a full Apache 2.0
copyright header instead.

## Modified files (upstream-authored, edited in this fork)

- `structurizr-application/src/main/resources/static/static/js/structurizr-content.js`
  — wires the additional markdown-it plugins through
  `structurizr-markdown-extensions.js`.
- `structurizr-application/src/main/webapp/WEB-INF/jsp/documentation.jsp`
  — loads the bundled markdown-it plugins and the extensions script.
- `structurizr-application/src/main/webapp/WEB-INF/jsp/decisions.jsp`
  — loads the bundled markdown-it plugins and the extensions script.

## New files (Flavourful Structurizr, Apache 2.0)

- `structurizr-application/src/main/resources/static/static/js/structurizr-markdown-extensions.js`
- `structurizr-application/src/main/resources/static/static/css/structurizr-markdown-extensions.css`

## Vendored third-party (MIT) — unmodified

- `structurizr-application/src/main/resources/static/static/js/markdown-it-abbr-2.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-anchor-8.6.7.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-attrs-4.3.1.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-container-4.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-deflist-3.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-emoji-3.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-ins-4.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-mark-4.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-sub-2.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-sup-2.0.0.min.js`
- `structurizr-application/src/main/resources/static/static/js/markdown-it-task-lists-2.1.1.min.js`

License notices for these files are preserved in their bundle
preambles; aggregate attribution lives in `NOTICE`.
