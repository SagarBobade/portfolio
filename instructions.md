# AI Agent Instructions (READ FIRST)

> **Purpose**
> This file exists to guide the AI agent (Claude Sonnet 4.5) so that **premium token usage is efficient, focused, and not wasted**.
> Follow these rules strictly before generating or modifying any code.

---

## 1. Project Context (Non‑Negotiable)

* Project: **One‑page SDET Portfolio Website**
* Owner: **Sagar Bobade (SDET)**
* Goal: Create a **minimal, senior‑leaning, high‑performance portfolio**
* Hosting Target: **GitHub Pages (static site only)**
* Audience: Recruiters, Hiring Managers, Senior Engineers

The site must communicate **engineering maturity and quality mindset**, not visual flash.

---

## 2. Golden Rules (CRITICAL)

Before responding or generating code, the AI **MUST**:

1. **Read existing files completely** (especially README.md and content files)
2. **Do NOT regenerate unchanged code**
3. **Do NOT refactor unless explicitly asked**
4. **Do NOT explain basics** (React, HTML, CSS, GitHub Pages)
5. **Do NOT propose alternatives** unless asked
6. **Do NOT add libraries without approval**
7. **Do NOT repeat content already finalized**

If unsure → ask **one short clarification question only**.

---

## 3. Scope Control (Token Saver)

When asked to make a change:

* Modify **only the specific file or component requested**
* Output **only the changed section**, not the full file
* Prefer **diff‑style or partial snippets**

❌ Bad: Re‑printing entire components
✅ Good: Showing only the changed JSX/CSS block

---

## 4. Tech Stack Constraints

Allowed:

* React
* Tailwind CSS (preferred)
* Plain CSS (acceptable)
* TypeScript (preferred)

Not Allowed (unless explicitly approved):

* Next.js
* Backend / APIs
* Databases
* Analytics SDKs
* UI frameworks (MUI, AntD, Bootstrap)

---

## 5. Content Authority

The **portfolio content is already finalized** in the main content document.

Rules:

* Do NOT rewrite copy
* Do NOT paraphrase text
* Do NOT change tone
* Only apply **layout, styling, or component structure**

If content changes are needed → ask first.

---

## 6. UI & UX Guidelines

* Minimal, whitespace‑heavy layout
* Neutral color palette (black / white / gray + 1 accent)
* Typography‑first design
* Subtle animations only (fade, slide, typing)
* Lighthouse score target: **90+**

Avoid:

* Parallax
* Heavy motion
* Decorative graphics

---

## 7. Animation Rules

Allowed:

* Typing effect for hero text
* Fade‑in on scroll
* Simple hover states

Not allowed:

* Complex timelines
* Continuous animations
* Animation libraries without approval

---

## 8. GitHub Pages Compatibility

The output **MUST**:

* Be fully static
* Use relative paths
* Work without server‑side rendering
* Support custom domain via CNAME

---

## 9. Performance Expectations

* Avoid unnecessary re‑renders
* Avoid large images
* Prefer system fonts if possible
* Keep bundle size minimal

---

## 10. Communication Protocol (Very Important)

AI responses must be:

* Concise
* Actionable
* Technical

Structure responses as:

1. What will change
2. Why it’s needed
3. Exact code snippet

No motivational text. No repetition.

---

## 11. When to STOP and Ask

Ask for clarification if:

* A decision affects architecture
* A new dependency is required
* Content changes are implied

Ask **once**, briefly.

---

## 12. Success Criteria

The AI is successful if:

* Changes are minimal and precise
* Tokens are conserved
* Output is production‑ready
* The portfolio feels **senior, calm, and intentional**

---

> **Reminder:** This is not a demo project. Treat it like a real professional portfolio that represents an experienced SDET.
