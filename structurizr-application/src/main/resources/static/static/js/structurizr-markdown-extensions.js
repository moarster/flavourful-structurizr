// Copyright 2026 Flavourful Structurizr.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0

// Registers the optional markdown-it plugins shipped alongside Structurizr.
//
// Loaded via a <script> tag *before* structurizr-content.js. The function
// below is invoked by structurizr-content.js once it has built its own
// markdown-it instance, so all customisation lives here instead of in the
// upstream-tracked file.
//
// Each plugin is loaded only if its UMD bundle was actually included on the
// page, which keeps the extensions file usable even when individual scripts
// are stripped from the JSP.

(function () {
    function safeUse(md, plugin, options) {
        if (!plugin) return;
        try {
            if (options === undefined) {
                md.use(plugin);
            } else {
                md.use(plugin, options);
            }
        } catch (err) {
            if (window.console && console.warn) {
                console.warn('[structurizr-markdown-extensions] plugin failed:', err);
            }
        }
    }

    // Locale-agnostic icon for each callout type. Any title text supplied
    // after the type (`::: tip Совет`) is intentionally dropped — the icon
    // alone signals the intent without requiring readable labels.
    var CALLOUT_ICONS = {
        note:      'ℹ\uFE0F',
        tip:       '\uD83D\uDCA1',  // 💡
        info:      'ℹ\uFE0F',
        success:   '\u2705',         // ✅
        warning:   '\u26A0\uFE0F',   // ⚠️
        important: '\u2757',         // ❗
        caution:   '\uD83D\uDD36',   // 🔶
        danger:    '\u26D4'          // ⛔
    };

    function defineContainer(md, name) {
        if (!window.markdownitContainer) return;
        md.use(window.markdownitContainer, name, {
            render: function (tokens, idx) {
                var token = tokens[idx];
                if (token.nesting === 1) {
                    var icon = CALLOUT_ICONS[name] || '';
                    return '<div class="callout callout-' + name + '">' +
                        '<span class="callout-icon" aria-hidden="true">' + icon + '</span>' +
                        '<div class="callout-body">';
                }
                return '</div></div>\n';
            }
        });
    }

    window.structurizrExtendMarkdownIt = function (md) {
        // Inline / block typography.
        safeUse(md, window.markdownitMark);     // ==marked==
        safeUse(md, window.markdownitIns);      // ++inserted++
        safeUse(md, window.markdownitSub);      // H~2~O
        safeUse(md, window.markdownitSup);      // x^2^
        safeUse(md, window.markdownitDeflist);  // term\n: definition
        safeUse(md, window.markdownitAbbr);     // *[HTML]: HyperText...

        // Emoji shortcodes (:smile:, :rocket:, ...).
        if (window.markdownitEmoji) {
            // v3.x exports { full, light, bare }; older bundles export the function directly.
            var emoji = window.markdownitEmoji.full || window.markdownitEmoji;
            safeUse(md, emoji);
        }

        // GitHub-style task lists.
        safeUse(md, window.markdownitTaskLists, { enabled: true, label: true });

        // Attribute syntax: # Heading {#id .class key=value}.
        // Loaded before anchor so explicit {#id} wins over auto-generated ones.
        safeUse(md, window.markdownItAttrs);

        // Heading anchors. Reuse Structurizr's slug function (defined in
        // structurizr-documentation.js when present) so IDs match the TOC.
        if (window.markdownItAnchor) {
            var slugify = (typeof window.convertToHeadingAnchor === 'function')
                ? window.convertToHeadingAnchor
                : function (s) { return String(s).toLowerCase().replace(/[^\w]+/g, '-'); };

            safeUse(md, window.markdownItAnchor, {
                slugify: slugify,
                permalink: window.markdownItAnchor.permalink && window.markdownItAnchor.permalink.headerLink
                    ? window.markdownItAnchor.permalink.headerLink({ safariReaderFix: true })
                    : false
            });
        }

        // GitLab/Outline-style callouts:
        //   ::: note Optional title
        //   body
        //   :::
        ['note', 'tip', 'info', 'success', 'warning', 'important', 'caution', 'danger']
            .forEach(function (name) { defineContainer(md, name); });
    };
})();
