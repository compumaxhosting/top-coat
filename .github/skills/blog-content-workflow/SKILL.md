---
name: blog-content-workflow
description: "Use when adding a new blog post or updating an existing one for this Next.js marketing site. Covers route setup, content structure, component organization, blog index updates, image handling, and final validation."
---

# Blog Content Workflow

## Purpose

Use this skill to add or update blog posts in a consistent, production-ready way for this website.

## When to Use

- Adding a new blog article
- Updating an existing blog article
- Restructuring blog sections or components
- Reusing the project’s blog pattern for a new service or topic

## Workflow

### 1. Confirm the scope

- Decide whether this is a new blog post or an update to an existing one.
- Identify the target slug, title, excerpt, category, date, read time, and image.
- If the topic is new, choose a clear folder and route naming pattern that matches the slug.

### 2. Gather the content plan

- Prepare the article structure before coding.
- Split the content into logical sections such as intro, benefits, process, FAQ, conclusion, or call to action.
- Reuse an existing blog article as the closest reference.

### 3. Create or update the blog structure

For a new blog post:
- Add a new route in the blog app directory under src/app/blog/<slug>/page.tsx.
- Create a dedicated component folder under src/components/Blog/<BlogFolderName>/.
- Add section components as needed under that folder.
- Reuse the project’s blog page pattern and section primitives.

For an existing blog post:
- Update the existing page and section components directly.
- Preserve the current page layout unless the update requires a fuller restructure.

### 4. Update the blog index data

- Add or edit the entry in src/Config/blog.ts.
- Ensure the slug, title, excerpt, image, category, date, and read time are correct.
- Keep the list sorted by date in the blog listing page.

### 5. Implement content in the project style

- Follow the existing component architecture used by the current blog pages.
- Use semantic sections, accessible headings, and responsive Tailwind styling.
- Reuse shared primitives where possible instead of duplicating layout logic.
- Keep imports clean and avoid inline styles.
- Use existing asset paths in public/Images when appropriate.

### 6. Validate the result

- Confirm the new route renders correctly.
- Check that the blog card appears on the main blog listing page.
- Verify that breadcrumbs, hero, and content sections are all wired properly.
- Run the relevant lint or build check and fix any issues before finishing.

## Project-Specific Conventions

- Follow the structure already used in the sample blog implementation under src/components/Blog/Garage-Floor-Coating-Wayne and src/app/blog/garage-floor-coating-wayne-nj-epoxy-benefits-2026/page.tsx.
- Prefer modular component files over a single large page component.
- Keep folder names and route slugs consistent and descriptive.
- Match the existing visual tone, spacing, and typography used across the site.
- Adhere to the rules in AI_Rules.md for component structure, styling, accessibility, and performance.

## Completion Checklist

- The blog route exists and renders.
- The blog post appears in the blog listing.
- Metadata in src/Config/blog.ts is correct.
- The content is organized into reusable sections/components.
- Styling is responsive and consistent with the site.
- No lint or build errors remain.
