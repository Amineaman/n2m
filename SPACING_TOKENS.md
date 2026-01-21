# 🎯 QUICK REFERENCE - LAYOUT SPACING TOKENS

Use this guide for adding new components or features.

## Standard Spacing

### Section Containers (wrapper divs)
```jsx
// Desktop-first approach
<section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    {/* content */}
  </div>
</section>
```

### Headings
```jsx
// Hero heading (h1)
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Title</h1>

// Section heading (h2)
<h2 className="text-4xl sm:text-5xl md:text-6xl mb-12 sm:mb-14">Section</h2>

// Subsection (h3)
<h3 className="text-2xl sm:text-3xl md:text-4xl">Subsection</h3>
```

### Spacing (Margin/Padding)
```jsx
// Between major sections
mb-12 sm:mb-14 md:mb-16

// Between elements in a section
mb-8 sm:mb-9 md:mb-10

// Small spacing (pills, badges)
mb-5 sm:mb-6

// Button groups
gap-3 sm:gap-5

// Card grids
gap-5 sm:gap-6 lg:gap-7

// Small items
gap-2.5 sm:gap-3
```

### Buttons
```jsx
// Primary button
className="px-7 sm:px-9 py-3 sm:py-3.5 text-base sm:text-lg font-medium rounded-lg"

// Small button
className="px-5 sm:px-7 py-2 sm:py-2.5 text-sm sm:text-base"

// Group
className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center"
```

### Cards
```jsx
// Service/Product card
className="rounded-3xl p-6 sm:p-7 md:p-8 border border-stone-700/50"

// Stat card
className="rounded-lg sm:rounded-2xl p-3 sm:p-4 border border-gold-400/15"

// Testimonial card
className="rounded-2xl p-8 sm:p-10 border border-gold-400/30"
```

### Pills & Badges
```jsx
// Badge (hero)
className="px-4 py-2 text-xs sm:text-sm bg-gold-400/10 border border-gold-400/30 rounded-full"

// Pill (tag)
className="px-4 sm:px-5 py-2 sm:py-2.5 bg-stone-800/45 border border-gold-400/20 rounded-full text-xs sm:text-sm"
```

### Text
```jsx
// Large paragraph
className="text-lg sm:text-xl md:text-2xl text-stone-300 leading-relaxed"

// Normal paragraph
className="text-base sm:text-lg text-stone-300 leading-relaxed"

// Small text
className="text-sm text-stone-400"
```

## Responsive Breakpoints

```
Base (mobile):     < 640px  - Most compact, single column
sm (tablet):       ≥ 640px  - Tighter tablet layout
md (laptop):       ≥ 768px  - Standard desktop
lg (desktop):      ≥ 1024px - Full width desktop
xl (large):        ≥ 1280px - Ultra-wide displays
```

## Color Palette (Tailwind)
```
Primary Gold:     text-gold-400, bg-gold-400
Stone (text):     text-stone-300, text-stone-400
Stone (bg):       bg-stone-800/45, bg-stone-900/50
Dark bg:          bg-black/20, bg-black/50
Borders:          border-gold-400/30, border-stone-700/50
```

## Grid Layouts

### 3-column (Services, Testimonials)
```jsx
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
```

### 2-column (About)
```jsx
className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
```

### 2x2 Stats
```jsx
className="grid grid-cols-2 gap-3 sm:gap-5"
```

## Flexbox Patterns

### Center horizontally
```jsx
className="flex justify-center"
```

### Stack on mobile, row on tablet+
```jsx
className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center"
```

### Space between (header/footer)
```jsx
className="flex items-center justify-between"
```

## Animation Classes
```jsx
// Fade in
className="opacity-0" // Will animate to opacity-1

// Scale
className="hover:scale-105 transition-all duration-300"

// Blur background
className="backdrop-blur-sm backdrop-blur-xl"

// Animated pulse
className="animate-pulse"
```

## Container Patterns

### Full-width section with centered content
```jsx
<section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    {/* content */}
  </div>
</section>
```

### With background gradient
```jsx
<section className="py-20 md:py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
  {/* content */}
</section>
```

### With decorative blobs
```jsx
<div className="absolute top-0 left-0 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
```

## Do's and Don'ts

### ✅ DO
- Use spacing tokens: `gap-3`, `mb-8`, `p-6`
- Use breakpoints: `sm:`, `md:`, `lg:`
- Keep containers `max-w-5xl` or `max-w-6xl`
- Use consistent `px-4 sm:px-6 lg:px-8`
- Stack buttons on mobile: `flex-col sm:flex-row`

### ❌ DON'T
- Use arbitrary values: `mb-[60px]` (use `mb-12` instead)
- Mix breakpoints inconsistently: `sm:mb-10 md:mb-12 lg:mb-14` (use `mb-8 sm:mb-10`)
- Make sections full-height: `min-h-screen` (use padding instead)
- Use huge font sizes: `text-8xl` (max `text-7xl` for hero)
- Create gaps larger than `gap-8` (use `gap-6` max)

## Example Component

```jsx
export const ExampleSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-14">
          Section Title
        </h2>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {items.map((item) => (
            <div key={item.id} className="rounded-3xl p-6 sm:p-7 md:p-8 border border-stone-700/50">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mt-12 sm:mt-14">
          <button className="px-7 sm:px-9 py-3 sm:py-3.5 text-base sm:text-lg font-medium rounded-lg bg-gold-400 text-black">
            Primary
          </button>
          <button className="px-7 sm:px-9 py-3 sm:py-3.5 text-base sm:text-lg font-medium rounded-lg border border-gold-400 text-gold-400">
            Secondary
          </button>
        </div>
      </div>
    </section>
  );
};
```

---

**Questions?** Review [REFACTOR_COMPLETE.md](REFACTOR_COMPLETE.md) for full details.
