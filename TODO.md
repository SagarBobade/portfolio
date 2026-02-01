# Portfolio Build – TODO (Execution Plan)

Purpose:
- Build a clean, minimal, senior-level SDET portfolio
- Avoid scope creep
- Avoid unnecessary AI usage
- Ship fast, then iterate

Rule:
- Do NOT add new sections unless explicitly approved
- Follow tasks in order
- One section = one commit

---

## Phase 1: Project Setup (Once)

- [x] Decide tech stack: React + TypeScript + HTML5 + CSS
- [x] Choose hosting: GitHub Pages
- [x] Decide domain strategy (custom domain optional later)
- [ ] Initialize React + TypeScript project
- [ ] Clean default boilerplate (remove unused files)
- [ ] Set up basic folder structure:
  - components/
  - sections/
  - styles/
  - assets/

Commit message:
- `chore: initial project setup`

---

## Phase 2: Content Lock (Once)

- [x] Create `content.md`
- [x] Freeze portfolio text (no rewrites)
- [ ] Reference `content.md` from components (copy only, don’t edit text)

Commit message:
- `chore: freeze portfolio content`

---

## Phase 3: UI Sections (One by One)

### Home (Hero)
- [ ] Big intro text: “Hi, I’m Sagar Bobade”
- [ ] Subtitle: “SDET | Quality Advocate | Automation Engineer”
- [ ] Typing animation with 3 fixed sentences
- [ ] Minimal layout, center aligned
- [ ] Mobile responsive

Commit:
- `feat: add hero section`

---

### About
- [ ] About text from `content.md`
- [ ] Max width for readability
- [ ] Comfortable line height
- [ ] Scroll-based reveal (simple fade-in, optional)

Commit:
- `feat: add about section`

---

### How I Think About Testing
- [ ] Bullet list only (no icons, no fluff)
- [ ] Clean spacing
- [ ] Desktop + mobile friendly

Commit:
- `feat: add testing philosophy section`

---

### Testing Impact
- [ ] Impact bullets
- [ ] Emphasis on outcomes, not numbers
- [ ] Simple list layout

Commit:
- `feat: add testing impact section`

---

### Work & Achievements
- [ ] Chrome Extension card
- [ ] Automation Framework card
- [ ] GitHub links (placeholders allowed initially)
- [ ] No screenshots in v1

Commit:
- `feat: add work and achievements section`

---

### Toolbelt
- [ ] Group tools by category
- [ ] Text-only (no logos)
- [ ] Clean grid or stacked list

Commit:
- `feat: add toolbelt section`

---

### How I Work With Developers
- [ ] Bullet list from content
- [ ] Calm, professional tone
- [ ] No buzzwords

Commit:
- `feat: add collaboration section`

---

### Contact
- [ ] Email link
- [ ] LinkedIn link
- [ ] GitHub link
- [ ] Resume download placeholder

Commit:
- `feat: add contact section`

---

## Phase 4: Polish (Only After All Sections Exist)

- [ ] Consistent spacing across sections
- [ ] Font selection (1 primary, 1 fallback)
- [ ] Smooth scroll navigation
- [ ] Subtle hover states
- [ ] Accessibility check (contrast, font size)

Commit:
- `style: polish layout and spacing`

---

## Phase 5: Deployment

- [ ] Configure GitHub Pages
- [ ] Verify build works on Pages
- [ ] Test mobile + desktop
- [ ] Share link privately for feedback

Commit:
- `deploy: enable github pages`

---

## Phase 6: Optional (Later)

- [ ] Add custom domain
- [ ] Add dark mode toggle
- [ ] Add blog / writing section
- [ ] Add speaking / talks section

Only after:
- Portfolio is live
- Core content is validated

---

## AI Usage Rules (Important)

- Use AI only for:
  - Component structure
  - Animation logic
  - CSS help
- NEVER ask AI to rewrite content
- NEVER regenerate sections already committed
- If stuck >15 mins → ask one precise question

---

## Definition of Done

- One-page portfolio
- Clean codebase
- Fast load
- Professional tone
- Confident but not loud

