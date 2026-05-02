# Flavourful Structurizr

A lightly-customised fork of [Structurizr](https://github.com/structurizr/structurizr)
that ships richer Markdown rendering for documentation and decision pages.

> Looking for the upstream Structurizr docs? See
> [`README.upstream.md`](./README.upstream.md).

## What is different from upstream

- Bundled `markdown-it` plugins enabled in the documentation and decisions
  views: `attrs`, `anchor`, `task-lists`, `mark`, `ins`, `sub`, `sup`,
  `deflist`, `abbr`, `emoji`, `container` (callouts).
- Companion stylesheet for the new Markdown elements (callouts, task lists,
  anchored headings, …).

A precise, file-level inventory lives in [`CHANGES.md`](./CHANGES.md).
A user-facing release log lives in [`CHANGELOG.md`](./CHANGELOG.md).

## Image

Published to GitHub Container Registry:

```
ghcr.io/moarster/flavourful-structurizr
```

Quick start:

```sh
docker run --rm -p 8080:8080 \
  -v "$PWD/structurizr-data:/usr/local/structurizr" \
  ghcr.io/moarster/flavourful-structurizr:latest
```

The image is based on `eclipse-temurin:21-jre-noble` and exposes the
Structurizr application on port `8080`. Mount a host directory at
`/usr/local/structurizr` to persist workspaces.

### Tags

| Tag                          | Meaning                                                      |
| ---------------------------- | ------------------------------------------------------------ |
| `latest`                     | Newest released fork build.                                  |
| `<upstream>-fl.<n>`          | Released fork build, e.g. `2025.05.02-fl.1`.                 |
| `edge`                       | Tip of `fork/main`. Moves with every push, no stability promise. |
| `sha-<short>`                | Immutable per-commit build, useful for pinning.              |

`<upstream>` follows the upstream Structurizr application version;
`fl.<n>` is this fork's patch level on top of that upstream tag.

## Building locally

The Maven wrapper is bundled — no global `mvn` install required.

```sh
./mvnw -B -DskipTests package
docker build \
  -f structurizr-application/Dockerfiles/eclipse-temurin-noble \
  -t flavourful-structurizr:dev .
```

The build context must be the repository root because the Dockerfile
copies `structurizr-application/target/structurizr-*.war` and
`structurizr-themes/`.

## Upstream sync

This fork tracks `structurizr/structurizr`. Branches:

- `main` — fast-forward mirror of upstream `vendor/main`. No fork commits land here.
- `fork/main` — fork development branch, pushed to `origin`.

A scheduled GitHub Actions workflow opens a PR when `vendor/main` advances.

## License & attribution

- This fork and its modifications are licensed under the
  [Apache License 2.0](./LICENSE), inherited from upstream Structurizr.
- Required attribution lives in [`NOTICE`](./NOTICE).
- Modified upstream files carry a top-of-file marker; new files carry a
  full Apache 2.0 copyright header (see [`CHANGES.md`](./CHANGES.md) for
  the inventory).
- Bundled third-party `markdown-it` plugins are MIT-licensed; their
  license preambles are preserved inside each minified bundle.
