---
layout: guide
title: Helpbook Builder Guide
---

<section class="guide-shell">
  <div class="container guide-grid">
    <aside class="guide-sidebar">
      <div class="guide-app-head">
        <div class="guide-app-icon theme-icon">
          <img class="icon-light" src="{{ site.icon_light | relative_url }}" alt="Helpbook Builder app icon">
          <img class="icon-dark" src="{{ site.icon_dark | relative_url }}" alt="Helpbook Builder app icon">
        </div>
        <div>
          <p class="guide-app-name"><span>Helpbook</span><span>Builder</span></p>
        </div>
        <p class="guide-app-version">v0.1.0</p>
        <button class="guide-nav-toggle" type="button" aria-expanded="false" aria-controls="guide-nav">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="guide-app-divider" aria-hidden="true"></div>
      <div class="guide-nav-panel" id="guide-nav">
      <div class="guide-nav-group" data-collapsible>
        <button class="guide-title guide-group-toggle" type="button" aria-expanded="true">Guide</button>
        <nav class="guide-group-links">
          <a href="#getting-started">What Is a macOS Help Book?</a>
          <a href="#what-helpbook-builder-does">What HelpBook Builder Does</a>
          <a href="#core-concepts">Core Concepts</a>
          <a href="#preview-vs-export">Preview vs Export</a>
        </nav>
      </div>
      <div class="guide-nav-group" data-collapsible>
        <button class="guide-title guide-group-toggle" type="button" aria-expanded="true">Organizer</button>
        <nav class="guide-group-links">
          <a href="#organizer-new-project">New Project</a>
          <a href="#organizer-open-project">Open Project</a>
          <a href="#organizer-delete-project">Delete Project</a>
        </nav>
      </div>
      <div class="guide-nav-group" data-collapsible>
        <button class="guide-title guide-group-toggle" type="button" aria-expanded="true">Pages</button>
        <nav class="guide-group-links">
          <a href="#pages-add-page">Add a page</a>
          <a href="#pages-delete-page">Delete a page</a>
          <a href="#pages-add-page-section">Add a page section</a>
          <a href="#pages-add-language">Add a language</a>
          <a href="#pages-import-pages">Import Pages</a>
          <a href="#pages-auto-translate">Auto-Translate</a>
          <a href="#pages-add-title">Add a title</a>
          <a href="#pages-toc-toggle">Using the TOC toggle</a>
        </nav>
      </div>
      <div class="guide-nav-group" data-collapsible>
        <button class="guide-title guide-group-toggle" type="button" aria-expanded="true">WYSIWYG</button>
        <nav class="guide-group-links">
          <a href="#wysiwyg-editor">Editor Sections</a>
          <a href="#wysiwyg-text-formatting">Text Formatting</a>
          <a href="#wysiwyg-font-management">Font Management</a>
          <a href="#wysiwyg-image">Image</a>
          <a href="#wysiwyg-links">Links</a>
          <a href="#wysiwyg-alignment">Alignment</a>
          <a href="#wysiwyg-lists">Lists</a>
          <a href="#wysiwyg-tables">Tables</a>
          <a href="#wysiwyg-horizontal-rule">Horizontal Rule</a>
        </nav>
      </div>
      <div class="guide-nav-group" data-collapsible>
        <button class="guide-title guide-group-toggle" type="button" aria-expanded="true">Required Options</button>
        <nav class="guide-group-links">
          <a href="#required-options">Required Options</a>
          <a href="#required-options-identity">Helpbook Identity</a>
          <a href="#required-options-versions">Versions</a>
          <a href="#required-options-knowledgebase">Knowledgebase</a>
          <a href="#required-options-localized-headers">Localized Headers</a>
          <a href="#required-options-assets">Assets</a>
        </nav>
      </div>
      <div class="guide-nav-group" data-collapsible>
        <button class="guide-title guide-group-toggle" type="button" aria-expanded="true">Export Guide</button>
        <nav class="guide-group-links">
          <a href="#export-guide">Export Guide</a>
          <a href="#export-guide-layout">Bundle Layout</a>
          <a href="#export-guide-ids">Required IDs</a>
          <a href="#export-guide-xcode">Embed In Xcode</a>
          <a href="#export-guide-open-help">Open Help In App</a>
          <a href="#export-guide-troubleshooting">Troubleshooting</a>
          <a href="#export-guide-validation">Validation Checklist</a>
        </nav>
      </div>
      <div class="guide-nav-group" data-collapsible>
        <button class="guide-title guide-group-toggle" type="button" aria-expanded="true">Troubleshooting</button>
        <nav class="guide-group-links">
          <a href="#troubleshooting">Troubleshooting</a>
          <a href="#troubleshooting-validate-plist">Validate plist values</a>
          <a href="#troubleshooting-check-registry">Check Registry</a>
          <a href="#troubleshooting-unregister-helpbooks">Manually unregister helpbooks</a>
          <a href="#troubleshooting-helpbook-cache">Helpbook Cache</a>
          <a href="#troubleshooting-reregister-helpbook">Re-Register Helpbook</a>
          <a href="#troubleshooting-package-vs-file-isolation">Package-vs-File Isolation</a>
          <a href="#troubleshooting-sample-working-configuration">Sample Working Configuration</a>
        </nav>
      </div>
      <div class="guide-sidebar-footer">
        <a class="guide-home-link" href="{{ '/' | relative_url }}">Return to main site</a>
      </div>
      </div>
    </aside>

    <article class="guide-content">
      <header>
        <p class="eyebrow">Documentation</p>
        <h1>Helpbook Builder User Guide</h1>
        <p class="lead">HelpBook Builder is a macOS app for creating structured, multi-language Help Books using a modern, visual workflow — without wrestling with raw HTML, bundle structures, or obscure Help Viewer rules.</p>
      </header>

      <section id="getting-started" class="guide-block">
        <h2>What Is a macOS Help Book?</h2>
        <p>A Help Book is a special <code>.help</code> bundle that macOS loads inside the Help Viewer. It contains:</p>
        <ul>
          <li>Structured HTML pages</li>
          <li>A language-aware bundle layout</li>
          <li>An <code>Info.plist</code> with required metadata</li>
          <li>Proper resource paths and access points</li>
          <li>Localized <code>.lproj</code> directories</li>
        </ul>
        <p>HelpBook Builder generates all of this automatically.</p>
      </section>

      <section id="what-helpbook-builder-does" class="guide-block">
        <h2>What HelpBook Builder Does</h2>
        <p>HelpBook Builder lets you:</p>
        <ul>
          <li>Create structured help content using a sidebar-driven page hierarchy</li>
          <li>Build parent/child page relationships</li>
          <li>Control which pages appear in the Table of Contents</li>
          <li>Author rich content using RTFD (attachments included)</li>
          <li>Add a Help Book icon and banner</li>
          <li>Manage multiple languages</li>
          <li>Preview the rendered HTML live</li>
          <li>Export a valid <code>.help</code> bundle ready for Xcode</li>
        </ul>
        <p>No manual bundle editing.<br>No hand-written HTML required.</p>
      </section>

      <section id="core-concepts" class="guide-block">
        <h2>Core Concepts</h2>
        <h3>Pages</h3>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/addpage.png' | relative_url }}" alt="Adding a page in HelpBook Builder">
        <p>Pages are the foundation of your Help Book.</p>
        <ul>
          <li>Top-level pages become standalone HTML files.</li>
          <li>Child pages render as nested sections within their parent.</li>
          <li>Each page has a stable internal identifier.</li>
          <li>You control page ordering and TOC visibility.</li>
        </ul>
        <div class="callout">Tip: Start with a few top-level pages, then add child pages only where the structure improves findability.</div>
        <br>

        <h3>Languages</h3>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/languages.png' | relative_url }}" alt="Languages configuration in HelpBook Builder">
        <p>HelpBook Builder supports multiple languages.</p>
        <ul>
          <li>Each language renders to its own directory.</li>
          <li>The development region controls the default entry point.</li>
          <li>The language bar is automatically generated.</li>
          <li>Exported bundles use proper <code>.lproj</code> structure.</li>
        </ul>
        <div class="callout">Tip: Set your development region first, then add additional languages so fallback behavior is predictable.</div>
        <br>

        <h3>Assets</h3>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/assets.png' | relative_url }}" alt="Assets setup in HelpBook Builder">
        <p>You can provide:</p>
        <ul>
          <li>App icon (256×256)</li>
          <li>Banner image (wide format)</li>
        </ul>
        <p>These are embedded into your Help Book bundle and exported into the correct <code>Resources/img</code> directory.</p>
        <div class="callout">Tip: Keep icon and banner filenames consistent between revisions to reduce churn in your project history.</div>
        <br>
      </section>

      <section id="preview-vs-export" class="guide-block">
        <div class="guide-image preview-export-guide-image" role="img" aria-label="Export workflow preview"></div>
        <h2>Preview vs Export</h2>
        <p>HelpBook Builder separates preview rendering from final export:</p>
        <h3>Preview Mode</h3>
        <p>Renders your Help Book into a temporary directory for live viewing.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/preview_mode.png' | relative_url }}" alt="Preview mode output example">
        <h3>Export Mode</h3>
        <p>Produces a production-ready <code>.help</code> bundle with:</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/export_mode.png' | relative_url }}" alt="Export mode output example">
        <ul>
          <li><code>Contents/Info.plist</code></li>
          <li><code>Resources/&lt;language&gt;.lproj</code></li>
          <li>Shared CSS</li>
          <li>Image assets</li>
          <li>Install guide</li>
        </ul>
        <p>The preview uses the same renderer pipeline as export — what you see is what you ship.</p>
      </section>

      <section id="organizer-new-project" class="guide-block">
        <div class="guide-image organizer-guide-image" role="img" aria-label="Project Organizer preview"></div>
        <h2>New Project</h2>
        <p>Open the Organizer and choose <strong>New Project</strong>. Helpbook Builder uses a document-based file system, so each project is saved as a local <code>.helpbook</code> package on disk using the macOS save panel.</p>
        <p>When you create a new project, the app writes a structured package with <code>Contents/Project.json</code>, <code>Contents/Pages</code>, and <code>Contents/Assets</code>. This keeps project metadata, page content, and media in a predictable local folder layout that can be versioned and backed up.</p>
        <ol>
          <li>Open the Organizer window.</li>
          <li>Click <strong>New Project</strong>.</li>
          <li>Choose where to save the <code>.helpbook</code> file.</li>
          <li>Confirm to create and open the project editor window.</li>
        </ol>
      </section>

      <section id="organizer-open-project" class="guide-block">
        <h2>Open Project</h2>
        <p>Use <strong>Open Project</strong> in Organizer to load an existing <code>.helpbook</code> package. The file picker is restricted to the Helpbook document type so only valid project files are selectable.</p>
        <p>The Organizer also displays your recent projects from the macOS recent documents list. You can open a recent entry by double-clicking a row or using the row action button on the right.</p>
        <ol>
          <li>Open Organizer.</li>
          <li>Click <strong>Open Project</strong> and pick a <code>.helpbook</code> file, or choose a project from Recents.</li>
          <li>The project opens in the editor and Organizer closes automatically.</li>
        </ol>
      </section>

      <section id="organizer-delete-project" class="guide-block">
        <h2>Delete Project</h2>
        <p>Select a project in the Organizer recents list, then use <strong>Delete Project</strong>. The app shows a destructive confirmation dialog before removing the selected project from disk.</p>
        <p>Deletion uses the local file system directly and permanently removes the selected <code>.helpbook</code> package at its file path. If you need recovery options, keep backups or version control copies of your projects.</p>
        <ol>
          <li>Select a project in the recent list.</li>
          <li>Click <strong>Delete Project</strong>.</li>
          <li>Confirm the delete action in the prompt.</li>
        </ol>
      </section>

      <section id="pages-add-page" class="guide-block">
        <div class="guide-image pages-guide-image" role="img" aria-label="Pages panel preview"></div>
        <h2>Add a page</h2>
        <p>Use the page controls in the project sidebar to create a new top-level page. Top-level pages become standalone HTML files in your exported Help Book.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/addpage.png' | relative_url }}" alt="Add page control in the sidebar">
        <ol>
          <li>Open your project in the editor.</li>
          <li>In the page tree, add a new page at the root level.</li>
          <li>Enter the page title and begin writing content in the editor.</li>
        </ol>
      </section>

      <section id="pages-delete-page" class="guide-block">
        <h2>Delete a page</h2>
        <p>Delete removes the selected page from your project tree and exported output. Use this when cleaning up draft or deprecated content.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/welcome_helpbook.png' | relative_url }}" alt="Delete page action in the project sidebar">
        <ol>
          <li>Select the page in the sidebar tree.</li>
          <li>Use the delete control for that page row.</li>
          <li>Confirm the delete action in the prompt.</li>
        </ol>
      </section>

      <section id="pages-add-page-section" class="guide-block">
        <h2>Add a page section</h2>
        <p>Page sections are child pages nested under a parent. This is useful when a main topic needs smaller, scoped subtopics.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/sections.png' | relative_url }}" alt="Nested page sections in the sidebar">
        <ol>
          <li>Select the parent page in the tree.</li>
          <li>Add a child page under that parent.</li>
          <li>Reorder child pages to control how sections appear in navigation.</li>
        </ol>
      </section>

      <section id="pages-add-language" class="guide-block">
        <h2>Add a language</h2>
        <p>Click the language <strong>+</strong> control in the sidebar header to open the Add Language sheet. The picker shows only supported languages that are not already in the project, so duplicate language entries are prevented automatically.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/languages.png' | relative_url }}" alt="Language controls in the sidebar">
        <p>When you select a language and confirm <strong>Add</strong>, the app creates a new language entry with a default Introduction page, appends it to the project, and updates sidebar selection to that language.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/add_lang_popup.png' | relative_url }}" alt="Add language popup sheet">
        <p>The document file system is updated at the same time: HelpBook Builder creates a language folder in <code>Contents/Pages/&lt;languageID&gt;</code> and creates a blank <code>.rtfd</code> page container for the starter page so editing can begin immediately.</p>
        <p>Language limits are enforced in this flow. On the free plan, language count is capped at three; when the cap is reached, add-language actions are disabled and upgrade messaging is shown.</p>
      </section>

      <section id="pages-import-pages" class="guide-block">
        <h2>Import Pages</h2>
        <p>Use the language AI workflow to import pages from one language into another language. The import flow lets you choose a source language and import all pages or a selected subset.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/import.png' | relative_url }}" alt="Import pages language workflow">
        <p>When importing, HelpBook Builder clones page structures into the target language with new page IDs so tree integrity is preserved. If you import all pages, the target language page set is replaced; if you import selected pages, cloned pages are appended to the existing target set.</p>
        <p>The app then synchronizes the filesystem in <code>Contents/Pages</code> by copying each source page <code>.rtfd</code> container into the target language folder using the new ID mapping. If a source page file is missing, a blank page container is created so project state stays consistent.</p>
      </section>

      <section id="pages-auto-translate" class="guide-block">
        <h2>Auto-Translate</h2>
        <p>Auto-Translate runs from the same language wizard and translates content into the selected target language using a configured model provider. You can translate all pages in the target language or only selected pages.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/translate.png' | relative_url }}" alt="Auto-translate language workflow">
        <p>In the current implementation, translation updates both page titles and page body content. For each selected page, the app translates the title, loads the page RTFD content, translates attributed text while preserving formatting, and writes the translated result back to the page container.</p>
        <p>Auto-Translate requires Pro access. If Pro is not active, translation is blocked. Import Pages remains available independently of translation so language structures can still be prepared before translation runs.</p>
      </section>

      <section id="pages-add-title" class="guide-block">
        <h2>Add a title</h2>
        <p>Each page should have a clear, human-readable title. Titles are used in navigation, preview output, and exported documentation structure.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/title.png' | relative_url }}" alt="Page title editing field">
        <ol>
          <li>Select the page you want to edit.</li>
          <li>Set or update the page title in the page metadata area.</li>
          <li>Verify the title in live preview to confirm hierarchy and readability.</li>
        </ol>
      </section>

      <section id="pages-toc-toggle" class="guide-block">
        <h2>Using the TOC toggle</h2>
        <p>The TOC toggle controls whether a page appears in the generated Table of Contents. Keep utility pages hidden and user-facing pages enabled for a cleaner Help Viewer experience.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/toc.png' | relative_url }}" alt="TOC visibility toggle in page settings">
        <ol>
          <li>Select a page in the sidebar.</li>
          <li>Enable or disable the TOC visibility option for that page.</li>
          <li>Use preview to validate the final navigation before export.</li>
        </ol>
      </section>

      <section id="wysiwyg-editor" class="guide-block">
        <h2>WYSIWYG Editor</h2>
        <p>The WYSIWYG editor is organized into focused tool groups so you can author, format, and structure Help Book content without switching to manual HTML editing. The sections below describe what each group does and when to use it.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/wysiwyg.png' | relative_url }}" alt="WYSIWYG editor controls">

        <h3 id="wysiwyg-text-formatting">Text Formatting</h3>
        <p>The Text Formatting section includes Bold, Italic, Underline, and Strikethrough for inline emphasis and quick semantic styling in paragraph content.</p>
        <img src="{{ '/assets/images/guide/editor/biu.png' | relative_url }}" alt="Text formatting controls for bold, italic, underline, and strikethrough">
        <h4>Bold</h4>
        <p>Use Bold to emphasize key terms, feature names, and short action labels users should notice first.</p>
        <h4>Italic</h4>
        <p>Use Italic for lighter emphasis, contextual notes, and references that should stand out without dominating the line.</p>
        <h4>Underline</h4>
        <p>Use Underline sparingly for instructional emphasis where visual reinforcement is useful in step-by-step guidance.</p>
        <h4>Strikethrough</h4>
        <p>Use Strikethrough to indicate deprecated options, old steps, or replaced terminology while preserving historical context.</p>
        <div class="guide-sub-divider" aria-hidden="true"></div>

        <h3 id="wysiwyg-font-management">Font Management</h3>
        <p>The Font Management group controls type family, face variants, size, color, and heading presets directly from the editor toolbar. These controls apply to selected text or to the current typing state when no text is selected.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/font.png' | relative_url }}" alt="Font management controls in the editor toolbar">
        <h4>Font Family Dropdown</h4>
        <p>Use the family dropdown to switch between System and available font families. In the editor logic, this maps to applying a new base family while preserving the current point size.</p>
        <h4>Font Face And Weight</h4>
        <p>Use face/style controls to apply variants such as Regular, Medium, Semibold, or Bold when available for the selected family. Bold and Italic toggles are trait-based and can be applied to a selection or carried forward to new typing.</p>
        <h4>Font Size</h4>
        <p>Use the size dropdown to scale text up or down for readability and hierarchy. Size changes are applied to selected text ranges, or to typing attributes if the caret is active without a selection.</p>
        <h4>Color</h4>
        <p>The color well applies foreground color to selected text, or sets the active typing color for new text. This is useful for visual emphasis in callouts, labels, and documentation annotations.</p>
        <h4>Headings</h4>
        <p>The heading picker applies predefined text styles (Paragraph, H1, H2, H3, H4). In the current implementation, heading levels map to preset point sizes and font weights to keep hierarchy consistent throughout the document.</p>
        <div class="guide-sub-divider" aria-hidden="true"></div>

        <h3 id="wysiwyg-image">Image</h3>
        <p>The editor supports two insertion paths for images: toolbar-based file selection and direct drag-and-drop into the text view.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/image.png' | relative_url }}" alt="Image insertion controls in the editor toolbar">
        <h4>Insert From Toolbar</h4>
        <p>Click the Image button in the toolbar to open the file picker. The picker is limited to image file types, and selected files are inserted at the current caret position (or replace the current selection).</p>
        <h4>Insert By Drag And Drop</h4>
        <p>You can also drag an image file directly into the editor body. The text view accepts file URL drops and imports graphics inline as rich-text attachments.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/image_edit.png' | relative_url }}" alt="Editing an inserted image in the editor">
        <h4>How Placement Works</h4>
        <p>Inserted images behave like inline content in the document flow. Positioning is controlled by where you insert the image and by paragraph alignment controls (Left, Center, Right, Justify) in the editor toolbar.</p>
        <h4>How Sizing Works</h4>
        <p>On insert, very large images are automatically scaled down to a max display width of 400 points to keep layouts readable. The original image data is stored as an attachment in the page’s RTFD content for persistence and export.</p>
        <div class="callout">Tip: Images can be moved and aligned (including centered), but they cannot be resized in the editor.</div>
        <div class="guide-sub-divider" aria-hidden="true"></div>

        <h3 id="wysiwyg-links">Links</h3>
        <p>The Links group supports external URLs, internal page links, and anchor-based navigation. The editor tracks link metadata so links remain identifiable in both editing and rendered output.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/links.png' | relative_url }}" alt="Link and anchor controls in the editor toolbar">
        <h4>Insert Link</h4>
        <p>Use the Link control to add or edit linked text. The editor supports different link kinds (external, internal page, anchor, and anchor link), which are stored as structured attributes in the document.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/insert_link.png' | relative_url }}" alt="Insert link sheet in the editor">
        <h4>Insert Anchor</h4>
        <p>Use the Anchor control to create jump targets within the page. Anchors can then be referenced by anchor links for in-page navigation and long-form documentation workflows.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/anchor.png' | relative_url }}" alt="Insert anchor control in the editor">
        <h4>Link State And Editing</h4>
        <p>The toolbar reads current caret/selection attributes to detect active links and keep controls in sync, so updating or removing links is predictable while editing.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/link_edit.png' | relative_url }}" alt="Link editing workflow in the editor">
        <div class="guide-sub-divider" aria-hidden="true"></div>

        <h3 id="wysiwyg-alignment">Alignment</h3>
        <p>Alignment controls apply paragraph-level formatting using Left, Center, Right, and Justify modes. These settings are applied to selected ranges, or to the current paragraph when no text is selected.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/align.png' | relative_url }}" alt="Alignment controls in the editor toolbar">
        <h4>Paragraph Behavior</h4>
        <p>Alignment updates paragraph style attributes directly, which keeps the layout stable across save/load cycles in the RTFD-backed editor.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/alignment.png' | relative_url }}" alt="Paragraph alignment behavior in the editor">
        <h4>Indentation</h4>
        <p>Indent and outdent actions adjust paragraph indents in consistent increments, and apply to selected ranges or active typing context while respecting list and table constraints.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/indentation.png' | relative_url }}" alt="Indentation controls in the editor">
        <div class="guide-sub-divider" aria-hidden="true"></div>

        <h3 id="wysiwyg-lists">Lists</h3>
        <p>The Lists section supports bulleted and numbered lists with nested structure. Use numbered lists for ordered procedures and bullets for grouped reference content.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/lists.png' | relative_url }}" alt="Bulleted and numbered list controls in the editor">
        <h4>Nested Levels</h4>
        <p>List nesting is handled through keyboard behavior: Tab increases nesting depth and Shift+Tab outdents, allowing sub-number and sub-bullet hierarchies.</p>
        <div class="guide-inline-image-row">
          <img src="{{ '/assets/images/guide/editor/bullet_list.png' | relative_url }}" alt="Bullet list controls">
          <img src="{{ '/assets/images/guide/editor/bullet_nested.png' | relative_url }}" alt="Nested bullet list example">
        </div>
        <h4>Editing Behavior</h4>
        <p>Return and delete behavior is list-aware, so editing inside list items preserves list structure while still allowing clean exits from list mode when needed.</p>
        <div class="guide-sub-divider" aria-hidden="true"></div>

        <h3 id="wysiwyg-tables">Tables</h3>
        <p>Tables are fully editable in the WYSIWYG flow and support structure changes without leaving the editor. This is useful for option matrices, comparisons, and technical reference layouts.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/tables.png' | relative_url }}" alt="Table controls in the editor toolbar">
        <h4>Table Creation</h4>
        <p>Insert a table with configurable row/column dimensions, then apply border settings using table border controls.</p>
        <div class="guide-inline-image-row">
          <img src="{{ '/assets/images/guide/editor/table row.png' | relative_url }}" alt="Table row and column insertion controls">
          <img src="{{ '/assets/images/guide/editor/table_border.png' | relative_url }}" alt="Table border controls">
        </div>
        <h4>Row And Column Operations</h4>
        <p>You can add rows/columns, insert rows above/below, and insert columns left/right. Table-specific context actions also support deletion and structural updates.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/table_wyg.png' | relative_url }}" alt="Table row and column actions in the WYSIWYG editor">
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/table_controls.png' | relative_url }}" alt="Table controls and context actions">
        <h4>Table Interaction Rules</h4>
        <p>The editor enforces table-aware selection and command behavior so destructive actions apply to table structures safely and consistently.</p>
        <div class="guide-sub-divider" aria-hidden="true"></div>

        <h3 id="wysiwyg-horizontal-rule">Horizontal Rule</h3>
        <p>Horizontal Rule inserts a visual divider attachment that separates major content blocks. The editor inserts the rule plus a trailing newline so you can continue typing cleanly below it.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/editor/hr.png' | relative_url }}" alt="Horizontal rule control in the editor toolbar">
        <h4>Persistence Model</h4>
        <p>The rule is stored as a specialized attachment marker in the RTFD content and rehydrated on load, so the divider remains stable across save/export cycles.</p>
        <div class="callout">Tip: Use horizontal rules to break long pages into clear sections and improve scanning without overusing heading levels.</div>
      </section>

      <section id="required-options" class="guide-block">
        <h2>Required Options</h2>
        <p>The Required Options panel is where HelpBook Builder stores metadata and assets used by preview and export. These values are bound directly to the project model and written into generated bundle output.</p>

        <h3 id="required-options-identity">Helpbook Identity</h3>
        <p>This section defines core identity fields: bundle identifier, book title, and development region. The development region picker is populated from currently configured project languages, and the selected value is validated against available language codes.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/required/h_identity.png' | relative_url }}" alt="Helpbook identity fields in required options">
        <p>If the current development region is no longer valid, the UI falls back to the first available region (or <code>en</code>) so export state remains consistent.</p>

        <h3 id="required-options-versions">Versions</h3>
        <p>Versions includes short version and build version fields. These values map to project version metadata and are used during export when generating production bundle metadata.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/required/versions.png' | relative_url }}" alt="Version fields in required options">

        <h3 id="required-options-knowledgebase">Knowledgebase</h3>
        <p>Knowledgebase includes three fields: <strong>KB Product</strong>, <strong>KB URL</strong>, and <strong>KB Description</strong>. In the exported Help Book manifest (<code>Contents/Info.plist</code>), these map as follows:</p>
        <ul>
          <li><strong>KB Product</strong> → written to <code>KBProduct</code> in <code>Info.plist</code></li>
          <li><strong>KB URL</strong> → written to <code>KBURL</code> in <code>Info.plist</code></li>
          <li><strong>KB Description</strong> → used in rendered Help Book header content (including localized overrides)</li>
        </ul>
        <p>In Apple Help workflows, <code>KBProduct</code> and <code>KBURL</code> act as knowledgebase metadata for the bundle. When your <code>.help</code> bundle is embedded in an app and registered through the app’s Help Book keys, these values provide product context and a canonical support endpoint tied to that Help Book.</p>
        <p><strong>KBProduct</strong> identifies the product name associated with the help content, which helps keep the bundle’s metadata aligned with the app identity. <strong>KBURL</strong> defines the product’s support/knowledgebase URL so integrations or fallback help flows have a stable destination outside the local bundle.</p>
        <p>Practically, keep both values stable across releases: changing them frequently can fragment metadata continuity between app builds and published help resources.</p>

        <h3 id="required-options-localized-headers">Localized Headers</h3>
        <p>Localized Headers are generated per language in the project. For each language, you can override localized title/header text and localized description values.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/required/localized_toc.png' | relative_url }}" alt="Localized header and description overrides">
        <p>Overrides are stored by language code, and empty values are automatically removed from the override dictionaries to keep project state clean.</p>

        <h3 id="required-options-assets">Assets</h3>
        <p>The Assets section manages icon and banner files with strict validation before saving to disk. Icon uploads must be exactly <code>256×256</code>, and banner width must be between <code>600</code> and <code>3000</code> pixels.</p>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/add/assets.png' | relative_url }}" alt="Assets validation and upload settings">
        <p>Accepted assets are written to <code>Contents/Assets/icon.png</code> and <code>Contents/Assets/banner.png</code>. The panel also supports loading existing assets from disk on open, and remove actions clear both disk files and in-memory project data.</p>
      </section>

      <section id="export-guide" class="guide-block">
        <h2>Export Guide</h2>
        <div class="callout">Disclaimer: The examples below are sample guidance only. Export output, identifiers, and file names can vary by project and app configuration.</div>
        <p>When you export, HelpBook Builder generates a <code>.help</code> bundle intended for macOS Help Viewer integration. Use this section as a practical install/reference flow after export.</p>

        <h3 id="export-guide-layout">Bundle Layout</h3>
        <p>Typical exported structure:</p>
        <pre><code>Your Helpbook.help/
└─ Contents/
   ├─ Info.plist
   └─ Resources/
      ├─ en.lproj/
      │   ├─ index.html
      │   └─ &lt;top-level pages&gt;.html
      ├─ Shared.css
      └─ img/
          ├─ icon.png
          └─ banner.png</code></pre>
        <p>Top-level pages are exported as individual HTML files. Child pages are rendered as nested sections in parent page output.</p>

        <h3 id="export-guide-ids">Required IDs</h3>
        <p>Keep your help book identifiers consistent between exported bundle metadata and app target configuration.</p>
        <pre><code>HPDBookIdentifier = acme.com.Helpbook</code></pre>
        <p>If these values drift across app/build/export, Help Viewer may open the wrong book or fail to resolve your bundle.</p>

        <h3 id="export-guide-xcode">Embed In Xcode</h3>
        <p>Add the exported help bundle to your app as a folder reference, then verify Info.plist app keys match your exported bundle metadata.</p>
        <ol>
          <li>Drag <code>Your Helpbook.help</code> into Xcode.</li>
          <li>Choose <strong>Create folder references</strong> (blue folder), not groups (yellow).</li>
          <li>Confirm it appears in <strong>Build Phases → Copy Bundle Resources</strong>.</li>
        </ol>
        <p>Add app Info.plist keys:</p>
        <pre><code>CFBundleHelpBookFolder = Your Helpbook.help
CFBundleHelpBookName   = acme.com.Helpbook</code></pre>
        <p>Then verify exported help bundle values:</p>
        <pre><code>HPDBookIdentifier = acme.com.Helpbook
HPDBookAccessPath = en.lproj/index.html</code></pre>

        <h3 id="export-guide-open-help">Open Help In App</h3>
        <p>Use <code>NSHelpManager</code> to open your help book from AppKit:</p>
        <pre><code>NSHelpManager.shared.openHelpAnchor("", inBook: "acme.com.Helpbook")</code></pre>
        <p>An empty anchor opens the configured access page; later you can pass specific anchors for deep links.</p>

        <h3 id="export-guide-troubleshooting">Troubleshooting</h3>
        <p><strong>Wrong help book opens:</strong> Ensure app <code>CFBundleHelpBookName</code> matches exported <code>HPDBookIdentifier</code>.</p>
        <p><strong>Blank/white page:</strong> Verify <code>Resources/en.lproj/index.html</code> exists and <code>HPDBookAccessPath</code> is correct.</p>
        <p><strong>Help content appears cached:</strong> clear Help Viewer cache and restart it.</p>
        <pre><code>rm -rf ~/Library/Group\ Containers/group.com.apple.helpviewer.content/Library/Caches/*
killall HelpViewer</code></pre>
        <p><strong>App quarantine/xattrs issues:</strong></p>
        <pre><code>xattr -cr &lt;YourApp&gt;.app</code></pre>

        <h3 id="export-guide-validation">Validation Checklist</h3>
        <p>Use this quick checklist after export and before release:</p>
        <ul>
          <li><code>Contents/Info.plist</code> exists in the exported help bundle</li>
          <li><code>Resources/en.lproj/index.html</code> exists</li>
          <li><code>Resources/Shared.css</code> exists</li>
          <li><code>.help</code> is added as folder reference and copied in app target build phases</li>
          <li>App target Info.plist contains <code>CFBundleHelpBookFolder</code> and <code>CFBundleHelpBookName</code></li>
          <li><code>CFBundleHelpBookName</code> equals exported <code>HPDBookIdentifier</code></li>
        </ul>
      </section>

      <section id="troubleshooting" class="guide-block">
        <h2>Troubleshooting</h2>
        <img class="guide-inline-image-spaced guide-inline-image-small" src="{{ '/assets/images/guide/currently_unavailable.png' | relative_url }}" alt="Troubleshooting placeholder">
        <p>If Help Viewer is not showing your latest content, macOS may not have fully refreshed its Help Book registration yet. In practice, running the app from <code>/Applications</code> often forces a cleaner registration/update cycle than running only from a transient build location.</p>
        <p>Try this flow: stop the app in Xcode, reveal the built app from the Products entry, copy it into <code>/Applications</code>, then launch it from there. This frequently refreshes Help Viewer behavior for updated bundles and HTML changes.</p>
        <p>If behavior is still wrong after that, validate your plist and bundle paths first:</p>

        <h3 id="troubleshooting-validate-plist">Validate plist values</h3>
        <p>Use this check when Help Viewer opens the wrong content, fails to open your book, or behaves inconsistently between source and built app outputs.</p>
        <pre><code># Example only — replace APP for your environment.
APP="/path/to/YourApp.app"

echo "=== built app plist ==="
plutil -p "$APP/Contents/Info.plist" | rg 'CFBundleHelpBookFolder|CFBundleHelpBookName'

echo "=== built help plist ==="
plutil -p "$APP/Contents/Resources/Helpbook.help/Contents/Info.plist" | rg 'HPDBookIdentifier|HPDBookAccessPath'

# Expected (sanitized) output:
=== built app plist ===
  "CFBundleHelpBookFolder" => "Helpbook.help"
  "CFBundleHelpBookName" => "example.org.HelpBook.help"

=== built help plist ===
  "HPDBookAccessPath" => "en.lproj/index.html"
  "HPDBookIdentifier" => "example.org.HelpBook.help"</code></pre>
        <p>This validates that your app target keys (<code>CFBundleHelpBookFolder</code>, <code>CFBundleHelpBookName</code>) and your help bundle keys (<code>HPDBookIdentifier</code>, <code>HPDBookAccessPath</code>) are present and aligned in both source and built outputs.</p>
        <p>If source help plist lookup fails but built help plist succeeds, your build artifacts may be correct while your source-path reference is wrong or outdated.</p>

        <h3 id="troubleshooting-check-registry">Check Registry</h3>
        <p>Use LaunchServices registry output to check whether your app/help metadata is being registered multiple times with conflicting values.</p>
        <pre><code># Example only — replace identifiers for your app.
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -dump \
| rg -n "example.org.HelpBook|Helpbook.help|example.org.Helpbook"</code></pre>
        <p>Sanitized example output (trimmed):</p>
        <pre><code>19294:identifier:                 example.org.HelpBook
19306:                                CFBundleHelpBookFolder = "Helpbook.help";
19307:                                CFBundleHelpBookName = "example.org.Helpbook";
19310:                                CFBundleIdentifier = "example.org.HelpBook";

20022:identifier:                 example.org.HelpBook
20034:                                CFBundleHelpBookFolder = "Helpbook.help";
20035:                                CFBundleHelpBookName = "example.org.Helpbook.help";
20038:                                CFBundleIdentifier = "example.org.HelpBook";

... (many additional repeated registrations) ...</code></pre>
        <p>If you see many repeated entries for the same app identifier with different help book name values, LaunchServices may be stuck re-registering old/new app copies.</p>
        <p>To force-clear registrations, unregister each located app path:</p>
        <pre><code># Example only — replace APP and identifier for your environment.
LSR="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"
APP="/path/to/YourApp.app"

mdfind "kMDItemCFBundleIdentifier == 'example.org.HelpBook'" \
| while IFS= read -r p; do
  echo "unregister: $p"
  "$LSR" -u "$p"
done</code></pre>
        <p>After unregistering stale copies, relaunch the intended app build and re-run the registry check to confirm a clean, consistent registration set.</p>

        <h3 id="troubleshooting-unregister-helpbooks">Manually unregister helpbooks</h3>
        <p>If stale app copies are still registered (especially from <code>~/.Trash</code>), inspect each registered path and remove unwanted entries one-by-one.</p>
        <pre><code># Example only — replace the bundle identifier for your app.
LSR="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"

"$LSR" -dump | awk '
/^[[:space:]]*path:/ {path=$0}
/identifier:[[:space:]]+example.org.HelpBook/ {inrec=1; next}
inrec && /CFBundleHelpBookName/ {print path "\n" $0 "\n"; inrec=0}
'</code></pre>
        <p>Sanitized example output:</p>
        <pre><code>path:                       /Users/example/Library/Developer/Xcode/DerivedData/.../Build/Products/Debug/HelpBook.app
                                CFBundleHelpBookName = "example.org.Helpbook";

path:                       /Users/example/.Trash/HelpBook.app
                                CFBundleHelpBookName = "example.org.Helpbook.help";

path:                       /Users/example/.Trash/HelpBook Old.app
                                CFBundleHelpBookName = "example.org.Helpbook";</code></pre>
        <p>Unregister stale paths, then rerun the listing command after each removal:</p>
        <pre><code>"$LSR" -u "/Users/example/.Trash/HelpBook.app"
"$LSR" -u "/Users/example/.Trash/HelpBook Old.app"</code></pre>
        <p>Verify Help Viewer target resolution with your book ID:</p>
        <pre><code>open "help:bookID=example.org.HelpBook.help"</code></pre>
        <p>If help still opens unexpected content, remove stale registrations manually until only one valid app registration remains for your current build.</p>

        <h3 id="troubleshooting-helpbook-cache">Helpbook Cache</h3>
        <p>Help Viewer cache state can keep old Help Book data alive even after you fix plist values and registrations.</p>
        <p>Check this cache location first:</p>
        <pre><code>~/Library/Group Containers/group.com.apple.helpviewer.content/Library/Caches/</code></pre>
        <p>If you find cache data for your Help Book, remove it, then relaunch your app from <code>/Applications</code> so the book can be indexed again.</p>
        <p>If no obvious cache entry is present, or behavior is still stale, use:</p>
        <pre><code>hiutil -P</code></pre>
        <p><code>hiutil -P</code> shuts down the Help process and clears cached help index state so macOS can rebuild from your current installed bundle.</p>
        <p>After running it, give Help Viewer time to restart and re-cache. Re-indexing is not instant, so allow a short delay before re-testing updated Help Book content.</p>

        <h3 id="troubleshooting-reregister-helpbook">Re-Register Helpbook</h3>
        <p>Use this flow when LaunchServices has stale registrations and you want to fully reset and register only the current app build.</p>
        <pre><code># Example only — replace APP and bundle identifier for your environment.
LSR="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"
APP="/path/to/YourApp.app"

# 1) Unregister every installed copy with this bundle id (not just DerivedData)
mdfind "kMDItemCFBundleIdentifier == 'example.org.HelpBook'" \
| while IFS= read -r p; do
  echo "unregister: $p"
  "$LSR" -u "$p"
done

# 2) Rebuild LaunchServices DB
"$LSR" -kill -r -domain user -domain local -domain system

# 3) Register only current app
"$LSR" -f "$APP"

# 4) Verify no stale '.help' suffix records remain
"$LSR" -dump | rg -n "identifier:\s+example.org.HelpBook|CFBundleHelpBookName = \"example.org.Helpbook(\.help)?\""</code></pre>
        <p>This sequence unregisters all old app copies, rebuilds the LaunchServices registry, then registers only the app you intend to test.</p>

        <h3 id="troubleshooting-package-vs-file-isolation">Package-vs-File Isolation</h3>
        <p>Use this quick isolation test to distinguish bundle/registration issues from plain HTML readability issues.</p>
        <pre><code>APP="/path/to/YourApp.app"

open "$APP/Contents/Resources/Helpbook.help"
open "$APP/Contents/Resources/Helpbook.help/Contents/Resources/en.lproj/index.html"</code></pre>
        <p>If the second command works but the first fails, the issue is typically bundle registration, package parsing, or Help Book path metadata, not the HTML file itself.</p>

        <h3 id="troubleshooting-sample-working-configuration">Sample Working Configuration</h3>
        <p>Use these sample plist snapshots as a known-good reference when validating your own exported Help Book and app target setup.</p>

        <h4>Sample Helpbook plist (bundle)</h4>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/sample_helpbook.png' | relative_url }}" alt="Sample helpbook Info.plist configuration">
        <pre><code># Sample parsed values from Helpbook.help/Contents/Info.plist
CFBundleDevelopmentRegion      = en
CFBundleIdentifier             = example.org.HelpBook.help
CFBundleInfoDictionaryVersion  = 6.0
CFBundleName                   = Helpbook Builder
CFBundlePackageType            = BNDL
CFBundleShortVersionString     = 1
CFBundleVersion                = 1.0
HPDBookAccessPath              = en.lproj/index.html
HPDBookIconPath                = img/icon.png
HPDBookTitle                   = Helpbook Builder
HPDBookType                    = 3
HPDBookKBURL                   = https://www.example.org/apps/#helpbook
HPDBookKBProduct               = helpbook
HPDBookIdentifier              = example.org.HelpBook.help</code></pre>
        <p>Core checks: <code>HPDBookIdentifier</code> must match the app’s Help Book identifier, and <code>HPDBookAccessPath</code> must point to a real localized entry page.</p>

        <h4>Sample App plist (app target)</h4>
        <img class="guide-inline-image-spaced" src="{{ '/assets/images/guide/sample_app.png' | relative_url }}" alt="Sample app Info.plist helpbook keys">
        <pre><code># Required app Info.plist keys (from sample)
CFBundleHelpBookFolder = Helpbook.help
CFBundleHelpBookName   = example.org.HelpBook.help</code></pre>
        <p>The two required app options shown in the sample are <strong>Help Book directory name</strong> (<code>CFBundleHelpBookFolder</code>) and <strong>Help Book identifier</strong> (<code>CFBundleHelpBookName</code>).</p>
        <p>These must align with your bundle folder and <code>HPDBookIdentifier</code>, or Help Viewer may resolve the wrong registration.</p>
        <p>For additional Help Book guidance and troubleshooting depth, see this reference: <a href="https://marioaguzman.wordpress.com/2020/09/12/auth/" target="_blank" rel="noopener noreferrer">marioaguzman.wordpress.com — Help Book resources</a>.</p>
      </section>
    </article>
  </div>
</section>
