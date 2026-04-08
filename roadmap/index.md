---
layout: default
title: Product Roadmap
hide_breadcrumbs: true
---

<section class="section roadmap-hero">
  <div class="container page-hero-grid">
    <div class="page-head">
      <p class="eyebrow">Roadmap</p>
      <h1>Helpbook Builder Product Roadmap</h1>
      <p class="lead">Explore the roadmap below to see what we are actively building, what is coming next, and what ideas are in consideration for future releases. We prioritize features that improve real documentation workflows for macOS app teams. If you would like to suggest a feature, share feedback, or request a workflow enhancement, email <a href="mailto:hello@helpbookbuilder.com">hello@helpbookbuilder.com</a>.</p>
    </div>
    <div class="roadmap-shot">
      <img class="roadmap-image" src="{{ '/assets/images/roadmap.png' | relative_url }}" alt="Roadmap preview image">
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container roadmap-timeline">
    <article class="roadmap-item">
      <p class="roadmap-phase">Now</p>
      <h2>Q2 2026</h2>
      <ul>
        <li>Ship in-app logger window with user-safe logs</li>
        <li>Add timed debug logging controls with automatic shutoff</li>
        <li>Implement diagnostic report generation with privacy-aware redaction</li>
        <li>Add built-in Request Support and Request Feature actions with app/OS metadata context</li>
      </ul>
    </article>
    <article class="roadmap-item">
      <p class="roadmap-phase">Next</p>
      <h2>Q3 2026</h2>
      <ul>
        <li>Harden auto-import and translation workflows for complex rich-text pages</li>
        <li>Improve translation output consistency across Ollama, OpenAI, and Claude models</li>
        <li>Add stronger retry/cancel recovery behavior for long-running translation jobs</li>
        <li>Expand QA coverage for mixed content (tables, lists, inline styles, and media blocks)</li>
      </ul>
    </article>
    <article class="roadmap-item">
      <p class="roadmap-phase">Later</p>
      <h2>Q4 2026</h2>
      <ul>
        <li>Add large-project batching and resumable translation pipelines (100+ page projects)</li>
        <li>Improve provider failure handling for API limits, timeouts, and partial completion states</li>
        <li>Refine model prompts and post-processing to reduce formatting drift after translation</li>
        <li>Finalize security and privacy messaging for hosted AI providers in translation settings</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="container">
    <a href="{{ '/changelog/' | relative_url }}" class="btn page-end-cta-btn">View Changelog</a>
  </div>
</section>
