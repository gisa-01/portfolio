# Role & Objective
You are an expert Frontend Developer and UI/UX engineer. Build a responsive, mobile-first single-page portfolio web application using React, Next.js (App Router or Pages Router), TypeScript, and Tailwind CSS.

## Tech Stack Requirements
- Framework: Next.js (with React & TypeScript)
- Styling: Tailwind CSS
- Approach: Mobile-first responsive design
- Architecture: Single-page application with smooth anchor scrolling or section switching.

## Design & Aesthetic Instructions
- **Color Palette**: Replicate the exact warm, minimalist aesthetic from the provided reference image (image_83681c.png)[cite: 1]:
  - Primary / Accent color: Soft warm beige / peach (`#E2C09F` / custom Tailwind colors like `amber-200`/`orange-200` variants).
  - Background (Light Mode): Clean, crisp off-white (`#FCFCFC` or `#F9F9F9`).
  - Text & Headings (Light Mode): Dark charcoal / near-black (`#1E1E1E`).
  - Dark Mode: Implement fully functional Dark Mode using Tailwind's `dark:` classes (deep slate/charcoal backgrounds like `#121212`, soft glowing beige text/accents).
- **Typography**: Match the clean, elegant, modern sans-serif typography shown in the design[cite: 1]. Use custom font loading via `next/font` (e.g., Inter, Plus Jakarta Sans, or Outfit).
- **Layout Structure**: Strictly follow the layout hierarchy from the reference design[cite: 1]:
  1. **Header / Navbar**: Logo on the left, navigation links (`Home`, `About Us`, `Work`, `Services`, `Testimonial`, `Contact`, plus a Light/Dark mode toggle button) on the right (collapsible into a mobile hamburger menu).
  2. **Hero Section**: Large bold headline ("The Integration Design, And Technology" or similar customizable title)[cite: 1], subtext, call-to-action buttons (`Contact Me`, `Profile`)[cite: 1], alongside a stylized circular portrait container layered over geometric/organic peach background shapes[cite: 1].
  3. **Resume / About Section**: Profile tabs (`About Me`, `Experience`, `Education`, `Skills`)[cite: 1] with clean card layouts, personal bio details, and profile showcase image.
  4. **Projects Section (Replaces Blog Section)**: 
     - **CRITICAL**: Completely omit the original blog section. Replace it with a dedicated **Projects** section.
     - Each project must be displayed as an interactive card containing:
       - Project Title & Short Description[cite: 1].
       - Tech stack tags / badges showing the tools/frameworks used to build it (e.g., React, TypeScript, Tailwind, Next.js, Firebase).
       - External links / GitHub repository buttons to view the live project or code.
  5. **Services, Testimonial, and Contact Sections**: Complete the single-page flow matching the top navigation anchors, culminating in a fully functional contact form.

## Functional Requirements
- **Theme Switcher**: Provide a smooth state-managed or class-based Dark/Light mode toggle accessible in the navbar.
- **Mobile-First Responsiveness**: Ensure all grids, hero elements, project cards, and navigation menus stack gracefully on mobile viewports and expand neatly into multi-column layouts on tablets and desktops.
- **TypeScript Types**: Fully type all component props, project data structures, and state hooks.