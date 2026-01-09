# Site Structure - Healthy Families Project

## File Organization

```
healthy-families-project/
│
├── index.html              # Main homepage with all sections
├── privacy.html            # Privacy policy page
├── disclaimer.html         # Disclaimer page
├── styles.css              # Main stylesheet with responsive design
├── script.js               # JavaScript for interactivity
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # Site structure for SEO
├── .gitignore              # Git ignore patterns
│
├── meal-plans/             # Weekly meal plan documents
│   ├── week1-meal-plan.md
│   ├── week2-meal-plan.md  # (to be added)
│   ├── week3-meal-plan.md  # (to be added)
│   └── week4-meal-plan.md  # (to be added)
│
├── images/                 # Image assets (to be added)
│   ├── social-preview.jpg  # Open Graph preview image
│   ├── recipes/            # Recipe photos
│   └── icons/              # Icon files
│
├── assets/                 # Additional assets (optional)
│   ├── fonts/              # Custom fonts (if needed)
│   └── downloads/          # Downloadable PDFs
│
├── README.md               # Project documentation
├── CONTRIBUTING.md         # Contribution guidelines
├── DEPLOYMENT.md           # Deployment instructions
├── LICENSE                 # Project license (to be added)
└── CHANGELOG.md            # Version history (to be added)
```

## Page Structure

### index.html Sections

1. **Navigation Bar** (#navbar)

   - Sticky header with responsive menu
   - Mobile hamburger menu
   - Links to all major sections

2. **Hero Section** (#hero)

   - Main headline and value proposition
   - Call-to-action button

3. **Home/Intro** (#home)

   - Welcome message
   - Three feature cards (Affordable, Time-Saving, Kid-Friendly)

4. **About** (#about)

   - Mission statement
   - Why this matters
   - Approach details

5. **Meal Plans** (#meal-plans)

   - Four weekly meal plan cards
   - Sample days and shopping lists
   - Download links (to be implemented)

6. **Tips & Resources** (#tips)

   - Four tip categories
   - External resource cards with links

7. **Recipes** (#recipes)

   - Four recipe cards with detailed instructions
   - Schema.org structured data for SEO

8. **Call-to-Action** (#cta)

   - Encouragement section
   - Action buttons

9. **Footer** (#footer)
   - Quick links
   - Privacy and disclaimer links
   - Copyright information

## Technical Architecture

### HTML Structure

- **Semantic HTML5:** Uses proper landmarks (nav, main, section, footer)
- **Accessibility:** ARIA labels, skip links, keyboard navigation
- **SEO Optimized:** Meta tags, Open Graph, Twitter Cards, Schema.org
- **Mobile-First:** Responsive design principles

### CSS Architecture

```
styles.css organization:
├── Reset and Base Styles
├── Accessibility Styles
├── Navigation Styles
├── Hero Section
├── Buttons
├── Content Sections
│   ├── Intro
│   ├── About
│   ├── Meal Plans
│   ├── Tips
│   ├── Recipes
│   └── CTA
├── Footer
├── Back to Top Button
├── Animations
├── Print Styles
└── Responsive Media Queries
```

### JavaScript Features

```
script.js functions:
├── Mobile Menu Toggle
├── Smooth Scroll Navigation
├── Back to Top Button
├── Scroll-based Animations (Intersection Observer)
├── Lazy Image Loading
└── External Link Handling
```

## Content Strategy

### Primary Content Types

1. **Meal Plans** - Weekly structured eating plans
2. **Recipes** - Detailed, family-tested recipes
3. **Tips** - Practical advice for healthy eating
4. **Resources** - External links to trusted sources

### Content Guidelines

- **Tone:** Friendly, supportive, practical
- **Language:** Simple, clear, jargon-free
- **Format:** Scannable, bulleted, organized
- **Imagery:** Real photos (when available), not stock photos

## SEO Strategy

### Keywords Targeted

- healthy meal plans
- family nutrition
- affordable recipes
- kid-friendly meals
- meal prep for families
- budget-friendly cooking

### SEO Elements Implemented

- ✅ Title tags optimized
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Schema.org markup (Website, Recipes)
- ✅ Semantic HTML
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alt text for images (to be added)

## Accessibility Features

### WCAG 2.1 AA Compliance

- ✅ Semantic HTML structure
- ✅ ARIA labels and landmarks
- ✅ Skip to main content link
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast ratios
- ✅ Responsive text sizing
- ✅ Reduced motion support

### Testing Checklist

- [ ] Screen reader compatibility
- [ ] Keyboard-only navigation
- [ ] Color blind friendly
- [ ] Mobile accessibility
- [ ] Form labels (if added)

## Performance Optimization

### Current Optimizations

- ✅ Minimal external dependencies
- ✅ CSS/JS in separate files (cacheable)
- ✅ Lazy loading for images
- ✅ Intersection Observer for animations
- ✅ Smooth scroll behavior
- ✅ Minified production code (optional)

### Future Optimizations

- [ ] Image compression
- [ ] CDN for assets (if needed)
- [ ] Service worker for offline support
- [ ] Critical CSS inline
- [ ] Font optimization

## Browser Support

### Tested and Supported

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

### Fallbacks

- CSS Grid with flexbox fallback
- Smooth scroll with auto fallback
- Modern JS with graceful degradation

## Responsive Breakpoints

```css
Mobile First Approach:
- Base: 320px+ (small phones)
- 480px: Large phones
- 768px: Tablets
- 1024px: Small laptops
- 1200px: Desktops
- 1440px+: Large screens
```

## Color Palette

```css
Primary Colors:
- Dark Green: #2d5016 (headings, primary actions)
- Medium Green: #4a7c2c (accents, hover states)
- Light Green: #a8d08d (secondary elements)
- Bright Green: #6ba83d (gradients)

Neutral Colors:
- White: #ffffff (backgrounds)
- Light Gray: #f8f9fa (section backgrounds)
- Medium Gray: #6c757d (secondary text)
- Dark Gray: #333333 (primary text)
```

## Typography

```css
Font Stack:
- Primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- Fallback: System font stack for performance

Font Sizes:
- Base: 16px
- H1: 2.5rem (hero), 2.2rem (sections)
- H2: 1.8-2.2rem
- H3: 1.3-1.5rem
- Body: 1rem (16px)
- Small: 0.9rem
```

## Future Enhancements

### Phase 2

- [ ] Add weeks 2-4 meal plans
- [ ] Include actual recipe photos
- [ ] Create printable PDFs
- [ ] Add recipe rating system

### Phase 3

- [ ] User comments (via GitHub Discussions)
- [ ] Recipe search functionality
- [ ] Meal plan customization tool
- [ ] Shopping list generator

### Phase 4

- [ ] Multi-language support
- [ ] Interactive meal planner
- [ ] Recipe calculator
- [ ] Nutrition calculator

## Version Control

### Branching Strategy

```
main (production)
  ├── develop (staging)
  │   ├── feature/new-recipes
  │   ├── feature/meal-plan-pdfs
  │   └── feature/image-gallery
  └── hotfix/urgent-fixes
```

### Commit Message Format

```
Type: Brief description

Types:
- Add: New feature or content
- Update: Modify existing content
- Fix: Bug fixes
- Style: Formatting, CSS changes
- Docs: Documentation updates
- Refactor: Code restructuring
```

## Deployment Pipeline

```
Local Development
  ↓
Git Commit
  ↓
Push to GitHub
  ↓
GitHub Pages Build
  ↓
Live Website (1-3 minutes)
```

---

**Last Updated:** January 8, 2026  
**Maintained By:** Healthy Families Project Team  
**Questions?** See [CONTRIBUTING.md](CONTRIBUTING.md)
