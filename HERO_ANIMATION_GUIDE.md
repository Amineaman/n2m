# Hero Section GSAP Animation Guide

## Overview
The enhanced Hero section uses **GSAP (GreenSock Animation Platform)** to create smooth, premium, and professional animations that feel modern and agency-level. All animations are performance-optimized and beginner-friendly.

---

## What's Animated

### 1. **Brand Badge** (0s)
- **Effect**: Fade in + Scale up + Slide up
- **Duration**: 0.8 seconds
- **Purpose**: Grab attention first with the premium badge

### 2. **Main Title (H1)** (0.2s)
- **Effect**: Fade in + Slide up
- **Duration**: 1 second
- **Purpose**: Large headline appears after badge with smooth flow

### 3. **Subtitle (P tag)** (0.5s)
- **Effect**: Fade in + Slide up
- **Duration**: 0.8 seconds
- **Purpose**: Supporting text appears after headline

### 4. **Feature Pills** (0.7s)
- **Effect**: Staggered fade in + Scale + Slide up
- **Duration**: 0.6 seconds each
- **Stagger**: 0.1 second between each pill
- **Purpose**: Three feature pills appear one after another (Web Dev, Design, Marketing)

### 5. **CTA Buttons** (0.9s)
- **Effect**: Fade in + Scale (0.85 → 1) + Slide up
- **Duration**: 0.7 seconds each
- **Stagger**: 0.15 second between buttons
- **Purpose**: Action buttons appear smoothly for user engagement

### 6. **Stats Section** (1.2s)
- **Effect**: Fade in + Slide up
- **Duration**: 0.8 seconds
- **Purpose**: Numbers (50+ Projects, 30+ Clients, 98% Satisfaction) appear

### 7. **Scroll Indicator** (1.4s)
- **Effect**: Fade in + Slide up
- **Duration**: 0.6 seconds
- **Purpose**: Scroll prompt appears last at bottom

### 8. **Background Blobs** (Continuous)
- **Effect**: Slow floating animation (yoyo effect - up and down)
- **Duration**: 4-5 seconds per cycle
- **Repeat**: Infinite
- **Purpose**: Subtle, elegant background movement creates premium feel

---

## How It Works (Code Breakdown)

### Import GSAP
```jsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```
- `gsap`: Main animation library
- `ScrollTrigger`: Optional plugin for scroll-based animations

### Create Refs for Elements
```jsx
const badgeRef = useRef(null);
const titleRef = useRef(null);
const subtitleRef = useRef(null);
// ... more refs
```
- Refs allow us to target specific DOM elements for animation

### useEffect Hook
```jsx
useEffect(() => {
  // All animations run here
  // Cleanup function kills animations on unmount
}, [language]);
```
- Runs animation when component mounts
- Re-runs if language changes
- Cleanup prevents memory leaks

### Create Master Timeline
```jsx
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
```
- `timeline()`: Groups multiple animations with precise timing
- `ease: 'power2.out'`: Smooth easing function (feels elegant)
- `defaults`: Applied to all animations in the timeline

### Add Animations to Timeline
```jsx
tl.fromTo(
  badgeRef.current,           // Target element
  { opacity: 0, scale: 0.8, y: 20 },  // From (initial state)
  { opacity: 1, scale: 1, y: 0, duration: 0.8 },  // To (final state)
  0                           // When to start (0 = immediately)
);
```
- `fromTo()`: Animate FROM one state TO another
- All properties change smoothly over the duration
- Number at end = delay from timeline start

### Staggered Animations
```jsx
tl.fromTo(
  pillElements,
  { opacity: 0, scale: 0.9, y: 15 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,  // 0.1s delay between each element
  },
  0.7
);
```
- `stagger: 0.1`: Each element starts 0.1 seconds after the previous one
- Creates cascading effect that feels premium

### Infinite Background Animations
```jsx
gsap.to(blobLeftRef.current, {
  y: 30,
  duration: 4,
  yoyo: true,      // Bounces back and forth
  repeat: -1,      // -1 = infinite
  ease: 'sine.inOut',
});
```
- `yoyo: true`: Animation reverses smoothly (no jump)
- `repeat: -1`: Loops forever without stopping
- Runs separately from main timeline (independent)

---

## Accessibility: Reduced Motion Support

The component checks if the user prefers reduced motion:
```jsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Skip all animations, just show elements
  gsap.set([...elements], { opacity: 1 });
  return;
}
```

- Respects user's OS settings (Windows: Settings → Ease of Access)
- Users with motion sensitivity see content instantly without animations
- **Important**: Always include this for accessibility

---

## Animation Timeline (When Things Happen)

```
0.0s  → Badge fades in & scales up
0.2s  → Title slides up & fades in
0.5s  → Subtitle fades in
0.7s  → Feature pills appear (staggered)
        - Pill 1: 0.7s
        - Pill 2: 0.8s
        - Pill 3: 0.9s
0.9s  → CTA Buttons appear (staggered)
        - Button 1: 0.9s
        - Button 2: 1.05s
1.2s  → Stats section fades in
1.4s  → Scroll indicator appears
∞     → Blobs float continuously in background
```

---

## Customization Tips

### Change Animation Speed
```jsx
// Make badge slower:
tl.fromTo(badgeRef.current, 
  { opacity: 0, scale: 0.8, y: 20 },
  { opacity: 1, scale: 1, y: 0, duration: 1.5 },  // Changed from 0.8
  0
);
```

### Change Easing
```jsx
// Replace 'power2.out' with:
// - 'power1.out': Faster easing
// - 'power3.out': Slower easing
// - 'back.out': Bouncy effect
// - 'elastic.out': Spring effect
```

### Change Stagger Amount
```jsx
stagger: 0.2,  // Increase delay between elements
```

### Add More Elements
```jsx
// Create a ref
const newElementRef = useRef(null);

// Add to JSX with opacity-0
<div ref={newElementRef} className="opacity-0">...</div>

// Add to timeline
tl.fromTo(newElementRef.current,
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.8 },
  1.5  // When to start
);
```

---

## Installation & Setup

1. **Install GSAP:**
   ```bash
   npm install gsap
   ```

2. **Hero.jsx is already updated** with all animations

3. **Run the dev server:**
   ```bash
   npm run dev
   ```

4. **View in browser:** Open `http://localhost:5173` (or your port) and see the animations!

---

## Performance Optimization

✅ **What we did right:**
- Used `useEffect` cleanup to prevent memory leaks
- Used `fromTo()` instead of complex calculations
- Set `opacity: 0` initially to hide elements (no flash)
- Used hardware-accelerated properties (transform, opacity)
- Kept animations under 2 seconds total
- Infinite blobs use `yoyo` instead of restart (smoother)

❌ **What to avoid:**
- Don't animate too many elements at once
- Don't use `width` or `height` (animate `scale` instead)
- Don't have animations longer than 2-3 seconds
- Don't add `blur()` filters in animations (expensive)

---

## Browser Support

GSAP works on all modern browsers:
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

### Animations not working?
1. Check browser console for errors
2. Make sure `ref={ref}` is on the correct element
3. Verify element class names match in the ref (e.g., `querySelectorAll('span')`)
4. Check if `opacity: 0` is applied initially in Tailwind

### Animations too fast/slow?
- Change `duration` in `fromTo()` (in seconds)
- Example: `duration: 1.5` for 1.5 seconds

### Language change breaks animations?
- This is normal! The `[language]` dependency causes re-run
- Add `&& !isAnimating` logic if you need to prevent re-animation

---

## Key GSAP Concepts

| Concept | What It Does |
|---------|------------|
| `gsap.to()` | Animate FROM current state TO target |
| `gsap.from()` | Animate FROM state TO current state |
| `gsap.fromTo()` | Define both start AND end states |
| `timeline()` | Group animations with precise timing |
| `stagger` | Delay between multiple element animations |
| `repeat` | Loop animation (-1 = infinite) |
| `yoyo` | Reverse animation after completion |
| `ease` | How animation progresses (fast, slow, bouncy) |

---

## Advanced: ScrollTrigger (Already Included)

The component includes `ScrollTrigger` plugin but it's optional:
```jsx
ScrollTrigger.create({
  trigger: containerRef.current,
  onEnter: () => {
    // Fire when hero enters viewport
  },
});
```

You can expand this to add scroll-based animations if needed!

---

## Summary

Your Hero section now has:
✅ Smooth, staggered animations  
✅ Premium feel (not flashy)  
✅ Accessibility support (reduced motion)  
✅ Performance optimized  
✅ Easy to customize  
✅ Professional agency-level look  

**Total animation time: ~1.4 seconds** - Fast enough to feel snappy, slow enough to feel premium!
